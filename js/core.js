console.log("core.js loaded");

/* =========================
    i18n
   ========================= */
const i18n = {
  fa: {
    // toolbox
    tbHome: "خانه",
    tbAbout: "درباره من",
    tbProjects: "پروژه‌ها",
    tbPricing: "تعرفه",
    tbContact: "تماس",
    langBtn: "English",

    // index slide 1
    homeTitle: "سلام، من سامان هستم",
    homeText: "طراح/توسعه‌دهنده فرانت‌اند — تجربه‌های مدرن، انیمیشن‌های سبک، رابط کاربری تمیز.",
    homeBtn: "رفتن به صفحه درباره من",
    scrollRing: "اسکرول کنید • اسکرول کنید • اسکرول کنید •",

    // index slide 2
    indexAboutTitle: "درباره‌ی من",
    indexAboutText: "این یک معرفی کوتاه داخل صفحه اصلی است. برای جزئیات بیشتر می‌توانید وارد صفحه درباره من شوید.",
    indexAboutLi1: "طراحی UI و تجربه کاربری",
    indexAboutLi2: "Front-end با HTML/CSS/JS",
    indexAboutLi3: "انیمیشن و تعاملات",
    indexAboutCta: "دیدن پروژه‌ها",

    // index slide 3
    indexContactTitle: "تماس با من",
    indexContactText: "اگر همکاری یا سوال دارید، از راه‌های زیر با من در ارتباط باشید.",
    indexEmailLabel: "ایمیل",
    indexEmailValue: "you@email.com",
    indexPhoneLabel: "شماره",
    indexPhoneValue: "0900 000 0000",
    indexContactCta: "رفتن به صفحه تماس",

    // about page
    aboutTitle: "درباره‌ی من",
    aboutText: "من یک طراح/توسعه‌دهنده هستم که روی ساخت تجربه‌های مدرن وب کار می‌کنم. تمرکزم روی طراحی تمیز، انیمیشن‌های سبک و رابط کاربری حرفه‌ایه.",
    aboutLi1: "طراحی UI و تجربه کاربری",
    aboutLi2: "Front-end با HTML/CSS/JS",
    aboutLi3: "ساخت تعاملات و انیمیشن",

    // projects page
    projectsTitle: "پروژه‌ها",
    projectsText: "اینجا نمونه‌کارها و پروژه‌های من قرار می‌گیرد.",
    proj1Title: "پروژه ۱",
    proj1Text: "توضیح کوتاه درباره پروژه.",
    proj2Title: "پروژه ۲",
    proj2Text: "توضیح کوتاه درباره پروژه.",
    proj3Title: "پروژه ۳",
    proj3Text: "توضیح کوتاه درباره پروژه.",

    // pricing page
    pricingTitle: "تعرفه",
    pricingText: "پکیج‌ها را بر اساس نیاز پروژه انتخاب کنید.",
    price1Title: "پکیج پایه",
    price1Text: "مناسب پروژه‌های کوچک و سریع.",
    price2Title: "پکیج استاندارد",
    price2Text: "برای وب‌سایت‌های حرفه‌ای و کامل.",
    price3Title: "پکیج پیشرفته",
    price3Text: "برای تجربه‌های تعاملی و اختصاصی.",

    // contact page
    contactTitle: "ارتباط با من",
    contactText: "برای همکاری یا سوال، پیام بده ",
    contactEmailLabel: "ایمیل",
    contactEmailValue: "you@email.com",
    contactPhoneLabel: "شماره",
    contactPhoneValue: "0900 000 0000",
    contactBtn: "ارسال ایمیل",
  },

  en: {
    // toolbox
    tbHome: "Home",
    tbAbout: "About",
    tbProjects: "Projects",
    tbPricing: "Pricing",
    tbContact: "Contact",
    langBtn: "فارسی",

    // index slide 1
    homeTitle: "Hi, I'm saman",
    homeText: "Front-end designer/developer — modern web experiences, subtle motion, and clean UI.",
    homeBtn: "Go to About page",
    scrollRing: "SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •",

    // index slide 2
    indexAboutTitle: "About Me",
    indexAboutText: "This is a short intro on the homepage. For full details, open the About page.",
    indexAboutLi1: "UI & UX design",
    indexAboutLi2: "Front-end with HTML, CSS, and JavaScript",
    indexAboutLi3: "Interaction & motion design",
    indexAboutCta: "View projects",

    // index slide 3
    indexContactTitle: "Contact",
    indexContactText: "For collaboration or questions, reach out using the options below.",
    indexEmailLabel: "Email",
    indexEmailValue: "you@email.com",
    indexPhoneLabel: "Phone",
    indexPhoneValue: "+98 900 000 0000",
    indexContactCta: "Open contact page",

    // about page
    aboutTitle: "About Me",
    aboutText: "I’m a front-end designer/developer focused on building modern web experiences. I care about clean design, lightweight motion, and polished interfaces.",
    aboutLi1: "UI & UX design",
    aboutLi2: "Front-end with HTML, CSS, and JavaScript",
    aboutLi3: "Interactions & motion design",

    // projects page
    projectsTitle: "Projects",
    projectsText: "A curated selection of my work and experiments.",
    proj1Title: "Project One",
    proj1Text: "A short description of what you built.",
    proj2Title: "Project Two",
    proj2Text: "A short description of what you built.",
    proj3Title: "Project Three",
    proj3Text: "A short description of what you built.",

    // pricing page
    pricingTitle: "Pricing",
    pricingText: "Choose a package that matches your needs and timeline.",
    price1Title: "Starter",
    price1Text: "Best for small, fast projects.",
    price2Title: "Standard",
    price2Text: "For professional, full-featured websites.",
    price3Title: "Advanced",
    price3Text: "For custom interactive experiences.",

    // contact page
    contactTitle: "Get in touch",
    contactText: "Questions or collaboration? Send a message — I usually reply quickly 🙂",
    contactEmailLabel: "Email",
    contactEmailValue: "you@email.com",
    contactPhoneLabel: "Phone",
    contactPhoneValue: "+98 900 000 0000",
    contactBtn: "Send email",
  },
};

function applyLang(lang){
  const L = (lang === "en") ? "en" : "fa";

  document.documentElement.lang = L;
  document.documentElement.dir  = (L === "fa") ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[L] && i18n[L][key] != null) el.textContent = i18n[L][key];
  });

  document.querySelectorAll("[data-i18n-textpath]").forEach(el => {
    const key = el.getAttribute("data-i18n-textpath");
    if (i18n[L] && i18n[L][key] != null) el.textContent = i18n[L][key];
  });

  localStorage.setItem("lang", L);
}

// init
applyLang(localStorage.getItem("lang") || "fa");

// toggle
const langBtn = document.getElementById("langBtn");
if (langBtn){
  langBtn.addEventListener("click", () => {
    const cur = localStorage.getItem("lang") || "fa";
    applyLang(cur === "fa" ? "en" : "fa");
  });
}

/* =========================
  CANVAS SPRAY (pause on toolbox)
   ========================= */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas ? canvas.getContext("2d", { alpha: true }) : null;

let W=0, H=0;

function resizeCanvas(){
  if (!canvas || !ctx) return;

  const dpr = Math.max(1, window.devicePixelRatio || 1);
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width  = Math.floor(W * dpr);
  canvas.height = Math.floor(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const sprayPalette = [
  [96, 125, 139],   // #607D8B
  [69, 90, 100],    // #455A64
  [120, 144, 156],  // #78909C
  [176, 190, 197],  // #B0BEC5
  [144, 164, 174],  // #90A4AE
];

const spraySettings = {
  baseAmount: 8,
  maxAmount: 28,
  minSize: 0.8,
  maxSize: 2.8,
  minLife: 18,
  maxLife: 60,
  minSpeed: 0.4,
  maxSpeed: 2.6,
  friction: 0.985,
  fadeStrength: 0.06,
};

let pauseSpray = false;
const toolbox = document.getElementById("toolbox");
if (toolbox){
  toolbox.addEventListener("mouseenter", () => pauseSpray = true);
  toolbox.addEventListener("mouseleave", () => pauseSpray = false);
}

function spray(x, y, amount){
  for (let i=0;i<amount;i++){
    const angle = Math.random() * Math.PI * 2;
    const speed = spraySettings.minSpeed + Math.random() * (spraySettings.maxSpeed - spraySettings.minSpeed);
    const size  = spraySettings.minSize  + Math.random() * (spraySettings.maxSize  - spraySettings.minSize);
    const life  = spraySettings.minLife  + Math.random() * (spraySettings.maxLife  - spraySettings.minLife);

    const ox = Math.random() * 10 - 5;
    const oy = Math.random() * 10 - 5;

    const [r,g,b] = sprayPalette[Math.floor(Math.random() * sprayPalette.length)];

    particles.push({
      x: x + ox, y: y + oy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size, life, maxLife: life,
      alpha: 0.12 + Math.random() * 0.18,
      r,g,b
    });
  }
}

let last = { x:0, y:0, t: performance.now() };

window.addEventListener("mousemove", (e) => {
  if (!ctx || pauseSpray) return;

  const x = e.clientX, y = e.clientY;
  const now = performance.now();
  const dt = Math.max(1, now - last.t);

  const dx = x - last.x;
  const dy = y - last.y;

  const dist = Math.hypot(dx, dy);
  const speed = dist / dt;

  const amount = Math.min(
    spraySettings.maxAmount,
    spraySettings.baseAmount + Math.floor(speed * 120)
  );

  spray(x, y, amount);
  last = { x, y, t: now };
});

function animate(){
  if (!ctx) return;

  ctx.fillStyle = `rgba(0,0,0,${spraySettings.fadeStrength})`;
  ctx.fillRect(0,0,W,H);

  for (let i=particles.length-1;i>=0;i--){
    const p = particles[i];

    p.x += p.vx;
    p.y += p.vy;

    p.vx *= spraySettings.friction;
    p.vy *= spraySettings.friction;

    p.life -= 1;

    const lifeRatio = Math.max(0, p.life / p.maxLife);
    const a = p.alpha * lifeRatio;

    ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${a})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    if (p.life <= 0) particles.splice(i,1);
  }

  requestAnimationFrame(animate);
}
animate();
