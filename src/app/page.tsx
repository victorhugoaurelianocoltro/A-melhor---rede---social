import Link from "next/link"
import { Header } from "@/components/header"
import { FeedMasonry } from "@/components/feed-masonry"
import { mockPins } from "@/mock/pins"

export default function HomePage() {
  return (
    <main>
      <Header />
      <section className="container py-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Destaques</h1>
          <Link href="/feed" className="text-sm text-primary">Ver tudo</Link>
        </div>
        <FeedMasonry items={mockPins.slice(0, 20)} />
      </section>
    </main>
  )
}
