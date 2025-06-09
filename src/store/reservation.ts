import { create } from 'zustand';
import { Zone, Destination, VehicleType, Service } from '../types';

interface ReservationState {
  selectedZone: Zone | null;
  selectedDestination: Destination | null;
  selectedService: Service | null;
  selectedVehicleType: VehicleType | null;
  departureDate: Date | null;
  departureTime: string;
  returnDate: Date | null;
  returnTime: string;
  passengerCount: number;
  totalPrice: number;
  
  setZone: (zone: Zone | null) => void;
  setDestination: (destination: Destination | null) => void;
  setService: (service: Service | null) => void;
  setVehicleType: (vehicleType: VehicleType | null) => void;
  setDepartureDate: (date: Date | null) => void;
  setDepartureTime: (time: string) => void;
  setReturnDate: (date: Date | null) => void;
  setReturnTime: (time: string) => void;
  setPassengerCount: (count: number) => void;
  setTotalPrice: (price: number) => void;
  resetReservation: () => void;
}

export const useReservationStore = create<ReservationState>((set) => ({
  selectedZone: null,
  selectedDestination: null,
  selectedService: null,
  selectedVehicleType: null,
  departureDate: null,
  departureTime: '',
  returnDate: null,
  returnTime: '',
  passengerCount: 1,
  totalPrice: 0,
  
  setZone: (zone) => set({ selectedZone: zone }),
  setDestination: (destination) => set({ selectedDestination: destination }),
  setService: (service) => set({ selectedService: service }),
  setVehicleType: (vehicleType) => set({ selectedVehicleType: vehicleType }),
  setDepartureDate: (date) => set({ departureDate: date }),
  setDepartureTime: (time) => set({ departureTime: time }),
  setReturnDate: (date) => set({ returnDate: date }),
  setReturnTime: (time) => set({ returnTime: time }),
  setPassengerCount: (count) => set({ passengerCount: count }),
  setTotalPrice: (price) => set({ totalPrice: price }),
  resetReservation: () => set({
    selectedZone: null,
    selectedDestination: null,
    selectedService: null,
    selectedVehicleType: null,
    departureDate: null,
    departureTime: '',
    returnDate: null,
    returnTime: '',
    passengerCount: 1,
    totalPrice: 0,
  }),
}));