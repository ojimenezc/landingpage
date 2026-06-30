import React from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  CreditCard,
  GitBranch,
  Receipt,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const amazonUrl = "https://www.amazon.com/dp/B0H6T77MPR";
const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL || amazonUrl;
const freeSampleUrl =
  "https://mrniueczenuttuvbegzv.supabase.co/storage/v1/object/sign/books/Modern_Software_Engineering_First_Edition_Free_Sample.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NzFkMjY5Ny1jMmRlLTRkMjEtODUyYi0zYzExZDI1MGMyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib29rcy9Nb2Rlcm5fU29mdHdhcmVfRW5naW5lZXJpbmdfRmlyc3RfRWRpdGlvbl9GcmVlX1NhbXBsZS5wZGYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyNzU0NDYxLCJleHAiOjQ5MzYzNTQ0NjF9.3WXbysWRLomaMRR6PIt7fYYHpk2rKNVoTmrSE8we8UE";

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

const pricingFeatures = [
  "Complete first edition ebook",
  "56 chapters across 11 practical parts",
  "Templates, checklists, reviews, and runbooks",
  "Free sample available before purchase",
];

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="/" aria-label="Modern Software Engineering home">
        <span className="brand-mark">MSE</span>
        <span>Modern Software Engineering</span>
      </a>
      <nav className="nav-links" aria-label="Site navigation">
        <a href="/pricing">Pricing</a>
        <a className="nav-cta" href={checkoutUrl} target="_blank" rel="noreferrer">
          Buy on Amazon
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>Modern Software Engineering</span>
      <span>First edition ebook, 2026</span>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Header />

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
              <a className="button button-secondary" href={freeSampleUrl} target="_blank" rel="noreferrer">
                <BookOpen size={20} aria-hidden="true" />
                Download free sample
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
              <a className="button button-secondary final-cta" href={freeSampleUrl} target="_blank" rel="noreferrer">
                Download free sample
                <BookOpen size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <Header />

      <main id="top">
        <section className="pricing-hero" aria-labelledby="pricing-title">
          <div className="pricing-copy">
            <p className="eyebrow">Simple pricing</p>
            <h1 id="pricing-title">Get the ebook for $9.99.</h1>
            <p className="hero-lede">
              One practical software engineering guide for architecture, delivery, testing,
              operations, security, and AI-assisted engineering.
            </p>
            <div className="hero-actions" aria-label="Pricing actions">
              <a className="button button-primary" href={checkoutUrl} target="_blank" rel="noreferrer">
                <CreditCard size={20} aria-hidden="true" />
                Buy on Amazon
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={freeSampleUrl} target="_blank" rel="noreferrer">
                <BookOpen size={20} aria-hidden="true" />
                Download free sample
              </a>
            </div>
          </div>

          <article className="price-card" aria-label="Ebook pricing card">
            <div className="price-card-header">
              <Receipt size={24} aria-hidden="true" />
              <span>First edition ebook</span>
            </div>
            <div className="price-value">
              <span className="currency">$</span>
              <span>9.99</span>
            </div>
            <p className="price-note">One-time ebook purchase through Amazon.</p>
            <div className="price-features">
              {pricingFeatures.map((feature) => (
                <div className="highlight-item" key={feature}>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}

function App() {
  const isPricingPage = window.location.pathname === "/pricing";

  return isPricingPage ? <PricingPage /> : <HomePage />;
}

export default App;
