
import React from "react";
import { motion } from "framer-motion";

export default function PuntaGalaLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      {/* Header */}
      <header className="text-center mb-10">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold tracking-wide">
          PUNTA GALA
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg mt-2 text-gray-600">
          Arte en Bordado | Parches con estilo
        </motion.p>
      </header>

      {/* Nuevos lanzamientos */}
      <section className="max-w-4xl mx-auto text-center my-12">
        <h2 className="text-2xl font-bold mb-4">🆕 Novedades recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-4">
            <img src="/img/akatsuki_patch.jpg" alt="Parche Akatsuki" className="rounded-lg" />
            <p className="mt-2 font-semibold">Parche Akatsuki</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img src="/img/sharingan_patch.jpg" alt="Parche Sharingan" className="rounded-lg" />
            <p className="mt-2 font-semibold">Parche Sharingan</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <img src="/img/pokeball_patch.jpg" alt="Parche Pokébola" className="rounded-lg" />
            <p className="mt-2 font-semibold">Parche Pokébola</p>
          </div>
        </div>
      </section>

      {/* Categorías del catálogo */}
      <section className="text-center my-10">
        <h2 className="text-2xl font-bold mb-6">🎨 Catálogo por Categorías</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['Anime', 'Videojuegos', 'Memes', 'Cultura Pop', 'Personalizados'].map((cat) => (
            <button key={cat} className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Galería de productos */}
      <section className="my-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">📸 Galería de Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['sabito', 'zoro', 'kame', 'libertad', 'naruto', 'onepiece'].map((img) => (
            <div key={img} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={`/img/${img}_patch.jpg`} alt={img} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="my-16 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">📬 Contáctanos</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Tu nombre" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Correo electrónico" className="w-full border p-2 rounded" />
          <textarea placeholder="Tu mensaje" className="w-full border p-2 rounded h-32"></textarea>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5210000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        📲 WhatsApp
      </a>

      {/* Footer */}
      <footer className="mt-20 border-t pt-6 text-center text-sm text-gray-500">
        <p>&copy; 2025 Punta Gala. Todos los derechos reservados.</p>
        <p>Accesible. Inclusivo. Creativo.</p>
      </footer>
    </div>
  );
}
