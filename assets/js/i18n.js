const translations = {
  en: {
    home: "Home",
    docs: "Docs",
    examples: "Examples",
    title: "Ellawy Programming Language",
    desc: "A modern scripting language for games & mods.",
    getStarted: "Get Started",
  },
  ar: {
    home: "الرئيسية",
    docs: "التوثيق",
    examples: "أمثلة",
    title: "لغة البرمجة Ellawy",
    desc: "لغة سكربت حديثة للألعاب والتعديلات (Mods).",
    getStarted: "ابدأ الآن",
  },
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });

  localStorage.setItem("lang", lang);
}

window.onload = () => {
  setLang(localStorage.getItem("lang") || "en");
};

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

window.onload = () => {
  setLang(localStorage.getItem("lang") || "en");
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
};