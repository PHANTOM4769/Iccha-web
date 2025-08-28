import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/Product'
import CategoryPage from './pages/Category'
import CartPage from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import NotFound from './pages/NotFound'
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  )
}

export default App
