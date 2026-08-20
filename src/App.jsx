import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-neutral-200">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <section id="inicio" className="py-16">
          <h1 className="text-4xl font-bold text-white">Hola, soy Milton Wery</h1>
          <p className="mt-4 max-w-2xl text-neutral-400">
            Desarrollador... agrega aquí tu descripción.
          </p>
        </section>

        <section id="proyectos" className="py-16">
          <h2 className="text-2xl font-bold text-white">Proyectos</h2>
        </section>

        <section id="contacto" className="py-16">
          <h2 className="text-2xl font-bold text-white">Contacto</h2>
        </section>
      </main>

      <footer className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Milton Wery
      </footer>
    </div>
  )
}

export default App