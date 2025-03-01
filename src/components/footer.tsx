import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="m500:text-sm dark:bg-secondaryBlack z-30 bg-white px-5 py-8 text-center font-base border-t-2 border-t-border dark:border-t-darkBorder">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <Link
            href="https://instagram.com/crybaby.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black px-4 py-2 rounded-base bg-white hover:bg-black hover:text-white transition-colors shadow-light dark:shadow-dark hover:-translate-y-1 hover:shadow-none transform-gpu"
          >
            📸 Instagram
          </Link>
          <Link
            href="https://twitter.com/crybaby_app"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black px-4 py-2 rounded-base bg-white hover:bg-black hover:text-white transition-colors shadow-light dark:shadow-dark hover:-translate-y-1 hover:shadow-none transform-gpu"
          >
            🐦 Twitter
          </Link>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <Link 
            href="/privacy" 
            className="hover:underline"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <Link 
            href="/terms" 
            className="hover:underline"
          >
            Terms of Service
          </Link>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Made with 😢 by Prarthan Agarwal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
