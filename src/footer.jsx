import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './components/Logo';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Logo size="small" className="mr-3" />
              <span className="text-xl font-bold">The Military Taxi Company</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional taxi services across the Wiltshire with military precision and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer">Services</a></li>
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer">Gallery</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer">Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Airport Transfers</span></li>
              <li><span className="text-gray-400">Private Hire</span></li>
              <li><span className="text-gray-400">Wedding Car Hire</span></li>
              <li><span className="text-gray-400">Stonehenge Tours</span></li>
              <li><span className="text-gray-400">Train Station Pickups</span></li>
              <li><span className="text-gray-400">Military Base Services</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-yellow-500 mr-2" />
                <a href="tel:07999997820" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  07999 997 820
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-yellow-500 mr-2" />
                <a href="mailto:themilitarytaxico@gmail.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  themilitarytaxico@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-gray-400">driving Wiltshire with pride</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Military Taxi Company. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Professional & Reliable Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
