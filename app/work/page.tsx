import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const projects = [
  {
    slug: "heinz",
    title: "Heinz Ketchup Campaign",
    category: "Brand Design / Advertising",
    image: "/work1.jpg",
    alt: "Artsy Gallery website design on a laptop",
  },
  {
    slug: "",
    title: "Project Two",
    category: "Visual Identity",
    image: "/work2.jpg",
    alt: "KMP music app redesign on a phone",
  },
  {
    slug: "",
    title: "Project Three",
    category: "Illustration / Digital",
    image: "/work3.jpg",
    alt: "Psych mental health app on a phone",
  },
]

export default function WorkPage() {
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
            Portfolio
          </p>
          <h1
            className="font-serif italic font-bold text-foreground animate-fade-in-up"
            style={{ maxWidth: "500px" }}
          >
            Selected Work
          </h1>
          <p
            className="text-foreground/60 text-pretty animate-fade-in-up delay-100"
            style={{
              marginTop: "var(--sp-4)",
              maxWidth: "460px",
              lineHeight: 1.7,
            }}
          >
            A selection of design projects and campaigns that reflect how I
            approach creative problem-solving.
          </p>
        </section>

        {/* Project cards */}
        <section
          className="page-container"
          style={{ paddingBottom: "var(--sp-16)" }}
        >
          <div
            className="flex flex-col"
            style={{ gap: "var(--sp-10)" }}
          >
            {projects.map((project, i) => {
              const inner = (
                <article>
                  <div
                    className="overflow-hidden img-hover"
                    style={{
                      borderRadius: "var(--radius-lg)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    }}
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: "16/9" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                        style={{
                          transition: "transform var(--dur-slow) var(--ease)",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between"
                    style={{ marginTop: "var(--sp-5)" }}
                  >
                    <div>
                      <h2
                        className="font-medium text-foreground"
                        style={{ fontSize: "var(--fs-h3)" }}
                      >
                        {project.title}
                      </h2>
                      <p
                        className="text-foreground/40"
                        style={{
                          fontSize: "var(--fs-sm)",
                          marginTop: "var(--sp-1)",
                        }}
                      >
                        {project.category}
                      </p>
                    </div>
                    {project.slug && (
                      <span
                        className="text-foreground/30"
                        style={{ fontSize: "var(--fs-sm)" }}
                      >
                        {"View ->"}
                      </span>
                    )}
                  </div>
                </article>
              )

              return project.slug ? (
                <Link
                  key={i}
                  href={`/work/${project.slug}`}
                  className="block"
                  style={{ textDecoration: "none" }}
                >
                  {inner}
                </Link>
              ) : (
                <div key={i}>{inner}</div>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
