import { Link } from 'react-router-dom'
import type { Product } from '../types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="group border rounded-xl overflow-hidden hover:shadow-sm transition">
      <div className="aspect-square bg-gray-50 grid place-items-center">
        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain p-6 group-hover:scale-[1.02] transition" />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
        <div className="font-medium line-clamp-2 min-h-[3rem]">{product.name}</div>
        <div className="mt-2 flex items-baseline gap-2">
          <div className="text-lg font-semibold">${product.price.toFixed(2)}</div>
          {product.compareAt && (
            <div className="text-sm text-gray-400 line-through">${product.compareAt.toFixed(2)}</div>
          )}
        </div>
      </div>
    </Link>
  )
}

