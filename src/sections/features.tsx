import Marquee from 'react-fast-marquee'

export default function Features() {
  const features = [
    {
      title: '🎯 Crying Session Tracking',
      text: 'Log your crying sessions with details like duration, intensity, and triggers. Track volume levels from "Glass" to "Tsunami".',
    },
    {
      title: '🏆 Achievements System',
      text: 'Unlock 75+ unique achievements across Bronze, Silver, and Gold tiers. Earn special badges for different crying volumes and patterns.',
    },
    {
      title: '📊 Insights & Analytics',
      text: 'Beautiful, interactive charts showing your crying patterns, weekly summaries, and emotional well-being tracking.',
    },
    {
      title: '🎨 Personalization',
      text: 'Customize your crying session categories, set personal goals, and choose themes to match your mood.',
    },
    {
      title: '🔐 Privacy & Security',
      text: 'Secure, private logging of your emotional moments with Google Sign-In and real-time data synchronization.',
    },
    {
      title: '🌟 Community Features',
      text: 'Compare your crying journey with anonymous global stats and participate in community challenges.',
    }
  ]

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Turn Your Tears into Triumphs
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            return (
              <div
                className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5 hover:-translate-y-1 transition-transform"
                key={i}
              >
                <h4 className="text-xl font-heading">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{feature.text}</p>
              </div>
            )
          })}
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-secondaryBlack border-y-2 bg-white py-3 font-base sm:py-5"
          direction="left"
        >
          {[
            'CryBaby - log & find joy in your crying sessions :)'
          ].map((text, id) => {
            return (
              <div className="flex items-center" key={id}>
                <span className="mx-8 text-xl font-heading sm:text-2xl lg:text-4xl">
                  {text}
                </span>
              </div>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}
