const email = 'Mu21stafa23@gmail.com'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustafa-elamin-688b24171/' },
  { label: 'GitHub', href: 'https://github.com/Mu21stafa23' },
  { label: 'WhatsApp', href: 'https://wa.me/+971509711552' },
]

export default function Contact() {
  return (
    <>
      <section id="contact" className="scroll-mt-16 border-t border-line bg-dusk py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl md:leading-tight">
            Have a project or a role in mind? Write to me.
          </h2>

          <a
            href={`mailto:${email}`}
            className="mt-10 inline-block break-all font-display text-[clamp(1.5rem,5vw,3.25rem)] font-bold leading-tight text-hibiscus underline decoration-hibiscus/40 underline-offset-8 transition-colors hover:text-sand hover:decoration-sand"
          >
            {email}
          </a>

          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-sand underline decoration-line underline-offset-4 transition-colors hover:decoration-sand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 text-sm text-haze lg:px-8">
          <p>© {new Date().getFullYear()} Mustafa Hamad ElAmin</p>
          <p lang="ar" dir="rtl">
            مصطفى حمد الأمين
          </p>
        </div>
      </footer>
    </>
  )
}
