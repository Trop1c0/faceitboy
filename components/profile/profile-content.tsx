import { BarChart3, ChevronRight, Film, Info, MoreHorizontal, TrendingDown } from "lucide-react"
import { EloChart } from "@/components/profile/elo-chart"
import { AddFriendButton } from "@/components/profile/add-friend-button"

const TOP_TABS = ["Games", "Friends", "Video", "Guestbook", "Inventory", "Clubs", "Teams"]
const SUB_TABS = ["Overview", "Match History", "Stats", "Leagues", "Tournaments"]

function LevelBadge({ level, size = 40 }: { level: number; size?: number }) {
  return (
    <span
      className="relative inline-flex items-center justify-center rounded-full border-2 border-primary text-primary"
      style={{ width: size, height: size }}
    >
      <span className="text-xs font-bold">{level}</span>
    </span>
  )
}

function StatCard({ children }: { children: React.ReactNode }) {
  return <div className="rounded-md border border-border bg-card px-4 py-3">{children}</div>
}

const MATCHES = [
  { date: "Tue Jul 21", time: "21:39", result: "L", score: "3 : 13", level: 9, elo: "1 940", delta: -27, rating: "0.68", ratingBad: true, kda: "6 / 13 / 2", kd: "0.46", adr: "38.9", map: "Anubis" },
  { date: "Tue Jul 21", time: "21:03", result: "L", score: "7 : 13", level: 9, elo: "1 967", delta: -25, rating: "0.88", ratingBad: true, kda: "12 / 14 / 2", kd: "0.86", adr: "64.2", map: "Dust 2" },
  { date: "Tue Jul 21", time: "20:06", result: "L", score: "15 : 19", level: 9, elo: "1 992", delta: -25, rating: "1.12", ratingBad: false, kda: "23 / 25 / 7", kd: "0.92", adr: "81.3", map: "Mirage" },
  { date: "Fri Jul 17", time: "22:23", result: "L", score: "11 : 13", level: 10, elo: "2 017", delta: -25, rating: "1.01", ratingBad: false, kda: "11 / 18 / 5", kd: "0.61", adr: "48.1", map: "Mirage" },
  { date: "Thu Jul 16", time: "19:58", result: "L", score: "6 : 13", level: 10, elo: "2 042", delta: -25, rating: "0.52", ratingBad: true, kda: "4 / 17 / 1", kd: "0.24", adr: "30.3", map: "Anubis" },
]

export function ProfileContent() {
  return (
    <section className="min-w-0 flex-1">
      {/* Top tabs */}
      <div className="flex items-center gap-6 border-b border-border pb-px text-sm font-bold tracking-wide">
        {TOP_TABS.map((t, i) => (
          <button
            key={t}
            className={`relative pb-3 transition-colors ${
              i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.toUpperCase()}
            {i === 0 && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-primary" />}
          </button>
        ))}
      </div>

      {/* Sub tabs */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {SUB_TABS.map((t, i) => (
            <button
              key={t}
              className={`rounded-sm px-3 py-1.5 text-sm font-semibold transition-colors ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <AddFriendButton />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
            CS
          </span>
          <button className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Season banner */}
      <div className="relative mt-5 overflow-hidden rounded-md border border-border bg-gradient-to-r from-card via-card to-primary/20 px-6 py-6">
        <p className="text-xs font-bold tracking-widest text-muted-foreground">SEASON 8</p>
        <div className="mt-2 flex flex-col items-center">
          <LevelBadge level={9} size={56} />
          <p className="mt-2 text-2xl font-bold">1 940</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm">
            <span className="font-bold">366</span> <span className="text-muted-foreground">matches</span>
            <span className="ml-4 font-bold">53.0%</span> <span className="text-muted-foreground">wins</span>
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true">🇷🇺</span> 74 006
            </span>
            <span className="flex items-center gap-1.5 text-primary">
              <LevelBadge level={9} size={20} /> 254 906
            </span>
          </div>
        </div>
      </div>

      {/* Recent results */}
      <div className="mt-5 rounded-md border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-base font-bold">
            <BarChart3 className="h-4 w-4 text-primary" />
            Recent Results
          </h2>
          <button className="text-xs font-bold tracking-wide text-muted-foreground hover:text-foreground">
            SEE MORE STATS
          </button>
        </div>

        <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          Last matches (30)
          <span className="flex items-center gap-1.5">
            <LevelBadge level={9} size={20} />
            <span className="font-bold text-foreground">1889</span> Avg skill level of Match
          </span>
          <Info className="h-3.5 w-3.5" />
        </p>

        {/* Highlight stat cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <StatCard>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <BarChart3 className="h-4 w-4" />
                </span>
                <span className="rounded-sm bg-secondary px-2 py-1 text-lg font-bold">1.08</span>
              </div>
            </div>
          </StatCard>
          <StatCard>
            <p className="text-lg font-bold text-red-400">-0.04%</p>
            <p className="text-xs text-muted-foreground">Avg Swing</p>
          </StatCard>
          <StatCard>
            <p className="text-lg font-bold text-red-400">14%</p>
            <p className="text-xs text-muted-foreground">Consistency</p>
          </StatCard>
        </div>

        {/* Chart + record */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_260px]">
          <div className="rounded-md border border-border bg-background/40 p-4">
            <EloChart />
          </div>
          <div className="rounded-md border border-border bg-background/40 p-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-sm bg-green-600/20 px-2 py-1 text-xs font-bold text-green-400">
                W 15
              </span>
              <span className="flex items-center gap-1 rounded-sm bg-red-600/20 px-2 py-1 text-xs font-bold text-red-400">
                L 15
              </span>
              <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <LevelBadge level={9} size={18} />
                <LevelBadge level={10} size={18} />
              </div>
              <div className="mt-2 h-1 rounded-full bg-secondary">
                <div className="h-1 w-[63%] rounded-full bg-primary" />
              </div>
              <div className="mt-1 flex items-center justify-between text-[11px] font-semibold">
                <span className="text-muted-foreground">1751</span>
                <span>1940</span>
                <span className="text-muted-foreground">2000</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Elo change</span>
              <span className="font-bold text-green-400">+127</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Longest win streak</span>
              <span className="font-bold">🔥 5</span>
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[
            ["50%", "Win rate"],
            ["15 / 16 / 4", "K/D/A"],
            ["0.94", "K/D"],
            ["0.66", "K/R"],
            ["49%", "HS%"],
            ["68.9", "ADR"],
          ].map(([v, l]) => (
            <StatCard key={l}>
              <p className="text-base font-bold">{v}</p>
              <p className="text-xs text-muted-foreground">{l}</p>
            </StatCard>
          ))}
        </div>
      </div>

      {/* Recent matches table */}
      <div className="mt-5 rounded-md border border-border bg-card p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold">Recent matches</h2>
          <button className="text-xs font-bold tracking-wide text-muted-foreground hover:text-foreground">
            FULL MATCH HISTORY
          </button>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="text-left text-xs font-bold text-muted-foreground">
                <th className="pb-3 font-bold">Date</th>
                <th className="pb-3 font-bold">Score</th>
                <th className="pb-3 font-bold">Rating</th>
                <th className="pb-3 font-bold">K/D/A</th>
                <th className="pb-3 font-bold">K/D</th>
                <th className="pb-3 font-bold">ADR</th>
                <th className="pb-3 font-bold">Map</th>
              </tr>
            </thead>
            <tbody>
              {MATCHES.map((m, i) => (
                <tr key={i} className="border-l-2 border-red-500/70 border-t border-t-border/60">
                  <td className="py-3 pl-3">
                    <p className="font-semibold">{m.date}</p>
                    <p className="text-xs text-muted-foreground">{m.time}</p>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-3">
                      <span className="rounded-sm bg-red-600/80 px-1.5 py-0.5 text-xs font-bold text-white">
                        {m.result}
                      </span>
                      <span className="font-semibold">{m.score}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <LevelBadge level={m.level} size={18} />
                        {m.elo}
                        <span className="flex items-center text-red-400">
                          <TrendingDown className="h-3 w-3" />
                          {Math.abs(m.delta)}
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="py-3">
                    <span
                      className={`rounded-sm px-2 py-1 text-xs font-bold ${
                        m.ratingBad ? "bg-red-600/20 text-red-400" : "bg-secondary text-foreground"
                      }`}
                    >
                      {m.rating}
                    </span>
                  </td>
                  <td className="py-3 text-muted-foreground">{m.kda}</td>
                  <td className="py-3 text-muted-foreground">{m.kd}</td>
                  <td className="py-3 text-muted-foreground">{m.adr}</td>
                  <td className="py-3 font-medium">{m.map}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-5">
        <h2 className="flex items-center gap-2 text-base font-bold">
          <Film className="h-4 w-4 text-primary" />
          Highlights
          <span className="ml-auto text-xs font-bold tracking-wide text-muted-foreground hover:text-foreground">
            VIEW ALL VIDEOS
          </span>
        </h2>
        <div className="mt-6 flex flex-col items-center gap-2 py-10 text-center">
          <Film className="h-10 w-10 text-muted-foreground" />
          <p className="text-lg font-bold">No highlights available</p>
          <p className="text-sm text-muted-foreground">This player has no highlights</p>
        </div>
      </div>
    </section>
  )
}
