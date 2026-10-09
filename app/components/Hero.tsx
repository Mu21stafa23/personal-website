const email = 'Mu21stafa23@gmail.com'

/* The lines shown in the code window. Edit these to change what it says. */
const profile: { key: string; value: string | string[] }[] = [
  { key: 'name', value: 'Mustafa Hamad ElAmin' },
  { key: 'role', value: 'Front-end developer' },
  { key: 'stack', value: ['React', 'Next.js', 'TypeScript'] },
  { key: 'styling', value: 'Tailwind CSS' },
  { key: 'languages', value: ['Arabic', 'English'] },
  { key: 'focus', value: 'Clean, fast interfaces' },
]

function Str({ children }: { children: string }) {
  return <span className="text-syn-str">&quot;{children}&quot;</span>
}

export default function Hero() {
  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <img
              src="/MustafaH.jpg"
              alt="Portrait of Mustafa Hamad ElAmin"
              width={527}
              height={689}
              className="h-20 w-20 rounded-full object-cover object-top ring-2 ring-mint ring-offset-4 ring-offset-ink"
            />
            <p className="font-mono text-sm text-mint">Hi, my name is</p>
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Mustafa Hamad ElAmin
          </h1>
          <p className="mt-4 text-2xl font-medium text-mute">Front-end developer</p>
          <p className="mt-6 max-w-md text-lg leading-8 text-mute">
            I build fast, responsive web apps with React, Next.js and Tailwind CSS, in English
            and Arabic.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${email}`}
              className="rounded-lg bg-mint px-6 py-3 font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-line px-6 py-3 font-semibold transition-colors hover:border-mute"
            >
              View projects
            </a>
          </div>
        </div>

        {/* Code window */}
        <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-mute">developer.ts</span>
          </div>
          <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7 sm:px-6 sm:text-[15px] sm:leading-8">
            <code>
              <span className="text-syn-key">const</span>{' '}
              <span className="text-syn-var">developer</span> = {'{'}
              {'\n'}
              {profile.map(({ key, value }) => (
                <span key={key}>
                  {'  '}
                  {key}:{' '}
                  {Array.isArray(value) ? (
                    <>
                      [
                      {value.map((item, index) => (
                        <span key={item}>
                          {index > 0 && ', '}
                          <Str>{item}</Str>
                        </span>
                      ))}
                      ]
                    </>
                  ) : (
                    <Str>{value}</Str>
                  )}
                  ,{'\n'}
                </span>
              ))}
              {'};'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
