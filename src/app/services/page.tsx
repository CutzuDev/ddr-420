import { ScrollSection } from '../_components/ScrollSection';

export default function ServiciiPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Serviciile Noastre</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Consultații online">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Consultații Online</h2>
            <p className="text-gray-700">
              Oferim consultații medicale online, permițându-vă să discutați cu medicii noștri experți din confortul casei dumneavoastră.
              Programați o întâlnire video și primiți sfaturi medicale, rețete și recomandări fără a fi nevoie să vă deplasați la clinică.
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Fișe medicale electronice">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Fișe Medicale Electronice</h2>
            <p className="text-gray-700">
              Accesați-vă istoricul medical complet oricând și oriunde. Fișele noastre medicale electronice sunt securizate,
              ușor de navigat și vă oferă o imagine de ansamblu asupra sănătății dumneavoastră. Partajați informații cu medicii
              dumneavoastră în siguranță pentru o îngrijire mai bună și mai coordonată.
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Monitorizare la distanță">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Monitorizare la Distanță</h2>
            <p className="text-gray-700">
              Cu ajutorul dispozitivelor inteligente de sănătate, puteți monitoriza parametrii vitali precum tensiunea arterială,
              nivelul glicemiei sau ritmul cardiac. Datele sunt transmise în timp real medicilor noștri, permițându-le să vă
              urmărească starea de sănătate și să intervină prompt atunci când este necesar.
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Programări și remindere">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Programări și Remindere</h2>
            <p className="text-gray-700">
              Sistemul nostru inteligent de programări vă permite să rezervați consultații cu ușurință. Primiți remindere
              automate pentru programări și administrarea medicamentelor, asigurându-vă că nu ratați niciodată un aspect
              important al îngrijirii dumneavoastră medicale.
            </p>
          </section>
        </ScrollSection>

        <ScrollSection imageSrc="/placeholder.svg?height=300&width=500" imageAlt="Educație medicală">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Educație Medicală</h2>
            <p className="text-gray-700">
              Accesați o bibliotecă vastă de resurse educaționale verificate de experți. De la articole și videoclipuri
              până la webinarii interactive, vă oferim informațiile necesare pentru a vă gestiona mai bine sănătatea și
              pentru a lua decizii informate cu privire la îngrijirea dumneavoastră.
            </p>
          </section>
        </ScrollSection>
      </main>
    </div>
  );
}

