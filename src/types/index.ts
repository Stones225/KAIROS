export interface User {
  id: string;
  phone: string;
  firstName: string;
  lastName: string;
  email?: string;
  userType: 'individual' | 'business';
  isVerified: boolean;
  createdAt: Date;
}

export interface Zone {
  id: string;
  name: string;
  code: string;
  description: string;
  active: boolean;
}

export interface Destination {
  id: string;
  name: string;
  zoneId: string;
  basePrice?: number;
  estimatedDuration?: number;
}

export interface VehicleType {
  id: string;
  name: string;
  category: 'berline' | 'suv' | 'van' | 'minibus' | 'utilitaire';
  capacity: number;
  description: string;
  features: string[];
  basePrice: number;
  imageUrl: string;
}

export interface Service {
  id: string;
  name: string;
  type: 'transfer' | 'disposal';
  description: string;
  pricing: 'fixed' | 'hourly' | 'quote';
}

export interface Reservation {
  id: string;
  userId: string;
  zoneId: string;
  destinationId?: string;
  serviceId: string;
  vehicleTypeId: string;
  departureDate: Date;
  departureTime: string;
  returnDate?: Date;
  returnTime?: string;
  passengerCount: number;
  totalPrice: number;
  status: ReservationStatus;
  notes?: string;
  createdAt: Date;
}

export type ReservationStatus = 
  | 'quote' 
  | 'confirmed' 
  | 'preparing' 
  | 'in_progress' 
  | 'completed' 
  | 'invoiced' 
  | 'paid' 
  | 'closed';

export interface PricingRule {
  id: string;
  zoneId: string;
  destinationId?: string;
  serviceId: string;
  vehicleTypeId: string;
  basePrice: number;
  hourlyRate?: number;
  minimumHours?: number;
  requiresQuote: boolean;
}