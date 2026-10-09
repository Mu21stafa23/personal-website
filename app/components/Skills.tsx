import Section from './Section'

const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Next.js', 'Tailwind CSS', 'React Router'],
  },
  {
    title: 'Tools',
    items: ['Git and GitHub', 'Vite', 'Vercel'],
  },
  {
    title: 'Practices',
    items: ['Responsive design', 'Right-to-left and bilingual UI', 'Accessibility'],
  },
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-b border-line">
        {skillGroups.map((group) => (
          <div key={group.title} className="grid gap-2 py-6 first:pt-0 sm:grid-cols-4 sm:gap-6">
            <dt className="text-haze">{group.title}</dt>
            <dd className="text-xl leading-relaxed sm:col-span-3">{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
