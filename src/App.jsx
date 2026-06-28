import {
  ArrowDown,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  CreditCard,
  Database,
  Download,
  GitBranch,
  LockKeyhole,
  Mail,
  ServerCog,
  Sparkles,
} from "lucide-react";

const checkoutUrl = import.meta.env.VITE_CHECKOUT_URL || "";

const stats = [
  { value: "56", label: "chapters" },
  { value: "11", label: "parts" },
  { value: "12", label: "appendices" },
];

const topics = [
  {
    icon: Code2,
    title: "Foundations and design",
    text: "Mindset, requirements, lifecycle thinking, refactoring, software design, patterns, and domain modeling.",
  },
  {
    icon: ServerCog,
    title: "Architecture and systems",
    text: "System boundaries, APIs, messaging, distributed failure modes, workflow orchestration, and reliability.",
  },
  {
    icon: Database,
    title: "Data and performance",
    text: "Persistence, relational modeling, migrations, caching, search, capacity planning, and practical bottleneck analysis.",
  },
  {
    icon: GitBranch,
    title: "Delivery and collaboration",
    text: "Testing strategy, code review, CI/CD, cloud platforms, production readiness, and observability.",
  },
  {
    icon: LockKeyhole,
    title: "Security and privacy",
    text: "Secure SDLC, threat modeling, secrets, compliance, accessibility, multi-tenant isolation, and operational controls.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted engineering",
    text: "Responsible AI adoption, RAG systems, evaluation workflows, prompt risks, and team-level quality controls.",
  },
];

const audience = [
  "Software engineers building production systems",
  "Technical leads aligning teams around quality",
  "Engineering managers standardizing delivery habits",
  "Teams modernizing legacy systems without rewrite risk",
];

const playbooks = [
  "Practical engineering checklists",
  "Secure SDLC and AI checklist",
  "Architecture decision record templates",
  "Production readiness review template",
  "API contract and compatibility examples",
  "Distributed systems and messaging examples",
  "Database migration and data reliability playbook",
  "Observability and incident runbook examples",
];

function App() {
  const primaryCta = checkoutUrl || "mailto:hello@example.com?subject=Modern%20Software%20Engineering%20ebook";
  const primaryLabel = checkoutUrl ? "Buy the ebook" : "Request access";
  const PrimaryIcon = checkoutUrl ? CreditCard : Mail;

  return (
    <>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Modern Software Engineering home">
          <span className="brand-mark">MSE</span>
          <span>Modern Software Engineering</span>
        </a>
        <nav className="nav-links" aria-label="Page sections">
          <a href="#inside">Inside</a>
          <a href="#audience">Audience</a>
          <a href="#pricing">Get it</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">First edition ebook</p>
            <h1 id="hero-title">Modern Software Engineering</h1>
            <p className="hero-lede">
              A practical field guide for building software with stronger design, clearer delivery habits,
              better production discipline, and modern AI-aware engineering judgment.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href={primaryCta}>
                <PrimaryIcon size={19} aria-hidden="true" />
                {primaryLabel}
              </a>
              <a className="button button-secondary" href="#inside">
                <ArrowDown size={19} aria-hidden="true" />
                View contents
              </a>
            </div>
            <dl className="stats" aria-label="Book highlights">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="cover-stage" aria-label="Modern Software Engineering ebook cover">
            <img
              src="/Modern_Software_Engineering_First_Edition_Cover.png"
              alt="Cover of the Modern Software Engineering ebook"
              width="1600"
              height="2560"
            />
          </div>
        </section>

        <section className="intro-band" aria-labelledby="intro-title">
          <div className="section-inner intro-grid">
            <div>
              <p className="eyebrow">What it helps with</p>
              <h2 id="intro-title">Turn engineering knowledge into repeatable practice.</h2>
            </div>
            <p>
              The ebook connects foundations, architecture, testing, operations, security, AI assistance,
              modernization, and engineering leadership into one practical reference for daily software work.
            </p>
          </div>
        </section>

        <section className="section" id="inside" aria-labelledby="inside-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Inside the book</p>
              <h2 id="inside-title">A full-stack view of modern engineering.</h2>
            </div>
            <div className="topic-grid">
              {topics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <article className="topic-card" key={topic.title}>
                    <Icon size={25} aria-hidden="true" />
                    <h3>{topic.title}</h3>
                    <p>{topic.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section audience-band" id="audience" aria-labelledby="audience-title">
          <div className="section-inner audience-layout">
            <div className="section-heading">
              <p className="eyebrow">Who it is for</p>
              <h2 id="audience-title">Built for engineers who own outcomes.</h2>
            </div>
            <div className="audience-list">
              {audience.map((item) => (
                <div className="audience-item" key={item}>
                  <CheckCircle2 size={22} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="playbooks-title">
          <div className="section-inner proof-layout">
            <div>
              <p className="eyebrow">Included practice material</p>
              <h2 id="playbooks-title">Templates, playbooks, and applied case studies.</h2>
            </div>
            <div className="playbook-list">
              {playbooks.map((item) => (
                <div className="playbook-item" key={item}>
                  <ClipboardCheck size={21} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing-band" id="pricing" aria-labelledby="pricing-title">
          <div className="section-inner pricing-layout">
            <div>
              <p className="eyebrow">Checkout ready</p>
              <h2 id="pricing-title">A React landing page prepared for payments.</h2>
              <p>
                Set <code>VITE_CHECKOUT_URL</code> in Vercel when the payment provider is ready. The primary
                call to action will automatically route buyers to that payment page.
              </p>
            </div>
            <div className="purchase-panel">
              <div className="purchase-heading">
                <BookOpen size={28} aria-hidden="true" />
                <div>
                  <h3>Modern Software Engineering</h3>
                  <p>First edition ebook</p>
                </div>
              </div>
              <a className="button button-primary purchase-button" href={primaryCta}>
                {checkoutUrl ? <CreditCard size={19} aria-hidden="true" /> : <Download size={19} aria-hidden="true" />}
                {primaryLabel}
              </a>
              <p className="purchase-note">
                {checkoutUrl
                  ? "Secure checkout opens through the configured payment provider."
                  : "Temporary inquiry link until the payment provider is connected."}
              </p>
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
