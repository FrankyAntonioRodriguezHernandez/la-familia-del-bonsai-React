import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-green-50 to-gray-800 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Contact;