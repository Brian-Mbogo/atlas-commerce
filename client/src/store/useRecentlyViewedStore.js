// Recently viewed products support future recommendations and quick return visits.
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useRecentlyViewedStore = create(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => {
          // New items are moved to the front and the list stays intentionally small.
          const nextProducts = [
            product,
            ...state.products.filter((item) => item.id !== product.id),
          ].slice(0, 4)

          return { products: nextProducts }
        }),
    }),
    {
      name: 'atlas-recent-products',
    },
  ),
)
