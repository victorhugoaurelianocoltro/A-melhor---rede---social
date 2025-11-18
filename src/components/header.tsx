"use client"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Sun, Moon, Camera } from "lucide-react"

export function Header({ searchEnabled = true }: { searchEnabled?: boolean }) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold">PINX</Link>
          {searchEnabled && (
            <div className="hidden items-center gap-2 rounded-full border px-3 py-1 md:flex">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input className="bg-transparent outline-none placeholder:text-muted-foreground text-sm" placeholder="Buscar ideias" />
            </div>
          )}
        </div>
        <nav className="flex items-center gap-2">
          <Link href="/feed" className="text-sm text-muted-foreground hover:text-foreground">Feed</Link>
          <Link href="/upload" className="text-sm text-muted-foreground hover:text-foreground">Upload</Link>
          <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">Admin</Link>
          <Button size="icon" variant="ghost" aria-label="Busca visual">
            <Camera className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Alternar tema">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </nav>
      </div>
    </header>
  )
}
