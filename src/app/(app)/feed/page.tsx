"use client"
import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { FeedMasonry } from "@/components/feed-masonry"
import { FeedFilters } from "@/components/feed-filters"
import { useInfinitePins } from "@/hooks/use-infinite-pins"

export default function FeedPage() {
  const [filters, setFilters] = useState<{ tags: string[]; sort: "recent" | "popular" }>({ tags: [], sort: "recent" })
  const { items, hasMore, loadMore } = useInfinitePins({ tags: filters.tags, sort: filters.sort })
  const sentinel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) loadMore()
      })
    })
    io.observe(el)
    return () => io.disconnect()
  }, [loadMore])

  return (
    <main>
      <Header searchEnabled />
      <section className="container py-6 space-y-4">
        <FeedFilters onChange={setFilters} />
        <FeedMasonry items={items} />
        <div ref={sentinel} />
        {!hasMore && <div className="py-6 text-center text-sm text-muted-foreground">Fim do feed</div>}
      </section>
    </main>
  )
}
