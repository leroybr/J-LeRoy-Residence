
import React, { useState } from 'react';
import { Property, PropertyType } from '../types';
import { COMMUNES } from '../constants';

interface AdminViewProps {
  onAddProperty: (property: Property) => void;
  onCancel: () => void;
}

const AdminView: React.FC<AdminViewProps> = ({ onAddProperty, onCancel }) => {
  // Public Data State
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(COMMUNES[0]);
  const [price, setPrice] = useState<number>(0);
  const [currency, setCurrency] = useState('UF'); // Default to UF
  const [type, setType] = useState<PropertyType>(PropertyType.VILLA);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [area, setArea] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  // Private Data State
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [legalDescription, setLegalDescription] = useState('');
  const [privateNotes, setPrivateNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProperty: Property = {
      id: `custom-${Date.now()}`,
      title,
      location: `${location}, Chile`, // Appending country for consistency
      price,
      currency,
      type,
      bedrooms,
      bathrooms,
      area,
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop', // Default fallback
      description,
      privateData: {
        ownerName,
        ownerPhone,
        legalDescription,
        privateNotes
      }
    };

    onAddProperty(newProperty);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-serif text-3xl text-leroy-black">Nueva Ficha de Propiedad</h1>
          <button onClick={onCancel} className="text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black">
            Cancelar
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Public Data Section */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-leroy-gold mb-6 border-b pb-2">
              Datos Públicos (Ficha Web)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Título de la Publicación</label>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm focus:border-leroy-gold focus:ring-0" placeholder="Ej: Espectacular Casa en El Venado" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Ubicación (Comuna)</label>
                <select value={location} onChange={e => setLocation(e.target.value)} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm focus:border-leroy-gold focus:ring-0">
                  {COMMUNES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Tipo de Propiedad</label>
                <select value={type} onChange={e => setType(e.target.value as PropertyType)} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm focus:border-leroy-gold focus:ring-0">
                  {Object.values(PropertyType).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Precio (Valor)</label>
                <input required type="number" min="0" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm focus:border-leroy-gold focus:ring-0" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Moneda</label>
                <select value={currency} onChange={e => setCurrency(e.target.value)} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm focus:border-leroy-gold focus:ring-0">
                  <option value="UF">UF</option>
                  <option value="$">Pesos (CLP)</option>
                  <option value="USD">Dólares (USD)</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-4 col-span-2 md:col-span-1">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Dormitorios</label>
                  <input type="number" min="0" value={bedrooms} onChange={e => setBedrooms(Number(e.target.value))} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">Baños</label>
                  <input type="number" min="0" value={bathrooms} onChange={e => setBathrooms(Number(e.target.value))} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-500 mb-1">M2 Totales</label>
                  <input type="number" min="0" value={area} onChange={e => setArea(Number(e.target.value))} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm" />
                </div>
              </div>

              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">URL de Imagen Principal</label>
                <input type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm" placeholder="https://..." />
                <p className="text-[10px] text-gray-400 mt-1">Si se deja vacío, se usará una imagen genérica.</p>
              </div>

              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Descripción Pública</label>
                <textarea required rows={4} value={description} onChange={e => setDescription(e.target.value)} className="w-full border-gray-200 bg-gray-50 p-3 rounded text-sm" placeholder="Detalles atractivos para el cliente..."></textarea>
              </div>
            </div>
          </div>

          {/* Private Data Section */}
          <div className="bg-red-50 p-8 rounded-lg shadow-sm border border-red-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-100 px-3 py-1 rounded-bl-lg text-[10px] font-bold text-red-800 uppercase tracking-widest">
              Confidencial
            </div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-red-800 mb-6 border-b border-red-200 pb-2">
              Datos Privados (Interno)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Nombre Propietario</label>
                <input type="text" value={ownerName} onChange={e => setOwnerName(e.target.value)} className="w-full border-red-100 bg-white p-3 rounded text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Teléfono / Contacto</label>
                <input type="text" value={ownerPhone} onChange={e => setOwnerPhone(e.target.value)} className="w-full border-red-100 bg-white p-3 rounded text-sm" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Datos Legales (Rol, Inscripción)</label>
                <input type="text" value={legalDescription} onChange={e => setLegalDescription(e.target.value)} className="w-full border-red-100 bg-white p-3 rounded text-sm" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Notas Internas</label>
                <textarea rows={3} value={privateNotes} onChange={e => setPrivateNotes(e.target.value)} className="w-full border-red-100 bg-white p-3 rounded text-sm" placeholder="Acuerdos de comisión, disponibilidad de llaves, etc."></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
             <button type="submit" className="bg-leroy-black text-white px-10 py-4 rounded text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg">
               Guardar y Publicar
             </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AdminView;
