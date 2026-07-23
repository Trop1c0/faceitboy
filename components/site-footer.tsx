import { FaceitLogo } from "@/components/faceit-logo"

const columns = [
  ["About", "Support", "Press", "Terms"],
  ["Anti-Cheat", "Jobs", "Advertising", "Cookie Settings"],
  ["Client", "Developers", "Privacy Policy"],
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1900px] px-4 py-16 sm:px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-6">
            <FaceitLogo className="text-xl" />
            <h2 className="max-w-md text-balance font-display text-2xl font-bold text-foreground sm:text-3xl">
              Your leading competitive gaming platform
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
            {columns.map((col, i) => (
              <ul key={i} className="flex flex-col gap-3">
                {col.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-xs text-muted-foreground">
          {"© "}
          {new Date().getFullYear()} FACEIT. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
