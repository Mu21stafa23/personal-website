import Section from './Section'

const facts = [
  { label: 'Based in', value: 'Saudi Arabia' },
  { label: 'Nationality', value: 'Sudanese' },
  { label: 'Education', value: 'Bachelor of Information Technology, 2022' },
  { label: 'Languages', value: 'Arabic (native), English' },
  { label: 'Focus', value: 'React, Next.js, Tailwind CSS' },
]

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
        <div className="space-y-5 text-lg leading-8 text-mute lg:col-span-2">
          <p className="text-xl leading-8 text-fg">
            I&apos;m a front-end developer based in Saudi Arabia. I build responsive websites and
            web apps with React, Next.js and Tailwind CSS.
          </p>
          <p>
            I started in IT. After my degree I worked as a teaching assistant and a technical
            support assistant at Cambridge International College Sudan, where I helped students
            find the bugs in their code and kept the department&apos;s computers and software
            running.
          </p>
          <p>
            Since 2023 I&apos;ve focused on front-end development: taking on freelance projects
            and learning through courses along the way. Teaching and support work taught me to
            explain technical things clearly and to track a problem down patiently, and I bring
            both to the interfaces I build.
          </p>
        </div>

        <dl className="h-fit divide-y divide-line rounded-xl border border-line bg-panel">
          {facts.map((fact) => (
            <div key={fact.label} className="px-5 py-4">
              <dt className="font-mono text-xs text-mint">{fact.label}</dt>
              <dd className="mt-1">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
