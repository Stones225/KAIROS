import { Zone, VehicleType, Service, Destination } from '../types';

export const zones: Zone[] = [
  {
    id: '1',
    name: 'Dans Dakar',
    code: 'DAKAR',
    description: 'Centre-ville et quartiers de Dakar',
    active: true,
  },
  {
    id: '2',
    name: 'Banlieue',
    code: 'BANLIEUE',
    description: 'Pikine, Thiaroye, Mbao, Rufisque',
    active: true,
  },
  {
    id: '3',
    name: 'Aéroport AIBD',
    code: 'AIRPORT',
    description: 'Transferts depuis/vers l\'aéroport',
    active: true,
  },
  {
    id: '4',
    name: 'Régions',
    code: 'REGIONS',
    description: '25 destinations à travers le Sénégal',
    active: true,
  },
];

export const destinations: Destination[] = [
  // Dakar destinations
  { id: '1', name: 'Plateau', zoneId: '1' },
  { id: '2', name: 'Almadies', zoneId: '1' },
  { id: '3', name: 'Mermoz', zoneId: '1' },
  { id: '4', name: 'Point E', zoneId: '1' },
  
  // Banlieue destinations
  { id: '5', name: 'Pikine', zoneId: '2', basePrice: 15000 },
  { id: '6', name: 'Thiaroye', zoneId: '2', basePrice: 18000 },
  { id: '7', name: 'Mbao', zoneId: '2', basePrice: 20000 },
  { id: '8', name: 'Rufisque', zoneId: '2', basePrice: 25000 },
  
  // Airport
  { id: '9', name: 'Aéroport AIBD', zoneId: '3', basePrice: 25000 },
  
  // Regions (sample)
  { id: '10', name: 'Thiès', zoneId: '4', basePrice: 45000 },
  { id: '11', name: 'Saint-Louis', zoneId: '4', basePrice: 120000 },
  { id: '12', name: 'Kaolack', zoneId: '4', basePrice: 85000 },
  { id: '13', name: 'Ziguinchor', zoneId: '4', basePrice: 250000 },
  { id: '14', name: 'Tambacounda', zoneId: '4', basePrice: 180000 },
];

export const services: Service[] = [
  {
    id: '1',
    name: 'Transfert',
    type: 'transfer',
    description: 'Transport direct d\'un point A à un point B',
    pricing: 'fixed',
  },
  {
    id: '2',
    name: 'Mise à disposition',
    type: 'disposal',
    description: 'Véhicule et chauffeur à votre disposition',
    pricing: 'hourly',
  },
];

export const vehicleTypes: VehicleType[] = [
  {
    id: '1',
    name: 'Berline',
    category: 'berline',
    capacity: 4,
    description: 'Véhicule confortable pour 1-4 passagers',
    features: ['Climatisation', 'Confort premium', 'Chauffeur professionnel'],
    basePrice: 10000,
    imageUrl: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'SUV',
    category: 'suv',
    capacity: 6,
    description: 'Véhicule spacieux pour 1-6 passagers',
    features: ['Grand espace', 'Climatisation', '4x4', 'Bagages volumineux'],
    basePrice: 15000,
    imageUrl: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'VAN',
    category: 'van',
    capacity: 8,
    description: 'Idéal pour les groupes jusqu\'à 8 personnes',
    features: ['8 places', 'Grand coffre', 'Climatisation', 'Confort groupe'],
    basePrice: 20000,
    imageUrl: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '4',
    name: 'Minibus 15 places',
    category: 'minibus',
    capacity: 15,
    description: 'Transport de groupe pour événements',
    features: ['15 places assises', 'Climatisation', 'Espace bagages', 'Microphone'],
    basePrice: 35000,
    imageUrl: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '5',
    name: 'Minibus 28 places',
    category: 'minibus',
    capacity: 28,
    description: 'Idéal pour excursions et grands groupes',
    features: ['28 places', 'Climatisation', 'TV/DVD', 'Grand confort'],
    basePrice: 50000,
    imageUrl: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '6',
    name: 'Minibus 51 places',
    category: 'minibus',
    capacity: 51,
    description: 'Bus touristique pour grands événements',
    features: ['51 places', 'Climatisation', 'WC', 'Bar', 'TV/DVD'],
    basePrice: 80000,
    imageUrl: 'https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];