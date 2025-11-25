# TECHNICAL STACK IMPLEMENTATION

**Complete setup guide for HaloAgency tracking & automation infrastructure**

---

## STACK OVERVIEW

```
┌─────────────────────────────────────────────┐
│ USER BROWSER                                │
│                                             │
│ 1. Consent Banner (CookieYes)              │
│    ↓ (user accepts)                        │
│ 2. Client GTM fires                        │
│    ↓ (sends to server)                     │
│ 3. Server GTM (Stape.io)                   │
│    ├→ GA4 (server-side)                    │
│    ├→ Meta CAPI (server-side)              │
│    └→ Google Enhanced Conversions          │
│                                             │
│ 4. Forms → API Routes → Resend → Email     │
│ 5. Lead Magnet → N8N → AI Analysis → Email │
└─────────────────────────────────────────────┘
```

---

## 1. GOOGLE CONSENT MODE V2 SETUP

### Option A: CookieYes (Recommended - Easiest)

**Why CookieYes:**
- FREE up to 100 pages
- GDPR compliant out of box
- Google Consent Mode v2 built-in
- Czech + Russian translations
- No coding needed

**Setup (15 minutes):**

1. **Sign up:** cookieyes.com
2. **Add domain:** haloagency.cz
3. **Configure banner:**
   ```
   Title: "Používáme cookies"
   Text: "K vylepšení vašeho zážitku a měření výkonu 
   reklamy. Pomůže nám to vám lépe sloužit."
   
   Buttons:
   - Přijmout vše (green)
   - Odmítnout vše (gray)
   - Nastavení (link)
   ```

4. **Enable Consent Mode v2:**
   - Dashboard → Settings → Consent Mode
   - Toggle ON "Google Consent Mode v2"
   - Map categories:
     * Analytics cookies → analytics_storage
     * Advertising cookies → ad_storage
     * Functional cookies → functionality_storage

5. **Get script:**
   ```html
   <script 
     id="cookieyes" 
     src="https://cdn-cookieyes.com/client_data/XXXXX/script.js"
   ></script>
   ```

6. **Add to Next.js layout BEFORE everything:**
   ```typescript
   // app/layout.tsx
   import Script from 'next/script';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <head>
           {/* CookieYes - MUST BE FIRST */}
           <Script 
             id="cookieyes" 
             src="https://cdn-cookieyes.com/client_data/XXXXX/script.js"
             strategy="beforeInteractive"
           />
         </head>
         <body>{children}</body>
       </html>
     );
   }
   ```

7. **Test:**
   - Clear cookies
   - Visit site
   - Banner shows?
   - Accept → GTM fires?
   - Decline → GTM doesn't fire?
   - ✅ Working

**Russian translation:**
```
Title: "Мы используем cookies"
Text: "Для улучшения сайта и измерения эффективности 
рекламы. Это помогает нам лучше вам служить."

Buttons:
- Принять всё
- Отклонить всё  
- Настройки
```

### Option B: Custom (More Control, More Work)

If you want full control:

```typescript
// lib/consent.ts
export function initConsent() {
  // Set defaults BEFORE GTM loads
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
  
  // User accepts
  window.acceptConsent = () => {
    gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    localStorage.setItem('consent', 'granted');
  };
  
  // User declines
  window.declineConsent = () => {
    localStorage.setItem('consent', 'denied');
  };
  
  // Check saved preference
  const saved = localStorage.getItem('consent');
  if (saved === 'granted') {
    window.acceptConsent();
  }
}
```

**NOT recommended for V1 - use CookieYes.**

---

## 2. GOOGLE TAG MANAGER (GTM) SETUP

### Client-Side GTM

1. **Create GTM account:** tagmanager.google.com
2. **Create container:**
   - Name: HaloAgency
   - Type: Web
3. **Get Container ID:** `GTM-XXXXXXX`

4. **Install in Next.js:**
```typescript
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* CookieYes first */}
        <Script 
          id="cookieyes" 
          src="https://cdn-cookieyes.com/client_data/XXXXX/script.js"
          strategy="beforeInteractive"
        />
        
        {/* GTM Head */}
        <Script 
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `
          }}
        />
      </head>
      <body>
        {/* GTM Body (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  );
}
```

### Configure GTM Tags

**In GTM dashboard:**

**Tag 1: GA4 Configuration**
- Type: Google Analytics: GA4 Configuration
- Measurement ID: `G-XXXXXXXXXX`
- Send to server container: ✅ YES
- Server Container URL: `https://sgtm.haloagency.cz`
- Trigger: All Pages

**Tag 2: Meta Pixel Base Code**
- Type: Custom HTML
- Code:
```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```
- Trigger: All Pages

**Tag 3: Form Submission Event**
- Type: GA4 Event
- Event Name: `form_submit`
- Trigger: Form Submission (configure trigger)

**Publish container**

---

## 3. STAPE.IO SERVER-SIDE TRACKING

### Why Server-Side?
- ✅ Bypass iOS 14.5+ tracking blocks
- ✅ Bypass ad blockers
- ✅ 70-85% accuracy vs 50-60% client-only
- ✅ Future-proof (browser restrictions increasing)

### Setup Stape.io (30 minutes)

1. **Sign up:** stape.io
2. **Create container:**
   - Name: HaloAgency Server
   - Region: Europe (Frankfurt - closest to Prague)
   - Plan: Startup ($20/month)

3. **Get subdomain:** You'll get `xxxxx.stape.io`

4. **Configure custom domain:**
   - Choose: `sgtm.haloagency.cz`
   - Add DNS CNAME record:
   ```
   Type: CNAME
   Name: sgtm
   Value: xxxxx.stape.io
   TTL: 3600
   ```
   - Wait 5-10 minutes for DNS propagation

5. **Configure Client GTM to send to server:**
   - In client GTM → GA4 Configuration tag
   - ✅ "Send to server container"
   - Server Container URL: `https://sgtm.haloagency.cz`
   - Save & Publish

6. **Configure Server GTM (in Stape dashboard):**

**Server Tag 1: GA4 (Server-Side)**
- Type: GA4
- Measurement ID: `G-XXXXXXXXXX`
- Trigger: All Events
- Publish

**Server Tag 2: Meta Conversions API (CAPI)**
- Type: Meta Conversions API
- Pixel ID: `YOUR_META_PIXEL_ID`
- Access Token: (generate in Meta Events Manager)
- Trigger: Specific events (form_submit, purchase, etc.)

**Get Meta CAPI Access Token:**
1. Go to business.facebook.com
2. Events Manager → Your Pixel
3. Settings → Conversions API
4. Generate Access Token
5. Copy (starts with `EAAxxxx`)
6. Paste in Stape Meta CAPI tag

**Server Tag 3: Google Enhanced Conversions**
- Type: Google Ads Conversion Tracking
- Conversion ID: Your Google Ads ID
- Enable Enhanced Conversions
- Trigger: Conversion events

7. **Test:**
   - GTM Preview mode
   - Submit form
   - Check Stape dashboard → should see events
   - Check Meta Events Manager → should see "Server" badge
   - ✅ Working

### Cost Summary:
- Stape.io: $20/month (~500 CZK)
- Can handle 3-5 clients on one account
- ROI: Recovers 30-50% lost conversions (worth 10-50k CZK/month per client)

---

## 4. GOOGLE ANALYTICS 4 SETUP

1. **Create GA4 property:** analytics.google.com
2. **Get Measurement ID:** `G-XXXXXXXXXX`
3. **Already configured via GTM** (see above)

4. **Set up conversions:**
   - Admin → Events → Mark as conversion:
     * `form_submit`
     * `lead_magnet_submit`
     * `package_click`
     * `contact_click`

5. **Configure DebugView:**
   - Admin → Data Streams → Web → Measurement ID
   - Enable "Enhanced Measurement"
   - Check: Scrolls, Outbound clicks, Site search, Video engagement

6. **Test:**
   - Open site
   - GA4 → Reports → Realtime
   - See yourself? ✅ Working

---

## 5. RESEND EMAIL SETUP

### Why Resend?
- Modern, developer-friendly
- FREE tier: 3,000 emails/month
- Great deliverability
- React email templates
- Easy API

### Setup (15 minutes)

1. **Sign up:** resend.com

2. **Add domain:** haloagency.cz

3. **Add DNS records:**
```
TXT record for verification:
Name: resend._domainkey
Value: [provided by Resend]

MX record for bounce handling:
Name: send
Value: feedback-smtp.resend.com
Priority: 10

SPF record:
Name: send
Value: v=spf1 include:amazonses.com ~all

DMARC record:
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:hello@haloagency.cz
```

4. **Verify domain** (wait 10-30 minutes)

5. **Get API key:**
   - Settings → API Keys
   - Create key
   - Copy: `re_xxxxxxxxxxxxx`

6. **Add to Vercel:**
   - Vercel Dashboard → Project → Settings → Environment Variables
   - Name: `RESEND_API_KEY`
   - Value: `re_xxxxxxxxxxxxx`
   - Environments: Production, Preview

7. **Install package:**
```bash
npm install resend
```

8. **Create API route:**
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, service } = body;
    
    // Send to client
    await resend.emails.send({
      from: 'HaloAgency <hello@haloagency.cz>',
      to: email,
      subject: 'Спасибо за вашу заявку!',
      html: `
        <h2>Здравствуйте, ${name}!</h2>
        <p>Мы получили вашу заявку и свяжемся с вами в течение рабочего дня.</p>
        <p><strong>Ваш запрос:</strong> ${service}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <br>
        <p>С уважением,<br>Команда HaloAgency</p>
      `
    });
    
    // Send to yourself
    await resend.emails.send({
      from: 'HaloAgency <hello@haloagency.cz>',
      to: 'artem@haloagency.cz',
      subject: `Новая заявка от ${name}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Услуга:</strong> ${service}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
      `
    });
    
    return NextResponse.json({ 
      success: true,
      message: 'Спасибо! Мы свяжемся с вами в течение 2 часов.' 
    });
    
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Ошибка отправки. Попробуйте ещё раз.' 
    }, { status: 500 });
  }
}
```

9. **Test:**
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","service":"Web","message":"Test"}'
```

Check email → arrives? ✅ Working

---

## 6. VERCEL DEPLOYMENT

### Setup (10 minutes)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/haloagency.git
git push -u origin main
```

2. **Import to Vercel:**
   - vercel.com → Import Project
   - Connect GitHub
   - Select repository
   - Framework: Next.js (auto-detected)
   - Deploy

3. **Add environment variables:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
N8N_WEBHOOK_URL=https://your-n8n.app.n8n.cloud/webhook/xxxxx
```

4. **Configure domain:**
   - Vercel → Project → Settings → Domains
   - Add: `haloagency.cz`
   - Add DNS records (A record or CNAME)
   - SSL auto-generates (5-10 minutes)

5. **Verify deployment:**
   - Site loads?
   - Forms work?
   - GTM fires?
   - No errors?
   - ✅ Live

---

## 7. TESTING CHECKLIST

### Consent & Tracking:
- [ ] Consent banner shows on first visit
- [ ] "Accept" → GTM fires
- [ ] "Decline" → GTM doesn't fire
- [ ] Choice remembered (localStorage)
- [ ] GA4 shows realtime data
- [ ] Meta Events Manager shows events
- [ ] Server events visible in Stape dashboard

### Forms:
- [ ] Contact form submits
- [ ] Validation works (required fields)
- [ ] Email arrives to user
- [ ] Email arrives to you
- [ ] Success message shows
- [ ] Error handling works

### Performance:
- [ ] Lighthouse score >85
- [ ] Page load <2s
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Forms work on mobile

### Server-Side Tracking:
- [ ] Events show in Stape dashboard
- [ ] Meta Events Manager shows "Server" badge
- [ ] GA4 shows server events
- [ ] No tracking blocked by browser
- [ ] Works on iOS Safari

---

## COST SUMMARY

**Monthly recurring:**
```
Vercel: FREE (hobby plan sufficient)
Domain: 25 CZK/month (~300 CZK/year)
Resend: FREE (under 3k emails)
Stape.io: $20/month (~500 CZK)
CookieYes: FREE (under 100 pages)

TOTAL: ~525 CZK/month (incredibly cheap)
```

**Setup time:**
```
Consent: 30 minutes
GTM: 30 minutes
GA4: 15 minutes
Stape: 45 minutes
Resend: 30 minutes
Vercel: 15 minutes

TOTAL: ~3 hours one-time
```

**ROI:**
- Server-side tracking recovers 30-50% lost conversions
- For client spending 50k CZK/month on ads
- Recovers: 15-25k CZK/month in lost value
- Your cost: 525 CZK/month
- **ROI: 30-50x** ✅

---

## NEXT STEPS

1. ✅ Set up consent (CookieYes)
2. ✅ Configure GTM
3. ✅ Set up Stape.io
4. ✅ Configure Resend
5. ✅ Deploy to Vercel
6. ✅ Test everything
7. → Set up N8N workflow (see separate guide)

**All done? Site is tracking properly! 🎉**
