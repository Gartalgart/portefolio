import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Projects from "@/components/Projects";
import Modeling3D from "@/components/Modeling3D";
import Services from "@/components/Services";
import Method from "@/components/Method";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <BeforeAfter />
        <Projects />
        <Modeling3D />
        <Services />
        <Method />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
