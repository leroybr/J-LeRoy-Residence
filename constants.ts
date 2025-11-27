
import { Property, PropertyType } from './types';

export const COMMUNES = [
  'Concepción',
  'Chiguayante',
  'San Pedro de la Paz',
  'Talcahuano',
  'Coronel',
  'Penco',
  'Los Ángeles'
];

export const MOCK_PROPERTIES: Property[] = [
  // --- Propiedades Internacionales (Existentes) ---
  {
    id: '1',
    title: 'Villa Moderna Frente al Mar',
    location: 'Marbella, España',
    price: 4500000,
    currency: '€',
    imageUrl: 'https://picsum.photos/seed/leroy1/800/600',
    bedrooms: 5,
    bathrooms: 6,
    area: 650,
    type: PropertyType.VILLA,
    description: 'Espectacular villa moderna con acceso directo a la playa y vistas panorámicas al Mediterráneo.'
  },
  {
    id: '5',
    title: 'Residencia Exclusiva en Pedregal',
    location: 'Cabo San Lucas, México',
    price: 12500000,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=800&auto=format&fit=crop',
    bedrooms: 7,
    bathrooms: 9,
    area: 1500,
    type: PropertyType.MANSION,
    description: 'Obra maestra de la arquitectura con vistas al Arco y al Océano Pacífico.'
  },
  {
    id: '7',
    title: 'Eco-Villa en la Selva',
    location: 'Tulum, México',
    price: 4200000,
    currency: '$',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=800&auto=format&fit=crop',
    bedrooms: 4,
    bathrooms: 4,
    area: 320,
    type: PropertyType.VILLA,
    description: 'Santuario privado rodeado de naturaleza exuberante.'
  },

  // --- Propiedades Octava Región (Nuevas) ---
  {
    id: 'cl-1',
    title: 'Casa Estilo Georgiano en Lonco Parque',
    location: 'Chiguayante, Chile',
    price: 18500,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-2a434f678417?q=80&w=800&auto=format&fit=crop',
    bedrooms: 5,
    bathrooms: 4,
    area: 420,
    type: PropertyType.MANSION,
    description: 'Exclusiva propiedad en el sector más consolidado de Chiguayante con amplios jardines.'
  },
  {
    id: 'cl-2',
    title: 'Penthouse con Vista al Río Biobío',
    location: 'San Pedro de la Paz, Chile',
    price: 12500,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=800&auto=format&fit=crop',
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    type: PropertyType.PENTHOUSE,
    description: 'Vista panorámica inigualable hacia Concepción y desembocadura, Condominio Andalué.'
  },
  {
    id: 'cl-3',
    title: 'Casona Patronal Remodelada',
    location: 'Los Ángeles, Chile',
    price: 25000,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=800&auto=format&fit=crop',
    bedrooms: 8,
    bathrooms: 6,
    area: 850,
    type: PropertyType.ESTATE,
    description: 'Finca histórica a minutos del centro, ideal para proyecto hotelero o residencia de lujo.'
  },
  {
    id: 'cl-4',
    title: 'Departamento Moderno Centro',
    location: 'Concepción, Chile',
    price: 8500,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    type: PropertyType.APARTMENT,
    description: 'Ubicación privilegiada frente al Parque Ecuador, acabados de primera calidad.'
  },
  {
    id: 'cl-5',
    title: 'Casa Mediterránea en El Venado',
    location: 'San Pedro de la Paz, Chile',
    price: 22000,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    bedrooms: 6,
    bathrooms: 5,
    area: 380,
    type: PropertyType.VILLA,
    description: 'Arquitectura de vanguardia en el barrio más exclusivo de la región.'
  },
  {
    id: 'cl-6',
    title: 'Parcela de Agrado con Vista al Mar',
    location: 'Penco, Chile',
    price: 9500,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop',
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    type: PropertyType.ESTATE,
    description: 'Tranquilidad absoluta en sector Lirquén, rodeado de bosque nativo.'
  },
  {
    id: 'cl-7',
    title: 'Departamento Duplex Puerto',
    location: 'Talcahuano, Chile',
    price: 6800,
    currency: 'UF',
    imageUrl: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?q=80&w=800&auto=format&fit=crop',
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    type: PropertyType.APARTMENT,
    description: 'Vista despejada a la bahía, sector Brisas del Sol, cercano a Casino.'
  }
];
