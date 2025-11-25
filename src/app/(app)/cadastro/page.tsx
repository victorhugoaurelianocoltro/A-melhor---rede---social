"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuthStore } from "@/store/auth-store"

export default function SignupPage() {
  const signup = useAuthStore((s) => s.signup)
  const router = useRouter()
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    const result = signup({ name, username, email, password })
    if (!result.success) {
      setError(result.message ?? "Erro ao cadastrar.")
      return
    }
    router.push("/feed")
  }

  return (
    <main>
      <Header />
      <section className="container max-w-md py-6 space-y-4">
        <h1 className="text-2xl font-semibold">Criar conta</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nome de usuário" required />
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full">Cadastrar</Button>
        </form>
        <p className="text-sm text-muted-foreground">
          Já tem conta? <a href="/login" className="text-primary">Entrar</a>
        </p>
      </section>
    </main>
  )
}
