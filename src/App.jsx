import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import portraitImage from "./assets/lera.jpeg";

const content = {
  uk: {
    topbarLeft: "CV / Портфоліо",
    topbarRight: "Marketing Specialist",
    switcherLabel: "Мова",
    heroLabel: "Профіль",
    name: "Валерія Місілюк",
    tagline: "Marketing Specialist з фокусом на промоактивності, партнерські комунікації",
    intro: [
      "Працюю на стику координації, комунікації та маркетингових запусків. Маю практичний досвід підготовки промоактивностей, взаємодії з партнерами, постановки задач для креативів і супроводу рекламних кампаній.",
    ],
    profileLabel: "Позиціонування",
    profileBadge: "Open for Trainee / Junior",
    profileFacts: [
      { label: "Локація", value: "Варшава, Польща" },
      { label: "Зараз", value: "Marketing Specialist, COMFY" },
      { label: "Сильна сторона", value: "Партнерські комунікації та запуск промо" },
    ],
    experienceLabel: "Досвід",
    jobs: [
      {
        dates: "11.2023 — теперішній час",
        title: "Marketing Specialist",
        company: "COMFY",
        impact:
          "Комунікація з партнерами щодо рекламних кампаній та промоактивностей, підготовка запусків, підбір механік і інструментів просування.",
        details:
          "Створення ТЗ для креативів, підготовка звітності та робота з документацією: службові записки, додаткові угоди, формулювання на оплату послуг, фотозвіти.",
      },
      {
        dates: "06.2023 — 11.2023",
        title: "Спеціаліст з клієнтських відгуків",
        company: "COMFY",
        impact:
          "Моніторинг та аналіз клієнтських відгуків, покращення функціоналу і зручності роботи з відгуками на сайті.",
        details:
          "Розробка та реалізація способів залучення клієнтів до залишення відгуків на сайті.",
      },
      {
        dates: "08.2022 — 06.2023",
        title: "Спеціаліст з координації роботи",
        company: "COMFY",
        impact:
          "Організація роботи команди, контроль задач і дедлайнів, комунікація між відділами у динамічному середовищі.",
        details: "",
      },
      {
        dates: "02.2021 — 08.2022",
        title: "Спеціаліст служби підтримки чату",
        company: "COMFY",
        impact:
          "Онлайн-підтримка клієнтів, консультація щодо товарів та послуг, вирішення запитів і скарг.",
        details: "",
      },
    ],
    skillsLabel: "Навички",
    skills: [
      "Microsoft Excel",
      "Adobe Photoshop",
      "Google Docs / Sheets",
      "Word / Outlook",
      "Партнерські комунікації",
      "Комунікація",
      "Командна робота",
      "Робота зі звітністю",
      "Організація процесів",
      "Підготовка ТЗ для креативів",
      "Підготовка промоактивностей",
      "Супровід рекламних кампаній",
      "Маркетингова документація",
    ],
    skillsNote: "Поєдную операційну точність, комунікацію з партнерами та інтерес до performance-напряму.",
    contactLabel: "Контакт",
    contact: [
      { label: "Email", value: "rezunovalera86@gmail.com", href: "mailto:rezunovalera86@gmail.com" },
      { label: "Місто", value: "Варшава, Польща" },
      { label: "Формат", value: "Онлайн / гібридно" },
    ],
    footerLabel: "Додатково",
    footerTitle: "Коротко про мене",
    footerText:
      "У роботі для мене важливі ясна комунікація, відповідальність і увага до деталей. Люблю, коли маркетинг поєднує креатив, структуру та зрозумілий результат. Швидко вчусь, системно працюю й комфортно взаємодію з командою та партнерами. Мені близькі проєкти, де цінують ініціативність, порядок у процесах і взаємопідтримку.",
    educationLabel: "Освіта",
    education: [
      "Національний університет фізичного виховання і спорту України (2019 — 2023) — тренер спортивних танців",
      "Дніпровський державний технікум енергетики та інформаційних технологій (2016 — 2018) — економіст",
    ],
    languagesLabel: "Мови",
    languages: [
      "Українська — рідна",
      "Польська — базовий рівень",
      "Англійська — базовий рівень",
    ],
    directionLabel: "Фокус",
    direction: [
      "Партнерські комунікації",
      "Промоактивності та запуск кампаній",
      "Звітність і маркетингова документація",
      "Meta Ads / performance marketing",
    ],
    footerNote: "",
  },
  en: {
    topbarLeft: "CV / Portfolio",
    topbarRight: "Marketing Specialist",
    switcherLabel: "Language",
    heroLabel: "Profile",
    name: "Valeriia Misiliuk",
    tagline: "Marketing Specialist focused on promo campaigns, partner communication, and digital marketing growth",
    intro: [
      "I work at the intersection of coordination, communication, and campaign execution. My experience includes promo planning, partner communication, creative briefing, and marketing campaign support.",
      "I am especially interested in performance marketing and Meta Ads. I learn quickly and want to grow in digital marketing through a structured approach, analytics, and strong attention to detail.",
    ],
    profileLabel: "Positioning",
    profileBadge: "Open for Trainee / Junior",
    profileFacts: [
      { label: "Base", value: "Warsaw, Poland" },
      { label: "Current", value: "Marketing Specialist, COMFY" },
      { label: "Strength", value: "Partner communication and promo launches" },
    ],
    experienceLabel: "Experience",
    jobs: [
      {
        dates: "11.2023 — Present",
        title: "Marketing Specialist",
        company: "COMFY",
        impact:
          "Partner communication for advertising campaigns and promo activities, launch coordination, and selection of campaign tools and mechanics.",
        details:
          "Preparation of creative briefs, campaign reporting, and marketing documentation including internal notes, addenda, payment wording, and photo reports.",
      },
      {
        dates: "06.2023 — 11.2023",
        title: "Customer Review Specialist",
        company: "COMFY",
        impact:
          "Monitored and analyzed customer reviews, improving the functionality and convenience of the review experience on the website.",
        details:
          "Developed and implemented ways to encourage customers to leave more reviews on the site.",
      },
      {
        dates: "08.2022 — 06.2023",
        title: "Work Coordination Specialist",
        company: "COMFY",
        impact:
          "Organized team workflows, tracked tasks and deadlines, and supported communication between departments.",
        details: "",
      },
      {
        dates: "02.2021 — 08.2022",
        title: "Chat Support Specialist",
        company: "COMFY",
        impact:
          "Provided online customer support, product and service guidance, and resolved customer requests and complaints.",
        details: "",
      },
    ],
    skillsLabel: "Skills",
    skills: [
      "Microsoft Excel",
      "Adobe Photoshop",
      "Google Docs / Sheets",
      "Word / Outlook",
      "Analytical Thinking",
      "Communication",
      "Teamwork",
      "Reporting",
      "Process Coordination",
      "Creative Briefing",
    ],
    skillsNote: "I combine operational precision, partner communication, and a strong interest in performance marketing.",
    contactLabel: "Contact",
    contact: [
      { label: "Email", value: "rezunovalera86@gmail.com", href: "mailto:rezunovalera86@gmail.com" },
      { label: "City", value: "Warsaw, Poland" },
      { label: "Format", value: "Remote / hybrid" },
    ],
    footerLabel: "Additional",
    footerTitle: "Ready to grow in performance marketing and Meta Ads",
    footerText:
      "Looking for a team where strong coordination, analytical thinking, and digital marketing growth can come together in one role.",
    educationLabel: "Education",
    education: [
      "National University of Ukraine on Physical Education and Sport (2019 — 2023) — Sports Dance Coach",
      "Dnipro State Technical School of Energy and Information Technologies (2016 — 2018) — Economist",
    ],
    languagesLabel: "Languages",
    languages: [
      "Ukrainian — Native",
      "Polish — Basic",
      "English — Basic",
    ],
    directionLabel: "Focus",
    direction: [
      "Partner communication",
      "Promo activities and campaign launches",
      "Reporting and marketing documentation",
      "Meta Ads / performance marketing",
    ],
    footerNote: "",
  },
};

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function Monogram({ name }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return <span className="monogram">{initials}</span>;
}

function RevealSection({ children, className = "" }) {
  return (
    <motion.section
      className={className}
      variants={reveal}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.section>
  );
}

export default function App() {
  const [lang, setLang] = useState("uk");
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "uk" ? "uk" : "en";
  }, [lang]);

  return (
    <div className="page-shell">
      <div className="page-grain" aria-hidden="true" />
      <div className="page-blob" aria-hidden="true" />

      <main className="layout">
        <motion.section
          className="topbar"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>{t.topbarLeft}</p>
          <div className="topbar-actions">
            <p>{t.topbarRight}</p>
            <div className="lang-switcher" aria-label={t.switcherLabel}>
              <button
                type="button"
                className={lang === "uk" ? "is-active" : ""}
                onClick={() => setLang("uk")}
              >
                UA
              </button>
              <button
                type="button"
                className={lang === "en" ? "is-active" : ""}
                onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="hero"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-copy" variants={reveal}>
            <SectionLabel>{t.heroLabel}</SectionLabel>
            <h1 className="hero-title">{t.name}</h1>
            <p className="hero-tagline">{t.tagline}</p>
            <div className="hero-text">
              {t.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="profile-panel"
            variants={reveal}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="profile-signature">
              <div className="profile-monogram" aria-hidden="true">
                <img src={portraitImage} alt={t.name} />
              </div>
              <div className="profile-signature-copy">
                <p>{t.topbarRight}</p>
                <strong>{t.name}</strong>
              </div>
            </div>
            <div className="profile-facts">
              {t.profileFacts.map((fact) => (
                <div className="profile-fact" key={fact.label}>
                  <span>{fact.label}</span>
                  <p>{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <RevealSection className="content-grid">
          <div className="experience">
            <SectionLabel>{t.experienceLabel}</SectionLabel>
            <motion.div
              className="experience-list"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {t.jobs.map((job) => (
                <motion.article className="experience-item" key={`${job.company}-${job.dates}`} variants={reveal}>
                  <p className="experience-dates">{job.dates}</p>
                  <div className="experience-body">
                    <h2>{job.title}</h2>
                    <p className="experience-company">{job.company}</p>
                    <p className="experience-impact">{job.impact}</p>
                    {job.details ? <p className="experience-detail">{job.details}</p> : null}
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <div className="side-stack">
            <div>
              <SectionLabel>{t.skillsLabel}</SectionLabel>
              <motion.div
                className="skills-cloud"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                {t.skills.map((skill) => (
                  <motion.span
                    className="skill-pill"
                    key={skill}
                    variants={reveal}
                    whileHover={{ y: -3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="contact-card"
              variants={reveal}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <SectionLabel>{t.contactLabel}</SectionLabel>
              <div className="contact-list">
                {t.contact.map((item) => (
                  <p key={item.label}>
                    <span>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-link">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </RevealSection>

        <RevealSection className="footer-panel">
          <motion.div
            className="footer-intro"
            variants={reveal}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <SectionLabel>{t.footerLabel}</SectionLabel>
            <p className="footer-text">{t.footerText}</p>
            <motion.div
              className="footer-line"
              initial={{ scaleX: 0.3, opacity: 0.4 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            {t.footerNote ? <p className="footer-note">{t.footerNote}</p> : null}
          </motion.div>

          <motion.div
            className="footer-grid"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="footer-card" variants={reveal} whileHover={{ y: -4 }}>
              <h4>{t.educationLabel}</h4>
              <ul>
                {t.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-card" variants={reveal} whileHover={{ y: -4 }}>
              <h4>{t.languagesLabel}</h4>
              <ul>
                {t.languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="footer-card accent-card" variants={reveal} whileHover={{ y: -4 }}>
              <h4>{t.directionLabel}</h4>
              <ul>
                {t.direction.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </RevealSection>
      </main>
    </div>
  );
}
