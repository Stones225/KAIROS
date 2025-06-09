import React from 'react';
import { Car, Phone, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeaderProps {
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">KAIROS</h1>
              <p className="text-xs text-gray-500 leading-none">Car Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary-600 font-medium">
              Services
            </a>
            <a href="#vehicles" className="text-gray-600 hover:text-primary-600 font-medium">
              Véhicules
            </a>
            <a href="#zones" className="text-gray-600 hover:text-primary-600 font-medium">
              Zones
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 font-medium">
              Contact
            </a>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+221 77 123 45 67</span>
            </div>
            <Button variant="primary" size="sm">
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <a href="#services" className="block text-gray-600 hover:text-primary-600 font-medium">
              Services
            </a>
            <a href="#vehicles" className="block text-gray-600 hover:text-primary-600 font-medium">
              Véhicules
            </a>
            <a href="#zones" className="block text-gray-600 hover:text-primary-600 font-medium">
              Zones
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-primary-600 font-medium">
              Contact
            </a>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+221 77 123 45 67</span>
              </div>
              <Button variant="primary" size="md" fullWidth>
                Réserver maintenant
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};