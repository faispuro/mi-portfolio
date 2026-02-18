import React from "react"
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si"

export const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  "Node.js": <SiNodedotjs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  SQL: <SiPostgresql />,

  // ✅ nuevos
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
}
