# N8N AUTOMATED WEBSITE ANALYSIS

**Lead magnet: Automated website tracking analysis sent via email**

---

## WORKFLOW OVERVIEW

```
User submits form (URL + Email)
    ↓
Next.js API route receives data
    ↓
Calls N8N webhook
    ↓
N8N workflow:
  1. Fetch website HTML
  2. Check for tracking tags (GTM, GA4, Meta Pixel)
  3. AI analyzes setup (Claude API)
  4. Generate detailed report
  5. Send via Resend to user's email
  6. Save lead to database (optional)
  7. Return summary to frontend
    ↓
User sees instant summary + gets detailed email
```

---

## N8N SETUP

### Option 1: N8N Cloud (Easiest)

**Cost:** FREE tier (20 workflows)

1. **Sign up:** n8n.cloud
2. **Create workflow:** "Website Analysis"
3. **Get webhook URL:**
   - Will be: `https://your-n8n.app.n8n.cloud/webhook/website-analysis`

### Option 2: Self-Hosted (Cheapest long-term)

```bash
# Docker setup
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Access: `http://localhost:5678`

**For production:** Deploy to Railway.app or Fly.io ($5-10/month)

---

## WORKFLOW NODES

### Node 1: Webhook (Trigger)

**Type:** Webhook
**Method:** POST
**Path:** `website-analysis`

**Expected data:**
```json
{
  "url": "https://client-website.com",
  "email": "client@email.com"
}
```

**Configuration:**
- Response Code: 200
- Response Mode: "When Last Node Finishes"

---

### Node 2: Fetch Website

**Type:** HTTP Request
**Method:** GET
**URL:** `{{ $json.url }}`

**Headers:**
```
User-Agent: Mozilla/5.0 (compatible; HaloAgency-Bot/1.0)
```

**Options:**
- Follow Redirects: Yes
- Timeout: 10000ms
- Return Full Response: Yes

**Output:**
- HTML content of the page
- HTTP status
- Response headers

---

### Node 3: Extract Tracking Tags

**Type:** Code (JavaScript)

```javascript
// Access HTML from previous node
const html = $input.item.json.body;
const url = $input.item.json.url;

// Check for tracking tags
const checks = {
  gtm: {
    found: html.includes('googletagmanager.com/gtm.js') || 
           html.includes('GTM-'),
    pattern: html.match(/GTM-[A-Z0-9]+/)?.[0] || null
  },
  
  ga4: {
    found: html.includes('gtag/js') || 
           html.includes('G-') ||
           html.match(/G-[A-Z0-9]+/) !== null,
    pattern: html.match(/G-[A-Z0-9]+/)?.[0] || null
  },
  
  metaPixel: {
    found: html.includes('facebook.net/en_US/fbevents.js') ||
           html.includes('fbq('),
    pattern: html.match(/fbq\('init',\s*'(\d+)'/)?.[1] || null
  },
  
  serverSide: {
    // Check if GTM sends to custom domain
    found: html.match(/server_container_url['":\s]+https:\/\/[^'"]+/i) !== null,
    domain: html.match(/server_container_url['":\s]+(https:\/\/[^'"]+)/i)?.[1] || null
  },
  
  consent: {
    found: html.includes('cookieyes') ||
           html.includes('consent') ||
           html.includes('gdpr'),
  }
};

// Calculate accuracy estimate
let estimatedAccuracy = 100;
if (!checks.gtm.found) estimatedAccuracy -= 20;
if (!checks.ga4.found) estimatedAccuracy -= 20;
if (!checks.metaPixel.found) estimatedAccuracy -= 10;
if (!checks.serverSide.found) estimatedAccuracy -= 30; // Biggest impact
if (!checks.consent.found) estimatedAccuracy -= 10;

// Estimated conversion loss
const conversionLoss = Math.max(0, 100 - estimatedAccuracy);

return {
  url,
  checks,
  estimatedAccuracy,
  conversionLoss,
  timestamp: new Date().toISOString()
};
```

---

### Node 4: AI Analysis (Claude API)

**Type:** HTTP Request
**Method:** POST
**URL:** `https://api.anthropic.com/v1/messages`

**Headers:**
```
x-api-key: {{ $env.ANTHROPIC_API_KEY }}
anthropic-version: 2023-06-01
Content-Type: application/json
```

**Body:**
```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 2000,
  "messages": [
    {
      "role": "user",
      "content": "You are a digital marketing expert analyzing website tracking setup. Based on this data:\n\nURL: {{ $json.url }}\nGTM: {{ $json.checks.gtm.found ? 'Found (' + $json.checks.gtm.pattern + ')' : 'Not found' }}\nGA4: {{ $json.checks.ga4.found ? 'Found (' + $json.checks.ga4.pattern + ')' : 'Not found' }}\nMeta Pixel: {{ $json.checks.metaPixel.found ? 'Found (ID: ' + $json.checks.metaPixel.pattern + ')' : 'Not found' }}\nServer-side: {{ $json.checks.serverSide.found ? 'Found (' + $json.checks.serverSide.domain + ')' : 'Not configured' }}\nConsent: {{ $json.checks.consent.found ? 'Found' : 'Not found' }}\n\nEstimated accuracy: {{ $json.estimatedAccuracy }}%\n\nProvide:\n1. Summary (2-3 sentences in Russian)\n2. Main problems (3-5 bullet points in Russian)\n3. Priority recommendations (3-5 bullet points in Russian)\n4. Estimated impact (in Russian)\n\nBe specific, actionable, and professional. Respond in valid JSON format:\n{\n  \"summary\": \"...\",\n  \"problems\": [\"...\", \"...\"],\n  \"recommendations\": [\"...\", \"...\"],\n  \"impact\": \"...\"\n}\n\nIMPORTANT: Output ONLY valid JSON, no markdown formatting."
    }
  ]
}
```

**Parse Response:**
- Extract `content[0].text`
- Parse JSON
- Handle Claude's response

---

### Node 5: Generate HTML Report

**Type:** Code (JavaScript)

```javascript
const data = $input.all()[0].json; // From previous nodes
const aiAnalysis = JSON.parse($input.item.json.content[0].text);

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    .score {
      font-size: 48px;
      font-weight: bold;
      margin: 10px 0;
    }
    .status {
      display: flex;
      align-items: center;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      background: #f8f9fa;
    }
    .status.good { border-left: 4px solid #10b981; }
    .status.bad { border-left: 4px solid #ef4444; }
    .status.warning { border-left: 4px solid #f59e0b; }
    .section {
      margin: 30px 0;
    }
    h2 { color: #667eea; }
    ul { list-style: none; padding: 0; }
    li { 
      padding: 10px;
      margin: 8px 0;
      background: #f8f9fa;
      border-radius: 6px;
    }
    .cta {
      background: #667eea;
      color: white;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 8px;
      display: inline-block;
      margin-top: 20px;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div style="font-size: 18px;">Анализ трекинга для</div>
    <div style="font-size: 24px; margin: 10px 0;">${data.url}</div>
    <div class="score">${data.estimatedAccuracy}%</div>
    <div>точность отслеживания</div>
  </div>

  <div class="section">
    <h2>📊 Что мы обнаружили</h2>
    
    <div class="status ${data.checks.gtm.found ? 'good' : 'bad'}">
      <span style="font-size: 24px; margin-right: 10px;">
        ${data.checks.gtm.found ? '✅' : '❌'}
      </span>
      <div>
        <strong>Google Tag Manager</strong><br>
        ${data.checks.gtm.found ? 
          \`Обнаружен: \${data.checks.gtm.pattern}\` : 
          'Не установлен'}
      </div>
    </div>

    <div class="status ${data.checks.ga4.found ? 'good' : 'bad'}">
      <span style="font-size: 24px; margin-right: 10px;">
        ${data.checks.ga4.found ? '✅' : '❌'}
      </span>
      <div>
        <strong>Google Analytics 4</strong><br>
        ${data.checks.ga4.found ? 
          \`Обнаружен: \${data.checks.ga4.pattern}\` : 
          'Не установлен'}
      </div>
    </div>

    <div class="status ${data.checks.metaPixel.found ? 'good' : 'bad'}">
      <span style="font-size: 24px; margin-right: 10px;">
        ${data.checks.metaPixel.found ? '✅' : '❌'}
      </span>
      <div>
        <strong>Meta Pixel (Facebook)</strong><br>
        ${data.checks.metaPixel.found ? 
          \`Обнаружен: \${data.checks.metaPixel.pattern}\` : 
          'Не установлен'}
      </div>
    </div>

    <div class="status ${data.checks.serverSide.found ? 'good' : 'bad'}">
      <span style="font-size: 24px; margin-right: 10px;">
        ${data.checks.serverSide.found ? '✅' : '❌'}
      </span>
      <div>
        <strong>Server-Side Tracking</strong><br>
        ${data.checks.serverSide.found ? 
          \`Настроен: \${data.checks.serverSide.domain}\` : 
          '<strong>НЕ НАСТРОЕН</strong> - вы теряете ~40% конверсий'}
      </div>
    </div>

    <div class="status ${data.checks.consent.found ? 'good' : 'warning'}">
      <span style="font-size: 24px; margin-right: 10px;">
        ${data.checks.consent.found ? '✅' : '⚠️'}
      </span>
      <div>
        <strong>Consent Management</strong><br>
        ${data.checks.consent.found ? 
          'Обнаружен' : 
          'Не найден - возможные проблемы с GDPR'}
      </div>
    </div>
  </div>

  <div class="section">
    <h2>💡 Анализ от AI</h2>
    <p>${aiAnalysis.summary}</p>
  </div>

  <div class="section">
    <h2>⚠️ Основные проблемы</h2>
    <ul>
      ${aiAnalysis.problems.map(p => \`<li>\${p}</li>\`).join('')}
    </ul>
  </div>

  <div class="section">
    <h2>✅ Рекомендации</h2>
    <ul>
      ${aiAnalysis.recommendations.map(r => \`<li>\${r}</li>\`).join('')}
    </ul>
  </div>

  <div class="section">
    <h2>📈 Потенциальный эффект</h2>
    <p>${aiAnalysis.impact}</p>
    <p><strong>Оценка потерянных конверсий: ~${data.conversionLoss}%</strong></p>
  </div>

  <div style="text-align: center;">
    <a href="https://haloagency.cz/packages/business" class="cta">
      Исправить трекинг за 2 дня
    </a>
  </div>

  <div class="footer">
    <p>Этот анализ был сгенерирован автоматически для ${data.url}</p>
    <p>Есть вопросы? Ответим: <a href="mailto:hello@haloagency.cz">hello@haloagency.cz</a></p>
    <p style="margin-top: 20px;">
      <strong>HaloAgency</strong><br>
      Технический маркетинг для бизнеса в Чехии<br>
      <a href="https://haloagency.cz">haloagency.cz</a>
    </p>
  </div>
</body>
</html>
`;

return {
  email: $input.all()[0].json.email, // From webhook
  subject: `Анализ трекинга для ${data.url}`,
  html,
  summary: {
    accuracy: data.estimatedAccuracy,
    loss: data.conversionLoss,
    checks: data.checks,
    aiSummary: aiAnalysis.summary
  }
};
```

---

### Node 6: Send Email (Resend)

**Type:** HTTP Request
**Method:** POST
**URL:** `https://api.resend.com/emails`

**Headers:**
```
Authorization: Bearer {{ $env.RESEND_API_KEY }}
Content-Type: application/json
```

**Body:**
```json
{
  "from": "HaloAgency <hello@haloagency.cz>",
  "to": ["{{ $json.email }}"],
  "subject": "{{ $json.subject }}",
  "html": "{{ $json.html }}"
}
```

---

### Node 7: Save Lead (Optional)

**Type:** Your choice
- **Airtable:** Simple, visual
- **Google Sheets:** Free, easy
- **PostgreSQL:** Proper database
- **CRM:** HubSpot, Pipedrive, etc.

**Example - Google Sheets:**
**Type:** Google Sheets
**Operation:** Append
**Spreadsheet:** "HaloAgency Leads"
**Sheet:** "Website Analysis"

**Columns:**
- Timestamp
- Email
- URL
- Accuracy Score
- Conversion Loss %
- Has GTM
- Has GA4
- Has Meta Pixel
- Has Server-Side
- Status (New/Contacted/Closed)

---

### Node 8: Return Response

**Type:** Respond to Webhook

**Response:**
```json
{
  "success": true,
  "summary": "{{ $json.summary }}",
  "message": "Детальный анализ отправлен на {{ $json.email }}"
}
```

---

## FRONTEND INTEGRATION

### API Route

```typescript
// app/api/analyze-website/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  url: z.string().url('Неверный URL'),
  email: z.string().email('Неверный email'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = schema.parse(body);
    
    // Call N8N webhook
    const response = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validated)
    });
    
    if (!response.ok) {
      throw new Error('N8N webhook failed');
    }
    
    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      summary: data.summary,
      message: 'Анализ отправлен на ваш email'
    });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false,
        error: error.errors[0].message 
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      success: false,
      error: 'Ошибка анализа. Попробуйте ещё раз.' 
    }, { status: 500 });
  }
}
```

### Frontend Form

```typescript
// components/LeadMagnet.tsx
'use client';

import { useState } from 'react';

export default function LeadMagnet() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      url: formData.get('url') as string,
      email: formData.get('email') as string,
    };
    
    try {
      const response = await fetch('/api/analyze-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      setResult(result);
      
    } catch (error) {
      console.error('Analysis error:', error);
      alert('Ошибка анализа. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <div>
      {!result ? (
        <form onSubmit={handleSubmit}>
          <input 
            name="url"
            type="url"
            placeholder="https://ваш-сайт.com"
            required
          />
          <input 
            name="email"
            type="email"
            placeholder="ваш@email.com"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Анализируем...' : 'Проверить трекинг →'}
          </button>
        </form>
      ) : (
        <div>
          <h3>Анализ готов!</h3>
          <p>Точность: {result.summary.accuracy}%</p>
          <p>Потери: ~{result.summary.loss}%</p>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}
```

---

## TESTING

### Test N8N Workflow

1. **Manual test in N8N:**
   - Click "Execute Workflow"
   - Enter test data:
     ```json
     {
       "url": "https://example.com",
       "email": "your@email.com"
     }
     ```
   - Check each node output
   - Email arrives? ✅

2. **Test via API:**
```bash
curl -X POST https://your-n8n.app.n8n.cloud/webhook/website-analysis \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "email": "test@test.com"
  }'
```

3. **Test from frontend:**
   - Submit form
   - Check browser console
   - Email arrives?
   - Correct analysis?

---

## ENVIRONMENT VARIABLES

**In N8N:**
```
ANTHROPIC_API_KEY=sk-ant-xxxxx
RESEND_API_KEY=re_xxxxx
```

**In Vercel:**
```
N8N_WEBHOOK_URL=https://your-n8n.app.n8n.cloud/webhook/website-analysis
```

---

## COST ANALYSIS

**N8N Cloud:**
- Free: 20 workflows, 2,500 executions/month
- Starter: $20/month - 10,000 executions
- Pro: $50/month - 50,000 executions

**API Costs per Analysis:**
- Claude API: ~$0.01 per analysis (2k tokens)
- Resend: FREE (under 3k emails/month)
- N8N: FREE (under 2.5k/month)

**100 analyses/month:**
- Cost: $1 Claude + $0 Resend + $0 N8N = $1/month
- ROI: Each lead worth 35k-50k CZK potential
- **Insane ROI** ✅

---

## ADVANCED FEATURES (Phase 2)

Add later:
- **Competitor comparison:** Show how they compare to competitors
- **Industry benchmarks:** "Your industry averages 65%"
- **ROI calculator:** "You're losing X CZK/month"
- **Follow-up sequence:** Email drip over 7 days
- **Lead scoring:** Prioritize hot leads
- **CRM integration:** Auto-add to sales pipeline
- **Slack notification:** Alert team of new lead

---

## TROUBLESHOOTING

**Workflow fails:**
- Check N8N error logs
- Verify API keys
- Test each node individually
- Check URL accessibility

**Email doesn't arrive:**
- Check spam folder
- Verify Resend domain configured
- Check email address valid
- Look at Resend dashboard logs

**AI analysis poor quality:**
- Improve prompt specificity
- Add more context
- Use examples
- Increase max_tokens

---

**Workflow ready? Test it! 🚀**
