import { ScrollSection } from '../_components/ScrollSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Despre Platforma Noastră Medicală</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Misiunea noastră">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Misiunea Noastră</h2>
            <p className="text-gray-700">
              Platforma noastră medicală își propune să revoluționeze modul în care pacienții și
              profesioniștii din domeniul medical interacționează și gestionează informațiile de sănătate.
              Ne străduim să oferim o experiență seamless, sigură și eficientă pentru toți utilizatorii noștri.
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Serviciile noastre">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Serviciile Noastre</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Programări online pentru consultații</li>
              <li>Acces securizat la fișe medicale electronice</li>
              <li>Telemedicină și consultații video</li>
              <li>Sistem de notificări pentru medicamente și programări</li>
              <li>Integrare cu dispozitive de monitorizare a sănătății</li>
            </ul>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Echipa noastră">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Echipa Noastră</h2>
            <p className="text-gray-700">
              Suntem o echipă dedicată de profesioniști din domeniul medical și IT, cu o vastă experiență
              în dezvoltarea de soluții inovatoare pentru sănătate. Fiecare membru al echipei noastre este
              pasionat de îmbunătățirea calității vieții pacienților prin tehnologie avansată.
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Tehnologia noastră">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Tehnologia Noastră</h2>
            <p className="text-gray-700">
              Utilizăm cele mai recente tehnologii pentru a asigura o platformă robustă, scalabilă și
              securizată. Arhitectura noastră este construită pe principii de microservicii, folosind
              criptare end-to-end pentru toate datele sensibile și respectând cele mai înalte standarde
              de securitate și conformitate în domeniul medical.
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Contactează-ne">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contactează-ne</h2>
            <p className="text-gray-700">
              Suntem aici pentru a răspunde la întrebările tale și pentru a-ți oferi suportul necesar.
              Nu ezita să ne contactezi la adresa de email support@platforma-medicala.ro sau la numărul
              de telefon +40 123 456 789.
            </p>
          </section>
        </ScrollSection>
      </main>
    </div>
  );
}

