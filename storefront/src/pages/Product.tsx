import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCartStore } from '../store/cart'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const addItem = useCartStore((s) => s.addItem)

  if (!product) {
    return <div>Product not found.</div>
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="border rounded-xl p-6 grid place-items-center bg-gray-50">
        <img src={product.image} alt={product.name} className="max-h-[420px] object-contain" />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
        <div className="text-gray-500 mt-1">{product.brand}</div>
        <div className="mt-4 flex items-center gap-3">
          <div className="text-2xl font-semibold">${product.price.toFixed(2)}</div>
          {product.compareAt && (
            <div className="text-gray-400 line-through">${product.compareAt.toFixed(2)}</div>
          )}
        </div>
        <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>
        <div className="mt-8 flex gap-3">
          <button className="bg-black text-white px-5 py-3 rounded-md" onClick={() => addItem(product.id)}>Add to cart</button>
          <button className="border px-5 py-3 rounded-md">Buy now</button>
        </div>
      </div>
    </div>
  )
}

