"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ALL_TAGS = ["design", "interiores", "branding", "ux"]

export function FeedFilters({
  onChange,
}: {
  onChange: (filters: { tags: string[]; sort: "recent" | "popular" }) => void
}) {
  const [selected, setSelected] = useState<string[]>([])
  const [sort, setSort] = useState<"recent" | "popular">("recent")

  const toggle = (t: string) => {
    const next = selected.includes(t) ? selected.filter((x) => x !== t) : [...selected, t]
    setSelected(next)
    onChange({ tags: next, sort })
  }

  const changeSort = (s: "recent" | "popular") => {
    setSort(s)
    onChange({ tags: selected, sort: s })
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {ALL_TAGS.map((t) => (
        <Button
          key={t}
          variant="outline"
          size="sm"
          className={cn(selected.includes(t) && "bg-accent")}
          onClick={() => toggle(t)}
        >
          #{t}
        </Button>
      ))}
      <div className="ml-auto flex items-center gap-2">
        <Button variant={sort === "recent" ? "default" : "outline"} size="sm" onClick={() => changeSort("recent")}>
          Recentes
        </Button>
        <Button variant={sort === "popular" ? "default" : "outline"} size="sm" onClick={() => changeSort("popular")}>
          Populares
        </Button>
      </div>
    </div>
  )
}
