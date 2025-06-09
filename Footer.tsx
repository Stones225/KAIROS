import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">KAIROS</h2>
                <p className="text-sm text-gray-400">Car Services</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Service de location de voitures avec chauffeur professionnel au Sénégal. 
              Qualité, ponctualité et confort garantis.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Transfert Aéroport</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mise à disposition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transport d'entreprise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Événements spéciaux</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+221 77 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@kairos-senegal.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">Dakar, Sénégal</span>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500">Disponible 24h/7j</p>
              <p className="text-lg font-semibold text-gold-500">Service non-stop</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 KAIROS Car Services. Tous droits réservés. | 
            <a href="#" className="hover:text-white ml-1">Politique de confidentialité</a> | 
            <a href="#" className="hover:text-white ml-1">Conditions d'utilisation</a>
          </p>
        </div>
      </div>
    </footer>
  );
};