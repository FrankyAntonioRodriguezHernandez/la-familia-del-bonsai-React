import { useLocation } from "react-router-dom";
import Information from "./components/Information";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Events from "./components/Events";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Testimonials from "./components/Testimonials";


export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Pequeño delay para asegurar que el DOM esté listo
      }
    }
  }, [location.state]);
  return (
    <>
      <Hero id="inicio" />
      <Information id="informacion" />
      <Services id="servicios" />
      <Events id="eventos" />
      <Testimonials />
      <Contact id="contacto" />
    </>
  );
}