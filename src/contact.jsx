import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400">We're here to serve you 24/7 across the UK</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Call Us Now</h3>
                <p className="text-gray-400 mb-2">Available 24/7 for bookings and inquiries</p>
                <a href="tel:07999997820" className="text-yellow-500 text-lg font-semibold hover:text-yellow-400">
                  07999 997 820
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-400 mb-2">Send us your booking details or questions</p>
                <a href="mailto:themilitarytaxico@gmail.com" className="text-yellow-500 text-lg font-semibold hover:text-yellow-400">
                  themilitarytaxico@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Service Area</h3>
                <p className="text-gray-400 mb-2">Covering all major UK cities and airports</p>
                <p className="text-yellow-500 text-lg font-semibold">London, Manchester, Birmingham & More</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
                <p className="text-gray-400 mb-2">We never sleep, so you don't have to worry</p>
                <p className="text-yellow-500 text-lg font-semibold">24/7 - Every Day</p>
              </div>
            </div>
          </div>

          {/* Contact Message */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Military Taxi Company</h3>
            
            <div className="text-center space-y-6">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-3">Ready to Book Your Ride?</h4>
                <p className="text-gray-300 mb-4">
                  Contact us through any of the methods on the left, or call us directly for immediate assistance.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:07999997820" 
                    className="block bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
                  >
                    📞 Call Now: 07999 997 820
                  </a>
                  <a 
                    href="mailto:themilitarytaxico@gmail.com" 
                    className="block bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                  >
                    ✉️ Email Us
                  </a>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-3">Why Choose Us?</h4>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Professional military-trained drivers
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span>
                    24/7 availability across the UK
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Specialized military base transport
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Licensed, insured, and reliable
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Serving Wiltshire Military Bases and surrounding areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;