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
    image: "projects/portfolio.png",
    github: "https://github.com/faispuro/Portfolio-Arquitectura",
    demo: "https://faispuro.github.io/Portfolio-Arquitectura/",
  },
  {
    title: "Aurora Café",
    description:
      "Landing page web para una cafetería ficticia, con diseño moderno, menú interactivo y enfoque en experiencia visual y navegación responsive.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "projects/aurora.png",
    github: "https://github.com/faispuro/Aurora-Cafe",
    demo: "https://faispuro.github.io/Aurora-Cafe/",
  },
{
  title: "E-commerce",
  description:
    "Aplicación web de e-commerce de repuestos automotrices desarrollada como proyecto académico colaborativo con arquitectura full-stack. Mi aporte incluyó el desarrollo del frontend, diseño de la interfaz y validación de formularios.",
  stack: ["React", "Node.js", "Express", "SQL"],
  image: "projects/e-commerce.png",
  github: "https://github.com/Matias-ops-maker/Proyecto-Final-Integrador",
}

]
