import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-200 rounded-full opacity-15 animate-pulse"></div>
      </div>

      {/* Curved design element */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-amber-100 to-green-100 transform rotate-1"></div>

    </section>
  );
};

export default Hero;