import Section from './Section'

const jobs = [
  {
    role: 'Freelance Front-End Developer',
    place: 'Self-employed, Saudi Arabia',
    period: '2023 – Present',
    points: [
      'Take on freelance web projects, building responsive websites and web apps with React, Next.js and Tailwind CSS.',
      'Built the company website for One Gate Group Sudan, with a dedicated sub-site for each of the group\'s sectors.',
      'Keep learning through courses and personal projects, including React Basics from Meta and Google courses in data visualization and networking.',
    ],
  },
  {
    role: 'Teaching Assistant, Computer Labs',
    place: 'Bahri Ahlia College, Khartoum North',
    period: '2023 – Present',
    points: [
      'Teach the computer labs and practical sessions, from programming to networking and simulation.',
      'Support students during lab work and help them troubleshoot errors in their code and setups.',
      'Run one-on-one and group tutoring sessions.',
    ],
  },
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
]

type Certification = {
  name: string
  from: string
  date: string
  /** Link to the certificate, shown as "Verify" */
  link?: string
}

/* Ordered by how close each one is to front-end work. */
const certifications: Certification[] = [
  {
    name: 'React Basics',
    from: 'Meta, Coursera',
    date: 'Oct 2024',
    link: 'https://www.coursera.org/account/accomplishments/records/I3C08UKS4OSQ',
  },
  {
    name: 'Share Data Through the Art of Visualization',
    from: 'Google, Coursera',
    date: 'Sep 2024',
    link: 'https://coursera.org/verify/YCA61SO1IHYY',
  },
  { name: 'Full Stack Web & Mobile Development', from: 'Afro-tech Training Center', date: '2021' },
  {
    name: 'The Bits and Bytes of Computer Networking',
    from: 'Google, Coursera',
    date: 'Jan 2024',
    link: 'https://www.coursera.org/account/accomplishments/records/T5BZEAT6F5UF',
  },
  {
    name: 'Technical Support Fundamentals',
    from: 'Google, Coursera',
    date: 'Dec 2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/X3DTRCYXA8W6',
  },
  { name: 'Engineering Technical Support', from: 'Afro-tech Training Center', date: '2022' },
  { name: 'Computer Maintenance', from: 'Afro-tech Training Center', date: '2022' },
  {
    name: 'Advertising Foundations',
    from: 'LinkedIn Learning',
    date: 'Jul 2025',
    link: 'https://www.linkedin.com/learning/certificates/aee771baa6c83b8cd12baf4a020e741059217ec088e1bd6d8f58fceca14ecb1d/',
  },
  {
    name: 'Marketing on Facebook',
    from: 'LinkedIn Learning',
    date: 'Jul 2025',
    link: 'https://www.linkedin.com/learning/certificates/3b0e31d7990336f9785cc1129b6b90435c0d028fbe1d34d85716189fa5475fb0/',
  },
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
        <div className="h-fit rounded-xl border border-line bg-panel p-6">
          <h3 className="text-lg font-semibold">Education</h3>
          <p className="mt-4 font-mono text-sm text-mint">2022</p>
          <p className="mt-1 font-medium">Bachelor of Information Technology</p>
          <p className="mt-1 text-mute">Cambridge International College Sudan</p>
        </div>

        <div className="rounded-xl border border-line bg-panel p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="mt-4 divide-y divide-line">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3 first:pt-0 last:pb-0"
              >
                <span className="font-medium">
                  {cert.name}
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 text-sm font-normal text-mint underline decoration-mint/40 underline-offset-4 hover:decoration-mint"
                    >
                      Verify
                    </a>
                  )}
                </span>
                <span className="text-sm text-mute">
                  {cert.from}, <span className="font-mono text-mint">{cert.date}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
