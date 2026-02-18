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
    title: "Portfolio Arquitectura",
    description:
      "Portfolio web para un estudio de arquitectura, enfocado en una experiencia visual limpia, navegación fluida y presentación profesional de proyectos.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/portfolio-arquitectura.png",
    github: "https://github.com/faispuro/Portfolio-Arquitectura",
    demo: "https://faispuro.github.io/Portfolio-Arquitectura/",
  },
  {
    title: "Aurora Café",
    description:
      "Landing page web para una cafetería ficticia, con diseño moderno, menú interactivo y enfoque en experiencia visual y navegación responsive.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/aurora-cafe.png",
    github: "https://github.com/faispuro/Aurora-Cafe",
    demo: "https://faispuro.github.io/Aurora-Cafe/",
  },
  {
  title: "Mini E-commerce",
  description:
    "Aplicación web de e-commerce simple con catálogo de productos, carrito de compras y diseño responsive orientado a práctica de frontend.",
  stack: ["HTML", "CSS", "JavaScript"],
  image: "/projects/mini-ecommerce.png",
  github: "https://github.com/faispuro/mini-ecommerce",
  demo: "#",
},

]
