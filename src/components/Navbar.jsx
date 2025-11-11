import { useState, useEffect } from 'react';
import { Menu, X, Clock, Shield, Star } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
            ? 'bg-gray-900 backdrop-blur-xl shadow-2xl border-b border-yellow-500/20'
            : 'bg-gray-900 backdrop-blur-lg shadow-xl'
            }`}>
            {/* Enhanced Professional Info Bar */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2 md:py-3 hidden md:block border-b border-yellow-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center text-xs md:text-sm">
                        <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
                            <div className="flex items-center group">
                                <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                                <span className="font-semibold text-white hidden lg:inline">24/7 Service Available</span>
                                <span className="font-semibold text-white lg:hidden">24/7 Available</span>
                            </div>
                            <div className="flex items-center group">
                                <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                                <span className="font-semibold text-white hidden lg:inline">Licensed & Insured</span>
                                <span className="font-semibold text-white lg:hidden">Licensed</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6">
                            <div className="flex items-center">
                                <div className="flex mr-1 md:mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <span className="text-yellow-400 font-bold text-xs md:text-sm">5.0</span>
                            </div>
                            <div className="w-px h-3 md:h-4 bg-gray-600"></div>
                            <a
                                href="tel:07999997820"
                                className="hover:text-yellow-400 transition-colors font-bold text-white flex items-center group text-xs md:text-sm"
                            >
                                📞 <span className="ml-1">07999 997 820</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3 md:py-4 lg:py-5">
                    {/* Premium Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <div className="flex items-center group">
                            <div className="mr-2 md:mr-3 lg:mr-4 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                                <Logo size="large" className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 shadow-2xl border-2 md:border-3 border-yellow-500 rounded-2xl hover:border-yellow-400 transition-all duration-300" />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm sm:text-base md:text-xl lg:text-2xl font-black text-white leading-tight tracking-tight truncate">
                                    Military Taxi Company
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Premium Desktop Navigation Menu */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-white hover:text-yellow-300 px-3 lg:px-4 py-2 lg:py-3 rounded-xl text-sm lg:text-base font-bold transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 relative group border border-transparent hover:border-yellow-400 hover:shadow-md"
                                >
                                    {item.name}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 transition-all duration-300 group-hover:w-8 lg:group-hover:w-10 group-hover:left-1/2 group-hover:-translate-x-1/2 rounded-full"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Mobile Menu Button */}
                    <div className="lg:hidden flex-shrink-0">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-yellow-300 focus:outline-none p-2 md:p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-all duration-300 border border-transparent hover:border-yellow-400 shadow-md hover:shadow-lg"
                        >
                            {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Premium Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden border-t border-yellow-500/20 bg-gray-900 backdrop-blur-xl">
                    <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-1 sm:space-y-2 shadow-2xl">
                        {/* Mobile Info Bar */}
                        <div className="md:hidden mb-4 pb-4 border-b border-yellow-500/20">
                            <div className="flex flex-col space-y-2 text-xs">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Clock className="w-3 h-3 mr-2 text-yellow-400" />
                                        <span className="text-white">24/7 Available</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Shield className="w-3 h-3 mr-2 text-yellow-400" />
                                        <span className="text-white">Licensed</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                        ))}
                                        <span className="text-yellow-400 font-bold ml-1">5.0</span>
                                    </div>
                                    <a
                                        href="tel:07999997820"
                                        className="text-yellow-400 font-bold"
                                    >
                                        📞 07999 997 820
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-yellow-300 block px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-all duration-300 border border-transparent hover:border-yellow-400 hover:shadow-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}


        </nav>
    );
};

export default Navbar;