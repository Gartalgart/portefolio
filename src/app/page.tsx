import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Bento from "@/components/Bento";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <Bento />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
