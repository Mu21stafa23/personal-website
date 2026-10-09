type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

/* Shared layout for every section below the hero: title on the left,
   content on the right, a hairline on top. */
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-12 md:gap-10 lg:px-8">
        <h2 className="font-display text-3xl font-semibold md:col-span-3">{title}</h2>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  )
}
