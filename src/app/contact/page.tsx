import { ScrollSection } from '../_components/ScrollSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Contactează-ne</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Harta locației noastre">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Locația Noastră</h2>
            <p className="text-gray-700 mb-4">
              Ne găsiți la adresa:<br />
              Strada Sănătății, Nr. 123<br />
              București, România
            </p>
            <p className="text-gray-700">
              Program: Luni - Vineri, 9:00 - 18:00
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Echipa noastră de suport">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contactează-ne</h2>
            <p className="text-gray-700 mb-2">
              Telefon: +40 123 456 789
            </p>
            <p className="text-gray-700 mb-2">
              Email: contact@platforma-medicala.ro
            </p>
            <p className="text-gray-700">
              Suntem aici pentru a răspunde la întrebările tale și pentru a-ți oferi suportul necesar.
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Formular de contact">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Trimite-ne un mesaj</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nume</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesaj</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
              </div>
              <div>
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Trimite mesajul
                </button>
              </div>
            </form>
          </section>
        </ScrollSection>
      </main>
    </div>
  );
}

