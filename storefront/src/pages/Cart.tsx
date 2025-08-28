import { useCartLines, useCartStore, useCartSubtotal } from '../store/cart'

export default function CartPage() {
  const lines = useCartLines()
  const setQuantity = useCartStore((s) => s.setQuantity)
  const removeItem = useCartStore((s) => s.removeItem)
  const subtotal = useCartSubtotal()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Your cart</h1>

      {lines.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {lines.map((line) => (
              <div key={line.productId} className="flex gap-4 border rounded-xl p-4 items-center">
                <img src={line.product.image} className="h-20 w-20 object-contain bg-gray-50 rounded" />
                <div className="flex-1">
                  <div className="font-medium">{line.product.name}</div>
                  <div className="text-sm text-gray-500">${line.product.price.toFixed(2)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="border rounded px-2" onClick={() => setQuantity(line.productId, line.quantity - 1)}>-</button>
                  <input
                    className="w-12 border rounded text-center"
                    value={line.quantity}
                    onChange={(e) => setQuantity(line.productId, Math.max(0, Number(e.target.value) || 0))}
                  />
                  <button className="border rounded px-2" onClick={() => setQuantity(line.productId, line.quantity + 1)}>+</button>
                </div>
                <div className="w-24 text-right font-medium">${line.lineTotal.toFixed(2)}</div>
                <button className="text-sm text-red-600" onClick={() => removeItem(line.productId)}>Remove</button>
              </div>
            ))}
          </div>

          <aside className="border rounded-xl p-4 h-fit">
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <a href="/checkout" className="mt-4 block text-center bg-black text-white py-2 rounded-md">Checkout</a>
          </aside>
        </div>
      )}
    </div>
  )
}

