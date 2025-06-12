import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

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
      rating: 4,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
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
    maxWidth: '600px', // Máximo ancho en desktop
    margin: '0 auto', // Centrado
    width: '100%' // Ocupa el 100% hasta el máximo
  }

  const imageStyles = {
    width: '100%',
    height: 'auto',
    maxWidth: '300px', // Máximo tamaño de la imagen
    margin: '0 auto', // Centrar imagen
    borderRadius: '50%', // Para mantener el estilo circular
    display: 'block' // Elimina espacio inferior de img
  }

  return(
    <div style={containerStyles}>
      <h2 style={{textAlign: 'center'}}>Carrusel Instagram</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{padding: '10px', textAlign: 'center'}}>
            <img src={image} alt={`slide-${index}`} style={imageStyles} />
          </div>
        ))}
      </Slider>
    </div>
  )
};

export default Testimonials;