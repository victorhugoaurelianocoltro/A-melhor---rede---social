export const mockUsers = Array.from({ length: 8 }).map((_, i) => {
  const username = `user${i + 1}`
  return {
    id: String(i + 1),
    username,
    name: `Usuário ${i + 1}`,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
  }
})
