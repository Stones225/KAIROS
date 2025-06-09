import React from 'react';
import { ArrowRight, MapPin, Clock, Users, Shield } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Transfert Aéroport',
      description: 'Service de transfert depuis/vers l\'aéroport AIBD avec prise en charge ponctuelle',
      features: ['Suivi de vol', 'Accueil personnalisé', 'Bagages inclus'],
      price: 'À partir de 25 000 FCFA',
    },
    {
      icon: Clock,
      title: 'Mise à disposition',
      description: 'Véhicule et chauffeur à votre service pour vos rendez-vous et déplacements',
      features: ['Flexibilité totale', 'Tarif horaire', 'Chauffeur dédié'],
      price: 'À partir de 10 000 FCFA/h',
    },
    {
      icon: Users,
      title: 'Transport de groupe',
      description: 'Minibus et bus pour vos événements, excursions et déplacements collectifs',
      features: ['15 à 51 places', 'Équipements modernes', 'Guide disponible'],
      price: 'À partir de 35 000 FCFA',
    },
    {
      icon: Shield,
      title: 'Transport VIP',
      description: 'Service premium avec véhicules haut de gamme pour vos occasions spéciales',
      features: ['Véhicules de luxe', 'Service personnalisé', 'Confidentialité'],
      price: 'Sur devis',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions de transport adaptées à tous vos besoins, 
            avec la garantie d'un service professionnel et fiable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              hover
              className="p-6 h-full animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">
                      {service.price}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary-600 hover:text-primary-700 p-1"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="primary" size="lg" className="px-8">
            Découvrir tous nos services
          </Button>
        </div>
      </div>
    </section>
  );
};