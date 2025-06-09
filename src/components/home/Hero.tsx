import React from 'react';
import { MapPin, Clock, Shield, Star } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-gold-400" />
                <span className="text-sm font-medium text-gold-300">Service Premium</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Votre chauffeur
                <span className="block text-gold-400">professionnel</span>
                au Sénégal
              </h1>
              
              <p className="text-xl text-primary-100 leading-relaxed">
                Service de location de voitures avec chauffeur. Transport confortable, 
                sécurisé et ponctuel pour tous vos déplacements à Dakar et dans les régions.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-700/50 p-2 rounded-lg">
                  <MapPin className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Toutes zones</p>
                  <p className="text-xs text-primary-200">Dakar & Régions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-700/50 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">24h/7j</p>
                  <p className="text-xs text-primary-200">Service non-stop</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-700/50 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Sécurisé</p>
                  <p className="text-xs text-primary-200">Chauffeurs pros</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8"
              >
                Réserver maintenant
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8"
              >
                Voir les tarifs
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main car image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Voiture de luxe KAIROS"
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">500+</p>
                  <p className="text-sm text-gray-600">Clients satisfaits</p>
                </div>
              </div>
              
              {/* Floating rating card */}
              <div className="absolute -top-6 -right-6 bg-gold-500 text-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-bold">4.9</span>
                </div>
                <p className="text-xs opacity-90">Note moyenne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};