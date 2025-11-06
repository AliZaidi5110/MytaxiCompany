import { Clock, Shield, Star, Car } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      icon: Clock, 
      title: '24/7 Service', 
      desc: 'Available round the clock for all your transportation needs' 
    },
    { 
      icon: Shield, 
      title: 'Safe & Secure', 
      desc: 'Military-grade safety standards and fully insured vehicles' 
    },
    { 
      icon: Star, 
      title: 'Top Rated', 
      desc: '5-star customer reviews and excellent service record' 
    },
    { 
      icon: Car, 
      title: 'Modern Fleet', 
      desc: 'Well-maintained, comfortable vehicles with latest amenities' 
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose The Military Taxi Co?</h2>
          <p className="text-lg text-gray-600">Experience the difference with our premium service</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <feature.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
