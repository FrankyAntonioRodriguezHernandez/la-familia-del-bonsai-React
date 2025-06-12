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
  
  const containerStyles = {
    padding: '0 20px',
    maxWidth: '600px', 
    margin: '0 auto',
    width: '100%'
  }

  const imageStyles = {
    width: '100%',
    height: 'auto',
    maxWidth: '300px', 
    margin: '0 auto', 
    borderRadius: '50%',
    display: 'block'
  }

  return(
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Testimonios de Clientes</h2>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-8 rounded-lg shadow-md text-center h-full">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
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