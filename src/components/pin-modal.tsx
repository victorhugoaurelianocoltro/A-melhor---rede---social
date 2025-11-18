"use client"
import Image from "next/image"
import { useMemo, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import type { Pin } from "@/components/feed-masonry"
import { mockPins } from "@/mock/pins"
import { Button } from "@/components/ui/button"

export function PinModal({ open, onOpenChange, pin }: { open: boolean; onOpenChange: (v: boolean) => void; pin: Pin }) {
  const [comment, setComment] = useState("")

  const similar = useMemo(() => {
    const setTags = new Set(pin.tags)
    return mockPins
      .filter((p) => p.id !== pin.id)
      .map((p) => ({ p, score: p.tags.reduce((acc, t) => acc + (setTags.has(t) ? 1 : 0), 0) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((x) => x.p)
  }, [pin])

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content className="fixed inset-4 z-50 mx-auto grid max-w-6xl grid-cols-1 gap-4 rounded-xl bg-background p-4 shadow-xl md:grid-cols-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg md:col-span-2">
            <Image src={pin.image} alt={pin.title} fill className="object-cover" />
            <Dialog.Close className="absolute right-2 top-2 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white hover:bg-black/80">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-lg font-semibold">{pin.title}</h2>
              <div className="text-xs text-muted-foreground">por {pin.author}</div>
              <div className="mt-2 text-xs text-muted-foreground">{pin.tags.map((t) => `#${t}`).join(" ")}</div>
            </div>
            <div className="flex gap-2">
              <Button>Salvar</Button>
              <Button variant="outline">Seguir</Button>
            </div>
            <div className="mt-2 space-y-2">
              <div className="text-sm font-medium">Comentários (mock)</div>
              <div className="rounded-md border p-2 text-sm text-muted-foreground">Excelente referência!</div>
              <div className="rounded-md border p-2 text-sm text-muted-foreground">A paleta está ótima.</div>
              <div className="flex gap-2">
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Escreva um comentário"
                  className="flex-1 rounded-md border bg-transparent px-3 py-2 text-sm"
                />
                <Button onClick={() => setComment("")}>Publicar</Button>
              </div>
            </div>
            <div className="mt-2">
              <div className="mb-2 text-sm font-medium">Itens similares</div>
              <div className="grid grid-cols-4 gap-2">
                {similar.map((s) => (
                  <div key={s.id} className="relative aspect-[3/4] overflow-hidden rounded-md">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
