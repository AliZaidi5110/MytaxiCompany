import { useState } from 'react';
import { Car, Heart, Plane, MapPin, Train, Shield, ArrowRight, Phone, Star, Clock } from 'lucide-react';
import SimpleBookingModal from './components/SimpleBookingModal';

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const services = [
    {
      icon: Car,
      title: 'Private Hire',
      tagline: 'Reliable, comfortable, and always on time.',
      desc: 'Professional drivers for all your local and long-distance travel needs.',
      image: '/images/driver.png',
      features: ['Professional Chauffeurs', 'Luxury Comfort', 'Flexible Scheduling', 'Local & Long Distance']
    },
    {
      icon: Heart,
      title: 'Wedding Car Hire',
      tagline: 'Arrive in style on your big day.',
      desc: 'Beautifully decorated, chauffeur-driven luxury cars for your special moment.',
      image: '/images/wedding.png',
      features: ['Luxury Vehicles', 'Wedding Decoration', 'Professional Chauffeur', 'Photography Support']
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      tagline: 'Smooth rides to and from all major UK airports.',
      desc: 'Heathrow, Gatwick, Stansted and beyond. Flight monitoring and meet-and-greet service included.',
      image: '/images/airport.png',
      features: ['Flight Monitoring', 'Meet & Greet', 'All Major Airports', 'Luggage Assistance']
    },
    {
      icon: MapPin,
      title: 'UK Tours',
      tagline: 'Explore iconic landmarks with comfort and class.',
      desc: 'Discover historic sites and attractions with our knowledgeable, friendly drivers.',
      image: '/images/stonehedge.png',
      features: ['Historic Landmarks', 'Expert Guides', 'Comfortable Transport', 'Flexible Itinerary']
    },
    {
      icon: Train,
      title: 'Train Station Transfers',
      tagline: 'Punctual drop-offs and pickups.',
      desc: 'Major UK train stations — no waiting, no stress, just reliable service.',
      image: '/images/trainStation.png',
      features: ['All Major Stations', 'Schedule Coordination', 'Punctual Service', 'Luggage Support']
    },
    {
      icon: Shield,
      title: 'Military Base Transport',
      tagline: 'Trusted by service members.',
      desc: 'Secure and respectful transfers throughout Wiltshire.',
      image: '/images/military.png',
      features: ['Security Cleared', 'Military Experience', 'Respectful Service', 'Professional Drivers']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Taxi Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Whether it's your wedding day, an airport transfer, or a trip to Stonehenge — we provide 
            <span className="text-amber-600 font-semibold"> comfort, class, and reliability</span> on every journey.
          </p>
          
          {/* Service Area Section */}
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Military Bases We Serve</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Specialized transport services throughout:
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <MapPin className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <span className="font-bold text-gray-900 text-xl">Wiltshire Military Bases</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-7 h-7 text-amber-600" />
                </div>

                {/* Service Badge */}
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Available 24/7
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-amber-600 font-semibold mb-3 italic">
                  {service.tagline}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group/btn"
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                    Book Now
                  </button>
                  <button className="px-4 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-amber-600 mr-2" />
            <span className="text-lg font-semibold text-gray-900">Premium Service Guarantee</span>
            <Star className="w-6 h-6 text-amber-600 ml-2" />
          </div>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            All our services come with professional drivers, fully insured vehicles, and our commitment to excellence. 
            Available 24/7 across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07999997820"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 07999 997 820
            </a>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white hover:bg-gray-50 text-amber-600 border-2 border-amber-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <Clock className="w-5 h-5 mr-2" />
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

export default Services;
