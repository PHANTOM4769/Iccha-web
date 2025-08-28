import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'
import { useCartCount } from '../store/cart'

export default function Header() {
  const [open, setOpen] = useState(false)
  const count = useCartCount()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="font-bold text-xl">Gadgets</Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <input className="w-full border rounded-md pl-10 pr-3 py-2" placeholder="Search products..." />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <NavLink to="/cart" className="relative inline-flex items-center gap-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="hidden md:inline">Cart</span>
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 min-w-5 px-1 grid place-items-center">{count}</span>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      <nav className="border-t">
        <div className="container mx-auto px-4">
          <ul className="hidden md:flex gap-6 h-12 items-center text-sm">
            <li><NavLink to="/category/apple" className="hover:text-sky-600">Apple</NavLink></li>
            <li><NavLink to="/category/phones" className="hover:text-sky-600">Phones</NavLink></li>
            <li><NavLink to="/category/tablets" className="hover:text-sky-600">Tablets</NavLink></li>
            <li><NavLink to="/category/accessories" className="hover:text-sky-600">Accessories</NavLink></li>
            <li><NavLink to="/category/wearables" className="hover:text-sky-600">Wearables</NavLink></li>
          </ul>

          {open && (
            <ul className="md:hidden grid gap-3 py-3 text-sm">
              <li><NavLink to="/category/apple">Apple</NavLink></li>
              <li><NavLink to="/category/phones">Phones</NavLink></li>
              <li><NavLink to="/category/tablets">Tablets</NavLink></li>
              <li><NavLink to="/category/accessories">Accessories</NavLink></li>
              <li><NavLink to="/category/wearables">Wearables</NavLink></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}

