import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_n4i9yol',    
      'template_660hhea',   
      form.current,
      'UgQvsCh1B6qBMqnoW'      
    ).then(
      (result) => {
        alert('Mensaje enviado con éxito 😄');
        form.current.reset(); 
      },
      (error) => {
        alert('Hubo un error, intenta de nuevo 😕');
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contacto" className="py-16 md:py-20 bg-gradient-to-b from-green-50 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 md:w-80 md:h-80 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            CONTÁCTANOS
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a crear el espacio zen perfecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600">Teléfono</p>
                    <p className="text-base md:text-lg text-gray-800 font-semibold">+53 53646319</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <FaWhatsapp className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600">WhatsApp</p>
                    <p className="text-base md:text-lg text-gray-800 font-semibold">+53 53646319</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <EnvelopeIcon className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600">Email</p>
                    <p className="text-base md:text-lg text-gray-800 font-semibold">info@familiadelbonsai.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPinIcon className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-gray-600">Dirección</p>
                    <p className="text-base md:text-lg text-gray-800 font-semibold">
                      Abrahan Delgado #60 / Libertad y Máximo Gómez. Ciego de Ávila, Cuba
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
                  Síguenos
                </h4>
                <div className="flex space-x-3 md:space-x-4">
                  <a href="https://www.instagram.com/la_familia_del_bonsai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 md:p-3 rounded-full transition-colors duration-300">
                    <FaInstagram className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 md:p-3 rounded-full transition-colors duration-300">
                    <FaFacebook className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 md:p-3 rounded-full transition-colors duration-300">
                    <FaTwitter className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  <a href="https://whatsapp.com/channel/0029VaHjEYjA89Mrmf2zPv2K" className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 md:p-3 rounded-full transition-colors duration-300">
                    <FaWhatsapp className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8 flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                Envíanos un Mensaje
              </h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Tu nombre"
                />
              </div>

                <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="tu@email.com"
                />
              </div>

                <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-md"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20 pt-6 md:pt-8 border-t border-gray-700">
        <div className="text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2024 La Familia del Bonsai. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;