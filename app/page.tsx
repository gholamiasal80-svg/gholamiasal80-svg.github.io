import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero section — large immersive layout */}
        <section className="flex flex-col md:flex-row hero-section-mobile">
          {/* Left: Hero illustration — huge, natural size, scrollable */}
          <div
            className="w-full md:w-3/5 animate-slide-left hero-image-wrap"
            style={{ flexShrink: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-face.png"
              alt="Expressive ink drawing of a face with deep, searching eyes"
              className="w-full h-auto"
              loading="eager"
            />
          </div>

          {/* Right: Heading + copy — sticky on desktop, static on mobile */}
          <div
            className="w-full md:w-2/5 flex flex-col justify-center items-start animate-slide-right hero-text-panel"
            style={{ padding: "4vw", position: "sticky", top: "80px", alignSelf: "flex-start" }}
          >
              <p
                className="uppercase text-foreground/40 font-medium tracking-widest"
                style={{
                  fontSize: "var(--fs-xs)",
                  letterSpacing: "0.2em",
                  marginBottom: "var(--sp-4)",
                }}
              >
                Designer & Fine Artist
              </p>

              <h1
                className="font-serif italic font-bold text-foreground text-balance"
                style={{ fontSize: "var(--fs-display)", lineHeight: 1.05, letterSpacing: "-0.03em" }}
              >
                See Through
                <br />
                My World
                <br />
                with Me
              </h1>

              <div
                className="animate-fade-in delay-200"
                style={{
                  width: "64px",
                  height: "3px",
                  background: "var(--accent)",
                  borderRadius: "var(--radius-pill)",
                  marginTop: "var(--sp-5)",
                }}
                aria-hidden="true"
              />

              <p
                className="text-foreground/60 text-pretty"
                style={{
                  marginTop: "var(--sp-5)",
                  maxWidth: "420px",
                  fontSize: "var(--fs-body)",
                  lineHeight: 1.7,
                }}
              >
                Design and art are how I process the world. This portfolio is a
                collection of projects, experiments, and ideas that reflect how I
                think, feel, and create.
              </p>

              <div
                className="flex items-center animate-fade-in-up delay-300"
                style={{ marginTop: "var(--sp-6)", gap: "var(--sp-4)" }}
              >
                <Link href="/work" className="btn-primary">
                  View Work
                </Link>
                <Link href="/fine-art" className="btn-outline">
                  Fine Art
                </Link>
              </div>
            </div>
        </section>

        {/* Selected Work — directly below hero */}
        <section className="home-selected-work" style={{ paddingTop: "var(--sp-6)", paddingBottom: "var(--sp-12)" }}>
          <div className="page-container">
            {/* Section header */}
            <div
              className="flex items-center justify-between work-header-row"
              style={{ marginBottom: "var(--sp-6)" }}
            >
              <h2
                className="font-serif italic font-bold text-foreground"
                style={{ fontSize: "var(--fs-h2)" }}
              >
                Selected Work
              </h2>
              <Link
                href="/work"
                className="link-underline text-foreground/50 hover:text-foreground"
                style={{
                  fontSize: "var(--fs-sm)",
                  transition: "color var(--dur-base) var(--ease)",
                }}
              >
                View all
              </Link>
            </div>

            {/* Featured project card */}
            <Link
              href="/work/heinz"
              className="block group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="overflow-hidden"
                style={{
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-payK4rrmYsbduetatOMRWSLVl80yDq.jpg"
                    alt="Heinz ketchup campaign - map with ketchup bottles showing every stop leads to Heinz"
                    className="w-full h-full object-cover"
                    style={{
                      transition: "transform var(--dur-slow) var(--ease)",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
              <div
                className="flex items-center justify-between project-meta-row"
                style={{ marginTop: "var(--sp-4)" }}
              >
                <div>
                  <h3
                    className="font-medium text-foreground"
                    style={{ fontSize: "var(--fs-h3)" }}
                  >
                    Heinz Ketchup Campaign
                  </h3>
                  <p
                    className="text-foreground/40"
                    style={{ fontSize: "var(--fs-sm)", marginTop: "var(--sp-1)" }}
                  >
                    Brand Design / Advertising
                  </p>
                </div>
                <span
                  className="text-foreground/30"
                  style={{
                    fontSize: "var(--fs-sm)",
                    transition: "color var(--dur-base) var(--ease), transform var(--dur-base) var(--ease)",
                  }}
                >
                  {"View Project ->"}
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Values strip */}
        <section className="home-values-strip" style={{ padding: "var(--sp-16) 0" }}>
          <div className="page-container">
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{ gap: "var(--sp-10)" }}
            >
              {[
                {
                  number: "01",
                  title: "Curiosity",
                  description:
                    "Every project begins with exploration. I believe strong work comes from asking questions, not rushing to answers.",
                },
                {
                  number: "02",
                  title: "Expression",
                  description:
                    "Art and design are tools for communication \u2014 ways to connect, reflect, and convey what words cannot.",
                },
                {
                  number: "03",
                  title: "Honesty",
                  description:
                    "Raw, human elements and honest visuals that communicate emotion rather than polish alone.",
                },
              ].map((value) => (
                <div key={value.number}>
                  <span
                    className="font-serif italic text-accent"
                    style={{ fontSize: "var(--fs-h2)", fontWeight: 700 }}
                  >
                    {value.number}
                  </span>
                  <h3
                    className="font-medium text-foreground"
                    style={{
                      fontSize: "var(--fs-h3)",
                      marginTop: "var(--sp-3)",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-foreground/60"
                    style={{
                      marginTop: "var(--sp-3)",
                      lineHeight: 1.7,
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section
          className="home-cta-band"
          style={{
            padding: "var(--sp-16) 0",
            background: "var(--muted)",
          }}
        >
          <div className="page-container text-center">
            <h2
              className="font-serif italic font-bold text-foreground text-balance"
              style={{ fontSize: "var(--fs-h1)" }}
            >
              {"Let\u2019s create something together"}
            </h2>
            <p
              className="mx-auto text-foreground/60 text-pretty"
              style={{
                marginTop: "var(--sp-4)",
                maxWidth: "420px",
                lineHeight: 1.7,
              }}
            >
              Whether {"it\u2019s"} a design project, a collaboration, or just a
              conversation about art {"&"} creativity.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ marginTop: "var(--sp-8)", display: "inline-flex" }}
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
