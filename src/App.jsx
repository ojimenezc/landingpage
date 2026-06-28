import React from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  CreditCard,
  GitBranch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const amazonUrl = "https://www.amazon.com/dp/B0H6T77MPR";
const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL || amazonUrl;

const highlights = [
  "Architecture, APIs, data, testing, delivery, operations, security, and AI in one practical guide.",
  "Includes case studies, checklists, ADR templates, production readiness reviews, and runbooks.",
  "Written for engineers and technical leaders building production software.",
];

const topics = [
  { icon: Code2, label: "Clean code and design" },
  { icon: GitBranch, label: "Delivery and collaboration" },
  { icon: ShieldCheck, label: "Security and reliability" },
  { icon: Sparkles, label: "AI-assisted engineering" },
];

function App() {
  return (
    <>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Modern Software Engineering home">
          <span className="brand-mark">MSE</span>
          <span>Modern Software Engineering</span>
        </a>
        <a className="nav-cta" href={checkoutUrl} target="_blank" rel="noreferrer">
          Buy on Amazon
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">First edition ebook</p>
            <h1 id="hero-title">Modern Software Engineering</h1>
            <p className="hero-lede">
              A practical guide for engineers who want to design better systems, ship with confidence,
              and operate software with modern production discipline.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href={checkoutUrl} target="_blank" rel="noreferrer">
                <CreditCard size={20} aria-hidden="true" />
                Buy the ebook on Amazon
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#inside">
                <BookOpen size={20} aria-hidden="true" />
                See what's inside
              </a>
            </div>

            <div className="quick-stats" aria-label="Book highlights">
              <span>56 chapters</span>
              <span>11 parts</span>
              <span>12 appendices</span>
            </div>
          </div>

          <div className="cover-panel" aria-label="Modern Software Engineering ebook cover">
            <div className="code-card" aria-hidden="true">
              <span>deploy --safe</span>
              <span>test.status = green</span>
              <span>observe(latency)</span>
              <span>review architecture</span>
            </div>
            <img
              src="/Modern_Software_Engineering_First_Edition_Cover.png"
              alt="Cover of the Modern Software Engineering ebook"
              width="1600"
              height="2560"
            />
          </div>
        </section>

        <section className="inside-strip" id="inside" aria-labelledby="inside-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Inside the book</p>
              <h2 id="inside-title">A focused software engineering playbook.</h2>
            </div>
            <div className="topic-row">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <article className="topic-pill" key={topic.label}>
                    <Icon size={23} aria-hidden="true" />
                    <span>{topic.label}</span>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="section-inner proof-grid">
            <div>
              <p className="eyebrow">Why read it</p>
              <h2 id="proof-title">Less theory. More engineering judgment you can use.</h2>
            </div>
            <div className="highlight-list">
              {highlights.map((item) => (
                <div className="highlight-item" key={item}>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
              <a className="button button-primary final-cta" href={checkoutUrl} target="_blank" rel="noreferrer">
                Get it on Amazon
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Modern Software Engineering</span>
        <span>First edition ebook, 2026</span>
      </footer>
    </>
  );
}

export default App;
