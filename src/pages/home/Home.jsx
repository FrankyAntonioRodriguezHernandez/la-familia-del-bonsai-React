import { useLocation } from "react-router-dom";
import Information from "./Information";
import Hero from "./Hero";
import Services from "./Services";
import Events from "./Events";
import Contact from "./Contact";
import { useEffect } from "react";
import Testimonials from "./Testimonials";


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