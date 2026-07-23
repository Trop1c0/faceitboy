"use client"

import { useRouter } from "next/navigation"
import { UserPlus } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export function AddFriendButton() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const handleAddFriend = () => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      router.push("/login")
      return
    }
    
    // Redirect to verification if authenticated
    router.push("/verification")
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleAddFriend}
        className="flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-xs font-bold tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <UserPlus className="h-4 w-4" />
        ADD FRIEND
      </button>
    </div>
  )
}
