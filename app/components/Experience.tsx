import Section from './Section'

const jobs = [
  {
    role: 'Teaching Assistant, IT Department',
    place: 'Cambridge International College Sudan, Khartoum',
    period: '2022 – 2023',
    points: [
      'Assisted in delivering IT courses, including programming and computer fundamentals.',
      'Supported students in practical labs and helped them troubleshoot errors in their code.',
      'Ran one-on-one and group tutoring sessions.',
    ],
  },
  {
    role: 'Technical Support Assistant',
    place: 'Cambridge International College Sudan, Khartoum',
    period: '2022 – 2023',
    points: [
      'Gave first-line technical support for hardware and software problems.',
      'Installed, configured and maintained operating systems and essential applications.',
      'Documented incidents, ran diagnostics and escalated issues that could not be resolved.',
    ],
  },
]

const certifications = [
  { name: 'Google IT Support Fundamentals', from: 'Coursera', year: '2023' },
  { name: 'Engineering Technical Support', from: 'Afro-tech Training Center', year: '2022' },
  { name: 'Computer Maintenance', from: 'Afro-tech Training Center', year: '2022' },
  { name: 'Full Stack Web & Mobile Development', from: 'Afro-tech Training Center', year: '2021' },
]

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {/* Jobs, newest first, joined by a timeline */}
      <ol className="space-y-10 border-l border-line pl-8">
        {jobs.map((job) => (
          <li key={job.role} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.3rem] top-2 h-2.5 w-2.5 rounded-full bg-mint ring-4 ring-ink"
            />
            <p className="font-mono text-sm text-mint">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
            <p className="mt-1 text-mute">{job.place}</p>
            <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-7 text-mute marker:text-line">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-line bg-panel p-6">
          <h3 className="text-lg font-semibold">Education</h3>
          <p className="mt-4 font-mono text-sm text-mint">2022</p>
          <p className="mt-1 font-medium">Bachelor of Information Technology</p>
          <p className="mt-1 text-mute">Cambridge International College Sudan</p>
        </div>

        <div className="rounded-xl border border-line bg-panel p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="mt-4 divide-y divide-line">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3 first:pt-0 last:pb-0">
                <span className="font-medium">{cert.name}</span>
                <span className="text-sm text-mute">
                  {cert.from}, <span className="font-mono text-mint">{cert.year}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
