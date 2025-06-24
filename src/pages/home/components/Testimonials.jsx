import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Sol",
      text: "Gracias por las lindas palabras y sus excelentes servicios",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      text: "Me encanta su trabajo, amo sus creaciones. Definitivamente las recomiendo",
      rating: 5,
    },
    {
      name: "María García",
      text: "Sus bonsais son súper bonitos y fáciles de transportar",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      text: "Excelente servicio, transformaron mi jardín en un espacio zen perfecto",
      rating: 5,
    },
    {
      name: "Isabel Torres",
      text: "Profesionales excepcionales, sus bonsais son verdaderas obras de arte",
      rating: 4.5,
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
  centerMode: true,
  centerPadding: "60px", 
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        centerMode: false,
        centerPadding: "0px",
      },
    },
  ],
  appendDots: (dots) => (
    <div style={{ position: 'absolute', bottom: '-30px', width: '100%', textAlign: 'center' }}>
      <ul style={{ margin: '0', padding: '0', display: 'inline-block' }}>{dots}</ul>
    </div>
  )
};


  return(
    <div className="py-16 md:py-20 bg-gradient-to-b from-yellow-50 to-white-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 md:w-80 md:h-80 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Testimonios de Clientes</h2>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 md:px-4">
  <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl text-center h-full mx-2">
    <h3 className="text-xl font-semibold mt-4 text-gray-800">{testimonial.name}</h3>
    <p className="mt-4 text-gray-800 italic font-['Pinyon_Script']">"{testimonial.text}"</p>
    <br/>
    <StarRating rating={testimonial.rating} />
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