"use client"
import { KeyboardEvent, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuthStore } from "@/store/auth-store"
import { Search, Sun, Moon, Camera } from "lucide-react"

export function Header({ searchEnabled = true }: { searchEnabled?: boolean }) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const currentUser = useAuthStore((state) => state.currentUser)

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return
    const value = event.currentTarget.value.trim()
    if (!value) return
    router.push(`/busca?q=${encodeURIComponent(value)}`)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold">PINX</Link>
          {searchEnabled && (
            <div className="hidden items-center gap-2 rounded-full border px-3 py-1 md:flex">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                className="bg-transparent outline-none placeholder:text-muted-foreground text-sm"
                placeholder="Buscar ideias"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
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
          {currentUser ? (
            <Link href={`/perfil/${currentUser.username}`} className="ml-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">Entrar</Link>
              <Link href="/cadastro" className="text-sm text-primary">Criar conta</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
