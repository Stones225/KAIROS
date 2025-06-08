import { Car, Phone } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <section className="bg-primary-600 text-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-4 text-4xl font-bold">Location de voiture avec chauffeur</h1>
          <p className="mb-8 text-lg">
            Profitez d'un service premium pour tous vos déplacements au Sénégal.
          </p>
          <a
            href="#contact"
            className="rounded bg-gold-500 px-6 py-3 font-medium text-gray-900 hover:bg-gold-400"
          >
            Réserver maintenant
          </a>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-semibold text-center">Nos services</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow">
            <Car className="mb-4 h-10 w-10 text-primary-600" />
            <h3 className="mb-2 text-xl font-medium">Transferts aéroport</h3>
            <p className="text-center text-gray-600">
              Voyagez en toute sérénité depuis et vers l'aéroport avec un chauffeur professionnel.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow">
            <Phone className="mb-4 h-10 w-10 text-primary-600" />
            <h3 className="mb-2 text-xl font-medium">Service disponible 24/7</h3>
            <p className="text-center text-gray-600">
              Notre équipe est à votre écoute à toute heure pour répondre à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold">Contactez-nous</h2>
          <p className="mb-6 text-gray-700">
            Prêt à réserver ou vous avez des questions ? Appelez-nous au{' '}
            <a href="tel:+221000000000" className="text-primary-600">+221 00 000 00 00</a>.
          </p>
          <a
            href="mailto:contact@kairos.com"
            className="rounded bg-primary-600 px-8 py-3 font-medium text-white hover:bg-primary-500"
          >
            Envoyer un e-mail
          </a>
        </div>
      </section>
    </div>
  );
}
