import React from 'react';
import { Users, Car, Clock, Star } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Clients satisfaits',
      description: 'Particuliers et entreprises',
    },
    {
      icon: Car,
      value: '25+',
      label: 'Véhicules',
      description: 'Flotte moderne et entretenue',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Service disponible',
      description: 'Tous les jours de l\'année',
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Note moyenne',
      description: 'Basée sur les avis clients',
    },
  ];

  return (
    <section className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            KAIROS en chiffres
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Des années d'expérience au service de votre mobilité, 
            avec la confiance de centaines de clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-800/50 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-gold-400" />
              </div>
              
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl font-bold text-gold-400">
                  {stat.value}
                </p>
                
                <p className="text-lg font-semibold">
                  {stat.label}
                </p>
                
                <p className="text-sm text-primary-200">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-700 to-primary-800 rounded-2xl p-8 max-w-2xl mx-auto border border-primary-600">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-primary-100 mb-6">
              Découvrez pourquoi KAIROS est le choix de confiance 
              pour vos déplacements au Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Réserver maintenant
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-colors">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};