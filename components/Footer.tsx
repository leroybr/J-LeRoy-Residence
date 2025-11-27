import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-leroy-black text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="font-serif font-semibold tracking-tighter flex items-baseline mb-6 hover:opacity-80 transition-opacity">
              <span className="text-4xl">L</span>
              <span className="text-2xl">e</span>
              <span className="text-4xl -ml-0.5">R</span>
              <span className="text-2xl">oy</span>
              <span className="text-2xl ml-2">Residence</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              La plataforma definitiva para descubrir las propiedades más exclusivas de México y el mundo. Conectando compradores exigentes con residencias extraordinarias.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Bienes Raíces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Desarrollos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Relojes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Joyas</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prensa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Suscríbete para recibir novedades exclusivas.</p>
            <div className="flex border-b border-gray-700 pb-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-transparent w-full text-white placeholder-gray-600 focus:outline-none text-sm"
              />
              <button className="text-xs uppercase font-bold tracking-widest text-white hover:text-gray-300">
                Enviar
              </button>
            </div>
          </div>
          
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} LeRoy Residence. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacidad</a>
             <a href="#" className="hover:text-white">Términos</a>
             <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;