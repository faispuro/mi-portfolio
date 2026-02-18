import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-black border-t border-zinc-800 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      {/* Glow blanco sutil */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full" />

      {/* Grid técnico */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="h-full w-full 
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
              linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] 
          bg-[size:120px_120px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">

        {/* CTA */}
        <div className="text-center mb-16">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
            ¿Tenés un proyecto en mente?
          </h3>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Hablemos y construyamos algo sólido y moderno juntos.
          </p>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-2 border border-zinc-700 rounded-full text-sm text-white hover:bg-white hover:text-black transition"
          >
            Contactame
          </a>
        </div>

        {/* Separador */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-12" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-center md:text-left">

          {/* Marca */}
          <div>
            <p className="text-white font-medium mb-3">
              Francisco Aispuro
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Desarrollador web enfocado en crear interfaces limpias y aplicaciones
              eficientes con React, TypeScript y Node.js.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-white font-medium mb-4">
              Navegación
            </p>

            <div className="flex flex-col gap-3 text-zinc-400 items-center md:items-start">
              {[
                { label: "Sobre mí", link: "#sobre-mi" },
                { label: "Proyectos", link: "#proyectos" },
                { label: "Contacto", link: "#contacto" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover:text-white transition"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>


          {/* Conectar */}
          <div>
            <p className="text-white font-medium mb-4">
              Conectar
            </p>

            <div className="flex flex-col gap-3 text-zinc-400 items-center md:items-start">

              <a
                href="https://www.linkedin.com/in/francisco-aispuro-95409827a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="https://github.com/faispuro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="mailto:aispurofrancisco2003@gmail.com"
                aria-label="Enviar email"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail size={16} />
                Email
              </a>

            </div>
          </div>

        </div>

        {/* Footer final */}
        <div className="mt-16 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 text-center">

          <p>
            © {new Date().getFullYear()} Francisco Aispuro
          </p>

          <div className="flex items-center gap-4">
            <p className="tracking-wide">
              React · TypeScript · Vite
            </p>

            {/* Scroll arriba */}
            <a
              href="#top"
              className="p-2 border border-zinc-700 rounded-full hover:bg-white hover:text-black transition"
              aria-label="Volver arriba"
            >
              <ArrowUp size={14} />
            </a>
          </div>

        </div>

      </div>
    </motion.footer>
  )
}

export default Footer
