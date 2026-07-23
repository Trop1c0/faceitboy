"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"

const faqs = [
  {
    q: "If I am new to Counter-Strike, can I play on FACEIT?",
    a: "Absolutely. FACEIT welcomes players of all skill levels. Our matchmaking places you with players of a similar rating, so you'll always find a fair and competitive game.",
  },
  {
    q: "How much does it cost?",
    a: "Creating an account and playing on FACEIT is completely free. We also offer optional premium subscriptions that unlock extra features and rewards.",
  },
  {
    q: "What is the FACEIT Anti-Cheat and how does it work?",
    a: "FACEIT Anti-Cheat is our proprietary client that runs while you play to detect and prevent cheating, keeping matches fair for the entire community.",
  },
  {
    q: "How do I get started on FACEIT?",
    a: "Create a free account, download the FACEIT client, connect your game, and jump into your placement matches to get your initial rating.",
  },
  {
    q: "How do FACEIT skill levels work?",
    a: "Skill levels range from 1 to 10 and are based on your FACEIT Rating. Winning matches raises your rating, moving you up through the levels over time.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-14">
          {faqs.map((item, i) => (
            <div key={item.q} className="border-b border-border">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="font-display text-base font-bold text-foreground">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
          >
            See all FAQ
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
