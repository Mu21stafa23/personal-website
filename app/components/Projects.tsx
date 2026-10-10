import Section from './Section'

type Project = {
  name: string
  description: string
  stack: string[]
  /** Path to a screenshot in /public, for example '/projects/my-app.png' */
  image?: string
  /** Link to the live project. The picture, the name and "Live demo" all open it. */
  demo?: string
  /** What the link is called when "Live demo" does not fit, such as a page a program is downloaded from. */
  linkLabel?: string
}

/* Add projects here. Each one becomes a card and replaces a "coming soon"
   placeholder. Example:

   {
     name: 'My App',
     description: 'One or two sentences about what it does.',
     stack: ['Next.js', 'Tailwind CSS'],
     image: '/projects/my-app.png',
     demo: 'https://my-app.vercel.app',
   },
*/
const projects: Project[] = [
  {
    name: 'One Gate Group',
    description:
      'Company website for One Gate Group Sudan. One site holds a dedicated sub-site for each of the group\'s sectors, including airport services, cold storage, fish export and hotel services, in English and Arabic.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/one-gate-group.jpg',
    demo: 'https://one-gate-website.vercel.app',
  },
  {
    name: 'College Website and E-Learning',
    description:
      'Graduation project: a website for Cambridge International College Sudan with a page for each program, plus student and teacher screens for lectures, attendance and assignments, in Arabic and English. A team of three; I did the design and all the development.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/college-website.jpg',
    demo: 'https://cic-sudan-graduation-project.vercel.app',
  },
  {
    name: 'Moon Cafe',
    description:
      'Order-ahead system for a coffee shop, built as a demo. Customers scan a QR code from the parking area or a table, build a drink that is poured in 3D, and collect it at the car or the counter. Staff run a live orders board and the manager sees the day\'s sales. In Arabic and English.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    image: '/projects/moon-cafe.jpg',
    demo: 'https://moon-cafe-one.vercel.app',
  },
  {
    name: 'Moon Safi, a Data Cleaner for Arabic Files',
    description:
      'Cleans messy CSV and Excel files in the browser, with nothing uploaded. It repairs broken Arabic encoding, tidies Saudi mobile numbers, ID numbers, IBANs and Hijri dates, and finds repeated people even when a name is in Arabic on one row and English on another. Every fix is a suggestion to accept or skip, with undo and a quality score. Steps can be saved as a recipe, shared by link and replayed on the next file; two files can be compared row by row. In Arabic and English.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/csv-cleaner.jpg',
    demo: 'https://moon-safi.vercel.app',
  },
  {
    name: 'Fleet Operations Dashboard',
    description:
      'Dashboard for a vehicle operations and tracking platform. It covers vehicles, fuel and battery records, maintenance schedules, route planning on a map, staff, branches and budgets, with a separate view for each role.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Leaflet'],
    image: '/projects/fleet-dashboard.jpg',
    demo: 'https://os-dsh-next.vercel.app',
  },
  {
    name: 'Mall Management Dashboard',
    description:
      'Control panel for running a shopping mall: shops and rentals, permits, violations, wallet and payments, events and offers, maintenance, security and reports.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    image: '/projects/mall-dashboard.jpg',
    demo: 'https://dash-m.netlify.app',
  },
  {
    name: 'Fleet Super Admin Panel',
    description:
      'The super admin side of the fleet platform: vehicle and branch management, users and permissions, reports, operation logs and system settings, with language and theme switching.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Chart.js'],
    image: '/projects/fleet-super-admin.jpg',
    demo: 'https://dash-os.netlify.app',
  },
  {
    name: 'Moon Orbit, a Company Website',
    description:
      'A company website for a business services firm, built as a demo: what the company does, its three services with what the client receives, its numbers, its offices and a contact form that checks each field. In English and Arabic.',
    stack: ['React', 'Vite', 'React Router', 'Tailwind CSS'],
    image: '/projects/moon-orbit.jpg',
    demo: 'https://moon-orbit-sa.vercel.app',
  },
  {
    name: 'Saudization Calculator',
    description:
      'Works out how many Saudi hires a company needs to reach its Saudization target, per profession. Bilingual, with light and dark themes.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/saudization-calculator.jpg',
    demo: 'https://cal-help.vercel.app',
  },
  {
    name: 'Moon Academy, an Online Course Platform',
    description:
      'A course platform front end you can use end to end: search nine courses, open one to see its plan week by week, enroll, tick lessons off and come back to find your place. Filters live in the address bar, forms have real validation, and progress is saved in the browser. With dark mode.',
    stack: ['React', 'Vite', 'React Router', 'Tailwind CSS'],
    image: '/projects/e-learning.jpg',
    demo: 'https://moon-academy-courses.vercel.app',
  },
  {
    name: 'Mail Viewer',
    description:
      'A Windows program that opens old Outlook backups (PST, OST, MSG, EML and MBOX) without Outlook, an account or internet. It shows folders and messages in an Outlook-style window, searches archives of 50 GB and more with filters like from:, has:pdf and after:2023, in English and Arabic, and saves or extracts attachments. Files are opened read-only and nothing leaves the computer.',
    stack: ['Python', 'SQLite', 'JavaScript'],
    image: '/projects/mail-viewer.jpg',
    demo: 'https://mail-viewer-beta.vercel.app',
    linkLabel: 'Website and download',
  },
]

/* Cards per row on wide screens. Empty spots in the last row are filled
   with "coming soon" placeholders. */
const PER_ROW = 3

const linkClass =
  'font-semibold text-mint underline decoration-mint/40 underline-offset-4 transition-colors hover:decoration-mint'

export default function Projects() {
  const placeholders =
    projects.length === 0 ? PER_ROW : (PER_ROW - (projects.length % PER_ROW)) % PER_ROW

  return (
    <Section
      id="projects"
      title="Projects"
      intro={projects.length === 0 ? 'New projects are on the way.' : undefined}
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          /* Clicking the picture or the name opens the project. */
          const href = project.demo
          const picture = project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              className="aspect-[4/3] w-full rounded-lg border border-line object-cover"
            />
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-line bg-ink font-mono text-sm text-mute">
              {project.name}
            </div>
          )

          return (
            <li key={project.name} className="flex flex-col rounded-xl border border-line bg-panel p-5">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-90"
                >
                  {picture}
                </a>
              ) : (
                picture
              )}
              <h3 className="mt-5 text-xl font-semibold">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-mint"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="mt-2 leading-7 text-mute">{project.description}</p>
              <p className="mt-4 font-mono text-xs text-mute">{project.stack.join(' / ')}</p>
              {project.demo && (
                <div className="mt-auto pt-5">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {project.linkLabel ?? 'Live demo'}
                  </a>
                </div>
              )}
            </li>
          )
        })}

        {Array.from({ length: placeholders }, (_, index) => (
          <li key={`placeholder-${index}`} className="rounded-xl border border-line bg-panel p-5">
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-line font-mono text-sm text-mute">
              coming soon
            </div>
            <div aria-hidden="true">
              <div className="mt-5 h-4 w-2/3 rounded bg-line" />
              <div className="mt-3 h-3 w-full rounded bg-line/60" />
              <div className="mt-2 h-3 w-4/5 rounded bg-line/60" />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
