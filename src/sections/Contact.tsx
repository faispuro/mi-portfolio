import Container from "../layout/Container"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className="relative py-44 bg-zinc-950 overflow-hidden">

      {/* Fondo de cuadrícula visible */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255,255,255,0.035) 0, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 100px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.035) 0, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 100px)
            `,
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24 items-center">

            {/* Lado izquierdo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs text-neutral-500 mb-8 tracking-[0.35em] uppercase">
                Contact
              </p>

              <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-8">
                ¿Tenés un proyecto
                <br />
                en mente?
              </h2>

              <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                Si querés trabajar en algo sólido, claro y bien estructurado,
                enviame un mensaje y conversemos.
              </p>
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              {/* Glow interno sutil */}
              <div className="absolute inset-0 rounded-3xl 
                              bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_55%)] 
                              pointer-events-none" />

              <form
                className="relative rounded-3xl 
                           border border-zinc-800/60
                           bg-gradient-to-b from-zinc-900/70 to-zinc-950/80
                           backdrop-blur-sm
                           p-12 space-y-8
                           shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-xl
                             bg-zinc-950/70
                             border border-zinc-800
                             px-5 py-4 text-sm text-white
                             placeholder:text-zinc-600
                             transition-all duration-300
                             focus:outline-none
                             focus:border-zinc-600
                             focus:ring-1 focus:ring-white/10"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl
                             bg-zinc-950/70
                             border border-zinc-800
                             px-5 py-4 text-sm text-white
                             placeholder:text-zinc-600
                             transition-all duration-300
                             focus:outline-none
                             focus:border-zinc-600
                             focus:ring-1 focus:ring-white/10"
                />

                <textarea
                  rows={5}
                  placeholder="Mensaje"
                  className="w-full rounded-xl
                             bg-zinc-950/70
                             border border-zinc-800
                             px-5 py-4 text-sm text-white
                             placeholder:text-zinc-600
                             transition-all duration-300
                             resize-none
                             focus:outline-none
                             focus:border-zinc-600
                             focus:ring-1 focus:ring-white/10"
                />

                <button
                  type="submit"
                  className="relative px-7 py-3
                             border border-zinc-600
                             text-white text-sm font-medium tracking-wide
                             transition-all duration-300
                             hover:-translate-y-0.5
                             hover:border-white
                             hover:bg-white/5
                             hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                >
                  Enviar mensaje
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
