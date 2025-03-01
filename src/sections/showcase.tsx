import Image from 'next/image';

export default function Showcase() {
  const screenshots = [
    {
      title: '🌊 Crying Session Tracker',
      image: '/screenshots/session.png',
      description: 'Track your crying sessions with volume levels and emotional triggers'
    },
    {
      title: '🏆 Achievement Gallery',
      image: '/screenshots/achievements.png',
      description: 'Unlock and showcase your emotional milestones and badges'
    },
    {
      title: '📊 Emotional Analytics',
      image: '/screenshots/analytics.png',
      description: 'Beautiful charts showing your crying patterns and emotional journey'
    },
    {
      title: '🎨 Personalized Experience',
      image: '/screenshots/customize.png',
      description: 'Customize your experience with themes and personal goals'
    }
  ];

  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base">
      <div className="mx-auto max-w-[1300px] px-5">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Your Emotional Journey Visualized
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark group rounded-base border-2 bg-white p-4 transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-[5px] border-2 border-black">
                <div className="absolute inset-0 bg-main/20 flex items-center justify-center">
                  <p className="text-lg font-heading">Screenshot Coming Soon</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-heading mb-2">{screenshot.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 