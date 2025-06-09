import React from 'react';
import { Hero } from '../components/home/Hero';
import { ServicesSection } from '../components/home/ServicesSection';
import { VehiclesSection } from '../components/home/VehiclesSection';
import { ZonesSection } from '../components/home/ZonesSection';
import { StatsSection } from '../components/home/StatsSection';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <VehiclesSection />
      <ZonesSection />
      <StatsSection />
    </div>
  );
};