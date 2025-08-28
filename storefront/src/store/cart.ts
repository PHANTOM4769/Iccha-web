import { create } from 'zustand'
import { products } from '../data/products'

type CartItem = {
  productId: string
  quantity: number
}

type CartState = {
  items: Record<string, CartItem>
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  setQuantity: (productId: string, quantity: number) => void
  clear: () => void
}

export const useCartStore = create<CartState>((set) => ({
  items: {},
  addItem: (productId, quantity = 1) => set((state) => {
    const existing = state.items[productId]
    const nextQty = (existing?.quantity ?? 0) + quantity
    return { items: { ...state.items, [productId]: { productId, quantity: nextQty } } }
  }),
  removeItem: (productId) => set((state) => {
    const { [productId]: _removed, ...rest } = state.items
    return { items: rest }
  }),
  setQuantity: (productId, quantity) => set((state) => {
    if (quantity <= 0) {
      const { [productId]: _removed, ...rest } = state.items
      return { items: rest }
    }
    return { items: { ...state.items, [productId]: { productId, quantity } } }
  }),
  clear: () => set({ items: {} }),
}))

export function useCartCount(): number {
  return useCartStore((s) => Object.values(s.items).reduce((sum, i) => sum + i.quantity, 0))
}

export function useCartLines() {
  return useCartStore((s) => {
    return Object.values(s.items).map((item) => {
      const product = products.find((p) => p.id === item.productId)!
      return { ...item, product, lineTotal: product.price * item.quantity }
    })
  })
}

export function useCartSubtotal(): number {
  return useCartStore((s) => Object.values(s.items).reduce((sum, i) => {
    const product = products.find((p) => p.id === i.productId)!
    return sum + product.price * i.quantity
  }, 0))
}

