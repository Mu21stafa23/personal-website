import Section from './Section'

const services = [
  {
    title: 'Company websites',
    description:
      'Multi-page sites for businesses, from a single landing page to a group site with its own section for every division.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
      </>
    ),
  },
  {
    title: 'Dashboards and admin panels',
    description:
      'Screens for managing data: tables, forms, charts and maps, with a separate view for each type of user.',
    icon: <path d="M4 20V11M10 20V4M16 20v-7M2 20h20" />,
  },
  {
    title: 'Arabic and English interfaces',
    description:
      'Sites that work in both languages, with right-to-left layout, fonts and spacing handled properly.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </>
    ),
  },
  {
    title: 'Web apps',
    description:
      'Interactive tools built with React and Next.js that feel quick and work on phone, tablet and desktop.',
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
]

export default function Services() {
  return (
    <Section id="services" title="What I do">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li key={service.title} className="rounded-xl border border-line bg-panel p-6">
            <svg
              className="h-8 w-8 text-mint"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {service.icon}
            </svg>
            <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 leading-7 text-mute">{service.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
