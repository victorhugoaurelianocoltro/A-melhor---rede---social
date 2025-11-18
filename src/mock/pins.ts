import type { Pin } from "@/components/feed-masonry"

export const mockPins: Pin[] = Array.from({ length: 60 }).map((_, i) => {
  const id = String(i + 1)
  const heights = [600, 700, 800, 900]
  const h = heights[i % heights.length]
  return {
    id,
    title: `Ideia ${i + 1}`,
    // Picsum Photos: imagens placeholder estáveis para evitar 404
    image: `https://picsum.photos/id/${(i % 100) + 1}/800/${h}`,
    author: `Autor ${i % 8}`,
    tags: ["design", "interiores", i % 2 ? "branding" : "ux"],
  }
})
