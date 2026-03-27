const esc = (s='') => String(s)
  .replace(/&/g,'&amp;')
  .replace(/</g,'&lt;')
  .replace(/>/g,'&gt;')
  .replace(/"/g,'&quot;')
  .replace(/'/g,'&#039;');

const message = $input.item.json.message || {};
let content = message.content ?? "";

// If OpenAI returned JSON string, parse it
if (typeof content === "string") {
  try { content = JSON.parse(content); } catch (e) {}
}

// Support both schemas:
// A) {subject, body}
// B) {subject, title, intro, sections...} -> convert to body text for now
let subject = "Сообщение от HaloAgency";
let body = "";

if (content && typeof content === "object") {
  subject = content.subject || subject;

  if (content.body) {
    body = content.body;
  } else if (content.greeting || content.diagnosis || content.plan) {
    // Growth Plan JSON format
    const parts = [];
    if (content.greeting) parts.push(String(content.greeting));

    if (Array.isArray(content.diagnosis) && content.diagnosis.length) {
      parts.push(`\n📊 Диагностика:\n` + content.diagnosis.map(d => `• ${d}`).join('\n'));
    }

    if (Array.isArray(content.plan) && content.plan.length) {
      parts.push(`\n📅 План на 30 дней:\n`);
      for (const phase of content.plan) {
        if (phase.title) parts.push(`\n${phase.title}:`);
        if (Array.isArray(phase.items)) {
          parts.push(phase.items.map(item => `  • ${item}`).join('\n'));
        }
      }
    }

    if (Array.isArray(content.dont_do) && content.dont_do.length) {
      parts.push(`\n⚠️ Что НЕ делать сейчас:\n` + content.dont_do.map(d => `• ${d}`).join('\n'));
    }

    if (Array.isArray(content.questions) && content.questions.length) {
      parts.push(`\n❓ Уточняющие вопросы:\n` + content.questions.map(q => `• ${q}`).join('\n'));
    }

    if (content.next_step) {
      parts.push(`\n👉 Следующий шаг:\n${content.next_step}`);
    }

    parts.push(`\nАртём К.\nHalo Agency`);
    body = parts.filter(Boolean).join('\n');
  } else {
    // fallback compose from richer schema
    const parts = [];
    if (content.title) parts.push(String(content.title));
    if (content.intro) parts.push(String(content.intro));
    if (Array.isArray(content.sections)) {
      for (const s of content.sections) {
        if (s?.heading) parts.push(`\n${s.heading}`);
        if (s?.text) parts.push(String(s.text));
        if (Array.isArray(s?.bullets) && s.bullets.length) {
          parts.push(s.bullets.map(b => `• ${b}`).join('\n'));
        }
      }
    }
    if (Array.isArray(content.questions) && content.questions.length) {
      parts.push(`\nУточняющие вопросы:\n` + content.questions.map(q => `• ${q}`).join('\n'));
    }
    if (content?.cta?.text) {
      parts.push(`\nСледующий шаг:\n${content.cta.text}`);
    }
    if (content.signature) {
      parts.push(`\n${content.signature}`);
    }
    body = parts.filter(Boolean).join('\n');
  }
} else if (typeof content === "string") {
  body = content;
}

const safeSubject = esc(subject);
const safeBodyText = String(body || "");
const bodyHtml = esc(safeBodyText).replace(/\n/g, "<br>");

const buttonHtml = `
<a href="https://t.me/+420705729502"
   style="
     display:inline-block;
     padding:14px 28px;
     background:linear-gradient(135deg, #0088cc 0%, #006ba1 100%);
     border:1px solid rgba(0,136,204,0.75);
     color:#ffffff !important;
     text-decoration:none;
     border-radius:10px;
     font-weight:700;
     font-size:15px;
     letter-spacing:0.2px;
     text-align:center;
   ">
  📱 Связаться в Telegram
</a>`;

const htmlOutput = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
</head>
<body style="background-color:#050a1a;margin:0;padding:0;font-family:Helvetica,Arial,sans-serif;color:#ffffff;">
  <div style="max-width:600px;margin:20px auto;background:#0b1121;border:1px solid #1e293b;border-radius:12px;overflow:hidden;">
    <div style="padding:40px 20px;text-align:center;background:linear-gradient(135deg,#0b1121 0%,#050a1a 100%);">
      <div style="font-size:24px;font-weight:700;letter-spacing:-1px;">
        <span style="color:#e2e8f0;">Halo</span><span style="color:#3b82f6;">Agency</span>
      </div>
    </div>

    <div style="padding:40px 30px;line-height:1.65;font-size:16px;color:#cbd5e1;">
      <h1 style="color:#ffffff;font-size:22px;margin:0 0 18px;">${safeSubject}</h1>
      <div>${bodyHtml}</div>

      <div style="text-align:center;margin-top:22px;">
        ${buttonHtml}
      </div>
    </div>

    <div style="padding:20px;text-align:center;font-size:12px;color:#64748b;background:#050a1a;">
      © 2026 HaloAgency. Весь маркетинг под одной крышей.
    </div>
  </div>
</body>
</html>
`;

// Telegram preview (plain text)
const previewBody =
  safeBodyText.length > 1200 ? safeBodyText.slice(0, 1200) + "…" : safeBodyText;

// Lead meta - read from $input.item.json (merged data from previous nodes)
const inputData = $input.item.json || {};
const leadType = inputData.lead_type || inputData.body?.type || inputData.type || "unknown";
const leadTo = inputData.lead_to || inputData.body?.email || inputData.body?.contact || "unknown";
const site = inputData.lead_site || inputData.body?.websiteOrProfile || "не указано";
const goal = inputData.lead_goal || inputData.body?.mainGoal || inputData.body?.goal || "не указано";
const problem = inputData.lead_problem || inputData.body?.mainProblem || inputData.body?.message || "не указано";

// Build form-specific context
const formContext = [];
const bodyData = inputData.body || {};

if (leadType === 'web-project') {
  if (bodyData.business_identity) formContext.push(`🏢 Бизнес: ${bodyData.business_identity}`);
  if (bodyData.hero_headline) formContext.push(`📝 Заголовок: ${bodyData.hero_headline}`);
  if (bodyData.visual_style) formContext.push(`🎨 Стиль: ${bodyData.visual_style}`);
  if (bodyData.color_preference) formContext.push(`🎨 Цвет: ${bodyData.color_preference}`);
  if (bodyData.key_features) formContext.push(`⚡ Функции: ${bodyData.key_features}`);
}

if (leadType === 'ads-lead') {
  if (bodyData.business) formContext.push(`🏢 Бизнес: ${bodyData.business}`);
  if (bodyData.budget) formContext.push(`💰 Бюджет: ${bodyData.budget}`);
  if (bodyData.had_ads) formContext.push(`📢 Реклама ранее: ${bodyData.had_ads}`);
  if (bodyData.hasWebsite) formContext.push(`🌐 Сайт готов: ${bodyData.hasWebsite}`);
}

if (leadType === 'growth-plan') {
  if (bodyData.businessType) formContext.push(`🏢 Тип бизнеса: ${bodyData.businessType}`);
  const triedBefore = inputData.triedBeforeHuman || (bodyData.triedBefore && bodyData.triedBefore.length > 0 ? bodyData.triedBefore.join(', ') : null);
  if (triedBefore) formContext.push(`📊 Пробовали: ${triedBefore}`);
}

if (leadType === 'contact') {
  if (bodyData.name) formContext.push(`👤 Имя: ${bodyData.name}`);
  if (bodyData.service) formContext.push(`🎯 Услуга: ${bodyData.service}`);
}

const contextStr = formContext.length > 0 ? '\n' + formContext.join('\n') : '';

const tgPreview = `🆕 New Lead: ${leadType}
📩 To: ${leadTo}
🔗 Site: ${site}
🎯 Goal: ${goal}${contextStr}

━━━━━━━━━━━━━━━━
📧 EMAIL PREVIEW
━━━━━━━━━━━━━━━━

🧾 SUBJECT:
${subject}

✉️ BODY:
${previewBody}

━━━━━━━━━━━━━━━━
Approve / Edit / Reject?`;

// ✅ THIS IS THE IMPORTANT PART
return [
  {
    json: {
      email_subject: subject,
      email_html: htmlOutput,
      email_text: safeBodyText,
      tg_preview: tgPreview,

      lead_type: leadType,
      lead_to: leadTo,
      lead_site: site,
      lead_goal: goal,
      lead_problem: problem
    }
  }
];
