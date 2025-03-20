import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg dark:bg-darkBg bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] p-4 pt-32">
      <div className="relative w-full max-w-3xl p-8 bg-white dark:bg-secondaryBlack border-4 border-black dark:border-darkBorder shadow-light dark:shadow-dark rounded-lg text-center">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-white border-4 border-black dark:border-darkBorder rounded-full p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-dark">
          <Image
            src="/images/google-play.png"
            alt="Play Store"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
        
        <h1 className="mt-14 text-5xl font-heading tracking-tight text-black dark:text-white">
          Coming Soon to<br />Google Play Store!
        </h1>
        
        <p className="mt-6 text-xl text-gray-800 dark:text-gray-200">
          I am working hard to bring CryBaby to Android users. Stay tuned for the launch on the Google Play Store!
        </p>
        
        <div className="relative mt-8 p-6 bg-[#6BCB77] dark:bg-[#4a8c54] rounded-lg border-4 border-black dark:border-darkBorder">
          <p className="text-lg font-semibold text-black dark:text-white">
            Thank you for your interest! Will update this page when CryBaby is available on Google Play.
          </p>
        </div>
        
        <Link href="/" passHref>
          <Button 
            variant="neutral" 
            className="mt-8 border-4 border-black dark:border-darkBorder px-6 py-3 font-bold text-black dark:text-white hover:bg-black hover:text-white"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
} 