import PlantButton from '../../../components/PlantButton';
import BonsaiTreeBonania1 from '../../../images/Hero/BonsaiTreeBonania1.jpg';


const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-200 rounded-full opacity-15 animate-pulse"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-amber-100 to-green-100 transform rotate-1"></div>

      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                <span className="block text-emerald-700">La Familia</span>
                <span className="block text-amber-700">del Bonsai</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
                TRANSFORMAMOS SUS ESPACIOS EN<br />
                ENTORNOS ARMONIOSOS
              </p>
              <PlantButton text="Ver Catálogo" />
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-white rounded-full shadow-2xl overflow-hidden border-8 border-amber-100">
                  <img
                    src={BonsaiTreeBonania1}
                    alt="Bonsai Tree Bonania1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full opacity-20 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500 rounded-full opacity-20 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;