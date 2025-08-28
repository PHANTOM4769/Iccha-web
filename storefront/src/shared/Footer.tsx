export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <div className="font-semibold mb-3">Support</div>
          <ul className="space-y-2 text-gray-600">
            <li>Help Center</li>
            <li>Warranty</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-gray-600">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2 text-gray-600">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Newsletter</div>
          <div className="flex gap-2">
            <input className="border rounded-md px-3 py-2 flex-1" placeholder="Your email" />
            <button className="bg-black text-white px-3 rounded-md">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Gadgets Store. All rights reserved.</div>
    </footer>
  )
}

