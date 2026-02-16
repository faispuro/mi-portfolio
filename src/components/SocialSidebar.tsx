import { Github, Linkedin } from "lucide-react"

const SocialSidebar = () => {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-50">

      <a
        href="https://github.com/tuusuario"
        target="_blank"
        className="text-zinc-500 hover:text-white transition"
      >
        <Github size={20} />
      </a>

      <a
        href="https://linkedin.com/in/tuusuario"
        target="_blank"
        className="text-zinc-500 hover:text-white transition"
      >
        <Linkedin size={20} />
      </a>

    </div>
  )
}

export default SocialSidebar
