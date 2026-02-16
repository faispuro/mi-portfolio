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
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
      <SocialSidebar />
    </div>
  )
}



export default App
