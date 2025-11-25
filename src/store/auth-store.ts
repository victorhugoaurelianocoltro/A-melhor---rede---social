import { create } from "zustand"
import { persist } from "zustand/middleware"

type StoredUser = {
  id: string
  name: string
  username: string
  email: string
  avatar: string
  password: string
}

type PublicUser = Omit<StoredUser, "password">

type AuthState = {
  currentUser: PublicUser | null
  users: StoredUser[]
  signup: (payload: { name: string; username: string; email: string; password: string }) => { success: boolean; message?: string }
  login: (payload: { email: string; password: string }) => { success: boolean; message?: string }
  logout: () => void
  requestPasswordReset: (email: string) => { success: boolean; message: string }
}

function createAvatar(username: string) {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(username)}`
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      currentUser: null,
      users: [],
      signup: ({ name, username, email, password }) => {
        const { users } = get()
        const exists = users.find((u) => u.email === email || u.username === username)
        if (exists) {
          return { success: false, message: "E-mail ou usuário já cadastrado." }
        }
        const id = String(users.length + 1)
        const user: StoredUser = {
          id,
          name,
          username,
          email,
          password,
          avatar: createAvatar(username),
        }
        const nextUsers = [...users, user]
        set({
          users: nextUsers,
          currentUser: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
          },
        })
        return { success: true }
      },
      login: ({ email, password }) => {
        const { users } = get()
        const user = users.find((u) => u.email === email && u.password === password)
        if (!user) {
          return { success: false, message: "Credenciais inválidas." }
        }
        set({
          currentUser: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
          },
        })
        return { success: true }
      },
      logout: () => {
        set({ currentUser: null })
      },
      requestPasswordReset: (email: string) => {
        const { users } = get()
        const exists = users.some((u) => u.email === email)
        if (!exists) {
          return {
            success: true,
            message: "Se existir uma conta com este e-mail, você receberá um link de recuperação.",
          }
        }
        return {
          success: true,
          message: "Se existir uma conta com este e-mail, você receberá um link de recuperação.",
        }
      },
    }),
    {
      name: "pinx-auth",
      partialize: (state) => ({ currentUser: state.currentUser, users: state.users }),
    }
  )
)
