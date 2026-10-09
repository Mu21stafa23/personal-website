import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Services from '@/app/components/Services'
import Skills from '@/app/components/Skills'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import Contact from '@/app/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
