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
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">2. Información que recopilamos</h2>
              <p className="mb-4">Podemos recopilar los siguientes tipos de información:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono.</li>
                <li><strong>Información de transacciones:</strong> Detalles sobre compras o servicios que solicitas.</li>
                <li><strong>Datos técnicos:</strong> Dirección IP, tipo de navegador, páginas visitadas.</li>
                <li><strong>Contenido que nos proporcionas:</strong> Mensajes, consultas o comentarios que nos envías.</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">3. Cómo usamos tu información</h2>
              <p className="mb-4">Utilizamos tu información para:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Proporcionar y mejorar nuestros servicios de cultivo de bonsáis</li>
                <li>Responder a tus consultas y solicitudes</li>
                <li>Procesar transacciones y enviar confirmaciones</li>
                <li>Enviar información sobre talleres y eventos (solo si nos das permiso)</li>
                <li>Mejorar la seguridad y funcionalidad de nuestro sitio web</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">4. Compartir información</h2>
              <p className="mb-4">
                No vendemos ni alquilamos tu información personal a terceros. Solo compartimos información cuando:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Es necesario para proporcionar los servicios que solicitas</li>
                <li>Tenemos tu consentimiento explícito</li>
                <li>Estamos obligados por ley</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">5. Tus derechos</h2>
              <p className="mb-4">Tienes derecho a:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Acceder a la información que tenemos sobre ti</li>
                <li>Solicitar la corrección de datos incorrectos</li>
                <li>Pedir que eliminemos tu información personal</li>
                <li>Retirar tu consentimiento para el uso de tus datos</li>
              </ul>
              <p>Para ejercer estos derechos, contáctanos en <a href="mailto:frankyan2001@gmail.com" className="text-emerald-600 hover:underline">frankyan2001@gmail.com</a>.</p>
            </section>
            
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-emerald-700 mb-4">7. Cambios a esta política</h2>
              <p className="mb-4">
                Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web.
              </p>
            </section>
            
          </div>
        </div>
      </main>

    </div>
  );
};

export default PrivacyPolicy;