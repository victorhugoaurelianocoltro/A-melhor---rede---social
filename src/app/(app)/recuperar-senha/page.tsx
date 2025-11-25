"use client"
import { FormEvent, useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuthStore } from "@/store/auth-store"

export default function RecoverPasswordPage() {
  const requestPasswordReset = useAuthStore((s) => s.requestPasswordReset)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = requestPasswordReset(email)
    setMessage(result.message)
  }

  return (
    <main>
      <Header />
      <section className="container max-w-md py-6 space-y-4">
        <h1 className="text-2xl font-semibold">Recuperar senha</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
          <Button type="submit" className="w-full">Enviar instruções</Button>
        </form>
        {message && <p className="text-sm text-muted-foreground">{message}</p>}
      </section>
    </main>
  )
}
