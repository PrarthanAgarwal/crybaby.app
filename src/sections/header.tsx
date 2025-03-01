import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="dark:bg-secondaryBlack inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-20 mb-16">
            <div className="relative w-[200px] h-[200px]">
              <Image
                src="/images/logo.png"
                alt="CryBaby Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading">
              CryBaby
            </h1>
          </div>
        </div>
        <p className="max-w-[800px] mx-auto text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          CryBaby is a unique mobile application that helps you track, understand, and even find joy in your crying sessions.
        </p>
        <div className="flex gap-4 justify-center mt-12">
          <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl bg-black text-white hover:bg-black/90 flex items-center gap-2"
            >
              <Image
                src="/images/apple-logo.png"
                alt="App Store"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Download on App Store
            </Button>
          </Link>
          <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="neutral"
              className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl border-2 flex items-center gap-2"
            >
              <Image
                src="/images/google-play.png"
                alt="Play Store"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              Get it on Play Store
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
