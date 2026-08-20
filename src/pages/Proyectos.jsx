import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

function Proyectos() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-white">Proyectos</h1>
      <div className="mt-8 flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Proyectos