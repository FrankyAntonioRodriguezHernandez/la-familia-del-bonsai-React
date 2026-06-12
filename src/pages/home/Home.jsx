import { useLocation } from "react-router-dom";
import Information from "../../components/Home/Information";
import Hero from "../../components/Home/Hero";
import Services from "../../components/Home/Services";
import Events from "../../components/Home/Events";
import Contact from "../../components/Home/Contact";
import { useEffect } from "react";
import Testimonials from "../../components/Home/Testimonials";


export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
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