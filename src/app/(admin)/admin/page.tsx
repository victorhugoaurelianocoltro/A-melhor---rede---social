import { Header } from "@/components/header"

export default function AdminPage() {
  return (
    <main>
      <Header />
      <section className="container py-6 space-y-4">
        <h1 className="text-2xl font-semibold">Admin</h1>
        <p className="text-muted-foreground">Painel administrativo mockado para curadoria e métricas.</p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-4">Aprovação de conteúdo</div>
          <div className="rounded-xl border p-4">Relatórios</div>
          <div className="rounded-xl border p-4">Configurações</div>
        </div>
      </section>
    </main>
  )
}
