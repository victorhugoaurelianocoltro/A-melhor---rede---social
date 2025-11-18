"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Modal({ open, onOpenChange, children, className }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode; className?: string }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content className={cn("fixed inset-4 z-50 mx-auto max-w-3xl rounded-xl bg-background p-4 shadow-xl", className)}>
          {children}
          <Dialog.Close className="absolute right-2 top-2 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white hover:bg-black/80">
            <X className="h-5 w-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
