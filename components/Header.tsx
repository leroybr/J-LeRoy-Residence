import React, { useState, useEffect } from 'react';
import { COMMUNES } from '../constants';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentView: 'home' | 'listing' | 'admin' | 'detail';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Bienes Raíces', id: 'real_estate' },
    { label: 'Desarrollos', id: 'developments' },
    ...COMMUNES.map(commune => ({ label: commune, id: commune }))
  ];

  // Logic: Transparent on Home (unless scrolled), Solid White on Listing/Admin/Detail Pages always
  const isHome = currentView === 'home';
  const headerClass = isHome && !scrolled
    ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white py-6'
    : 'bg-white text-leroy-black shadow-sm py-4 border-b border-gray-100';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${headerClass}`}
    >
      <div className="w-full px-6 md:px-12">
        <div className="flex flex-col items-start">
          
          {/* Top Row: Logo & Actions */}
          <div className="flex justify-between items-end w-full">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="font-serif font-semibold tracking-tighter flex items-baseline hover:opacity-90 transition-opacity select-none">
                {/* L and R larger as requested, style mimic JamesEdition (tight, serif, bold) */}
                <span className="text-5xl">L</span>
                <span className="text-3xl">e</span>
                <span className="text-5xl -ml-0.5">R</span>
                <span className="text-3xl">oy</span>
                
                {/* Suffix unified with main brand */}
                <span className="text-3xl ml-2">
                  Residence
                </span>
              </div>
            </div>

            {/* Desktop Actions (Right aligned on top row) */}
            <div className="hidden md:flex items-center space-x-8 mb-2">
              <button 
                onClick={() => onNavigate('admin')}
                className="text-xs font-bold tracking-widest uppercase hover:text-leroy-gold transition-colors"
              >
                Ingresar
              </button>
              <button 
                onClick={() => onNavigate('admin')}
                className={`border px-6 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all ${isHome && !scrolled ? 'border-white hover:bg-white/10' : 'border-leroy-black hover:bg-black/5'}`}
              >
                Publicar
              </button>
            </div>
            
            {/* Mobile Controls */}
            <div className="flex items-center md:hidden mb-1 space-x-4">
               <button className="p-1" onClick={() => onNavigate('admin')}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
               </button>
               <button className="p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Row: Navigation (Stacked below branding) */}
          <nav className="hidden md:flex mt-4 flex-wrap gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => onNavigate(item.id)}
                className="text-[11px] font-bold tracking-[0.15em] uppercase hover:text-leroy-gold transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-leroy-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;