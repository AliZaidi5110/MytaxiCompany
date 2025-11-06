// Google Maps API utility
let isLoaded = false;
let isLoading = false;

export const loadGoogleMapsAPI = () => {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (isLoaded && window.google) {
      resolve(window.google);
      return;
    }

    // If currently loading, wait for it
    if (isLoading) {
      const checkLoaded = () => {
        if (isLoaded && window.google) {
          resolve(window.google);
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    isLoading = true;

    // For demo purposes, we'll use a placeholder
    // In production, replace with your actual API key
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'demo_key';
    
    // Create script element
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initGoogleMaps`;
    script.async = true;
    script.defer = true;

    // Global callback function
    window.initGoogleMaps = () => {
      isLoaded = true;
      isLoading = false;
      resolve(window.google);
    };

    script.onerror = () => {
      isLoading = false;
      reject(new Error('Failed to load Google Maps API'));
    };

    document.head.appendChild(script);
  });
};

// Demo mode for development without API key
export const createDemoMap = (mapElement) => {
  if (!mapElement) return null;

  // Create a demo map interface
  mapElement.innerHTML = `
    <div class="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg viewBox="0 0 100 100" class="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f59e0b" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      <div class="text-center z-10">
        <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-2">Interactive Map</h3>
        <p class="text-sm text-gray-600 max-w-xs">
          Route will be displayed here when both pickup and destination are selected
        </p>
        <div class="mt-4 flex justify-center space-x-4">
          <div class="flex items-center text-xs text-gray-500">
            <div class="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            Pickup
          </div>
          <div class="flex items-center text-xs text-gray-500">
            <div class="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
            Destination
          </div>
        </div>
      </div>
    </div>
  `;

  return {
    setCenter: () => {},
    setZoom: () => {},
    addMarker: () => {},
    showRoute: () => {}
  };
};