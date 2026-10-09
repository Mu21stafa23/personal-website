import Section from './Section'

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

const linkClass =
  'font-semibold text-hibiscus underline decoration-hibiscus/40 underline-offset-4 transition-colors hover:text-sand hover:decoration-sand'

export default function Projects() {
  return (
    <Section id="work" title="Work">
      <ul className="divide-y divide-line border-b border-line">
        {projects.map((project) => (
          <li key={project.name} className="grid gap-4 py-8 first:pt-0 lg:grid-cols-3 lg:gap-10">
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight">{project.name}</h3>
              <p className="mt-2 text-sm text-haze">{project.stack.join(', ')}</p>
            </div>

            <div className="lg:col-span-2">
              <p className="max-w-xl text-lg leading-8 text-haze">{project.description}</p>
              <div className="mt-4 flex gap-6">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Live demo
                  </a>
                )}
                <a href={project.code} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Source code
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
