import Marquee from 'react-fast-marquee'

export default function Features() {
  const features = [
    {
      title: '🎯 Crying Session Tracking',
      text: 'Log your crying sessions with details like duration, intensity, and triggers. Track volume levels from "Glass" to "Tsunami".',
    },
    {
      title: '🏆 Achievements System',
      text: 'Unlock 50+ unique achievements across Bronze, Silver, and Gold tiers. Earn special badges for different crying volumes and patterns.',
    },
    {
      title: '📊 Insights & Analytics',
      text: 'Beautiful, interactive charts showing your crying patterns, weekly summaries, and emotional well-being tracking.',
    },
    {
      title: '🔐 Privacy & Security',
      text: 'Secure, private logging of your emotional moments with Google Sign-In and real-time data synchronization.',
    },
  ]

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder border-t-2 py-12 sm:py-16 lg:py-[100px] font-base bg-bg dark:bg-darkBg bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:20px_20px]">
        <h2 className="mb-8 sm:mb-12 lg:mb-20 px-4 sm:px-5 text-center text-2xl sm:text-3xl lg:text-4xl font-heading">
          Turn Your Tears into Triumphs
        </h2>

        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-5">
            {features.map((feature, i) => {
              return (
                <div
                  className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-2 sm:gap-3 rounded-base border-2 bg-white p-4 sm:p-6 lg:p-8 hover:-translate-y-1 transition-transform duration-300"
                  key={i}
                >
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-heading">
                    {feature.title}
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">{feature.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-secondaryBlack border-y-2 bg-white py-2 sm:py-3 lg:py-5 font-base"
          direction="left"
        >
          {[
            'CryBaby - log & find joy in your crying sessions :)'
          ].map((text, id) => {
            return (
              <div className="flex items-center" key={id}>
                <span className="mx-4 sm:mx-6 lg:mx-8 text-lg sm:text-xl lg:text-4xl font-heading">
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
