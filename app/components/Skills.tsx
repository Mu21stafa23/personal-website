import Section from './Section'

const skillGroups = [
  {
    title: 'Web development',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    wide: true,
  },
  {
    title: 'Programming',
    items: ['JavaScript', 'Java', 'C++', 'SQL basics'],
  },
  {
    title: 'Data',
    items: ['Data cleaning', 'Data organization', 'Data entry', 'Microsoft Excel'],
  },
  {
    title: 'Tools',
    items: ['Git', 'VS Code', 'Google Workspace', 'Microsoft Office'],
  },
  {
    title: 'IT support',
    items: ['Hardware and software troubleshooting', 'Help desk', 'Windows', 'Linux'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`rounded-xl border border-line bg-panel p-6 ${group.wide ? 'sm:col-span-2' : ''}`}
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-ink px-3 py-1.5 font-mono text-sm text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
