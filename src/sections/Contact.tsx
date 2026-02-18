import Container from "../layout/Container"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<"success" | "error" | "">("")

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        "service_61jm7gb",
        "template_5jmvz0f",
        form.current,
        "d2LXr5k8_WsERFKAf"
      )
      .then(() => {
        setStatus("success")
        form.current?.reset()

        setTimeout(() => setStatus(""), 3000)
      })
      .catch((error) => {
        console.log(error.text)
        setStatus("error")

        setTimeout(() => setStatus(""), 3000)
      })
  }

  return (
    <section className="relative py-44 bg-zinc-950 overflow-hidden">
      {/* Fondo grid */}
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

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs text-neutral-500 mb-8 tracking-[0.35em] uppercase">
                Contact
              </p>

              <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-8">
                ¿Tenés un proyecto
                <br />
                en mente?
              </h2>

              <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                Si querés trabajar en algo sólido, claro y bien estructurado,
                enviame un mensaje y conversemos.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl 
                bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_55%)] 
                pointer-events-none" 
              />

              <form
                ref={form}
                onSubmit={sendEmail}
                className="relative rounded-3xl border border-zinc-800/60
                  bg-gradient-to-b from-zinc-900/70 to-zinc-950/80
                  backdrop-blur-sm p-12 space-y-8
                  shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              >
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nombre"
                  required
                  className="w-full rounded-xl bg-zinc-950/70 border border-zinc-800
                    px-5 py-4 text-sm text-white placeholder:text-zinc-600
                    focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-white/10"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="w-full rounded-xl bg-zinc-950/70 border border-zinc-800
                    px-5 py-4 text-sm text-white placeholder:text-zinc-600
                    focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-white/10"
                />

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Mensaje"
                  required
                  className="w-full rounded-xl bg-zinc-950/70 border border-zinc-800
                    px-5 py-4 text-sm text-white placeholder:text-zinc-600 resize-none
                    focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-white/10"
                />

                <button
                  type="submit"
                  className="relative px-7 py-3 border border-zinc-600
                    text-white text-sm font-medium tracking-wide
                    transition-all duration-300 hover:-translate-y-0.5
                    hover:border-white hover:bg-white/5
                    hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                >
                  Enviar mensaje
                </button>

                {/* Mensajes */}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center"
                  >
                    Mensaje enviado correctamente 
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    Error al enviar el mensaje 
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
