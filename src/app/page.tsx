import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Assembles all sections into the main landing page
 */
export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
