import Image from "next/image"

const news = [
  {
    tag: "Announcement",
    title: "FACEIT Season 8 kicks off with new rewards",
    image: "/news/news-1.png",
  },
  {
    tag: "Update",
    title: "Anti-Cheat improvements roll out across all matches",
    image: "/news/news-2.png",
  },
  {
    tag: "Community",
    title: "Meet the players climbing the leaderboard this month",
    image: "/news/news-3.png",
  },
]

export function NewsSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1900px] px-4 py-20 sm:px-6 lg:px-16">
        <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">News</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group overflow-hidden rounded-lg bg-card transition-colors hover:bg-secondary"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{item.tag}</span>
                <h3 className="mt-2 text-pretty font-display text-lg font-semibold leading-snug text-foreground">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
