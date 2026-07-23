import type { Metadata } from "next"
import { LoginForm } from "@/components/login-form"

export const metadata: Metadata = {
  title: "Sign in | FACEIT",
  description: "Sign in to your FACEIT account.",
}

export default function LoginPage() {
  return <LoginForm />
}
