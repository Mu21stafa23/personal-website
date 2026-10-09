export default function Hero() {
  return (
    <section id="top" className="flex min-h-svh items-center pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-16 lg:px-8">
        <div>
          {/* The name in both scripts: English reads in from the left,
              Arabic from the right. */}
          <h1 className="enter-ltr font-display text-[clamp(2.75rem,7.2vw,5.75rem)] font-bold leading-none tracking-tight">
            Mustafa Hamad ElAmin
          </h1>
          <p
            lang="ar"
            dir="rtl"
            className="enter-rtl mt-3 font-display text-[clamp(2.25rem,5.4vw,4.25rem)] font-bold leading-[1.35] text-hibiscus"
          >
            مصطفى حمد الأمين
          </p>

          <p className="mt-8 max-w-xl text-lg leading-8 text-haze">
            Front-end developer. I build fast, responsive web interfaces that work as well in
            Arabic as they do in English.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:Mu21stafa23@gmail.com"
              className="rounded-full bg-hibiscus px-7 py-3 font-semibold text-night transition-colors hover:bg-sand"
            >
              Email me
            </a>
            <a
              href="#work"
              className="rounded-full border border-line px-7 py-3 font-semibold text-sand transition-colors hover:border-sand"
            >
              See my work
            </a>
          </div>
        </div>

        <img
          src="/MustafaH.jpg"
          alt="Portrait of Mustafa Hamad ElAmin"
          width={527}
          height={689}
          className="order-first aspect-[4/5] w-36 rounded-3xl object-cover object-top md:order-last md:w-72 lg:w-80"
        />
      </div>
    </section>
  )
}
