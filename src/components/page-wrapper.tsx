'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname()
  
  // No extra padding needed for home page since the header has its own spacing
  const isHomePage = pathname === '/'
  
  return (
    <div className={isHomePage ? '' : 'pt-24 sm:pt-28'}>
      {children}
    </div>
  )
} 