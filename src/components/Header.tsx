import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold text-primary-600">
          Kairos Car Services
        </Link>
        <nav className="space-x-4">
          <Link to="#services" className="text-gray-700 hover:text-primary-600">
            Services
          </Link>
          <Link to="#contact" className="text-gray-700 hover:text-primary-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
