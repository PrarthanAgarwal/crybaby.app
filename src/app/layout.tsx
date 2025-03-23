import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from '@/components/navbar'
import { PageWrapper } from '@/components/page-wrapper'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} bg-white dark:bg-darkBg`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="crybaby-theme"
        >
          <Navbar />
          <PageWrapper>
            {children}
          </PageWrapper>
          <ThemeSwitcher />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
