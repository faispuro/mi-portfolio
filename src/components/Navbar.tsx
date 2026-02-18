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

  // Nav items con name y id para scroll suave
  const navItems = [
    { name: "Inicio", id: "inicio" },
    { name: "Sobre mí", id: "sobre-mi" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Contacto", id: "contacto" },
  ]

  // Función para scroll suave
  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      className="fixed top-8 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Container>
        <motion.nav
          className={`flex items-center justify-between h-16 md:h-20 px-6 md:px-10 rounded-full border transition-all duration-500
                      backdrop-blur-lg backdrop-saturate-150
                      ${scrolled ? "bg-white/10 border-white/20 shadow-xl" : "bg-white/20 border-white/10 shadow-lg"}`}
        >
          {/* Logo */}
          <span className="text-white text-base font-semibold tracking-tight cursor-pointer hover:scale-105 transition-transform duration-300">
            Francisco Aispuro
          </span>

          {/* Links Desktop */}
          <ul className="hidden md:flex items-center gap-14 text-sm uppercase tracking-wider">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => handleScrollTo(item.id)}
              >
                <motion.span
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="text-white transition-all duration-300 inline-block"
                >
                  {item.name}
                </motion.span>
                <span
                  className="absolute left-0 -bottom-2 w-0 h-[1.5px] bg-white
                             transition-all duration-300 group-hover:w-full"
                />
              </motion.li>
            ))}
          </ul>

          {/* Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            {!open && (
              <motion.button
                onClick={() => setOpen(true)}
                className="text-white text-2xl focus:outline-none"
                initial={false}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <HiMenu />
              </motion.button>
            )}
          </div>
        </motion.nav>
      </Container>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button (X animada) */}
            <motion.button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0, rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <HiX />
            </motion.button>

            {/* Menu Items */}
            <motion.ul className="flex flex-col items-center justify-center gap-10 text-white text-3xl uppercase tracking-wider">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer hover:text-neutral-300"
                  onClick={() => {
                    setOpen(false)
                    handleScrollTo(item.id)
                  }}
                >
                  {item.name}
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
