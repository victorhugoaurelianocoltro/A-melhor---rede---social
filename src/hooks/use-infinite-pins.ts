"use client"
import { useEffect, useMemo, useRef, useState } from "react"
import { mockPins } from "@/mock/pins"
import type { Pin } from "@/components/feed-masonry"

export type SortOption = "recent" | "popular"

export function useInfinitePins(params: { pageSize?: number; tags?: string[]; sort?: SortOption }) {
  const { pageSize = 20, tags = [], sort = "recent" } = params
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<Pin[]>([])
  const [hasMore, setHasMore] = useState(true)
  const loadingRef = useRef(false)

  const filtered = useMemo(() => {
    let data = [...mockPins]
    if (tags.length) {
      data = data.filter((p) => tags.every((t) => p.tags.includes(t)))
    }
    if (sort === "popular") {
      // mock de popularidade: id par considerado mais popular
      data = data.sort((a, b) => (Number(b.id) % 2) - (Number(a.id) % 2))
    } else {
      // recent: ids maiores primeiro
      data = data.sort((a, b) => Number(b.id) - Number(a.id))
    }
    return data
  }, [tags, sort])

  useEffect(() => {
    // reset quando filtros mudam
    setPage(1)
    setItems(filtered.slice(0, pageSize))
    setHasMore(filtered.length > pageSize)
  }, [filtered, pageSize])

  const loadMore = () => {
    if (loadingRef.current || !hasMore) return
    loadingRef.current = true
    const nextPage = page + 1
    const nextItems = filtered.slice(0, nextPage * pageSize)
    setItems(nextItems)
    setPage(nextPage)
    setHasMore(nextItems.length < filtered.length)
    loadingRef.current = false
  }

  return { items, hasMore, loadMore }
}
