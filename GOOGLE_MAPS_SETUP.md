# Google Maps API Setup Instructions

## Overview
The GoogleMapsBookingModal component provides:
- **Location Autocomplete**: Real-time suggestions as users type pickup and destination
- **Interactive Map**: Visual route preview with markers
- **Route Calculation**: Automatic distance and duration calculation
- **UK-focused**: Restricted to UK locations for military taxi service

## Step 1: Get Google Maps API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create or Select Project**
   - Create a new project or select existing one
   - Name it something like "Military Taxi Maps"

3. **Enable Required APIs**
   - Go to "APIs & Services" > "Library"
   - Enable these APIs:
     - **Maps JavaScript API** (for map display)
     - **Places API** (for location autocomplete)
     - **Directions API** (for route calculation)
     - **Geocoding API** (for address conversion)

4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

5. **Secure Your API Key (Recommended)**
   - Click on your API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain: `localhost:*` for development
   - Add your production domain when deploying

## Step 2: Add API Key to Your Project

1. **Open the GoogleMapsBookingModal component**
   - File: `src/components/GoogleMapsBookingModal.jsx`

2. **Replace the API Key**
   ```javascript
   // Find this line (around line 25):
   const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
   
   // Replace with your actual API key:
   const GOOGLE_MAPS_API_KEY = 'AIzaSyC_your_actual_api_key_here';
   ```

## Step 3: Test the Integration

1. **Start your development server**
   ```bash
   npm run dev
   ```

2. **Test the features**
   - Click "Book Your Ride" button
   - Start typing in pickup location - you should see suggestions
   - Start typing in destination - you should see suggestions
   - Select both locations - route should appear on map
   - Distance and duration should be calculated

## Features Included

### 🎯 **Location Autocomplete**
- Real-time suggestions as you type
- UK-focused results
- Popular destinations pre-loaded:
  - Heathrow, Gatwick, Stansted Airports
  - Military bases: Bulford, Larkhill, Tidworth, Perham Down
  - Major cities: Salisbury, Southampton, Winchester

### 🗺️ **Interactive Map**
- Centered on Salisbury, UK
- Custom markers for pickup/destination
- Route visualization
- Responsive design

### 📏 **Route Calculation**
- Real-time distance calculation
- Estimated travel time
- Optimized driving routes
- Fallback to straight-line distance if needed

### 📱 **Mobile Responsive**
- Works on all devices
- Touch-friendly interface
- Optimized for mobile booking

## Troubleshooting

### Map Not Loading
- Check API key is correct
- Ensure Maps JavaScript API is enabled
- Check browser console for errors

### Autocomplete Not Working
- Ensure Places API is enabled
- Check API key restrictions
- Verify network connectivity

### Route Not Calculating
- Ensure Directions API is enabled
- Check if locations are valid
- Look for quota limits in Google Cloud Console

## Cost Considerations

Google Maps APIs have usage-based pricing:
- **Maps JavaScript API**: $7 per 1,000 loads
- **Places API**: $17 per 1,000 requests
- **Directions API**: $5 per 1,000 requests

**Free Tier**: Google provides $200 monthly credit, which covers:
- ~28,000 map loads
- ~11,000 autocomplete requests
- ~40,000 directions requests

For a taxi booking website, this should be sufficient for moderate traffic.

## Security Best Practices

1. **Restrict API Key**
   - Limit to specific domains
   - Restrict to required APIs only

2. **Monitor Usage**
   - Set up billing alerts
   - Monitor API usage in Google Cloud Console

3. **Environment Variables** (Optional)
   - Store API key in environment variables
   - Use different keys for development/production

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify API key and enabled services
3. Test with a simple location like "London"
4. Check Google Cloud Console for quota/billing issues

The component includes fallback functionality and will show helpful error messages if the API is not configured properly.