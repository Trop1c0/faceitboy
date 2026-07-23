"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const games = [
  { name: "Deadlock", image: "/games/deadlock.png" },
  { name: "CS2", image: "/games/cs2.png" },
  { name: "Overwatch 2", image: "/games/overwatch.png" },
  { name: "Dota 2", image: "/games/dota.png" },
]

export function GamesSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + games.length) % games.length)
  const next = () => setActive((i) => (i + 1) % games.length)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1900px] px-4 py-20 sm:px-6 lg:px-16">
        <div className="text-center">
          <h2 className="text-balance font-display text-3xl font-bold text-foreground sm:text-4xl">
            Explore your favourite games on FACEIT
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            From CS2 and Overwatch 2 to other competitive titles, FACEIT brings players the best gaming experience across
            supported games.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center">
          <div className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-md">
            <Image
              src={games[active].image || "/placeholder.svg"}
              alt={`${games[active].name} cover art`}
              fill
              sizes="260px"
              className="object-cover"
              priority
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-display text-2xl font-bold uppercase tracking-wide text-foreground drop-shadow-lg">
              {games[active].name}
            </span>
          </div>

          <div className="mt-8 flex w-full max-w-4xl items-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous game"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex flex-1 gap-2">
              {games.map((game, i) => (
                <button
                  key={game.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${game.name}`}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-secondary"
                >
                  <span
                    className={`block h-full rounded-full transition-all ${i === active ? "w-full bg-primary" : "w-0 bg-primary"}`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next game"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
