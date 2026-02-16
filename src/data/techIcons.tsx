import React from "react"
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
} from "react-icons/si"

export const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  SQL: <SiPostgresql />,
}
