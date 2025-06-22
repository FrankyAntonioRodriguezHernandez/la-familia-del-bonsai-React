import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Sol",
      text: "Amo mi trabajo, gracias por las lindas palabras y me alegra que les haya gustado",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
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
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating 
          ? <FaStar key={i} className="text-yellow-400" /> 
          : <FaRegStar key={i} className="text-yellow-400" />
      );
    }
    return <div className="flex justify-center">{stars}</div>;
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '-30px', width: '100%', textAlign: 'center' }}>
        <ul style={{ margin: '0', padding: '0', display: 'inline-block' }}>{dots}</ul>
      </div>
    )
  };

  return(
    <div className="py-16 md:py-20 bg-gradient-to-b from-yellow-50 to-white-800 relative overflow-hidden">
      {/* Organic background shapes - igual que en el componente de contacto */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 md:w-80 md:h-80 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Testimonios de Clientes</h2>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl text-center h-full">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow"
                    />
                  </div>
                  <StarRating rating={testimonial.rating} />
                  <h3 className="text-xl font-semibold mt-4 text-gray-800">{testimonial.name}</h3>
                  <p className="mt-4 text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;