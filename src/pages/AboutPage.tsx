import Header from "@/components/header"
import Footer from "@/components/footer"

const timelineItems = [
  {
    year: "2018",
    text: "Earned a bachelor\u2019s degree in Fine Art, focusing on drawing, painting, and visual expression.",
  },
  {
    year: "2019",
    text: "Worked at an advertising company as a graphic designer, gaining hands-on experience in real projects and teamwork.",
  },
  {
    year: "2022",
    text: "Alongside studies, worked part-time in a cafe, building strong communication and people skills.",
  },
  {
    year: "2024",
    text: "Began studying New Media Design and Web Development at BCIT to expand creative and technical skills.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page heading */}
        <section
          className="page-container"
          style={{ paddingTop: "var(--sp-12)", paddingBottom: "var(--sp-10)" }}
        >
          <p
            className="uppercase text-foreground/40 font-medium animate-fade-in"
            style={{
              fontSize: "var(--fs-xs)",
              letterSpacing: "0.2em",
              marginBottom: "var(--sp-4)",
            }}
          >
            About
          </p>
          <h1
            className="font-serif italic font-bold text-foreground animate-fade-in-up"
            style={{ maxWidth: "600px" }}
          >
            The story behind the work
          </h1>
          <div
            className="animate-fade-in delay-200"
            style={{
              width: "48px",
              height: "3px",
              background: "var(--accent)",
              borderRadius: "var(--radius-pill)",
              marginTop: "var(--sp-6)",
            }}
            aria-hidden="true"
          />
        </section>

        {/* Profile section */}
        <section className="page-container" style={{ paddingBottom: "var(--sp-16)" }}>
          <div
            className="flex flex-col md:flex-row items-start"
            style={{ gap: "var(--sp-10)" }}
          >
            {/* Photo */}
            <div className="flex-shrink-0 w-full md:w-[400px] animate-slide-left delay-200">
              <div
                className="overflow-hidden"
                style={{
                  aspectRatio: "3/4",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-lTaHOLS6lDTtRBcHTtwtGweoqSZekJ.jpg"
                  alt="Sal - mirror selfie with curly hair and headphones"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Bio text */}
            <div
              className="flex-1 animate-slide-right delay-300"
              style={{ paddingTop: "var(--sp-5)" }}
            >
              <p
                className="text-foreground/70"
                style={{ lineHeight: 1.8, fontSize: "var(--fs-body)" }}
              >
                {"I\u2019m Sal, a designer and artist who works between digital design and fine art. I use visual storytelling as a way to observe, question, and communicate ideas that are often difficult to put into words."}
              </p>
              <p
                className="text-foreground/70"
                style={{
                  lineHeight: 1.8,
                  fontSize: "var(--fs-body)",
                  marginTop: "var(--sp-5)",
                }}
              >
                {"My work is shaped by curiosity, emotion, and a strong interest in how people connect with images and spaces. I believe strong work comes from exploration rather than perfection."}
              </p>

              {/* Quick stats */}
              <div
                className="grid grid-cols-3"
                style={{
                  gap: "var(--sp-6)",
                  marginTop: "var(--sp-10)",
                  paddingTop: "var(--sp-8)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {[
                  { stat: "BFA", label: "Fine Art Degree" },
                  { stat: "5+", label: "Years Creating" },
                  { stat: "BCIT", label: "New Media Design" },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="font-serif italic font-bold text-foreground"
                      style={{ fontSize: "var(--fs-h2)" }}
                    >
                      {item.stat}
                    </p>
                    <p
                      className="text-foreground/40"
                      style={{ fontSize: "var(--fs-xs)", marginTop: "var(--sp-1)" }}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section
          style={{ padding: "var(--sp-16) 0", background: "var(--muted)" }}
        >
          <div className="page-container">
            <p
              className="uppercase text-foreground/40 font-medium"
              style={{
                fontSize: "var(--fs-xs)",
                letterSpacing: "0.2em",
                marginBottom: "var(--sp-4)",
              }}
            >
              Philosophy
            </p>
            <h2
              className="font-serif italic font-bold text-foreground"
              style={{ marginBottom: "var(--sp-10)", maxWidth: "480px" }}
            >
              What drives my creative practice
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: "var(--sp-10)" }}
            >
              <div
                className="flex items-start"
                style={{ gap: "var(--sp-5)" }}
              >
                <div className="flex-shrink-0 about-philosophy-img-wrap w-full md:w-[320px]">
                  <img
                    src="/about-face.png"
                    alt="Expressive painting of a face"
                    className="w-full h-auto"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p
                  className="text-foreground/70"
                  style={{ lineHeight: 1.8 }}
                >
                  {"I value curiosity, honesty, and meaningful expression in everything I create. Sketches, experiments, and mistakes are just as important as final outcomes. I\u2019m drawn to raw, human elements and honest visuals that communicate emotion rather than polish alone."}
                </p>
                <p
                  className="text-foreground/70"
                  style={{ lineHeight: 1.8, marginTop: "var(--sp-5)" }}
                >
                  {"My approach balances structure with intuition, allowing design and fine art to inform each other. I see art and design as tools for communication \u2014 ways to connect, reflect, and grow."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey timeline */}
        <section style={{ padding: "var(--sp-16) 0" }}>
          <div className="page-container">
            <p
              className="uppercase text-foreground/40 font-medium"
              style={{
                fontSize: "var(--fs-xs)",
                letterSpacing: "0.2em",
                marginBottom: "var(--sp-4)",
              }}
            >
              Timeline
            </p>
            <h2
              className="font-serif italic font-bold text-foreground"
              style={{ marginBottom: "var(--sp-10)" }}
            >
              My Journey
            </h2>

            <div
              className="flex flex-col"
              style={{ maxWidth: "640px", gap: "0" }}
            >
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start"
                  style={{
                    gap: "var(--sp-6)",
                    padding: "var(--sp-6) 0",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="flex-shrink-0 font-serif italic font-bold text-accent"
                    style={{ fontSize: "var(--fs-h3)", minWidth: "64px" }}
                  >
                    {item.year}
                  </span>
                  <p
                    className="text-foreground/70"
                    style={{ lineHeight: 1.7 }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
