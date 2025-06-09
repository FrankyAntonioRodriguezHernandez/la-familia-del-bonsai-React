import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Information from './components/Information';
import Services from './components/Services';
import Events from './components/Events';
/*
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

Abajo poner 
      
      
      <Testimonials />
      <Contact />
*/
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Information />
      <Services />
      <Events />

    </div>
  );
}

export default App;