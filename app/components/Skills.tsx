const skillGroups = [
  {
    title: 'Languages',
    description: 'The foundations I write every day.',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'What I reach for to build interfaces.',
    items: ['React', 'Next.js', 'Tailwind CSS', 'React Router'],
  },
  {
    title: 'Tools & Workflow',
    description: 'How I ship and keep projects healthy.',
    items: ['Git & GitHub', 'Vite', 'Vercel', 'Responsive design', 'RTL / bilingual UI'],
  },
]

export default function Skills() {
  return (
    <section id="skill" className="scroll-mt-16 bg-gray-50 text-gray-900 py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-md font-semibold uppercase tracking-[0.25em] text-green-700/95">
            Skills
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I build with
          </h2>
          <div className="w-16 h-1 bg-green-700/95 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Groups */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-green-700/95">{group.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{group.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-green-700/20 bg-green-50 px-3 py-1 text-sm font-medium text-green-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
