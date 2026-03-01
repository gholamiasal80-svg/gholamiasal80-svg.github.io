"use client"

import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      className="bg-secondary text-secondary-foreground"
      style={{ padding: "var(--sp-12) 0 var(--sp-8)" }}
    >
      <div className="page-container">
        {/* Top section */}
        <div
          className="flex flex-col md:flex-row items-start justify-between"
          style={{ gap: "var(--sp-10)" }}
        >
          {/* Left: Logo + tagline */}
          <div>
            <Link
              href="/"
              className="font-serif italic text-secondary-foreground"
              style={{
                fontSize: "var(--fs-h1)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                textDecoration: "none",
              }}
              aria-label="SAL - Home"
            >
              SAL
            </Link>
            <p
              className="text-secondary-foreground/40"
              style={{
                marginTop: "var(--sp-3)",
                fontSize: "var(--fs-sm)",
                maxWidth: "280px",
                lineHeight: 1.6,
              }}
            >
              Designer and artist working between digital design and fine art.
            </p>
          </div>

          {/* Right: Nav columns */}
          <div className="flex" style={{ gap: "var(--sp-10)" }}>
            <div className="flex flex-col" style={{ gap: "var(--sp-3)" }}>
              <p
                className="text-secondary-foreground/30 uppercase font-medium"
                style={{
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "0.12em",
                  marginBottom: "var(--sp-1)",
                }}
              >
                Pages
              </p>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/work", label: "Work" },
                { href: "/fine-art", label: "Fine Art" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="link-underline text-secondary-foreground/60 hover:text-secondary-foreground"
                  style={{
                    fontSize: "var(--fs-sm)",
                    transition: "color var(--dur-base) var(--ease)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col" style={{ gap: "var(--sp-3)" }}>
              <p
                className="text-secondary-foreground/30 uppercase font-medium"
                style={{
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "0.12em",
                  marginBottom: "var(--sp-1)",
                }}
              >
                Social
              </p>
              {["Instagram", "LinkedIn", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="link-underline text-secondary-foreground/60 hover:text-secondary-foreground"
                  style={{
                    fontSize: "var(--fs-sm)",
                    transition: "color var(--dur-base) var(--ease)",
                  }}
                  aria-label={`Visit SAL on ${social}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(255,255,255,0.08)",
            margin: "var(--sp-10) 0 var(--sp-6)",
          }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div className="flex items-center justify-between footer-bottom-row">
          <div
            className="flex flex-col sm:flex-row sm:items-center footer-contact-info"
            style={{ gap: "var(--sp-2)", fontSize: "var(--fs-xs)" }}
          >
            <span className="text-secondary-foreground/30">
              {"Gholamiasal80@gmail.com"}
            </span>
            <span className="hidden sm:block text-secondary-foreground/20">
              {"  /  "}
            </span>
            <span className="text-secondary-foreground/30">
              {"(604) 345-7809"}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-scroll-top"
            aria-label="Scroll to top"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
