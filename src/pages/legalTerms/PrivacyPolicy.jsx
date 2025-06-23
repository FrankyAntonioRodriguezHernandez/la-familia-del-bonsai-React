import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Contenido principal */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6 border-b pb-4">
            Política de Privacidad
          </h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-6">Última actualización: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">1. Introducción</h2>
              <p className="mb-4">
                En <strong>La Familia del Bonsai</strong>, respetamos y protegemos tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios.
              </p>
            </section>
            
          </div>
        </div>
      </main>

    </div>
  );
};

export default PrivacyPolicy;