import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/app/providers'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'mitism - Auth Demo',
  description: 'mitism portfolio',
}

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
                className="fixed bottom-0 h-5 bg-sky-700 text-white text-xs w-full flex items-center justify-between px-2"
            >
                <div>
                    © {new Date().getFullYear()} <Link href="https://mitism.com" target="_blank" className="underline">mitism.com</Link>
                </div>
                <div>
                    Developed using <Link href="https://next-auth.js.org/" target="_blank" className="underline italic">NextAuth.js</Link>
                </div>
            </footer>
      </body>
    </html>
  )
}
