import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { zones } from '../../data/mockData';

export const ZonesSection: React.FC = () => {
  const zoneDetails = [
    {
      id: '1',
      name: 'Dans Dakar',
      image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Centre-ville, quartiers résidentiels et administratifs',
      highlights: ['Plateau', 'Almadies', 'Mermoz', 'Point E'],
      startingPrice: '10 000',
    },
    {
      id: '2',
      name: 'Banlieue',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Zones périphériques et communes environnantes',
      highlights: ['Pikine', 'Thiaroye', 'Mbao', 'Rufisque'],
      startingPrice: '15 000',
    },
    {
      id: '3',
      name: 'Aéroport AIBD',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Transferts aéroport avec service VIP',
      highlights: ['Accueil personnalisé', 'Suivi de vol', 'Service bagages'],
      startingPrice: '25 000',
    },
    {
      id: '4',
      name: 'Régions',
      image: 'https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: '25 destinations à travers tout le Sénégal',
      highlights: ['Saint-Louis', 'Thiès', 'Kaolack', 'Ziguinchor'],
      startingPrice: '45 000',
    },
  ];

  return (
    <section id="zones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Zones de Couverture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Service de transport dans toutes les zones du Sénégal. 
            De Dakar aux régions les plus reculées, nous vous accompagnons partout.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {zoneDetails.map((zone, index) => (
            <Card
              key={zone.id}
              hover
              className="overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary-600 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {zone.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {zone.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1 mb-4">
                  {zone.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1 h-1 bg-primary-600 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">À partir de</p>
                    <p className="text-lg font-bold text-primary-600">
                      {zone.startingPrice} FCFA
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-600 hover:text-primary-700 p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Map CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Calculer votre trajet
            </h3>
            <p className="text-gray-600 mb-6">
              Sélectionnez votre zone de départ et d'arrivée pour obtenir 
              un devis personnalisé en temps réel.
            </p>
            <Button variant="primary" size="lg" className="px-8">
              Obtenir un devis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};