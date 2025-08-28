import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { products } from '../data/products'
import { categories } from '../data/categories'
import ProductCard from '../shared/ProductCard'

export default function Home() {
  const featured = products.slice(0, 8)

  return (
    <div className="space-y-12">
      <section className="-mx-4">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="rounded-xl overflow-hidden"
       >
          {categories.slice(0, 4).map((cat) => (
            <SwiperSlide key={cat.id}>
              <div
                className="h-[320px] md:h-[420px] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${cat.banner})` }}
              >
                <div className="container mx-auto px-4 w-full">
                  <div className="bg-white/85 backdrop-blur-sm max-w-lg p-6 rounded-lg">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">{cat.name}</h2>
                    <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2">{cat.description}</p>
                    <Link to={`/category/${cat.slug}`} className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">
                      Shop now
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-semibold">Featured products</h3>
          <Link to="/category/featured" className="text-sky-600 hover:underline">See all</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="rounded-xl bg-gray-100 p-6 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Up to 30% off accessories</h3>
          <p className="text-gray-600 mb-6">Limited time deals on cases, chargers, and more.</p>
          <Link to="/category/accessories" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md">Shop accessories →</Link>
        </div>
      </section>
    </div>
  )
}

