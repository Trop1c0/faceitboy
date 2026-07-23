import { BadgeCheck } from "lucide-react"

function ActivityHeatmap() {
  // 7 rows (Mon-Sun) x 15 weeks. Deterministic pseudo-random intensity.
  const rows = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const weeks = 15
  const cells: number[][] = rows.map((_, r) =>
    Array.from({ length: weeks }, (_, c) => {
      const seed = (r * 31 + c * 17 + 7) % 11
      // Only the first ~10 weeks have activity, tapering off.
      if (c > 10) return 0
      return seed % 4
    }),
  )

  const intensity = (v: number) => {
    switch (v) {
      case 3:
        return "bg-fuchsia-400"
      case 2:
        return "bg-fuchsia-500"
      case 1:
        return "bg-fuchsia-700"
      default:
        return "bg-white/5"
    }
  }

  return (
    <div className="mt-3">
      <div className="mb-1 grid grid-cols-[28px_1fr] items-center">
        <span />
        <div className="flex justify-around text-[10px] font-semibold text-muted-foreground">
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
        </div>
      </div>
      {cells.map((row, r) => (
        <div key={r} className="grid grid-cols-[28px_1fr] items-center gap-1">
          <span className="text-[10px] font-medium text-muted-foreground">{rows[r]}</span>
          <div className="flex gap-1">
            {row.map((v, c) => (
              <span key={c} className={`h-3 w-3 rounded-[2px] ${intensity(v)}`} aria-hidden="true" />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function ProfileSidebar() {
  return (
    <aside className="w-full lg:w-[340px] lg:shrink-0">
      {/* Avatar card */}
      <div className="overflow-hidden rounded-md border border-border bg-card">
        <img
          src="/avatars/lost-angeles.png"
          alt="lost angeles avatar"
          className="aspect-square w-full object-cover"
        />
      </div>

      {/* Name */}
      <div className="mt-4 flex items-center gap-2">
        <h1 className="text-2xl font-bold tracking-tight">lost angeles</h1>
        <BadgeCheck className="h-5 w-5 text-primary" aria-label="Verified" />
      </div>

      {/* Meta */}
      <p className="mt-4 text-sm font-semibold text-muted-foreground">Member since Nov 8, 2024</p>
      <p className="mt-3 text-sm text-muted-foreground">lost angeles: nothing is known</p>

      {/* Steam */}
      <div className="mt-4">
        <a
          href="#"
          aria-label="Steam profile"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-secondary/80"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M11.98 2C6.65 2 2.28 6.1 2 11.28l5.36 2.21a2.79 2.79 0 0 1 1.57-.48h.14l2.38-3.45v-.05a3.72 3.72 0 1 1 3.72 3.72h-.09l-3.4 2.42v.11a2.8 2.8 0 0 1-5.57.37L2 14.06A10 10 0 1 0 11.98 2Zm-3.5 15.18l-1.22-.5a2.1 2.1 0 0 0 3.87-.28 2.1 2.1 0 0 0-2.75-2.75l1.26.52a1.55 1.55 0 1 1-1.16 2.87Zm10.24-8.7a2.48 2.48 0 1 0-2.48 2.48 2.48 2.48 0 0 0 2.48-2.48Zm-4.34 0a1.86 1.86 0 1 1 1.86 1.86 1.86 1.86 0 0 1-1.86-1.86Z" />
          </svg>
        </a>
      </div>

      {/* Recent activity */}
      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-bold">Recent activity</h2>
          <span className="text-xs text-muted-foreground">Last 90 days</span>
        </div>
        <div className="mt-3 rounded-md border border-border bg-card p-3">
          <ActivityHeatmap />
        </div>
        <p className="mt-3 text-sm font-bold">
          160 <span className="font-medium text-muted-foreground">matches played</span>
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <span>1 match</span>
          <span className="h-3 w-3 rounded-[2px] bg-fuchsia-700" />
          <span className="h-3 w-3 rounded-[2px] bg-fuchsia-500" />
          <span className="h-3 w-3 rounded-[2px] bg-fuchsia-400" />
          <span>+5 matches</span>
        </div>
      </div>

      {/* Guestbook */}
      <div className="mt-8">
        <h2 className="text-sm font-bold">Guestbook (0)</h2>
        <div className="mt-4 flex flex-col items-center gap-2 py-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl text-muted-foreground">
            @
          </div>
          <p className="text-base font-bold">Guestbook is empty</p>
          <p className="text-sm text-muted-foreground">No posts yet</p>
        </div>
      </div>
    </aside>
  )
}
