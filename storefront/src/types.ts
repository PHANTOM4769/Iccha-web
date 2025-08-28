export type Product = {
  id: string
  name: string
  brand: string
  image: string
  price: number
  compareAt?: number
  description: string
  category: string
}

export type Category = {
  id: string
  name: string
  slug: string
  banner: string
  description: string
}

