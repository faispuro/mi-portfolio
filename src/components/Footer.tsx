import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-black border-t border-zinc-800 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      {/* Grid técnico sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="h-full w-full 
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
              linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] 
          bg-[size:100px_100px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* Separador elegante superior */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-16" />

        {/* Grid inferior */}
        <div className="grid md:grid-cols-3 gap-12 text-sm">

          {/* Marca */}
          <div>
            <p className="text-white font-medium mb-4">
              Francisco Aispuro
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Desarrollo aplicaciones web modernas utilizando React,
              TypeScript y Node.js.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-white font-medium mb-4">
              Navegación
            </p>
            <div className="flex flex-col gap-3 text-zinc-500">
              <a
                href="#about"
                className="transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Sobre mí
              </a>
              <a
                href="#projects"
                className="transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Proyectos
              </a>
              <a
                href="#contact"
                className="transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Conectar */}
          <div>
            <p className="text-white font-medium mb-4">
              Conectar
            </p>
            <div className="flex flex-col gap-3 text-zinc-500">
              <a
                href="#"
                className="transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                GitHub
              </a>
              <a
                href="mailto:tuemail@email.com"
                className="transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                Email
              </a>
            </div>
          </div>

        </div>

        {/* Línea final */}
        <div className="mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600">
          <p>
            © {new Date().getFullYear()} Francisco Aispuro
          </p>

          <p className="tracking-wide">
            Diseñado y desarrollado con React · TypeScript · Vite
          </p>
        </div>

      </div>
    </motion.footer>
  )
}

export default Footer
