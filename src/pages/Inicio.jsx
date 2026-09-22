const stack = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Quasar'],
  },
  {
    category: 'Backend',
    items: ['C#', 'ASP.NET', 'NestJS', 'REST APIs'],
  },
  {
    category: 'Testing',
    items: ['xUnit', 'Robot Framework', 'End-to-End Testing', 'Manual Testing'],
  },
  {
    category: 'State Management',
    items: ['Zustand'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQL Server', 'MySQL'],
  },
  {
    category: 'AI Tools',
    items: ['GitHub Copilot', 'Claude', 'Google Gemini'],
  },
  {
    category: 'Tools',
    items: ['Git'],
  },
]

function Inicio() {
  return (
    <section className="py-16">
      <div className="max-w-3xl">
        <p className="text-emerald-400">Hola, soy</p>
        <h1 className="mt-2 text-5xl font-bold text-white">Milton Wery</h1>
        <h2 className="mt-2 text-2xl font-semibold text-neutral-300">
          Full Stack Developer
        </h2>
        <p className="mt-6 text-neutral-400">
          Con experiencia en el desarrollo de aplicaciones web utilizando React,
          Vue, NestJS y .NET. Trabajo en frontend y backend, testing automatizado
          (xUnit, Robot Framework) y en equipos ágiles, enfocado en buenas
          prácticas, calidad de software y aplicaciones escalables y mantenibles.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-white">Stack Tecnológico</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-neutral-700 px-2 py-0.5 text-xs text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Inicio
