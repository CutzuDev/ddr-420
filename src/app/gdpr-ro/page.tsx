import { AnimateOnScroll } from "~/app/_components/animate-on-scroll";

export default function GDPRPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-10">
        <h1 className="text-3xl font-bold text-center mb-6">Politica de Confidențialitate</h1>
        <p className="text-sm text-gray-500 text-center mb-8">Ultima actualizare: <span>08.12.2024</span></p>
        <AnimateOnScroll>
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">1. Ce date colectăm?</h2>
          <p className="mb-4">Pentru a vă oferi servicii medicale de calitate, colectăm următoarele categorii de date cu caracter personal:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Date de identificare:</strong> nume, prenume, CNP, adresă, număr de telefon, e-mail;</li>
            <li><strong>Date medicale sensibile:</strong> diagnostic, istoric medical, tratamente, analize medicale;</li>
            <li><strong>Date financiare:</strong> informații necesare pentru facturare și plăți;</li>
            <li><strong>Date tehnice:</strong> adresa IP, cookie-uri, date de logare.</li>
          </ul>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Scopurile prelucrării datelor</h2>
          <p>Utilizăm datele dvs. pentru:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Furnizarea serviciilor medicale solicitate;</li>
            <li>Programarea consultațiilor și comunicarea cu dvs.;</li>
            <li>Gestiunea administrativă și financiară a platformei;</li>
            <li>Îmbunătățirea serviciilor și securității;</li>
            <li>Respectarea obligațiilor legale și raportarea către autoritățile competente.</li>
          </ul>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">3. Temeiul legal al prelucrării</h2>
          <p>Prelucrarea datelor dvs. se bazează pe:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Consimțământul dvs. explicit</strong>, pentru prelucrarea datelor medicale sensibile;</li>
            <li><strong>Obligații legale</strong>, conform legislației din domeniul sănătății;</li>
            <li><strong>Executarea unui contract</strong>, atunci când utilizați serviciile noastre;</li>
            <li><strong>Interes legitim</strong>, pentru a proteja securitatea platformei și a preveni fraudele.</li>
          </ul>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Stocarea și durata păstrării datelor</h2>
          <p className="mb-4">Datele dvs. sunt stocate în condiții de securitate maximă pe servere localizate în <strong>Cluj-Napoca</strong>. Păstrăm datele:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Date medicale:</strong> conform obligațiilor legale, pentru o perioadă de minimum 10 ani;</li>
            <li><strong>Alte date:</strong> pentru durata necesară scopului prelucrării sau conform cerințelor legale.</li>
          </ul>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">5. Cui dezvăluim datele?</h2>
          <p> Datele dvs. pot fi partajate cu:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Parteneri contractuali:</strong> laboratoare medicale, medici colaboratori;</li>
            <li><strong>Autorități publice:</strong> ANAF, CNAS, etc.;</li>
            <li><strong>Furnizori de servicii IT</strong> care asigură funcționarea platformei.</li>
          </ul>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">6. Drepturile dvs.</h2>
          <p>Conform GDPR, aveți următoarele drepturi:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Dreptul de acces la datele dvs.;</li>
            <li>Dreptul de rectificare a datelor incorecte/incomplete;</li>
            <li>Dreptul de ștergere („dreptul de a fi uitat”), cu excepția cazurilor în care legea impune păstrarea datelor;</li>
            <li>Dreptul de restricționare a prelucrării;</li>
            <li>Dreptul la portabilitatea datelor;</li>
            <li>Dreptul de opoziție față de prelucrarea datelor;</li>
            <li>Dreptul de a depune o plângere la ANSPDCP.</li>
          </ul>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">7. Securitatea datelor</h2>
          <p>Implementăm măsuri tehnice și organizaționale stricte pentru a proteja datele împotriva accesului neautorizat, pierderii sau distrugerii:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Criptarea datelor sensibile;</li>
            <li>Acces controlat pentru utilizatori și personal autorizat;</li>
            <li>Monitorizarea activităților suspecte.</li>
          </ul>
        </section>
        </AnimateOnScroll>
        <AnimateOnScroll>
        <section>
          <h2 className="text-xl font-semibold mb-4">8. Contact</h2>
          <p>Pentru orice întrebări legate de prelucrarea datelor dvs. sau pentru a vă exercita drepturile, ne puteți contacta la:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Email:</strong> legal@diagnose.ai</li>
            <li><strong>Telefon:</strong> 0712345678</li>
            <li><strong>Adresă:</strong> <a href="https://maps.app.goo.gl/PoEUUY6HSLR6pwfz9">Bucuresti, Calea Victoriei Nr. 12</a></li>
          </ul>
        </section>
        </AnimateOnScroll>
      </div>
    </>
  );}