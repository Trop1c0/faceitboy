import { Search } from "lucide-react"
import { FaceitLogo } from "@/components/faceit-logo"

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-[1900px] items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center">
          <FaceitLogo className="text-2xl" />
        </a>

        <nav className="flex items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="hidden items-center gap-2 text-xs font-semibold tracking-widest text-foreground/90 transition-colors hover:text-foreground sm:flex"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            SEARCH
          </a>
          <a
            href="#"
            className="hidden text-xs font-semibold tracking-widest text-foreground/90 transition-colors hover:text-foreground md:block"
          >
            DOWNLOAD CLIENT
          </a>
          <a
            href="#"
            className="rounded-sm bg-primary px-4 py-2.5 text-xs font-bold tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            CREATE ACCOUNT
          </a>
          <a
            href="/login"
            className="rounded-sm bg-secondary px-4 py-2.5 text-xs font-bold tracking-widest text-secondary-foreground transition-colors hover:bg-secondary/80"
          >
            LOGIN
          </a>
        </nav>
      </div>
    </header>
  )
}
