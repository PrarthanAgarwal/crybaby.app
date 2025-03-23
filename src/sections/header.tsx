import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="dark:bg-secondaryBlack inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-4 sm:px-5 py-[60px] sm:py-[110px] text-center lg:py-[150px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center sm:gap-10 md:gap-20 mb-8 sm:mb-16">
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mb-4 sm:mb-0">
              <Image
                src="/images/logo.png"
                alt="CryBaby Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading">
              CryBaby
            </h1>
          </div>
        </div>
        <p className="max-w-[800px] mx-auto text-base sm:text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed px-4">
          CryBaby is a unique mobile application that helps you track, understand, and even find joy in your crying sessions.
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12 px-4">
          <Link href="https://apps.apple.com/in/app/crybaby/id6743213528" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl bg-black text-white hover:bg-black/90 flex items-center justify-center gap-2"
            >
              <Image
                src="/images/apple-logo.png"
                alt="App Store"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              Download on App Store
            </Button>
          </Link>
          <Link href="/coming-soon" className="relative w-full sm:w-auto">
            {/* Desktop arrow and label */}
            <div className="absolute hidden sm:block top-14 right-8">
              <div className="relative transform rotate-[98deg]">
                <Image 
                  src="/curved-arrow.svg" 
                  alt="Curved Arrow" 
                  width={80} 
                  height={80} 
                  className="transform -scale-x-100"
                />
              </div>
              
              <div className="absolute top-12 -right-32">
                <span className="bg-main border-2 border-black py-1 px-3 rounded-lg font-bold text-sm transform shadow-light inline-block">
                  Coming Soon
                </span>
              </div>
            </div>
            
            <Button
              size="lg"
              variant="neutral"
              className="w-full sm:w-auto h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl border-2 flex items-center justify-center gap-2"
            >
              <Image
                src="/images/google-play.png"
                alt="Play Store"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              Get it on Play Store
            </Button>
            
            {/* Mobile arrow and label - positioned after the button */}
            <div className="block sm:hidden mt-2 text-center">
              <div className="flex justify-center mb-1">
                <Image 
                  src="/curved-arrow.svg" 
                  alt="Curved Arrow" 
                  width={30} 
                  height={30} 
                  className="transform"
                />
              </div>
              <span className="bg-main border-2 border-black py-0.5 px-2 rounded-md font-bold text-xs shadow-light inline-block">
                Coming Soon
              </span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
