type SectionProps = {
  id: string
  title: string
  intro?: string
  children: React.ReactNode
}

/* Shared layout for every section below the hero. */
export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold">
          <span aria-hidden="true" className="font-mono text-xl text-mint">
            {'// '}
          </span>
          {title}
        </h2>
        {intro && <p className="mt-3 text-mute">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
