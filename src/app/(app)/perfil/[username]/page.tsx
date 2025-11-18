import { Header } from "@/components/header"
import { mockUsers } from "@/mock/users"
import Image from "next/image"

export default function ProfilePage({ params }: { params: { username: string } }) {
  const user = mockUsers.find((u) => u.username === params.username)
  if (!user) return <div>Perfil não encontrado.</div>

  return (
    <main>
      <Header />
      <section className="container py-6">
        <div className="mb-8 flex items-center gap-4">
          <Image src={user.avatar} alt={user.name} width={80} height={80} className="rounded-full" />
          <div>
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-muted-foreground">@{user.username}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
