import { useState } from 'react';
import { Car } from 'lucide-react';

const Logo = ({ size = 'large', className = '' }) => {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    small: 'h-10 w-10',
    medium: 'h-12 w-12', 
    large: 'h-16 w-16',
    xlarge: 'h-20 w-20',
    xxlarge: 'h-24 w-24',
    xxxlarge: 'h-28 w-28'
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    // Fallback to icon if image fails
    return (
      <div className={`${sizeClasses[size]} bg-amber-600 rounded-xl flex items-center justify-center shadow-lg border-2 border-white ${className}`}>
        <Car className={`${
          size === 'xxxlarge' ? 'w-16 h-16' : 
          size === 'xxlarge' ? 'w-14 h-14' : 
          size === 'xlarge' ? 'w-12 h-12' : 
          size === 'large' ? 'w-10 h-10' : 
          'w-8 h-8'
        } text-white`} />
      </div>
    );
  }

  return (
    <img
      src="./src/assets/militaryTaxiLogo.jpg"
      alt="The Military Taxi Co. Logo"
      className={`${sizeClasses[size]} rounded-xl shadow-lg object-cover border-2 border-white ${className}`}
      onError={handleImageError}
      onLoad={() => console.log('Logo loaded successfully')}
    />
  );
};

export default Logo;