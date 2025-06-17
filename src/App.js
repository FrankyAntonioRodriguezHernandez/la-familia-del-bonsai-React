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
import ServicesFull from './components/ServicesFull'; // Nuevo componente

function Home() {
  return (
    <>
      <Hero />
      <Information />
      <Services />
      <Events />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios-completos" element={<ServicesFull />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;