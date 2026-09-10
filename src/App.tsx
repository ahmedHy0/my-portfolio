import { useState } from 'react'
import { useRevealObserver } from './hooks'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Background } from './components/Background'
import { Certifications } from './components/Certifications'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'

export default function App() {
  // The Hero pipeline activates once the intro session finishes (or is skipped).
  const [sessionReady, setSessionReady] = useState(false)
  useRevealObserver()

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Intro onDone={() => setSessionReady(true)} />
      <Header />
      <CustomCursor />
      <main id="main">
        <Hero active={sessionReady} />
        <About />
        <Background />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
