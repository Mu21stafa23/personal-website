type Project = {
  name: string
  description: string
  stack: string[]
  code: string
  demo?: string
}

const projects: Project[] = [
  {
    name: 'MOON Sound',
    description:
      'A music player with time-synced lyrics, live lyric translation, playlists and a karaoke mode. Available in Arabic and English.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    code: 'https://github.com/Mu21stafa23/Music-app',
    demo: 'https://moonsound.vercel.app',
  },
  {
    name: 'Saudization Calculator',
    description:
      'Works out how many Saudi hires a company needs to reach its Saudization target, per profession. Bilingual, with dark mode.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/Mu21stafa23/Calculating-localization-in-professions',
    demo: 'https://cal-help.vercel.app',
  },
  {
    name: 'E-Learning Platform UI',
    description:
      'A responsive front end for an online learning platform: landing page, about, contact and sign-in screens, with a dark mode toggle.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    code: 'https://github.com/Mu21stafa23/reactjs-tw-Elerning',
  },
]

export default function Projects() {
  return (
    <section id="portfolio" className="scroll-mt-16 bg-white text-gray-900 py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-md font-semibold uppercase tracking-[0.25em] text-green-700/95">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Things I&apos;ve built
          </h2>
          <div className="w-16 h-1 bg-green-700/95 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-green-700/95">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex gap-3 pt-8">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-700/95 hover:bg-green-800 text-white text-sm font-semibold rounded-lg transition"
                  >
                    Live demo
                  </a>
                )}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-300 hover:border-green-700 hover:text-green-700 text-gray-700 text-sm font-semibold rounded-lg transition"
                >
                  View code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
