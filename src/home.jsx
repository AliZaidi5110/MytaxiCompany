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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent('Taxi Booking Inquiry from ' + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:themilitarytaxico@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    
    alert('Thank you! Your message has been prepared. Please send the email from your email client.');
  };

  return (
    <div className="pt-24 sm:pt-28 md:pt-32">{/* Add padding-top to account for fixed navbar */}

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block bg-yellow-500 text-gray-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                ⭐ #1 Trusted Taxi Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Reliable Ride
                <span className="text-yellow-400"> Anytime, Anywhere</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4">
                Professional taxi services for airports, seaports, tours, long distance travel, and business trips.<br></br>Airport Transfers to UK major Airports.<br></br>Heathrow , Gatwick , Luton , Southampton , Bournemouth , Stanstead
              </p>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 sm:p-4 mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-yellow-400 mb-2">Serving Military Bases:</h3>
                <div className="text-xs sm:text-sm">
                  <span>• Wiltshire Military Bases</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-base sm:text-lg">
                <a href="tel:07999997820" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  📞 07999997820
                </a>
                <a href="mailto:themilitarytaxico@gmail.com" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors break-all sm:break-normal">
                  ✉️ themilitarytaxico@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-400 transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Book Your Ride <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition flex items-center justify-center cursor-pointer text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-gray-900 mt-8 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">CONTACT US</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition text-sm sm:text-base"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition text-sm sm:text-base"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 sm:mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition resize-none text-sm sm:text-base"
                    placeholder="Your message"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 py-3 sm:py-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  SEND MESSAGE
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
