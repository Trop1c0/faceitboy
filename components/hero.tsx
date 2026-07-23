import { Crosshair, Trophy } from "lucide-react"
import { FaceitLogo } from "@/components/faceit-logo"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Orange glow coming from the right, fading to black on the left */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-background"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 100% 40%, oklch(0.66 0.21 38 / 0.85) 0%, oklch(0.4 0.14 40 / 0.5) 30%, oklch(0.16 0.01 40 / 0.2) 55%, transparent 75%)",
        }}
      />
      {/* Bottom fade to background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className="mx-auto flex min-h-[92vh] max-w-3xl flex-col items-center px-4 pt-40 text-center sm:px-6">
        <FaceitLogo className="text-4xl sm:text-5xl" />

        <h1 className="mt-10 font-display text-4xl font-bold text-balance sm:text-5xl">
          Challenge your game!
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 text-pretty sm:text-lg">
          Level up your game, win real prizes, and be part of a community of over 34 million serious gamers.
        </p>

        <a
          href="#"
          className="mt-9 rounded-sm bg-primary px-8 py-4 text-sm font-bold tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
        >
          START PLAYING NOW!
        </a>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
          <StatPill
            icon={<Crosshair className="h-5 w-5 text-foreground" aria-hidden="true" />}
            label="Players Online"
            value="398 091"
          />
          <StatPill
            icon={<Trophy className="h-5 w-5 text-primary" aria-hidden="true" />}
            label="Rewards to Date"
            value="$10 Million+"
          />
        </div>
      </div>
    </section>
  )
}

function StatPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex min-w-[220px] flex-col items-center rounded-full border border-border bg-black/40 px-8 py-3 backdrop-blur-sm">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="mt-1 flex items-center gap-2 font-display text-xl font-bold text-foreground">
        {icon}
        {value}
      </span>
    </div>
  )
}
