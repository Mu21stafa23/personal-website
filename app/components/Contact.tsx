import Section from './Section'

const email = 'Mu21stafa23@gmail.com'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustafa-elamin-688b24171/' },
  { label: 'GitHub', href: 'https://github.com/Mu21stafa23' },
]

export default function Contact() {
  return (
    <>
      <Section id="contact" title="Contact">
        <div className="rounded-xl border border-line bg-panel p-8 sm:p-12">
          <p className="max-w-xl text-2xl font-semibold leading-snug sm:text-3xl sm:leading-snug">
            Have a project or a role in mind? Send me a message.
          </p>

          <a
            href={`mailto:${email}`}
            className="mt-8 inline-block break-all font-mono text-lg text-mint underline decoration-mint/40 underline-offset-8 transition-colors hover:decoration-mint sm:text-2xl"
          >
            {email}
          </a>

          <ul className="mt-10 flex flex-wrap gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-line px-6 py-3 font-semibold transition-colors hover:border-mute"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <footer className="border-t border-line py-8">
        <p className="mx-auto max-w-6xl px-6 text-sm text-mute lg:px-8">
          © {new Date().getFullYear()} Mustafa Hamad ElAmin
        </p>
      </footer>
    </>
  )
}
