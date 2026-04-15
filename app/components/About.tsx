'use client'

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 text-gray-900 py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-md font-semibold uppercase tracking-[0.25em]  text-green-700/95">
            About Me
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Front-End Developer with a creative touch
          </h2>
          <div className="w-16 h-1 bg-green-700/95 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Text */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <p className="text-lg leading-8 text-gray-600">
            I'm a Front-End Developer dedicated to crafting modern, scalable, and user-centered web applications. I focus on building clean, efficient interfaces that deliver real value and create smooth, engaging user experiences.
          </p>

          <p className="text-lg leading-8 text-gray-600">
            I work primarily with React, Next.js, and Tailwind CSS to develop fast, responsive, and production-ready solutions. My approach emphasizes performance, maintainability, and attention to detail.
          </p>

          <p className="text-base text-gray-500">
            Always learning. Always improving. Always building.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* What I Do */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl text-center font-semibold mb-6  text-green-700/95">
              What I Do
            </h3>

            <div className="space-y-4 text-gray-600">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-700/95 rounded-full"></span>
                <p>UI/UX web design and development</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-700/95 rounded-full"></span>
                <p>Responsive websites and landing pages</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-700/95 rounded-full"></span>
                <p>Performance and accessibility optimization</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-700/95 rounded-full"></span>
                <p>JavaScript, React js , Next js , and CSS animations</p>
              </div>
            </div>
          </div>

          {/* My Approach */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl text-center font-semibold mb-6 text-green-700/95">
              My Approach 
            </h3>

            <p className="text-gray-600 leading-relaxed text-justify cen">
              I focus on building applications that are not only visually appealing,
              but also fast, scalable, and easy to maintain. Every project I work on
              is crafted with attention to detail and a strong commitment to quality.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}