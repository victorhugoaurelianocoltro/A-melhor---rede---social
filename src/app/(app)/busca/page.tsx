"use client"
import { Header } from "@/components/header"
import { FeedMasonry } from "@/components/feed-masonry"
import { Input } from "@/components/ui/input"
import { mockPins } from "@/mock/pins"
import { useMemo, useState } from "react"

export default function SearchPage() {
  const [q, setQ] = useState("")
  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return []
    return mockPins.filter((p) =>
      [p.title, p.author, p.tags.join(" ")].join(" ").toLowerCase().includes(query)
    )
  }, [q])

  return (
    <main>
      <Header searchEnabled={false} />
      <section className="container py-6 space-y-4">
        <div className="flex gap-3">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Busque por ideias, estilos, tags..." />
        </div>
        <FeedMasonry items={results} />
      </section>
    </main>
  )
}
