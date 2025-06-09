import React from 'react';
import { Users, Luggage, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { vehicleTypes } from '../../data/mockData';

export const VehiclesSection: React.FC = () => {
  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Notre Flotte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des véhicules modernes et entretenus, adaptés à tous vos besoins de transport, 
            du particulier aux groupes importants.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicleTypes.map((vehicle, index) => (
            <Card
              key={vehicle.id}
              hover
              className="overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-gold-500 fill-current" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {vehicle.name}
                  </h3>
                  <span className="text-lg font-bold text-primary-600">
                    {vehicle.basePrice.toLocaleString()} FCFA
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {vehicle.description}
                </p>

                {/* Specs */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{vehicle.capacity} places</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Luggage className="h-4 w-4" />
                    <span>Bagages</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {vehicle.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  fullWidth
                  className="border-primary-200 text-primary-600 hover:bg-primary-50"
                >
                  Réserver ce véhicule
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="secondary" size="lg" className="px-8">
            Voir toute la flotte
          </Button>
        </div>
      </div>
    </section>
  );
};