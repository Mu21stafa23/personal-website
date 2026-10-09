const links = [
  { label: 'Email me', href: 'mailto:Mu21stafa23@gmail.com', primary: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustafa-elamin-688b24171/' },
  { label: 'GitHub', href: 'https://github.com/Mu21stafa23' },
  { label: 'WhatsApp', href: 'https://wa.me/+971509711552' },
]

export default function Contact() {
  return (
    <>
      <section id="contact" className="scroll-mt-16 bg-green-800 text-white py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-md font-semibold uppercase tracking-[0.25em] text-green-200">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something together
          </h2>
          <div className="w-16 h-1 bg-white/80 mx-auto mt-6 rounded-full"></div>

          <p className="mt-8 text-lg leading-8 text-green-50">
            Have a project in mind, or a role you think I&apos;d fit? Send me a message and
            I&apos;ll get back to you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={
                  link.primary
                    ? 'px-8 py-3 bg-white text-green-800 hover:bg-green-50 font-bold rounded-lg transition shadow-lg'
                    : 'px-8 py-3 border border-white/60 hover:bg-white/10 text-white font-bold rounded-lg transition'
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-green-950 text-green-100/80 py-6 text-center text-sm">
        © {new Date().getFullYear()} Mustafa Hamad ElAmin
      </footer>
    </>
  )
}
