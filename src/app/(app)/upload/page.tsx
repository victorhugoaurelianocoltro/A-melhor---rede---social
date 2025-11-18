"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function UploadPage() {
  const [title, setTitle] = useState("")

  return (
    <main>
      <Header />
      <section className="container py-6">
        <h1 className="mb-4 text-2xl font-semibold">Upload</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-4">
            <div className="mb-2 text-sm text-muted-foreground">Selecione uma imagem</div>
            <Input type="file" accept="image/*" />
          </div>
          <div className="rounded-xl border p-4">
            <label className="mb-2 block text-sm">Título</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nome do pin" />
            <Button className="mt-4">Publicar</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
