// Cart store persists item choices locally so the shopping flow feels continuous.
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id)

          if (existingItem) {
            // Quantity is capped here to keep the demo UI predictable.
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: Math.min(item.quantity + quantity, 5) }
                  : item,
              ),
            }
          }

          return {
            items: [
              ...state.items,
              {
                id: product.id,
                title: product.title,
                subtitle: product.subtitle,
                image: product.image,
                price: product.price,
                quantity,
              },
            ],
          }
        }),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item,
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      // Persist cart data between refreshes during local development and demos.
      name: 'atlas-cart',
    },
  ),
)
