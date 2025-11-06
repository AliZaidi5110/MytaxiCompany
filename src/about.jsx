import { Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Military Precision, Professional Service</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded by military veterans now serving the UK, The Military Taxi Co. brings military discipline and reliability to civilian transportation. We pride ourselves on punctuality, safety, and exceptional service across the United Kingdom.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our fleet of modern vehicles and professional drivers ensure you reach your destination safely and on time, every time. Experience professional service with military precision and reliability.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-yellow-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
                <div className="text-gray-600">Professional Drivers</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 shadow-2xl">
              <img 
                src="/images/kiaOptima.png" 
                alt="KIA Optima - Our Professional Fleet" 
                className="w-full h-55 object-cover rounded-lg"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Shield className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Award className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
