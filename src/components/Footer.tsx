export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-6 text-center">
        &copy; {new Date().getFullYear()} Kairos Car Services. Tous droits réservés.
      </div>
    </footer>
  );
}
