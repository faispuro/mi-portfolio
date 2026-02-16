import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Container from "../layout/Container"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Inicio", "Sobre mí", "Proyectos", "Contacto"]

  return (
    <motion.div
      className="fixed top-8 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        <motion.nav
          className={`flex items-center justify-between px-6 md:px-10 py-4 md:py-6 rounded-full border transition-all duration-500
                      backdrop-blur-lg backdrop-saturate-150
                      ${scrolled ? "bg-white/10 border-white/20 shadow-xl" : "bg-white/20 border-white/10 shadow-lg"}`}
        >
          {/* Logo */}
          <span className="text-white text-base font-semibold tracking-tight cursor-pointer hover:scale-105 transition-transform duration-300">
            Francisco Aispuro
          </span>

          {/* Links Desktop */}
          <ul className="hidden md:flex items-center gap-14 text-sm uppercase tracking-wider">
            {navItems.map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <motion.span
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="text-white transition-all duration-300 inline-block"
                >
                  {item}
                </motion.span>
                <span
                  className="absolute left-0 -bottom-2 w-0 h-[1.5px] bg-white
                             transition-all duration-300 group-hover:w-full"
                />
              </li>
            ))}
          </ul>

          {/* Hamburger Mobile */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setOpen(!open)}
              className="text-white text-2xl focus:outline-none"
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </motion.nav>
      </Container>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul className="flex flex-col items-center justify-center gap-10 text-white text-3xl uppercase tracking-wider">
              {navItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer hover:text-neutral-300"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar
