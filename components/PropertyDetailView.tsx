
import React, { useState } from 'react';
import { Property } from '../types';

interface PropertyDetailViewProps {
  property: Property;
}

const UF_VALUE_CLP = 37800;
const USD_VALUE_CLP = 950;
const EUR_VALUE_CLP = 1020;

// Helper to convert any currency to UF and CLP strings
const getPriceDisplay = (price: number, currency: string) => {
  let priceUF = 0;
  let priceCLP = 0;
  const cleanCurrency = currency.trim();

  if (cleanCurrency === 'UF') {
    priceUF = price;
    priceCLP = price * UF_VALUE_CLP;
  } else if (cleanCurrency === '$' || cleanCurrency === 'USD') {
    priceCLP = price * USD_VALUE_CLP;
    priceUF = priceCLP / UF_VALUE_CLP;
  } else if (cleanCurrency === '€') {
    priceCLP = price * EUR_VALUE_CLP;
    priceUF = priceCLP / UF_VALUE_CLP;
  } else {
    // Fallback assuming CLP
    priceCLP = price;
    priceUF = price / UF_VALUE_CLP;
  }

  return {
    uf: `UF ${priceUF.toLocaleString('es-CL', { maximumFractionDigits: 0 })}`,
    clp: `$ ${priceCLP.toLocaleString('es-CL')}`
  };
};

// Mock additional images to populate the gallery grid
const ADDITIONAL_IMAGES = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop", // Modern Interior
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop", // Pool
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop", // Kitchen
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"  // Bedroom
];

const PropertyDetailView: React.FC<PropertyDetailViewProps> = ({ property }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Combine main property image with mock additional images for the gallery
  const galleryImages = [property.imageUrl, ...ADDITIONAL_IMAGES];

  const { uf, clp } = getPriceDisplay(property.price, property.currency);

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen font-sans relative">
      
      {/* Styles injected specifically for this component layout */}
      <style>{`
        .gallery {
          display: grid;
          /* Left column (2fr) for big image, two Right columns (1fr 1fr) for small images */
          grid-template-columns: 2fr 1fr 1fr; 
          grid-template-rows: 250px 250px; /* Fixed height rows */
          gap: 10px;
          height: 510px; /* Total height + gap */
        }
        
        @media (max-width: 768px) {
          .gallery {
            display: flex;
            flex-direction: column;
            height: auto;
          }
          .gallery img {
            height: 250px;
          }
        }

        .gallery img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0px; /* Cleaner look */
          cursor: pointer;
          transition: filter 0.3s ease;
        }
        
        .gallery img:hover {
            filter: brightness(0.9);
        }

        /* The first image (Big) takes the first column and spans both rows */
        .gallery img:nth-child(1) {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }

        /* Modal Styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: zoom-out;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }

        .modal img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 2px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
      `}</style>

      {/* 1. Header / Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="text-xs text-gray-400 mb-6 uppercase tracking-wider font-sans">
          <span>Inicio</span> <span className="mx-2">/</span>
          <span>Bienes Raíces</span> <span className="mx-2">/</span>
          <span>{property.location.split(',')[0]}</span> <span className="mx-2">/</span>
          <span className="text-leroy-black font-semibold">{property.id}</span>
        </nav>
        
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="w-full">
            {/* Title: Playfair Display, Semi-bold, ~36px (text-4xl) */}
            <h1 className="font-serif font-semibold text-3xl md:text-4xl text-leroy-black mb-3 leading-tight">
              {property.title}
            </h1>
            <div className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 font-sans">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {property.location}
            </div>
          </div>
          
          {/* Price removed from here - moved below images */}
        </div>
      </div>

      {/* 2. Custom Grid Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="gallery">
           {galleryImages.map((imgUrl, index) => (
             <img 
               key={index}
               src={imgUrl} 
               alt={`Vista de propiedad ${index + 1}`}
               onClick={() => setSelectedImage(imgUrl)}
             />
           ))}
        </div>
      </div>

      {/* 3. Price & Subtitle Section (Below Images, Left Aligned) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col items-start">
          {/* Price: Playfair Display, Semibold (600), ~48px (text-5xl) */}
          <span className="font-serif font-semibold text-5xl text-leroy-black">
              {uf}
          </span>
          {/* Secondary Price: Manrope (Sans), normal weight */}
          <span className="text-xl text-gray-500 font-light mt-1 font-sans">
              {clp}
          </span>
          {/* Subtitle / Short Description: Inter, Medium, 19px, #555 */}
          <p className="font-inter font-medium text-[19px] text-[#555] mt-4 max-w-3xl leading-relaxed">
            {property.description}
          </p>
        </div>
      </div>

      {/* 4. Content Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Details (8 cols) */}
          <div className="lg:col-span-8">
            
            {/* Specs Bar */}
            <div className="flex flex-wrap border-y border-gray-100 py-6 mb-10 gap-x-12 gap-y-4">
              <div>
                <span className="block text-[10px] font-bold uppercase text-gray-400 mb-1 font-sans">Habitaciones</span>
                {/* Data: Playfair Display, Medium, ~18px (text-lg) */}
                <span className="text-lg font-medium font-serif text-leroy-black">{property.bedrooms}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase text-gray-400 mb-1 font-sans">Baños</span>
                {/* Data: Playfair Display, Medium, ~18px (text-lg) */}
                <span className="text-lg font-medium font-serif text-leroy-black">{property.bathrooms}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase text-gray-400 mb-1 font-sans">Área Interior</span>
                {/* Data: Playfair Display, Medium, ~18px (text-lg) */}
                <span className="text-lg font-medium font-serif text-leroy-black">{property.area} m²</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase text-gray-400 mb-1 font-sans">Tipo</span>
                {/* Data: Playfair Display, Medium, ~18px (text-lg) */}
                <span className="text-lg font-medium font-serif text-leroy-black">{property.type}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              {/* Subtitle: Playfair Display, Regular, ~24px (text-2xl) */}
              <h2 className="font-serif font-normal text-2xl text-leroy-black mb-6">Sobre esta propiedad</h2>
              <div className="prose prose-lg text-gray-500 max-w-none leading-relaxed font-sans">
                {/* Using description again or we could use a longer lorem ipsum for the body to differentiate */}
                <p>{property.description}</p>
                <p className="mt-4">
                  Esta residencia ofrece una combinación inigualable de lujo y privacidad. Diseñada pensando en el confort, 
                  cada espacio ha sido optimizado para aprovechar la luz natural y las vistas del entorno. Los acabados de alta gama, 
                  incluyendo mármol importado y maderas nobles, reflejan la calidad de construcción.
                </p>
                <p className="mt-4">
                  Ubicada en {property.location}, los residentes disfrutarán de acceso cercano a servicios exclusivos, 
                  colegios de prestigio y áreas recreativas, manteniendo siempre la tranquilidad de un barrio residencial consolidado.
                </p>
              </div>
            </div>

            {/* Amenities (Mock) */}
            <div className="mb-16">
               {/* Subtitle: Playfair Display, Regular, ~24px (text-2xl) */}
               <h2 className="font-serif font-normal text-2xl text-leroy-black mb-6">Comodidades</h2>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                 {['Piscina Privada', 'Seguridad 24/7', 'Jardines', 'Estacionamiento', 'Quincho / BBQ', 'Calefacción Central', 'Vista Panorámica', 'Cocina Equipada'].map((amenity) => (
                   <div key={amenity} className="flex items-center text-sm text-gray-600 font-sans">
                     <svg className="w-4 h-4 mr-2 text-leroy-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     {amenity}
                   </div>
                 ))}
               </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm shadow-sm">
                <h3 className="font-serif text-2xl text-leroy-black mb-2">Interesado?</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-6 font-sans">Contactar Agente</p>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                     <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Agente" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-leroy-black font-sans">Sarah Jenkins</div>
                    <div className="text-xs text-gray-500 font-sans">LeRoy Senior Partner</div>
                  </div>
                </div>

                <form className="space-y-4 font-sans">
                  <input type="text" placeholder="Nombre" className="w-full bg-white border border-gray-200 p-3 text-sm focus:border-black outline-none transition-colors" />
                  <input type="email" placeholder="Email" className="w-full bg-white border border-gray-200 p-3 text-sm focus:border-black outline-none transition-colors" />
                  <input type="tel" placeholder="Teléfono" className="w-full bg-white border border-gray-200 p-3 text-sm focus:border-black outline-none transition-colors" />
                  <textarea rows={3} placeholder="Hola, estoy interesado en esta propiedad..." className="w-full bg-white border border-gray-200 p-3 text-sm focus:border-black outline-none transition-colors"></textarea>
                  
                  <button className="w-full bg-leroy-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    Solicitar Información
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                   <button className="text-xs font-bold uppercase tracking-widest text-leroy-black hover:opacity-70 flex items-center justify-center w-full font-sans">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                     </svg>
                     Llamar Ahora
                   </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Vista ampliada" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

    </div>
  );
};

export default PropertyDetailView;
