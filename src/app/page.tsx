import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Method from "@/components/Method";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CallBar from "@/components/CallBar";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-anthracite focus:px-4 focus:py-3 focus:font-bold focus:text-white"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Services />
        <Method />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
