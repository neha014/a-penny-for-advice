import { useEffect } from "react";
import logo from "./logo.png";

const BRAND = "A Penny for Advise";

const LINKS = {
  form: "https://forms.gle/zS9PoKpG4dWbsSUQ9",
  instagram: "https://instagram.com/apennyforadvise",
  instagramHandle: "@apennyforadvise",
  email: "Apennyforadvise@gmail.com",
};

const ASK = [
  "How do I budget my income",
  "Where should I put my savings",
  "Forecast my company's revenue in this industry",
  "Help me pick a cost-efficient vendor",
  "Should I take this loan",
  "What insurance actually matters for me",
];

const TIERS = [
  {
    name: "A generic, common question",
    time: "24h – 7 days",
    example:
      "“How do I budget my income”, “should I take this loan” things with a well-established answer.",
  },
  {
    name: "A specific, common project",
    time: "1 – 4 weeks",
    example:
      "“Pick a vendor between these three quotes”  needs your numbers, some comparison, and a real recommendation.",
  },
  {
    name: "A detailed, core project",
    time: "1 – 3 months",
    example:
      "“Forecast my company's income in this industry”  needs proper research before I'd trust my own answer.",
  },
];

const STEPS = [
  {
    title: "You ask",
    body: "Send one specific question over Instagram or email  the more detail, the better the answer.  You pay ₹1.",
  },
  {
    title: "We read up",
    body: "We actually research it before replying. Turnaround depends on the tier above.",
  },
  {
    title: "We reach out if I need more",
    body: "If a number, a document, or some context is missing, I'll message you back on whichever channel you picked before going further.",
  },
  {
    title: "We write back",
    body: "A plain-language answer, sent to wherever you asked.",
  },
];

const CONTACTS = [
  {
    label: "Start here",
    value: "Fill the form",
    href: LINKS.form,
    external: true,
    primary: true,
  },
  { label: "Instagram", value: LINKS.instagramHandle, href: LINKS.instagram, external: true },
  { label: "Email", value: LINKS.email }, // no href — just displays
];

/*  Logo  */

function Mark() {
  return (
    <svg
      className="hero__mark"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={`${BRAND} logo`}
    >
      <circle cx="38" cy="60" r="26" />
      <circle cx="38" cy="60" r="12" />
      <circle cx="38" cy="60" r="3" fill="currentColor" stroke="none" />
      <path d="M62 50 C68 38 72 30 84 16" />
      <path d="M74 10 L92 8 L90 26 Z" fill="currentColor" />
    </svg>
  );
}

/* Page */

export default function App() {
  useEffect(() => {
    document.title = BRAND;
  }, []);

  return (
    <div className="penny">
      <style>{CSS}</style>

      <main className="penny__wrap">
        <header className="hero">
          <img className="hero__logo" src={logo} alt={`${BRAND} logo`} />
          <h1>They say a penny for your thoughts. This one costs a rupee.</h1>
          <p className="hero__sub">
            Ask a real financial question. Get a <strong>plain, researched answer</strong> for
            exactly ₹1, every time.
          </p>
          <a className="cta-btn" href={LINKS.form} target="_blank" rel="noreferrer noopener">
            Ask your question →
          </a>
        </header>

        <section className="section" aria-labelledby="ask-title">
          <h2 className="section__title" id="ask-title">
            What you can ask
          </h2>
          <ul className="menu">
            {ASK.map((item) => (
              <li className="menu__item" key={item}>
                <span className="menu__label">{item}</span>
                <span className="menu__price">₹1</span>
              </li>
            ))}
          </ul>
          <p className="note">Everything on the menu is ₹1. That's the whole model.</p>
        </section>

        <section className="section" aria-labelledby="time-title">
          <h2 className="section__title" id="time-title">
            How long it takes
          </h2>
          <ul className="tiers">
            {TIERS.map((t) => (
              <li className="tier" key={t.name}>
                <div className="tier__head">
                  <h3 className="tier__name">{t.name}</h3>
                  <span className="tier__time">{t.time}</span>
                </div>
                <p className="tier__example">{t.example}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="how-title">
          <h2 className="section__title" id="how-title">
            How it works
          </h2>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li className="step" key={s.title}>
                <span className="step__num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" aria-labelledby="contact-title">
          <h2 className="section__title" id="contact-title">
            How to get in touch
          </h2>
          <p className="contact__intro">
            Fill the form so I know which tier your question falls under, and whether to write
            back on Instagram or email, whichever you pick there. We actually read every
            question, the more detail you give, the better the answer.
          </p>
          <div className="contact__list">
            {CONTACTS.map((c) => {
              const Tag = c.href ? "a" : "div";
              return (
                <Tag
                  className={`card${c.primary ? " card--primary" : ""}`}
                  key={c.label}
                  {...(c.href
                    ? {
                        href: c.href,
                        ...(c.external && c.href !== "#"
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {}),
                      }
                    : {})}
                >
                  <span className="card__label">{c.label}</span>
                  <span className="card__value">{c.value}</span>
                </Tag>
              );
            })}
          </div>
        </section>

        <footer className="foot">
          <p>
            {BRAND} is a personal learning project, not a registered investment advisory service.
            Treat every answer as a well-researched second opinion for anything with real money
            on the line, confirm it with a licensed advisor before you act.
          </p>
          <p>© 2026 {BRAND}.</p>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Styles ---------- */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400&display=swap');

:root {
  --green: #1f4b2c;
  --ink: #26302a;
  --muted: #5d6861;
  --line: #dfe2db;
  --dots: #b9c0b4;
  --paper: #ffffff;
  --serif: 'Source Serif 4', Georgia, 'Times New Roman', serif;
  --sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

html, body { margin: 0; padding: 0; background: var(--paper); }
body { display: block; min-width: 0; }

.penny {
  font-family: var(--sans);
  color: var(--ink);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  background: var(--paper);
  min-height: 100vh;
}
.penny *, .penny *::before, .penny *::after { box-sizing: border-box; }
.penny__wrap { max-width: 640px; margin: 0 auto; padding: 24px 22px 56px; }

/* Hero */
.hero {
  padding: 44px 26px 48px;
  text-align: center;
}
.hero__logo { width: min(360px, 82%); height: auto; display: block; margin: 0 auto 34px; }
.hero h1 {
  font-family: var(--serif);
  font-weight: 400;
  color: var(--green);
  font-size: clamp(34px, 9vw, 46px);
  line-height: 1.14;
  letter-spacing: -0.01em;
  margin: 0 0 22px;
  text-wrap: balance;
}
.hero__sub { font-size: 18px; color: var(--muted); margin: 0 auto; max-width: 30ch; }
.hero__sub strong { color: var(--ink); font-weight: 600; }

.cta-btn {
  display: inline-block;
  margin-top: 28px;
  padding: 15px 38px;
  background: transparent;
  color: var(--green);
  font-family: var(--serif);
  font-size: 19px;
  text-decoration: none;
  border: 1.5px dotted var(--green);
  border-radius: 2px;
  letter-spacing: 0.01em;
  transition: background-color 0.18s, color 0.18s;
}
.cta-btn:hover { background: var(--green); color: #fff; }
.cta-btn:focus-visible { outline: 2px solid var(--green); outline-offset: 3px; }

/* Sections */
.section { margin-top: 64px; }
.section__title {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: var(--serif);
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
  color: var(--green);
  margin: 0 0 20px;
}
.section__title::after { content: ''; flex: 1; border-bottom: 1px dotted var(--dots); }

/* Menu */
.menu { list-style: none; margin: 0; padding: 0; }
.menu__item { display: flex; align-items: baseline; gap: 10px; padding: 16px 0; }
.menu__item + .menu__item { border-top: 1px solid var(--line); }
.menu__label { font-size: 18px; }
.menu__leader { flex: 1; }
.menu__price { font-family: var(--serif); font-size: 20px; color: var(--green); margin-left: auto; }
.note { font-family: var(--serif); font-style: italic; color: var(--muted); font-size: 18px; margin: 22px 0 0; }

/* Tiers */
.tiers { list-style: none; margin: 0; padding: 0; }
.tier { padding: 20px 0; }
.tier + .tier { border-top: 1px solid var(--line); }
.tier__head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; column-gap: 16px; row-gap: 2px; }
.tier__name { font-family: var(--serif); font-weight: 400; font-size: 22px; color: var(--green); margin: 0; }
.tier__time { font-family: var(--serif); font-size: 20px; color: var(--green); white-space: nowrap; }
.tier__example { margin: 8px 0 0; color: var(--muted); font-size: 16px; }

/* Steps */
.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 34px; }
.step { display: grid; grid-template-columns: 44px 1fr; gap: 20px; align-items: start; }
.step__num {
  width: 44px; height: 44px;
  border: 1px solid var(--green);
  border-radius: 50%;
  display: grid; place-items: center;
  font-family: var(--serif); font-size: 20px; color: var(--green);
}
.step__title { font-family: var(--serif); font-weight: 400; font-size: 23px; line-height: 1.3; color: var(--green); margin: 6px 0 6px; }
.step__body { margin: 0; color: var(--muted); font-size: 17px; }

/* Contact */
.contact__intro { color: var(--muted); font-size: 17px; margin: 0 0 26px; }
.contact__list { display: grid; gap: 20px; }
.card {
  display: block;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 22px 24px 24px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s, background-color 0.15s;
}
.card:hover { border-color: var(--green); background: #f6f8f4; }
.card:focus-visible { outline: 2px solid var(--green); outline-offset: 3px; }
.card__label { display: block; font-size: 14px; color: var(--muted); margin-bottom: 8px; }
.card__value { display: block; font-family: var(--serif); font-size: clamp(22px, 6.4vw, 28px); color: var(--green); overflow-wrap: anywhere; }

.card--primary {
  background: #2d6b40;
  border-color: #2d6b40;
}
.card--primary .card__label,
.card--primary .card__value { color: #fff; }
.card--primary:hover { opacity: 0.93; background: var(--green); }

/* Footer */
.foot { margin-top: 72px; padding-top: 24px; border-top: 1px dotted var(--dots); color: var(--muted); font-size: 14.5px; }
.foot p { margin: 0 0 14px; }

@media (min-width: 640px) {
  .penny__wrap { padding-top: 48px; }
  .hero { padding: 56px 48px 60px; }
}
@media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
}
`;
