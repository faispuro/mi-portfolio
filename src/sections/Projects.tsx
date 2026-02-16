import { motion } from "framer-motion"
import Container from "../layout/Container"
import { projects } from "../data/projects"
import { techIcons } from "../data/techIcons"

const Projects = () => {
  return (
    <section
      className="relative py-36 overflow-hidden 
                 bg-gradient-to-br from-zinc-900 via-black to-zinc-950"
    >
      {/* Fondo de cuadrícula sutil como About */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="h-full w-full 
             bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),
                 linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] 
             bg-[size:80px_80px]" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-28 max-w-2xl"
          >
            <p className="text-xs text-neutral-500 mb-8 tracking-[0.35em] uppercase">
              Selected Work
            </p>

            <h2 className="relative text-4xl md:text-6xl font-medium text-white tracking-tight leading-tight">
              <span className="absolute -inset-6 bg-white/5 blur-3xl rounded-full -z-10" />
              Proyectos seleccionados
            </h2>
          </motion.div>

          {/* Layout alternado */}
          <div className="space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="grid md:grid-cols-2 gap-16 items-center"
                >
                  {/* Imagen */}
                  <div className={`${isEven ? "" : "md:order-2"}`}>
                    <div
                      className="group relative overflow-hidden rounded-2xl
                                 transition-all duration-500"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[360px] object-cover
                                   group-hover:scale-105
                                   transition-transform duration-700"
                      />

                      <div
                        className="absolute inset-0 bg-black/30 opacity-0
                                   group-hover:opacity-100
                                   transition-opacity duration-500"
                      />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className={`${isEven ? "" : "md:order-1"}`}>
                    {/* Categoría */}
                    <p className="text-xs tracking-widest uppercase text-neutral-500 mb-3">
                      Full Stack Project
                    </p>

                    <h3 className="text-2xl md:text-3xl text-white font-medium mb-6">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 leading-relaxed mb-8 max-w-lg text-base">
                      {project.description}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-5 text-xl text-neutral-500 mb-10">
                      {project.stack.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="transition-all duration-300 hover:text-white hover:scale-110"
                          title={tech}
                        >
                          {techIcons[tech] || tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links refinados */}
                    <div className="flex gap-10 text-sm">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group text-neutral-400 hover:text-white transition"
                        >
                          GitHub
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group text-neutral-400 hover:text-white transition"
                        >
                          Live Demo
                          <span className="absolute left-0 -bottom-1 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
