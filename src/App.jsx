import About from './sections/About'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'

const App = () => {
  return (
    <main className="max-w-8xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
    </main>
  )
}

export default App