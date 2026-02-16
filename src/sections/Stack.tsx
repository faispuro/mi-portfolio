import { motion } from "framer-motion"
import Container from "../layout/Container"
import { 
  SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, 
  SiPython, SiSharp, SiMongodb, SiMysql, SiLinux 
} from "react-icons/si"

const technologies = [
  { name: "React", icon: <SiReact size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "C#", icon: <SiSharp size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "SQL", icon: <SiMysql size={40} /> },
  { name: "Linux", icon: <SiLinux size={40} /> },
]

const Stack = () => {
  return (
    <section className="relative py-14 min-h-[60vh] flex flex-col items-center overflow-hidden
                        bg-gradient-to-br from-black via-zinc-900 to-black">

      {/* Fondo de cuadrícula visible siempre, z-0 para que quede detrás */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="h-full w-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(to right, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.07) 0, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 80px)
            `,
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* Título centrado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-neutral-500 mb-6 tracking-[0.25em] uppercase">
            Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight">
            Tecnologías con las que construyo software moderno
          </h2>
        </motion.div>

        {/* Grid de iconos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg
                         rounded-full p-6
                         flex items-center justify-center
                         text-white text-2xl
                         transition-transform duration-500
                         hover:-translate-y-2 hover:scale-110
                         hover:rotate-12 hover:shadow-xl
                         cursor-pointer"
              title={tech.name}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stack
