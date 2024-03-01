import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/app/providers'
import Link from 'next/link'
import { IBM_Plex_Mono } from 'next/font/google'

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
        <Providers>
          {children}
        </Providers>
        <footer
                className={`fixed bottom-0 h-5 bg-sky-700 text-white text-xs w-full flex items-center justify-between px-2 ${mono.className}`}
            >
                <div>
                    © {new Date().getFullYear()} <Link href="https://mitism.com" target="_blank" className="underline">mitism.com</Link>
                </div>
                <div>
                    Demo: Authentication using <Link href="https://authjs.dev/" target="_blank" className="underline italic">Auth.js</Link>
                </div>
            </footer>
      </body>
    </html>
  )
}
