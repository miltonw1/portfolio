function ProjectCard({ project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50 md:flex-row">
      <div className="flex md:w-1/2">
        <div className="flex flex-col justify-center gap-3 p-8">
          <h2 className="text-xl font-semibold text-white">
            {project.title}
          </h2>
          <p className="text-sm text-neutral-400">{project.description}</p>
          {project.tech && (
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border border-neutral-700 px-2 py-0.5 text-xs text-emerald-400"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="aspect-square w-full bg-neutral-800 md:w-1/2">
        <img
          src={project.image}
          alt={`Captura de ${project.title}`}
          className="h-full w-full object-cover"
        />
      </div>
    </article>
  )
}

export default ProjectCard