import { Clock, Shield, Star, Car } from 'lucide-react';

const Features = () => {
  const features = [
    { 
      icon: Clock, 
      title: '24/7 Availability', 
      desc: 'Round-the-clock service for all your transportation needs, any time of day or night' 
    },
    { 
      icon: Shield, 
      title: 'Licensed & Insured', 
      desc: 'Fully licensed drivers with comprehensive insurance coverage for your peace of mind' 
    },
    { 
      icon: Star, 
      title: '5-Star Rated', 
      desc: 'Consistently excellent reviews from satisfied customers across the UK' 
    },
    { 
      icon: Car, 
      title: 'Premium Fleet', 
      desc: 'Modern, well-maintained vehicles with comfort features and professional presentation' 
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
