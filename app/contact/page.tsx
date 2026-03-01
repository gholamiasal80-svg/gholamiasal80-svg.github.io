"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

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
            Contact
          </p>
          <h1
            className="font-serif italic font-bold text-foreground animate-fade-in-up"
            style={{ maxWidth: "500px" }}
          >
            {"Let\u2019s talk"}
          </h1>
          <p
            className="text-foreground/60 text-pretty animate-fade-in-up delay-100"
            style={{
              marginTop: "var(--sp-4)",
              maxWidth: "460px",
              lineHeight: 1.7,
            }}
          >
            {"If you\u2019d like to work together, ask a question, or start a conversation, feel free to reach out."}
          </p>
        </section>

        {/* Contact layout */}
        <section
          className="page-container"
          style={{ paddingBottom: "var(--sp-16)" }}
        >
          <div
            className="flex flex-col md:flex-row"
            style={{ gap: "var(--sp-10)" }}
          >
            {/* Left: Image + contact info */}
            <div
              className="w-full md:w-5/12 flex flex-col animate-slide-left delay-200"
              style={{ gap: "var(--sp-8)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/contact-sleepy.png"
                alt="Artistic ink drawing of a resting figure with closed eyes"
                className="w-full h-auto"
                loading="eager"
              />

              <div className="flex flex-col" style={{ gap: "var(--sp-4)" }}>
                <div>
                  <p
                    className="uppercase text-foreground/40 font-medium"
                    style={{
                      fontSize: "var(--fs-xs)",
                      letterSpacing: "0.12em",
                      marginBottom: "var(--sp-2)",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:Gholamiasal80@gmail.com"
                    className="link-underline text-foreground hover:text-foreground/70"
                    style={{
                      fontSize: "var(--fs-body)",
                      transition: "color var(--dur-base) var(--ease)",
                    }}
                  >
                    Gholamiasal80@gmail.com
                  </a>
                </div>
                <div>
                  <p
                    className="uppercase text-foreground/40 font-medium"
                    style={{
                      fontSize: "var(--fs-xs)",
                      letterSpacing: "0.12em",
                      marginBottom: "var(--sp-2)",
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:6043457809"
                    className="link-underline text-foreground hover:text-foreground/70"
                    style={{
                      fontSize: "var(--fs-body)",
                      transition: "color var(--dur-base) var(--ease)",
                    }}
                  >
                    (604) 345-7809
                  </a>
                </div>
                <div>
                  <p
                    className="uppercase text-foreground/40 font-medium"
                    style={{
                      fontSize: "var(--fs-xs)",
                      letterSpacing: "0.12em",
                      marginBottom: "var(--sp-2)",
                    }}
                  >
                    Location
                  </p>
                  <p className="text-foreground" style={{ fontSize: "var(--fs-body)" }}>
                    Vancouver, BC
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-7/12 animate-slide-right delay-300">
              <div
                className="bg-card contact-form-card"
                style={{
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                  padding: "var(--sp-10)",
                  border: "1px solid var(--border)",
                }}
              >
                {submitted ? (
                  <div
                    className="text-center"
                    style={{ padding: "var(--sp-16) 0" }}
                  >
                    <div
                      className="mx-auto"
                      style={{
                        width: "48px",
                        height: "3px",
                        background: "var(--accent)",
                        borderRadius: "var(--radius-pill)",
                        marginBottom: "var(--sp-6)",
                      }}
                      aria-hidden="true"
                    />
                    <p
                      className="font-serif italic font-bold text-card-foreground"
                      style={{ fontSize: "var(--fs-h2)" }}
                    >
                      Message sent
                    </p>
                    <p
                      className="text-card-foreground/50"
                      style={{
                        marginTop: "var(--sp-3)",
                        fontSize: "var(--fs-body)",
                      }}
                    >
                      {"I\u2019ll get back to you soon."}
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col"
                    style={{ gap: "var(--sp-6)" }}
                  >
                    {/* Name + Email row */}
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2"
                      style={{ gap: "var(--sp-6)" }}
                    >
                      <div className="flex flex-col" style={{ gap: "6px" }}>
                        <label
                          htmlFor="fullname"
                          className="text-card-foreground/50 uppercase font-medium"
                          style={{
                            fontSize: "var(--fs-xs)",
                            letterSpacing: "0.08em",
                          }}
                        >
                          Full name
                        </label>
                        <input
                          id="fullname"
                          name="fullname"
                          type="text"
                          required
                          autoComplete="name"
                          className="text-card-foreground"
                          style={{
                            border: "none",
                            borderBottom: "var(--border-w) solid var(--input)",
                            background: "transparent",
                            padding: "var(--sp-3) 0",
                            fontSize: "var(--fs-body)",
                            transition:
                              "border-color var(--dur-base) var(--ease)",
                          }}
                        />
                      </div>
                      <div className="flex flex-col" style={{ gap: "6px" }}>
                        <label
                          htmlFor="email"
                          className="text-card-foreground/50 uppercase font-medium"
                          style={{
                            fontSize: "var(--fs-xs)",
                            letterSpacing: "0.08em",
                          }}
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="text-card-foreground"
                          style={{
                            border: "none",
                            borderBottom: "var(--border-w) solid var(--input)",
                            background: "transparent",
                            padding: "var(--sp-3) 0",
                            fontSize: "var(--fs-body)",
                            transition:
                              "border-color var(--dur-base) var(--ease)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col" style={{ gap: "6px" }}>
                      <label
                        htmlFor="phone"
                        className="text-card-foreground/50 uppercase font-medium"
                        style={{
                          fontSize: "var(--fs-xs)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="text-card-foreground"
                        style={{
                          border: "none",
                          borderBottom: "var(--border-w) solid var(--input)",
                          background: "transparent",
                          padding: "var(--sp-3) 0",
                          fontSize: "var(--fs-body)",
                          transition:
                            "border-color var(--dur-base) var(--ease)",
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col" style={{ gap: "6px" }}>
                      <label
                        htmlFor="message"
                        className="text-card-foreground/50 uppercase font-medium"
                        style={{
                          fontSize: "var(--fs-xs)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="text-card-foreground resize-none"
                        style={{
                          border: "none",
                          borderBottom: "var(--border-w) solid var(--input)",
                          background: "transparent",
                          padding: "var(--sp-3) 0",
                          fontSize: "var(--fs-body)",
                          transition:
                            "border-color var(--dur-base) var(--ease)",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <div
                      className="flex items-center justify-end"
                      style={{ paddingTop: "var(--sp-4)" }}
                    >
                      <button type="submit" className="btn-primary">
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
