'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    return pathname === path;
  };

  const linkClasses = (path: string) => `
    px-4 py-2 rounded-base font-bold transition-all
    ${isActive(path)
      ? 'bg-black text-white shadow-light dark:shadow-dark'
      : 'hover:bg-black/10'
    }
  `;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white dark:bg-darkBg border-2 border-black shadow-light dark:shadow-dark px-6 py-3 rounded-base">
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12">
            <Image
              src="/images/logo.png"
              alt="CryBaby"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="h-8 w-[2px] bg-black/20 mx-2" />
        <Link
          href="/"
          className={linkClasses('/')}
        >
          Home
        </Link>
        <Link
          href="/blog"
          className={linkClasses('/blog')}
          prefetch={true}
        >
          Blog
        </Link>
        <Link
          href="/feedback"
          className={linkClasses('/feedback')}
          prefetch={true}
        >
          Share Feedback
        </Link>
      </div>
    </nav>
  );
}; 