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

      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                <span className="block text-emerald-700">La Familia</span>
                <span className="block text-amber-700">del Bonsai</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
                TRANSFORMAMOS SUS ESPACIOS EN<br />
                ENTORNOS ARMONIOSOS
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg">
                Ver Catálogo
              </button>
            </div>

            
    </section>
  );
};

export default Hero;