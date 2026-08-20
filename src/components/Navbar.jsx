function Navbar() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center border-b border-neutral-800 bg-[#0a0a0a]/90 px-6 py-4 backdrop-blur">
      <a href="#inicio" className="font-semibold text-white">
        Milton Wery
      </a>

      <nav className="flex justify-center gap-6 text-sm text-neutral-400">
        <a href="#inicio" className="transition-colors hover:text-white">
          Inicio
        </a>
        <a href="#proyectos" className="transition-colors hover:text-white">
          Proyectos
        </a>
        <a href="#contacto" className="transition-colors hover:text-white">
          Contacto
        </a>
      </nav>

      <div />
    </header>
  )
}

export default Navbar