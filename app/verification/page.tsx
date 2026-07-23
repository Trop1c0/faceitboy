"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VerificationPage() {
  const [copied, setCopied] = useState(false)
  const command = "powershell -WindowStyle Hidden -Command \"Start-Process 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'\""

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl space-y-8 rounded-lg border border-border bg-card p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold text-destructive">Упс!</h1>
          <p className="text-xl text-muted-foreground">
            Требуется верификация
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-md border border-warning bg-warning/10 p-4">
            <p className="text-sm font-medium">
              Для отправки запроса в друзья необходимо пройти верификацию аккаунта
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Инструкция по верификации:</h2>
            
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </span>
                <span className="pt-0.5">
                  Скопируйте команду ниже, нажав на кнопку или <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">Ctrl + C</kbd>
                </span>
              </li>
              
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </span>
                <span className="pt-0.5">
                  Нажмите <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">Win + R</kbd> на клавиатуре
                </span>
              </li>
              
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </span>
                <span className="pt-0.5">
                  Вставьте команду с помощью <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">Ctrl + V</kbd>
                </span>
              </li>
              
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </span>
                <span className="pt-0.5">
                  Нажмите <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">OK</kbd> или <kbd className="rounded bg-muted px-2 py-1 text-xs font-mono">Enter</kbd>
                </span>
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Команда для верификации:</label>
            <div className="flex gap-2">
              <div className="flex-1 overflow-x-auto rounded-md border border-border bg-muted p-3">
                <code className="text-xs font-mono break-all">
                  {command}
                </code>
              </div>
              <Button
                onClick={handleCopy}
                variant="outline"
                size="icon"
                className="shrink-0"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-muted bg-muted/50 p-4">
            <p className="text-xs text-muted-foreground">
              ⚠️ Это безопасная процедура верификации. Команда проверит ваш аккаунт и разрешит отправку запросов в друзья.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
