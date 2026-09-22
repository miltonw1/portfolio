function Contacto() {
  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-white">Contacto</h1>
      <div className="mt-4 flex flex-col gap-2 text-neutral-400">
        <p>
          Email:{' '}
          <a
            href="mailto:milton.wery@gmail.com"
            className="text-emerald-400 transition-colors hover:text-emerald-300"
          >
            milton.wery@gmail.com
          </a>
        </p>
        <p>
          Teléfono:{' '}
          <a
            href="tel:+543424287821"
            className="text-emerald-400 transition-colors hover:text-emerald-300"
          >
            +54 342 4287821
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contacto
