import Image from 'next/image';

export default function Showcase() {
  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base">
      <div className="mx-auto max-w-[1300px] px-5">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Your Emotional Journey Visualized
        </h2>
        
        <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark group relative overflow-hidden rounded-base border-4 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-lg">
          <video 
            className="w-full rounded-[5px] border-2 border-black"
            controls
            playsInline
            poster="/images/poster.jpg"
          >
            <source src="/images/CryBaby_Promo_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
} 