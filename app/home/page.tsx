import Hero from "../_components/Hero";
import Navbar from "../_components/Navbar";

export default function Page() {
  return (
    <>
      <header className="relative p-[16px] bg-background">
        <Navbar />
        <Hero />
      </header>
      <main className="bg-[rgba(0, 0, 0, 1)]">
        {/* INTRO SECTION */}
        <div>
          <h2>Il laboratorio urbano della Città di Lugano.</h2>
          <h3>
            Promuoviamo e facilitiamo l'innovazione digitale e tecnologica, creando, testando e implementando soluzioni
            pensate per una città più intelligente, ma sempre a misura d’uomo.
          </h3>
        </div>
        {/* CTA SECTION */}
        <div></div>
        {/* FEATURED SECTION */}
        <div></div>
        {/* ANIMATED HORIZONTAL SLIDER SECTION */}
        <div></div>
      </main>
      {/* FOOTER */}
      <footer></footer>
    </>
  );
}
