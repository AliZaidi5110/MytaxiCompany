import { Shield, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Military Precision, Professional Service</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Founded by military veterans now serving the UK, Military Taxi Company brings military discipline and reliability to civilian transportation. We pride ourselves on punctuality, safety, and exceptional service across Wiltshire.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Our fleet of modern vehicles and professional drivers ensure you reach your destination safely and on time, every time. Experience professional service with military precision and reliability.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">10K+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mb-1 sm:mb-2">Professional Drivers</div>
                {/* <div className="text-xs sm:text-sm md:text-base text-gray-600">Professional Drivers</div> */}
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
              <img 
                src="/images/kiaOptima.png" 
                alt="KIA Optima - Our Professional Fleet" 
                className="w-full h-48 sm:h-64 md:h-auto object-cover rounded-lg"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-500" />
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
