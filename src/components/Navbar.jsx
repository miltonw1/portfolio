import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/contacto', label: 'Contacto' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center border-b border-neutral-800 bg-gray-900/90 px-6 py-4 backdrop-blur">
      <Link
        to="/"
        className="font-semibold text-white transition-colors hover:text-emerald-400"
      >
        [ Milton Wery ]
      </Link>

      <nav className="flex justify-center gap-6 text-lg text-neutral-400">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `transition-colors hover:text-emerald-400 ${
                isActive ? 'text-emerald-400' : ''
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div />
    </header>
  )
}

export default Navbar