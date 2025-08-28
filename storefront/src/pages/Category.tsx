import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { categories } from '../data/categories'
import ProductCard from '../shared/ProductCard'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find((c) => c.slug === slug)
  const list = products.filter((p) => p.category === slug)

  return (
    <div className="space-y-8">
      <div className="rounded-xl bg-gray-100 p-8">
        <h1 className="text-2xl md:text-3xl font-bold">{category?.name ?? 'Category'}</h1>
        <p className="text-gray-600 mt-2">{category?.description ?? 'Browse products'}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}

