'use client'
import { AuthCard } from '@/components/auth/card'
import { LoginForm } from '@/components/auth/login-form'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  )
}
