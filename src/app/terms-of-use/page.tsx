import { AnimateOnScroll } from "~/app/_components/animate-on-scroll";

export default function ToUPage() {
  return (
    <div className=" text-gray-800">
      <div className="mx-auto my-10  max-w-4xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Termeni și Condiții de Utilizare
        </h1>
        <p className="mb-8 text-center text-sm text-gray-500">
          Ultima actualizare: <span>08.12.2024</span>
        </p>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            1. Acceptarea Termenilor
          </h2>
          <p>
            Prin utilizarea aplicației <strong>Diagnose. AI</strong> (denumită
            în continuare „Aplicația”), acceptați să respectați acești Termeni
            și Condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să
            nu utilizați Aplicația.
          </p>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            2. Descrierea Serviciilor
          </h2>
          <p>
            Aplicația oferă servicii medicale digitale, inclusiv programări
            online, acces la dosarul medical și alte funcționalități care
            sprijină sănătatea dvs. Serviciile sunt destinate exclusiv
            utilizării personale și non-comerciale.
          </p>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            3. Obligațiile Utilizatorului
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Să furnizați informații corecte și complete la înregistrare.
            </li>
            <li>
              Să păstrați confidențialitatea datelor de autentificare (ex.
              parola).
            </li>
            <li>
              Să nu utilizați Aplicația pentru activități ilegale sau
              dăunătoare.
            </li>
            <li>
              Să respectați toate legile aplicabile în utilizarea serviciilor
              noastre.
            </li>
          </ul>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">4. Confidențialitate</h2>
          <p>
            Utilizarea Aplicației este reglementată de Politica noastră de
            Confidențialitate. Vă rugăm să citiți documentul pentru a înțelege
            cum sunt colectate, utilizate și protejate datele dvs. personale.
          </p>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            5. Limitarea Răspunderii
          </h2>
          <p>
            Aplicația este furnizată „ca atare” fără garanții de orice fel,
            explicite sau implicite. Nu garantăm că serviciile vor fi
            neîntrerupte, sigure sau fără erori. Utilizatorul este responsabil
            pentru modul în care utilizează informațiile furnizate prin
            intermediul Aplicației.
          </p>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            6. Drepturi de Proprietate Intelectuală
          </h2>
          <p>
            Toate drepturile de proprietate intelectuală asupra conținutului și
            funcționalităților Aplicației aparțin exclusiv [Numele Aplicației].
            Este interzisă reproducerea, distribuirea sau utilizarea acestui
            conținut fără consimțământul nostru scris.
          </p>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">
            7. Modificări ale Termenilor
          </h2>
          <p>
            Ne rezervăm dreptul de a modifica acești Termeni și Condiții
            oricând, fără o notificare prealabilă. Versiunea actualizată va fi
            disponibilă pe Aplicație, iar utilizarea continuă reprezintă
            acceptarea modificărilor.
          </p>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">8. Încetarea Accesului</h2>
          <p>
            Putem suspenda sau închide accesul la Aplicație în cazul în care
            utilizatorul încalcă acești Termeni sau desfășoară activități care
            afectează securitatea și integritatea serviciilor noastre.
          </p>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section>
          <h2 className="mb-4 text-xl font-semibold">9. Contact</h2>
          <p>
            Pentru întrebări sau probleme legate de acești Termeni și Condiții,
            ne puteți contacta la:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Email:</strong> legal@diagnose.ai
            </li>
            <li>
              <strong>Telefon:</strong> 0712345678
            </li>
            <li>
              <strong>Adresă:</strong>{" "}
              <a href="https://maps.app.goo.gl/PoEUUY6HSLR6pwfz9">
                Bucuresti, Calea Victoriei Nr. 12
              </a>
            </li>
          </ul>
        </section>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
