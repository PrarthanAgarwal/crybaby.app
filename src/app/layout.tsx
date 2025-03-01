import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryBaby',
  description: 'Turn your emotional moments into a journey of self-discovery with CryBaby.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Navbar />
          {children}
          <ThemeSwitcher />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
