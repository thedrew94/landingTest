import Hero from "../_components/Hero";
import Navbar from "../_components/Navbar";

export default function Page() {
  return (
    <header className="relative p-[16px] bg-background">
      <Navbar />
      <Hero />
    </header>
  );
}
