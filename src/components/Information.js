import React from 'react';

const Information = () => {
  const infoCards = [
    {
      title: "Transformamos cada espacio en un refugio zen",
      description: "Cada bonsai es único, cada espacio es especial. Creamos armonía perfecta.",
      image: "https://images.unsplash.com/photo-1585544224318-147fb1bcc462"
    },
    {
      title: "Adaptamos el modelo de ecosistema natural",
      description: "Respetamos la naturaleza y sus ciclos, creando equilibrio duradero.",
      image: "https://images.unsplash.com/photo-1713372086778-cb578f06b866"
    },
    {
      title: "Innovamos en poner la tradición milenaria",
      description: "Combinamos técnicas ancestrales con innovación moderna.",
      image: "https://images.pexels.com/photos/732423/pexels-photo-732423.jpeg"
    }
  ];

  return (
    <section id="informacion" className="py-20 bg-gradient-to-b from-green-50 to-amber-50 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-200 rounded-full opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200 rounded-full opacity-10 transform -rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            INFORMACIÓN
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos especialistas en transformar espacios a través del bonsai y la jardinería. Con 
            raíces familiares y más de quince años de experiencia, fusionamos tradición y creatividad para 
            crear ambientes que mejoran la vida y el bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;