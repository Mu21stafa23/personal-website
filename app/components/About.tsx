import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl font-display text-2xl leading-snug md:text-3xl md:leading-snug">
        I turn designs into websites and web apps that load quickly, adapt to any screen, and
        stay easy to maintain.
      </p>

      <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-haze">
        <p>
          I work mainly with React, Next.js and Tailwind CSS. Much of what I build has to work
          in two languages, so I plan for right-to-left layouts from the start instead of
          patching them in at the end.
        </p>
        <p>
          I care about the details people notice without naming them: spacing that lines up,
          pages that respond straight away, and forms that are simple to finish.
        </p>
      </div>
    </Section>
  )
}
