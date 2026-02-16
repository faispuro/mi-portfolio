export interface Project {
  title: string
  description: string
  stack: string[]
  image: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: "Task Manager",
    description:
      "Aplicación full stack con autenticación JWT y gestión de tareas en tiempo real.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    image: "/projects/task-manager.png",
    github: "#",
    demo: "#",
  },
  {
    title: "E-commerce API",
    description:
      "API REST estructurada con arquitectura modular y conexión a base de datos SQL.",
    stack: ["Node.js", "Express", "SQL"],
    image: "/projects/ecommerce.png",
    github: "#",
  },
  
]
