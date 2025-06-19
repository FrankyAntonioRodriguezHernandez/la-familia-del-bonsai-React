import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Information from './components/Information';
import Services from './components/Services';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ServicesFull from './components/ServicesFull';
import ScrollToTop from './components/ScrollToTop'; 
import EventsFull from './components/EventsFull';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesFull />} />
          <Route path="/events" element={<EventsFull />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
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


export default App;