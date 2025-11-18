"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { PinModal } from "@/components/pin-modal"

export type Pin = {
  id: string
  title: string
  image: string
  author: string
  tags: string[]
}

export function FeedMasonry({ items }: { items: Pin[] }) {
  const [active, setActive] = useState<Pin | null>(null)
  return (
    <>
      <div className="columns-2 gap-4 md:columns-4">
        {items.map((item, i) => (
          <motion.button
            type="button"
            onClick={() => setActive(item)}
            layout
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.02 }}
            className="mb-4 w-full break-inside-avoid overflow-hidden rounded-xl border text-left focus:outline-none"
          >
            <Image src={item.image} alt={item.title} width={600} height={800} className="h-auto w-full object-cover" />
            <div className="p-3">
              <div className="text-sm font-medium">{item.title}</div>
              <div className="mt-1 line-clamp-1 text-xs text-muted-foreground">{item.tags.join(" • ")}</div>
            </div>
          </motion.button>
        ))}
      </div>
      {active && (
        <PinModal open={!!active} onOpenChange={(v) => !v && setActive(null)} pin={active} />
      )}
    </>
  )
}
