'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <Button
        size="icon"
        className="fixed right-4 sm:right-10 top-20 sm:top-10 z-40 bg-white dark:bg-darkBg border-2 border-black shadow-light dark:shadow-dark"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <Sun className="stroke-text hidden h-5 w-5 sm:h-6 sm:w-6 dark:inline" />
        <Moon className="stroke-text inline h-5 w-5 sm:h-6 sm:w-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}
