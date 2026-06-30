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

function trackBuyOnAmazonClick(placement) {
  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "buy_on_amazon_click", {
    event_category: "purchase_intent",
    event_label: placement,
    link_url: checkoutUrl,
    currency: "USD",
    value: 9.99,
  });
}

const policies = {
  "/terms-of-service": {
    eyebrow: "Legal",
    title: "Terms of Service",
    updated: "Last updated: June 30, 2026",
    sections: [
      {
        title: "Overview",
        body: "Modern Software Engineering provides a digital ebook for software engineers and technical leaders. By purchasing, downloading, or using the ebook, you agree to these terms.",
      },
      {
        title: "Digital Product",
        body: "The ebook is delivered as digital content. You may use it for personal or internal professional reference, but you may not resell, redistribute, share publicly, or claim ownership of the content.",
      },
      {
        title: "Payments",
        body: "Payments may be processed by Paddle or another authorized merchant of record. The checkout provider may collect billing details, tax information, and payment information needed to complete your purchase.",
      },
      {
        title: "Intellectual Property",
        body: "All ebook content, branding, design, and related materials remain the property of Modern Software Engineering or its rights holders. No rights are transferred except the limited right to access and read the purchased ebook.",
      },
      {
        title: "No Professional Warranty",
        body: "The ebook is provided for educational and informational purposes. It does not guarantee any technical, business, employment, security, legal, or financial outcome.",
      },
      {
        title: "Contact",
        body: "For support or questions about these terms, contact support@modernsoftwareengineering.com.",
      },
    ],
  },
  "/privacy-policy": {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: June 30, 2026",
    sections: [
      {
        title: "Information We Collect",
        body: "We may collect information you provide directly, such as your name, email address, support messages, and purchase-related details. Payment information is handled by the checkout provider and is not stored by this website.",
      },
      {
        title: "Payment Processing",
        body: "When Paddle is used for checkout, Paddle may process your billing information, payment method, tax details, and transaction records as merchant of record. Their privacy terms apply to that payment flow.",
      },
      {
        title: "How We Use Information",
        body: "We use information to deliver the ebook, respond to support requests, manage purchases, prevent fraud, comply with legal obligations, and improve the website and product experience.",
      },
      {
        title: "Sharing",
        body: "We do not sell personal information. We may share necessary information with service providers such as payment processors, hosting providers, analytics tools, and legal or compliance services.",
      },
      {
        title: "Data Rights",
        body: "Depending on your location, you may have rights to access, correct, delete, or restrict use of your personal information. Contact support@modernsoftwareengineering.com for privacy requests.",
      },
      {
        title: "Security",
        body: "We use reasonable safeguards to protect information, but no online system is completely secure. Keep your purchase emails and download links private.",
      },
    ],
  },
  "/refund-policy": {
    eyebrow: "Purchases",
    title: "Refund Policy",
    updated: "Last updated: June 30, 2026",
    sections: [
      {
        title: "Digital Ebook Sales",
        body: "Modern Software Engineering is sold as a digital ebook. Because digital content can be accessed immediately, purchases are generally final once the ebook has been delivered or downloaded.",
      },
      {
        title: "Eligible Refunds",
        body: "Refunds may be considered for duplicate purchases, accidental purchases reported promptly, technical delivery problems that cannot be resolved, or charges that appear fraudulent or unauthorized.",
      },
      {
        title: "How to Request a Refund",
        body: "Send your order email, purchase date, and reason for the request to support@modernsoftwareengineering.com. If Paddle processed your payment, the refund may be handled through Paddle's buyer support flow.",
      },
      {
        title: "Timing",
        body: "Approved refunds are returned to the original payment method. Processing times depend on the payment provider, card network, bank, and Paddle where applicable.",
      },
      {
        title: "Free Sample",
        body: "A free sample is available so you can review the style and scope of the ebook before purchasing.",
      },
    ],
  },
};

function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="/" aria-label="Modern Software Engineering home">
        <span className="brand-mark">MSE</span>
        <span>Modern Software Engineering</span>
      </a>
      <nav className="nav-links" aria-label="Site navigation">
        <a href="/pricing">Pricing</a>
        <a
          className="nav-cta"
          href={checkoutUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackBuyOnAmazonClick("header")}
        >
          Buy on Amazon
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span>Modern Software Engineering</span>
        <span>First edition ebook, 2026</span>
      </div>
      <nav className="footer-links" aria-label="Legal links">
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/refund-policy">Refund Policy</a>
      </nav>
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
              <a
                className="button button-primary"
                href={checkoutUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackBuyOnAmazonClick("home_hero")}
              >
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
              <a
                className="button button-primary final-cta"
                href={checkoutUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackBuyOnAmazonClick("home_final_cta")}
              >
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
              <a
                className="button button-primary"
                href={checkoutUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackBuyOnAmazonClick("pricing_hero")}
              >
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

function PolicyPage({ policy }) {
  return (
    <>
      <Header />

      <main id="top">
        <section className="policy-page" aria-labelledby="policy-title">
          <div className="policy-heading">
            <p className="eyebrow">{policy.eyebrow}</p>
            <h1 id="policy-title">{policy.title}</h1>
            <p>{policy.updated}</p>
          </div>

          <div className="policy-content">
            {policy.sections.map((section) => (
              <section className="policy-section" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function App() {
  const { pathname } = window.location;
  const policy = policies[pathname];

  if (policy) {
    return <PolicyPage policy={policy} />;
  }

  return pathname === "/pricing" ? <PricingPage /> : <HomePage />;
}

export default App;
