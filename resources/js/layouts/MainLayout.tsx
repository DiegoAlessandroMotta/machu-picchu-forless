import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'
import { PropsWithChildren } from 'react'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-[#f3f3f3]">
      <div className="relative flex h-dvh flex-col overflow-y-auto">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
