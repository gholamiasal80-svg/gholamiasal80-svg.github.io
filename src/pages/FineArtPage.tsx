import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"

const categories = ["Line Art", "Painting", "Mixed Media"] as const
type Category = (typeof categories)[number]

const artworks: Record<Category, { src: string; alt: string }[]> = {
  "Line Art": [
    {
      src: "/art1.png",
      alt: "Expressive painting of a screaming face with blue background",
    },
    {
      src: "/art2.png",
      alt: "Ink drawing of a sleeping figure with hands",
    },
    {
      src: "/art3.png",
      alt: "Ink drawing of a hunched figure",
    },
    {
      src: "/art4.png",
      alt: "Expressive face drawing",
    },
    {
      src: "/art5.png",
      alt: "Painting of a face with hand on forehead",
    },
  ],
  Painting: [
    { src: "/placeholder.svg?height=500&width=400", alt: "Oil painting - portrait study" },
    { src: "/placeholder.svg?height=550&width=400", alt: "Oil painting - figure composition" },
    { src: "/placeholder.svg?height=500&width=400", alt: "Oil painting - landscape" },
  ],
  "Mixed Media": [
    { src: "/placeholder.svg?height=500&width=400", alt: "Mixed media collage - urban theme" },
    { src: "/placeholder.svg?height=550&width=400", alt: "Mixed media - layered textures" },
    { src: "/placeholder.svg?height=500&width=400", alt: "Mixed media - abstract faces" },
    { src: "/placeholder.svg?height=600&width=400", alt: "Mixed media - emotional expression" },
  ],
}

export default function FineArtPage() {
  const [activeTab, setActiveTab] = useState<Category>("Line Art")
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page heading */}
        <section
          className="page-container"
          style={{ paddingTop: "var(--sp-12)", paddingBottom: "var(--sp-6)" }}
        >
          <p
            className="uppercase text-foreground/40 font-medium animate-fade-in"
            style={{
              fontSize: "var(--fs-xs)",
              letterSpacing: "0.2em",
              marginBottom: "var(--sp-4)",
            }}
          >
            Gallery
          </p>
          <h1
            className="font-serif italic font-bold text-foreground animate-fade-in-up"
            style={{ maxWidth: "400px" }}
          >
            Fine Art
          </h1>
          <p
            className="text-foreground/60 text-pretty animate-fade-in-up delay-100"
            style={{
              marginTop: "var(--sp-4)",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            This space is dedicated to my personal drawings and paintings.
            Intuitive, emotional, and often created as a way to explore form,
            identity, and expression.
          </p>
        </section>

        {/* Filter tabs */}
        <div
          className="page-container animate-fade-in delay-200"
          style={{ marginBottom: "var(--sp-8)" }}
        >
          <div className="fine-art-tabs-scroll">
          <div
            className="inline-flex items-center rounded-full"
            style={{
              padding: "4px",
              background: "var(--muted)",
            }}
            role="tablist"
            aria-label="Art category filter"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                role="tab"
                aria-selected={activeTab === cat}
                aria-controls={`panel-${cat.toLowerCase().replace(/\s/g, "-")}`}
                className={cn(
                  "rounded-full cursor-pointer whitespace-nowrap font-medium",
                  activeTab === cat
                    ? "bg-foreground text-background shadow-sm"
                    : "text-foreground/50 hover:text-foreground"
                )}
                style={{
                  padding: "8px 24px",
                  fontSize: "var(--fs-sm)",
                  border: "none",
                  transition:
                    "background var(--dur-base) var(--ease), color var(--dur-base) var(--ease), box-shadow var(--dur-base) var(--ease)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          </div>
        </div>

        {/* Gallery grid */}
        <section
          className="page-container"
          style={{ paddingBottom: "var(--sp-16)" }}
          role="tabpanel"
          id={`panel-${activeTab.toLowerCase().replace(/\s/g, "-")}`}
          aria-label={`${activeTab} artworks`}
        >
          <div className="columns-1 sm:columns-2 lg:columns-3" style={{ gap: "var(--sp-5)" }}>
            {artworks[activeTab].map((art, i) => (
              <figure
                key={`${activeTab}-${i}`}
                className="break-inside-avoid"
                style={{ marginBottom: "var(--sp-5)" }}
              >
                <div
                  className="overflow-hidden img-hover"
                  onClick={() => setLightbox(art)}
                  style={{
                    borderRadius: "var(--radius-md)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    cursor: "zoom-in",
                  }}
                >
                  <img
                    src={art.src}
                    alt={art.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-auto"
                    style={{
                      transition: "transform var(--dur-slow) var(--ease)",
                    }}
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "32px",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}

      <Footer />
    </div>
  )
}
