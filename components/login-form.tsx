"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ChevronDown } from "lucide-react"
import { FaceitLogo } from "@/components/faceit-logo"
import { useAuth } from "@/lib/auth-context"

function SteamIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M11.98 0C5.66 0 .49 4.88 0 11.07l6.44 2.66a3.4 3.4 0 0 1 1.92-.6l2.86-4.15v-.06a4.53 4.53 0 1 1 4.53 4.53h-.1l-4.08 2.92v.11a3.41 3.41 0 0 1-6.76.61L.32 15.65A12 12 0 1 0 11.98 0zM7.54 18.21l-1.47-.61a2.56 2.56 0 0 0 1.33 1.26 2.57 2.57 0 0 0 3.34-1.38 2.55 2.55 0 0 0 0-1.96 2.56 2.56 0 0 0-1.38-1.39 2.56 2.56 0 0 0-1.94-.03l1.52.63a1.89 1.89 0 1 1-1.46 3.48zm11.49-9.66a3.02 3.02 0 0 0-3.02-3.02 3.02 3.02 0 1 0 0 6.04 3.02 3.02 0 0 0 3.02-3.02zm-5.28-.01a2.27 2.27 0 0 1 4.54 0 2.27 2.27 0 0 1-4.54 0z" />
    </svg>
  )
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    login()
    router.push("/")
  }

  function handleSteamLogin() {
    login()
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-12">
      <div className="flex w-full max-w-[540px] flex-1 flex-col">
        {/* Logo */}
        <div className="flex justify-center pt-6">
          <FaceitLogo className="h-7" />
        </div>

        {/* Card */}
        <div className="mt-10 rounded-md bg-card px-8 py-8 sm:px-10">
          <h1 className="text-center text-2xl font-bold text-card-foreground">Sign in</h1>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-card-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="h-11 rounded-sm border border-border bg-secondary/40 px-3 text-sm text-card-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-bold text-card-foreground">
                  Password
                </label>
                <a href="#" className="text-sm font-bold text-card-foreground transition-colors hover:text-primary">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="current-password"
                  className="h-11 w-full rounded-sm border border-border bg-secondary/40 px-3 pr-11 text-sm text-card-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-card-foreground"
                >
                  {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-1 h-11 rounded-sm bg-primary text-sm font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              LOGIN
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <span className="text-sm font-bold text-card-foreground">OR</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Steam */}
          <button
            type="button"
            onClick={handleSteamLogin}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-sm bg-foreground text-sm font-bold tracking-wide text-background transition-colors hover:bg-foreground/90"
          >
            <SteamIcon className="h-5 w-5" />
            LOGIN WITH STEAM
          </button>

          {/* Create account */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground">Don&apos;t have an account?</p>
            <a
              href="#"
              className="text-sm font-bold tracking-wide text-muted-foreground transition-colors hover:text-card-foreground"
            >
              CREATE ACCOUNT
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="relative">
            <select
              aria-label="Language"
              defaultValue="en"
              className="h-10 appearance-none rounded-sm border border-border bg-card px-4 pr-10 text-sm text-card-foreground outline-none"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground">
            <a href="#" className="transition-colors hover:text-card-foreground">
              Help
            </a>
            <a href="#" className="transition-colors hover:text-card-foreground">
              Policy
            </a>
            <a href="#" className="transition-colors hover:text-card-foreground">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-card-foreground">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
