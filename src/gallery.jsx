import { useState } from 'react';
import { Car, Star, Users, Fuel, Settings } from 'lucide-react';
import SimpleBookingModal from './components/SimpleBookingModal';

const Gallery = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const carFeatures = [
    { icon: Users, label: '5 Passengers', desc: 'Comfortable seating for up to 5 passengers' },
    { icon: Fuel, label: 'Fuel Efficient', desc: 'Excellent fuel economy for longer journeys' },
    { icon: Settings, label: 'Modern Features', desc: 'Latest technology and comfort features' },
    { icon: Star, label: 'Premium Quality', desc: 'Well-maintained and regularly serviced' }
  ];

  const galleryImages = [
    {
      src: '/src/assets/interior1.png',
      alt: 'Car Interior - Dashboard View',
      title: 'Modern Dashboard & Controls'
    },
    {
      src: '/src/assets/interior2.png',
      alt: 'Car Interior - Seating',
      title: 'Premium Leather Seating'
    },
    {
      src: '/src/assets/interior3.png',
      alt: 'Car Interior - Rear View',
      title: 'Spacious Rear Passenger Area'
    },
    {
      src: '/src/assets/interior4.png',
      alt: 'Car Interior - Features',
      title: 'Luxury Interior Features'
    },
    {
      src: '/src/assets/image3.png',
      alt: 'Professional Fleet Vehicle',
      title: 'Our Premium Fleet'
    },
    {
      src: '/src/assets/city.png',
      alt: 'City Tour Service',
      title: 'Professional City Tours'
    },
    {
      src: '/src/assets/driver.png',
      alt: 'Professional Driver',
      title: 'Our Professional Drivers'
    },
    {
      src: '/src/assets/women.png',
      alt: 'Professional Female Driver',
      title: 'Our Professional Team'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Our Premium Fleet Gallery</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Discover our luxurious vehicles inside and out - experience comfort and style like never before</p>
        </div>

        {/* Main Car Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <div className="order-2 lg:order-1">
            {/* Professional Team Image */}
            <div className="mb-6 md:mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur opacity-20"></div>
                <img
                  src="/src/assets/women.png"
                  alt="Professional Female Driver"
                  className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl border-4 border-yellow-500 hover:border-yellow-400 transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full p-2 shadow-lg hover:bg-yellow-400 transition-colors">
                  <Star className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900 text-center lg:text-left">
              Luxury Interior - Your Comfort is Our Priority
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-center lg:text-left">
              Step into our premium vehicles and experience the perfect blend of comfort, luxury, and modern technology.
              Each interior is meticulously maintained and designed to provide you with the ultimate travel experience.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 text-center lg:text-left">
              From premium leather seating to state-of-the-art entertainment systems, our vehicle interiors are designed
              to make every journey comfortable, whether it's a quick airport transfer or a long-distance trip.
            </p>

            {/* Car Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {carFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">{feature.label}</h4>
                    <p className="text-xs md:text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Interior Showcase */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src="/src/assets/interior1.png"
                alt="Premium Car Interior - Main View"
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-full p-2 md:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-900">Complete Vehicle Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-3 md:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold text-sm md:text-base">{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-900">Ready to Experience Our Luxury Interior?</h3>
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base max-w-2xl mx-auto">Book your ride and enjoy our premium interior comfort today</p>
          <div className="flex justify-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-yellow-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Car className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Book Online
            </button>
          </div>
        </div>

        <SimpleBookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </div>
    </section>
  );
};

export default Gallery;