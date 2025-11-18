import { mockPins } from "@/mock/pins"

export const mockBoards = Array.from({ length: 6 }).map((_, i) => {
  const id = String(i + 1)
  return {
    id,
    title: `Board ${i + 1}`,
    description: "Coleção curada de referências.",
    pins: mockPins.slice(i * 8, i * 8 + 8),
  }
})
