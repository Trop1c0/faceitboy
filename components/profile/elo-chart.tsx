"use client"

// Deterministic elo progression for the last 30 matches.
const ELO = [
  1780, 1760, 1745, 1770, 1800, 1785, 1820, 1855, 1840, 1875, 1900, 1885, 1860, 1890, 1920, 1905, 1940, 1970, 1955, 1990,
  2010, 1995, 2030, 2015, 1992, 1967, 1940, 1955, 1948, 1940,
]

// win (true) / loss (false) dashes under the chart
const RESULTS = [
  false, false, true, true, true, false, true, true, false, true, true, false, false, true, true, false, true, true,
  false, true, true, false, true, false, false, false, false, true, false, false,
]

export function EloChart() {
  const width = 760
  const height = 220
  const padX = 8
  const padY = 16
  const min = 1530
  const max = 2050

  const points = ELO.map((v, i) => {
    const x = padX + (i / (ELO.length - 1)) * (width - padX * 2)
    const y = padY + (1 - (v - min) / (max - min)) * (height - padY * 2)
    return [x, y] as const
  })

  const linePath = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
  const areaPath = `${linePath} L${points[points.length - 1][0].toFixed(1)},${height} L${points[0][0].toFixed(1)},${height} Z`

  return (
    <div className="flex gap-4">
      {/* Y axis labels */}
      <div className="flex w-8 flex-col justify-between py-2 text-[11px] font-semibold text-muted-foreground">
        <span>2000</span>
        <span>1750</span>
        <span>1530</span>
      </div>

      <div className="min-w-0 flex-1">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-[220px] w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="eloFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--faceit-orange)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--faceit-orange)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#eloFill)" />
          <path d={linePath} fill="none" stroke="var(--faceit-orange)" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>

        {/* Win/Loss dashes */}
        <div className="mt-2 flex gap-1">
          {RESULTS.map((win, i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full ${win ? "bg-green-500" : "bg-red-500"}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
