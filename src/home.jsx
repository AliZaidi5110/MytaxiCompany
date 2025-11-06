import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import GoogleMapsBookingModal from './components/GoogleMapsBookingModal';
import ErrorBoundary from './components/ErrorBoundary';

function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('Booking request submitted! We will contact you shortly.');
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
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>• Bulford</span>
                  <span>• Larkhill</span>
                  <span>• Tidworth</span>
                  <span>• Perham Down</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-lg">
                <a href="tel:07999997820" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  📞 07999997820
                </a>
                <a href="mailto:Themillitarytaxico@gmail.com" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  ✉️ Themillitarytaxico@gmail.com
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

            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-center">Book Your Ride</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Pickup Location</label>
                  <input
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition"
                    placeholder="Enter pickup address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Drop-off Location</label>
                  <input
                    type="text"
                    name="dropoff"
                    value={formData.dropoff}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition"
                    placeholder="Enter destination"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Passengers</label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Passengers</option>
                  </select>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition transform hover:scale-105 shadow-lg"
                >
                  Confirm Booking
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
