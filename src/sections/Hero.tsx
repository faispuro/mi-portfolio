import { motion } from "framer-motion"
import Container from "../layout/Container"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">

      {/* Grid técnico */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="h-full w-full 
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] 
          bg-[size:80px_80px]" />
      </div>

      <Container>
        <div className="relative z-10 max-w-3xl">

          {/* Fade + slide animation para el subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-neutral-500 mb-6 tracking-[0.25em] uppercase"
          >
            Full Stack Developer
          </motion.p>

          {/* Fade + slide animation para el título */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight mb-8"
          >
            Desarrollo aplicaciones web modernas, escalables y bien estructuradas.
          </motion.h1>

          {/* Fade + slide animation para el párrafo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-400 text-lg leading-relaxed mb-12"
          >
            Soy Francisco Aispuro, desarrollador freelance especializado en crear productos digitales funcionales y bien pensados. Construyo soluciones claras, mantenibles y orientadas a resolver problemas reales.
          </motion.p>

          {/* Fade + slide animation para los botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Botón principal */}
            <button className="relative px-7 py-3 bg-white text-black text-sm font-medium tracking-wide
                              transition-all duration-300
                              hover:-translate-y-0.5
                              hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
              Ver proyectos
            </button>

            {/* Botón secundario */}
            <button className="relative px-7 py-3 border border-neutral-700 text-sm text-neutral-300
                              transition-all duration-300
                              hover:border-white
                              hover:text-white
                              hover:-translate-y-0.5">
              Contactar
            </button>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}

export default Hero
