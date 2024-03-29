import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/app/providers'
import Link from 'next/link'
import { IBM_Plex_Mono } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: 'mitism - Auth Demo',
  description: 'mitism portfolio',
}

const mono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">
        <header
            className={`fixed top-0 h-5 bg-emerald-300 text-emerald-900 text-xs w-full flex items-center justify-center px-2 ${mono.className}`}
        >
            under developement...
        </header>
        <Providers>
          {children}
        </Providers>
        <footer
            className={`fixed bottom-0 min-h-5 bg-black text-white text-xs w-full flex items-center justify-between px-2 ${mono.className}`}
        >
            <div>
                © {new Date().getFullYear()} <Link href="https://mitism.com" target="_blank" className="underline">mitism.com</Link>
            </div>
            <div>
                Demo: Authentication using <Link href="https://authjs.dev/" target="_blank" className="underline italic">Auth.js</Link>
            </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}
