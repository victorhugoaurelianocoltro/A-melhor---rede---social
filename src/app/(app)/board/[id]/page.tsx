import { Header } from "@/components/header"
import { mockBoards } from "@/mock/boards"
import Image from "next/image"

export default function BoardPage({ params }: { params: { id: string } }) {
  const board = mockBoards.find((b) => b.id === params.id)
  if (!board) return <div>Board não encontrado.</div>

  return (
    <main>
      <Header />
      <section className="container py-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{board.title}</h1>
            <p className="text-sm text-muted-foreground">{board.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {board.pins.map((pin) => (
            <div key={pin.id} className="overflow-hidden rounded-xl">
              <Image src={pin.image} alt={pin.title} width={600} height={800} className="h-auto w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
