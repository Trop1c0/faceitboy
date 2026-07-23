import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SeasonBanner } from "@/components/season-banner"
import { GamesSection } from "@/components/games-section"
import { NewsSection } from "@/components/news-section"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <SeasonBanner />
      <GamesSection />
      <NewsSection />
      <FaqSection />
      <SiteFooter />
    </main>
  )
}
