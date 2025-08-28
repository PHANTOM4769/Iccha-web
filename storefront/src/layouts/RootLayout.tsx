import Header from '../shared/Header'
import Footer from '../shared/Footer'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6 md:py-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

