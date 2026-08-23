import { useEffect, useState } from 'react'

function ProjectGallery({ images = [], title }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length, index])

  if (images.length === 0) return null

  return (
    <div className="relative aspect-square w-full bg-neutral-800 md:w-1/2">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Captura ${i + 1} de ${title}`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Mostrar captura ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? 'bg-emerald-400' : 'bg-neutral-500'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProjectGallery
