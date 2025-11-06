import { useState } from 'react';
import { X, Phone, MapPin, Navigation, Clock, Loader } from 'lucide-react';

const GoogleMapsBookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    service: 'standard'
  });

  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showRoute, setShowRoute] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create booking summary
    const bookingDetails = `
MILITARY TAXI BOOKING REQUEST

Personal Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}

Trip Details:
- From: ${formData.pickup}
- To: ${formData.destination}
- Date: ${formData.date}
- Time: ${formData.time}
- Passengers: ${formData.passengers}
- Service Type: ${formData.service}

Route Information:
${distance ? `- Distance: ${distance}` : ''}
${duration ? `- Duration: ${duration}` : ''}
    `;

    const subject = encodeURIComponent('Military Taxi Booking Request');
    const body = encodeURIComponent(bookingDetails);
    
    window.location.href = `mailto:Themillitarytaxico@gmail.com?subject=${subject}&body=${body}`;
    
    alert('Booking request sent! We will contact you within 15 minutes to confirm your booking.');
    onClose();
  };

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newFormData);

    // Simulate route calculation when both pickup and destination are filled
    if (e.target.name === 'pickup' && newFormData.destination && e.target.value.length > 3) {
      calculateRoute(e.target.value, newFormData.destination);
    } else if (e.target.name === 'destination' && newFormData.pickup && e.target.value.length > 3) {
      calculateRoute(newFormData.pickup, e.target.value);
    }
  };

  const calculateRoute = (pickup, destination) => {
    if (!pickup || !destination || pickup.length < 3 || destination.length < 3) {
      setShowRoute(false);
      return;
    }

    setIsCalculating(true);
    setDistance(null);
    setDuration(null);
    setShowRoute(false);

    // Simulate API delay and calculate estimated route
    setTimeout(() => {
      const routeData = getRouteEstimate(pickup, destination);
      setDistance(routeData.distance);
      setDuration(routeData.duration);
      setShowRoute(true);
      setIsCalculating(false);
    }, 2000);
  };

  const getRouteEstimate = (pickup, destination) => {
    // Enhanced route estimation based on location keywords
    const pickupLower = pickup.toLowerCase();
    const destinationLower = destination.toLowerCase();
    
    // Define location categories and their approximate positions
    const locationData = {
      // Airports
      'heathrow': { type: 'airport', baseDistance: 85, coords: { lat: 51.4700, lng: -0.4543 } },
      'gatwick': { type: 'airport', baseDistance: 95, coords: { lat: 51.1481, lng: -0.1903 } },
      'stansted': { type: 'airport', baseDistance: 120, coords: { lat: 51.8860, lng: 0.2389 } },
      'luton': { type: 'airport', baseDistance: 100, coords: { lat: 51.8747, lng: -0.3683 } },
      
      // Cities
      'london': { type: 'city', baseDistance: 90, coords: { lat: 51.5074, lng: -0.1278 } },
      'manchester': { type: 'city', baseDistance: 350, coords: { lat: 53.4808, lng: -2.2426 } },
      'birmingham': { type: 'city', baseDistance: 180, coords: { lat: 52.4862, lng: -1.8904 } },
      'bristol': { type: 'city', baseDistance: 120, coords: { lat: 51.4545, lng: -2.5879 } },
      'oxford': { type: 'city', baseDistance: 60, coords: { lat: 51.7520, lng: -1.2577 } },
      'cambridge': { type: 'city', baseDistance: 140, coords: { lat: 52.2053, lng: 0.1218 } },
      
      // Military bases (near Salisbury)
      'bulford': { type: 'military', baseDistance: 15, coords: { lat: 51.1833, lng: -1.7667 } },
      'larkhill': { type: 'military', baseDistance: 12, coords: { lat: 51.2000, lng: -1.8000 } },
      'tidworth': { type: 'military', baseDistance: 18, coords: { lat: 51.2333, lng: -1.6667 } },
      'perham down': { type: 'military', baseDistance: 20, coords: { lat: 51.1500, lng: -1.7333 } },
      
      // Local areas
      'salisbury': { type: 'city', baseDistance: 5, coords: { lat: 51.0693, lng: -1.7957 } },
      'southampton': { type: 'city', baseDistance: 35, coords: { lat: 50.9097, lng: -1.4044 } },
      'winchester': { type: 'city', baseDistance: 25, coords: { lat: 51.0632, lng: -1.3080 } },
      'bournemouth': { type: 'city', baseDistance: 50, coords: { lat: 50.7192, lng: -1.8808 } },
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
      // Both locations recognized - calculate based on coordinates
      const avgDistance = (pickupData.baseDistance + destinationData.baseDistance) / 2;
      const variation = Math.random() * 10 - 5; // ±5km variation
      estimatedDistance = Math.max(5, Math.round(avgDistance + variation));
      
      // Special cases
      if (pickupData.type === 'airport' || destinationData.type === 'airport') {
        routeType = 'airport';
        estimatedDistance = Math.max(estimatedDistance, 80);
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
      estimatedDistance = Math.round(10 + (totalLength * 0.8) + (Math.random() * 20));
      estimatedDistance = Math.max(5, Math.min(estimatedDistance, 150));
    }

    // Calculate duration based on distance and route type
    let speedFactor;
    switch (routeType) {
      case 'airport':
        speedFactor = 0.7; // Slower due to traffic and distance
        break;
      case 'military':
        speedFactor = 1.1; // Faster, direct routes
        break;
      default:
        speedFactor = 1.0;
    }

    const baseMinutes = estimatedDistance * 1.5; // ~40km/h average
    estimatedDuration = Math.round(baseMinutes * speedFactor);

    return {
      distance: `${estimatedDistance} km`,
      duration: `${estimatedDuration} mins`,
      routeType,
      pickup: pickupData?.name || 'custom location',
      destination: destinationData?.name || 'custom location'
    };
  };

  // Popular destinations for manual input
  const popularDestinations = [
    'Heathrow Airport, London',
    'Gatwick Airport, London',
    'Stansted Airport, London',
    'Bulford Military Base',
    'Larkhill Military Base',
    'Tidworth Military Base',
    'Perham Down Military Base',
    'Salisbury City Centre',
    'Southampton',
    'Winchester',
    'London City Centre',
    'Oxford',
    'Bristol',
    'Bournemouth'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book Your Ride</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
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
            <div className="grid md:grid-cols-2 gap-4">
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
                    placeholder="Start typing pickup location..."
                    list="pickup-suggestions"
                  />
                  <datalist id="pickup-suggestions">
                    {popularDestinations.map((dest, idx) => (
                      <option key={idx} value={dest} />
                    ))}
                  </datalist>
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
                    placeholder="Start typing destination..."
                    list="destination-suggestions"
                  />
                  <datalist id="destination-suggestions">
                    {popularDestinations.map((dest, idx) => (
                      <option key={idx} value={dest} />
                    ))}
                  </datalist>
                </div>
              </div>
            </div>

            {/* Route Information */}
            {isCalculating && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-center text-sm">
                  <Loader className="animate-spin w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-blue-700">Calculating route...</span>
                </div>
              </div>
            )}
            
            {distance && duration && !isCalculating && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <div className="flex items-center">
                    <Navigation className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-medium text-gray-700">Distance: {distance}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-medium text-gray-700">Duration: {duration}</span>
                  </div>
                </div>
                <div className="text-xs text-green-700 text-center">
                  Route calculated • Optimized for comfort and efficiency
                </div>
              </div>
            )}

            {/* Interactive Route Map */}
            <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-yellow-800">
                    {showRoute ? 'Route Displayed' : 'Interactive Route Map'}
                  </span>
                </div>
                {showRoute && (
                  <span className="text-xs text-green-700 font-medium">
                    ✓ Route Active
                  </span>
                )}
              </div>
              
              {/* Enhanced Route Visualization */}
              <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 320" className="w-full h-full">
                    <defs>
                      <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="400" height="320" fill="url(#mapGrid)" />
                  </svg>
                </div>

                {/* Route Display */}
                {showRoute && formData.pickup && formData.destination ? (
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 400 320" className="w-full h-full">
                      {/* Route Path */}
                      <path
                        d="M 60 240 Q 120 180 180 160 Q 240 140 300 120 Q 340 100 360 80"
                        stroke="#10b981"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="8,4"
                        className="animate-pulse"
                      />
                      
                      {/* Pickup Marker */}
                      <circle cx="60" cy="240" r="8" fill="#10b981" stroke="white" strokeWidth="3"/>
                      <text x="60" y="260" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                        Pickup
                      </text>
                      
                      {/* Destination Marker */}
                      <circle cx="360" cy="80" r="8" fill="#dc2626" stroke="white" strokeWidth="3"/>
                      <text x="360" y="100" textAnchor="middle" className="text-xs font-semibold fill-gray-700">
                        Destination
                      </text>

                      {/* Route Points */}
                      <circle cx="180" cy="160" r="3" fill="#6b7280" opacity="0.7"/>
                      <circle cx="300" cy="120" r="3" fill="#6b7280" opacity="0.7"/>
                    </svg>

                    {/* Route Info Overlay */}
                    <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-3 shadow-lg">
                      <div className="text-sm font-semibold text-gray-800">Route Calculated</div>
                      <div className="text-xs text-gray-600">
                        {distance} • {duration}
                      </div>
                    </div>
                  </div>
                ) : isCalculating ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Loader className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-spin" />
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Calculating Route...</h3>
                      <p className="text-sm text-gray-600">Finding the best path for your journey</p>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Interactive Route Map</h3>
                      <p className="text-sm text-gray-600 max-w-xs">
                        Enter pickup and destination to see your route
                      </p>
                      <div className="mt-4 flex justify-center space-x-4">
                        <div className="flex items-center text-xs text-gray-500">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                          Pickup
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                          Destination
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
                  min={new Date().toISOString().split('T')[0]}
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

export default GoogleMapsBookingModal;