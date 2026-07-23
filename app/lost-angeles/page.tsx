import { SiteHeader } from "@/components/site-header"
import { ProfileSidebar } from "@/components/profile/profile-sidebar"
import { ProfileContent } from "@/components/profile/profile-content"

export const metadata = {
  title: "lost angeles - FACEIT Profile",
  description: "FACEIT player profile for lost angeles",
}

export default function LostAngelesProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-[1900px] px-4 pt-24 pb-16 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          <ProfileSidebar />
          <ProfileContent />
        </div>
      </div>
    </main>
  )
}
