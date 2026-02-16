import { motion } from "framer-motion"
import Container from "../layout/Container"

const About = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 overflow-hidden">

      {/* Grid de fondo sutil, conecta con Hero */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="h-full w-full 
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
              linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] 
          bg-[size:80px_80px]" />
      </div>

      <Container>
        <div className="grid md:grid-cols-2 gap-20 items-start relative z-10">

          {/* Título */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs text-zinc-500 mb-6 tracking-[0.25em] uppercase"
            >
              Sobre mí
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-medium text-white leading-tight tracking-tight"
            >
              Desarrollo software con foco en estructura, rendimiento y escalabilidad.
            </motion.h2>
          </div>

          {/* Texto descriptivo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-400 text-lg leading-relaxed space-y-6"
          >
            <p>
              Trabajo como desarrollador freelance creando aplicaciones web full stack
              dentro del ecosistema moderno de JavaScript, principalmente con React,
              TypeScript y Node.js.
            </p>

            <p>
              También he trabajado con Python y C#, integrando bases de datos SQL y
              NoSQL en arquitecturas limpias y mantenibles.
            </p>

            <p>
              Me interesa construir sistemas sólidos y bien organizados, pensados
              para crecer sin perder claridad. Disfruto analizar los problemas en
              profundidad y diseñar soluciones simples para situaciones complejas.
            </p>


          </motion.div>

        </div>
      </Container>
    </section>
  )
}

export default About
