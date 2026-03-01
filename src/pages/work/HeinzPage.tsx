import { Link } from "react-router-dom"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HeinzPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Back link + title */}
        <section
          className="page-container"
          style={{ paddingTop: "var(--sp-10)", paddingBottom: "var(--sp-8)" }}
        >
          <Link
            to="/work"
            className="inline-flex items-center text-foreground/40 hover:text-foreground link-underline animate-fade-in"
            style={{
              fontSize: "var(--fs-sm)",
              transition: "color var(--dur-base) var(--ease)",
              marginBottom: "var(--sp-6)",
              gap: "var(--sp-2)",
            }}
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
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>

          <h1
            className="font-serif italic font-bold text-foreground animate-fade-in-up"
          >
            Heinz Ketchup Campaign
          </h1>
          <div
            className="flex items-center animate-fade-in delay-200"
            style={{
              gap: "var(--sp-4)",
              marginTop: "var(--sp-4)",
            }}
          >
            <span
              className="text-foreground/40"
              style={{ fontSize: "var(--fs-sm)" }}
            >
              Brand Design
            </span>
            <span
              className="text-foreground/20"
              style={{ fontSize: "var(--fs-sm)" }}
            >
              /
            </span>
            <span
              className="text-foreground/40"
              style={{ fontSize: "var(--fs-sm)" }}
            >
              Advertising
            </span>
          </div>
        </section>

        {/* Hero image */}
        <div className="w-full animate-scale-in delay-200">
          <div className="page-container">
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-payK4rrmYsbduetatOMRWSLVl80yDq.jpg"
                alt="Heinz ketchup campaign - map with ketchup bottles showing every stop leads to Heinz"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Project details */}
        <section className="page-container" style={{ padding: "var(--sp-12) 0 var(--sp-16)" }}>
          <div className="mx-auto" style={{ maxWidth: "720px" }}>
            {/* Overview */}
            <div
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                gap: "var(--sp-6)",
                paddingBottom: "var(--sp-8)",
                borderBottom: "1px solid var(--border)",
                marginBottom: "var(--sp-8)",
              }}
            >
              {[
                { label: "Client", value: "Heinz" },
                { label: "Role", value: "Concept & Design" },
                { label: "Type", value: "Campaign" },
              ].map((detail) => (
                <div key={detail.label}>
                  <p
                    className="uppercase text-foreground/40 font-medium"
                    style={{
                      fontSize: "var(--fs-xs)",
                      letterSpacing: "0.12em",
                      marginBottom: "var(--sp-2)",
                    }}
                  >
                    {detail.label}
                  </p>
                  <p className="text-foreground font-medium">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p
              className="text-foreground/70"
              style={{ lineHeight: 1.8, marginBottom: "var(--sp-6)" }}
            >
              This campaign for Heinz Ketchup uses a playful map concept to
              show how every journey, no matter the route, always leads back to
              Heinz. The visual storytelling combines geographic imagery with
              the iconic bottle to create an instantly recognizable connection
              between travel, food, and brand loyalty.
            </p>
            <p className="text-foreground/70" style={{ lineHeight: 1.8 }}>
              The design process explored multiple visual directions before
              settling on the map-based layout. The goal was to feel organic
              and hand-crafted while maintaining the clean, commercial appeal
              that Heinz is known for.
            </p>

            {/* Secondary image */}
            <div
              className="overflow-hidden"
              style={{
                marginTop: "var(--sp-10)",
                borderRadius: "var(--radius-md)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="/placeholder.svg?height=400&width=720"
                alt="Heinz billboard advertisement"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
