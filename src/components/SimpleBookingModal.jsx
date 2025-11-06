import { useState } from 'react';
import { X, Phone, MapPin, Navigation, Clock } from 'lucide-react';

const SimpleBookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    service: 'airport'
  });

  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [routeInfo, setRouteInfo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    alert('Booking request submitted! We will call you shortly to confirm.');
    onClose();
  };

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newFormData);

    // Calculate route when both locations are filled
    if (e.target.name === 'pickup' && newFormData.destination && e.target.value.length > 3) {
      calculateRoute(e.target.value, newFormData.destination);
    } else if (e.target.name === 'destination' && newFormData.pickup && e.target.value.length > 3) {
      calculateRoute(newFormData.pickup, e.target.value);
    }
  };

  const calculateRoute = (pickup, destination) => {
    if (!pickup || !destination || pickup.length < 3 || destination.length < 3) {
      return;
    }

    setIsCalculating(true);
    setDistance(null);
    setDuration(null);

    // Simulate API delay
    setTimeout(() => {
      const routeData = getRouteEstimate(pickup, destination);
      setDistance(routeData.distance);
      setDuration(routeData.duration);
      setRouteInfo(routeData);
      setIsCalculating(false);
    }, 1500);
  };

  const getRouteEstimate = (pickup, destination) => {
    // Create a more realistic estimation based on location keywords
    const pickupLower = pickup.toLowerCase();
    const destinationLower = destination.toLowerCase();
    
    // Define location categories and their approximate positions
    const locationData = {
      // Airports
      'heathrow': { type: 'airport', baseDistance: 25 },
      'gatwick': { type: 'airport', baseDistance: 45 },
      'stansted': { type: 'airport', baseDistance: 40 },
      'luton': { type: 'airport', baseDistance: 35 },
      
      // Cities
      'london': { type: 'city', baseDistance: 20 },
      'manchester': { type: 'city', baseDistance: 200 },
      'birmingham': { type: 'city', baseDistance: 120 },
      'bristol': { type: 'city', baseDistance: 100 },
      'oxford': { type: 'city', baseDistance: 60 },
      'cambridge': { type: 'city', baseDistance: 80 },
      
      // Military bases
      'bulford': { type: 'military', baseDistance: 15 },
      'larkhill': { type: 'military', baseDistance: 12 },
      'tidworth': { type: 'military', baseDistance: 18 },
      'perham down': { type: 'military', baseDistance: 20 },
      
      // Train stations
      'waterloo': { type: 'station', baseDistance: 25 },
      'paddington': { type: 'station', baseDistance: 30 },
      'victoria': { type: 'station', baseDistance: 28 },
      'kings cross': { type: 'station', baseDistance: 32 },
      
      // Areas
      'salisbury': { type: 'city', baseDistance: 10 },
      'southampton': { type: 'city', baseDistance: 25 },
      'winchester': { type: 'city', baseDistance: 20 },
      'bournemouth': { type: 'city', baseDistance: 40 },
    };

    // Find matching locations
    let pickupData = null;
    let destinationData = null;

    for (const [key, data] of Object.entries(locationData)) {
      if (pickupLower.includes(key)) {
        pickupData = { ...data, name: key };
      }
      if (destinationLower.includes(key)) {
        destinationData = { ...data, name: key };
      }
    }

    // Calculate distance based on found locations
    let estimatedDistance;
    let estimatedDuration;
    let routeType = 'local';

    if (pickupData && destinationData) {
      // Both locations recognized
      const avgDistance = (pickupData.baseDistance + destinationData.baseDistance) / 2;
      const variation = Math.random() * 10 - 5; // ±5km variation
      estimatedDistance = Math.max(5, Math.round(avgDistance + variation));
      
      // Special cases
      if (pickupData.type === 'airport' || destinationData.type === 'airport') {
        routeType = 'airport';
        estimatedDistance = Math.max(estimatedDistance, 25);
      } else if (pickupData.type === 'military' || destinationData.type === 'military') {
        routeType = 'military';
      }
    } else if (pickupData || destinationData) {
      // One location recognized
      const knownLocation = pickupData || destinationData;
      estimatedDistance = Math.round(knownLocation.baseDistance + (Math.random() * 20 - 10));
      estimatedDistance = Math.max(5, estimatedDistance);
      
      if (knownLocation.type === 'airport') {
        routeType = 'airport';
      } else if (knownLocation.type === 'military') {
        routeType = 'military';
      }
    } else {
      // Neither location recognized - use length-based estimation
      const totalLength = pickup.length + destination.length;
      estimatedDistance = Math.round(5 + (totalLength * 0.5) + (Math.random() * 15));
      estimatedDistance = Math.max(5, Math.min(estimatedDistance, 50));
    }

    // Calculate duration based on distance and route type
    let speedFactor;
    switch (routeType) {
      case 'airport':
        speedFactor = 0.8; // Slower due to traffic
        break;
      case 'military':
        speedFactor = 1.2; // Faster, direct routes
        break;
      default:
        speedFactor = 1.0;
    }

    const baseMinutes = estimatedDistance * 2; // ~30km/h average
    estimatedDuration = Math.round(baseMinutes * speedFactor);

    return {
      distance: `${estimatedDistance} km`,
      duration: `${estimatedDuration} mins`,
      routeType,
      pickup: pickupData?.name || 'custom location',
      destination: destinationData?.name || 'custom location'
    };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book Your Ride</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                placeholder="Your email address"
              />
            </div>

            {/* Location Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Pickup Location *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-yellow-600" />
                  <input
                    type="text"
                    name="pickup"
                    required
                    value={formData.pickup}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="Enter pickup location..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Destination *</label>
                <div className="relative">
                  <Navigation className="absolute left-3 top-3 w-5 h-5 text-yellow-600" />
                  <input
                    type="text"
                    name="destination"
                    required
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="Enter destination..."
                  />
                </div>
              </div>

              {/* Route Information */}
              {isCalculating && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-center text-sm">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    <span className="text-blue-700">Calculating route...</span>
                  </div>
                </div>
              )}
              
              {distance && duration && !isCalculating && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <div className="flex items-center">
                      <Navigation className="w-4 h-4 text-yellow-600 mr-2" />
                      <span className="font-medium text-gray-700">Distance: {distance}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-yellow-600 mr-2" />
                      <span className="font-medium text-gray-700">Duration: {duration}</span>
                    </div>
                  </div>
                  {routeInfo && (
                    <div className="text-xs text-gray-600 flex items-center justify-center">
                      <span className="capitalize">{routeInfo.routeType}</span> route • 
                      <span className="ml-1">Optimized for comfort and efficiency</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Interactive Map Preview */}
            <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-yellow-800">Route Preview</span>
                </div>
                {routeInfo && (
                  <span className="text-xs text-yellow-700 capitalize font-medium">
                    {routeInfo.routeType} Service
                  </span>
                )}
              </div>
              <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center relative overflow-hidden">
                {/* Animated route line when calculating */}
                {isCalculating && (
                  <div className="absolute inset-0">
                    <svg className="w-full h-full">
                      <defs>
                        <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#d97706" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>
                      <path
                        d="M 20 40 Q 50 20 80 40 Q 110 60 140 40"
                        stroke="url(#routeGradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                )}

                {/* Static route when calculated */}
                {routeInfo && !isCalculating && (
                  <div className="absolute inset-0">
                    <svg className="w-full h-full">
                      <defs>
                        <linearGradient id="staticRoute" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#059669" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>
                      <path
                        d="M 30 60 Q 60 30 90 50 Q 120 70 150 50"
                        stroke="url(#staticRoute)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                      />
                      {/* Pickup marker */}
                      <circle cx="30" cy="60" r="6" fill="#10b981" stroke="white" strokeWidth="2"/>
                      {/* Destination marker */}
                      <circle cx="150" cy="50" r="6" fill="#dc2626" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                )}

                <div className="absolute inset-0 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f59e0b" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                  </svg>
                </div>

                <div className="text-center z-10">
                  {isCalculating ? (
                    <>
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg animate-pulse">
                        <Navigation className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-800 mb-2">Calculating Route...</h3>
                      <p className="text-sm text-gray-600 max-w-xs">
                        Finding the best route for your journey
                      </p>
                    </>
                  ) : routeInfo ? (
                    <>
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Navigation className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-800 mb-2">Route Calculated</h3>
                      <p className="text-sm text-gray-600 max-w-xs">
                        {distance} • {duration} • Optimized route ready
                      </p>
                      <div className="mt-3 flex justify-center space-x-4">
                        <div className="flex items-center text-xs text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          {formData.pickup ? formData.pickup.substring(0, 15) + '...' : 'Pickup'}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                          {formData.destination ? formData.destination.substring(0, 15) + '...' : 'Destination'}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-800 mb-2">Route Visualization</h3>
                      <p className="text-sm text-gray-600 max-w-xs">
                        Enter pickup and destination to see your route
                      </p>
                      <div className="mt-3 flex justify-center space-x-4">
                        <div className="flex items-center text-xs text-gray-500">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Pickup
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                          Destination
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Trip Details */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Date *</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Time *</label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Passengers</label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5+">5+ Passengers</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Service Type</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              >
                <option value="airport">Airport Transfer</option>
                <option value="private">Private Hire</option>
                <option value="wedding">Wedding Car Hire</option>
                <option value="tour">UK Tours</option>
                <option value="train">Train Station Transfer</option>
                <option value="military">Military Base Transport</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-xl hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2" />
                Request Booking
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            For immediate booking, call us at{' '}
            <a href="tel:07999997820" className="text-yellow-600 font-semibold hover:text-yellow-700">
              07999 997 820
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleBookingModal;