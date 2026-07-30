import CircularGallery from '../../components/ui/CircularGallery';
import { RentalPlacesObjects } from '../../utils/RentalPlacesObjects';

const RentalsPlaces = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-amber-50 to-green-50 pt-28">
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Arrendamiento en espacios
          </p>
          <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
            Lugares embellecidos con nuestros bonsais
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Hoteles, tiendas y espacios especiales donde nuestras piezas han transformado el ambiente con belleza natural, serenidad y distincion.
          </p>
        </div>
      </section>

      <section className="space-y-20 px-4 pb-24 sm:px-6 lg:px-8">
        {RentalPlacesObjects.map((place, index) => (
          <article key={place.name} className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className={index % 2 === 0 ? 'lg:order-2' : ''}>
                <div className="mb-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white">
                    {place.category}
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-800">
                    {place.location}
                  </span>
                </div>
                <h2 className="mb-5 text-3xl font-bold text-gray-800 sm:text-4xl">
                  {place.name}
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  {place.description}
                </p>
              </div>

              <div className={index % 2 === 0 ? 'h-[380px] sm:h-[500px] lg:order-1 lg:h-[560px]' : 'h-[380px] sm:h-[500px] lg:h-[560px]'}>
                <CircularGallery
                  items={place.items}
                  bend={1.8}
                  textColor="#064e3b"
                  borderRadius={0.08}
                  scrollEase={0.04}
                  scrollSpeed={2}
                  font="bold 30px Inter"
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default RentalsPlaces;
