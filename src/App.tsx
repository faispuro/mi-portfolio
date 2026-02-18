import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Stack from "./sections/Stack"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import SocialSidebar from "./components/SocialSidebar"

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />

      <section id="inicio">
        <Hero />
      </section>

      <section id="sobre-mi">
        <About />
      </section>

      <section id="stack">
        <Stack />
      </section>

      <section id="proyectos">
        <Projects />
      </section>

      <section id="contacto">
        <Contact />
      </section>

      <Footer />
      <SocialSidebar />
    </div>
  )
}

export default App
