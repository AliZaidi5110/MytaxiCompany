import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import GoogleMapsBookingModal from './components/GoogleMapsBookingModal';
import ErrorBoundary from './components/ErrorBoundary';

function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Message sent! We will contact you shortly.');
  };

  return (
    <div className="pt-32">{/* Add padding-top to account for fixed navbar */}

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                ⭐ #1 Trusted Taxi Service
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Reliable Ride
                <span className="text-yellow-400"> Anytime, Anywhere</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                AIRPORTS – SEAPORTS – TOURS – LONG DISTANCE – BUSINESS – TAXI FROM SALISBURY TO GATWICK, HEATHROW & STANSTEAD
              </p>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 mb-4">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">Serving Military Bases:</h3>
                <div className="text-sm">
                  <span>• Wiltshire Military Bases</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-lg">
                <a href="tel:07999997820" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  📞 07999997820
                </a>
                <a href="mailto:themilitarytaxico@gmail.com" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  ✉️ themilitarytaxico@gmail.com
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  Book Your Ride <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-center">CONTACT US</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition transform hover:scale-105 shadow-lg"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <GoogleMapsBookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      </ErrorBoundary>
    </div>
  );
}

export default Home;
