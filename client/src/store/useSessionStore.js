// Session store keeps the demo auth state available across pages.
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSessionStore = create(
  persist(
    (set) => ({
      user: null,
      signIn: (user) => set({ user }),
      register: ({ name, email }) =>
        set({
          user: {
            name,
            email,
            role: 'user',
          },
        }),
      signOut: () => set({ user: null }),
    }),
    {
      name: 'atlas-session',
    },
  ),
)
