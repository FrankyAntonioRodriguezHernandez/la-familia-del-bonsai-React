import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Sol",
      text: "Amo mi trabajo, gracias por las lindas palabras y me alegra que les haya gustado",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c371?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendoza",
      text: "Me encanta su trabajo, amo sus creaciones. Definitivamente las recomiendo",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "María García",
      text: "Sus bonsais son súper bonitos y fáciles de transportar",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Silva",
      text: "Excelente servicio, transformaron mi jardín en un espacio zen perfecto",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Isabel Torres",
      text: "Profesionales excepcionales, sus bonsais son verdaderas obras de arte",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-emerald-200 rounded-full opacity-10 transform rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full opacity-10 transform -rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            OPINIONES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lo que dicen nuestros clientes sobre nuestro trabajo
          </p>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden md:flex justify-center items-center space-x-4 overflow-x-auto pb-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Testimonials */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;