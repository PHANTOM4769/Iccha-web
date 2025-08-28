import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-gray-600 mt-2">The page you are looking for doesn’t exist.</p>
      <Link to="/" className="inline-block mt-6 bg-black text-white px-4 py-2 rounded-md">Go home</Link>
    </div>
  )
}

