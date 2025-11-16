import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const testimonials = [
    {
      name: 'James Thompson',
      role: 'Business Executive',
      comment: 'Absolutely reliable service! Never missed a flight thanks to their punctuality. The professional service makes every journey pleasant.',
      rating: 5,
      location: 'Bulford'
    },
    {
      name: 'Emma Williams',
      role: 'Tourist',
      comment: 'The best way to explore the Wiltshire. Drivers are knowledgeable, friendly, and provide excellent service with military precision.',
      rating: 5,
      location: 'Southampton'
    },
    {
      name: 'David Brown',
      role: 'Local Resident',
      comment: 'Professional, safe, and affordable. My go-to taxi service. The warm service & friendly drivers are unmatched.',
      rating: 5,
      location: 'Salisbury'
    },
    {
      name: 'Catherine',
      role: 'Local Resident',
      comment: 'My son car broke down after midnight in larkhill & this company was very helpful to gettin my son back home in bulford',
      rating: 5,
      location: 'Bulford'
    },
    {
      name: 'Major Robert Clarke',
      role: 'Military Personnel',
      comment: 'Outstanding service for military personnel. Always on time for base transfers and the drivers understand security protocols perfectly.',
      rating: 5,
      location: 'Tidworth'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Wedding Coordinator',
      comment: 'Used them for multiple wedding transfers. Immaculate vehicles, professional drivers, and always punctual. Highly recommend for special occasions!',
      rating: 5,
      location: 'Amesbury'
    },
    {
      name: 'Michael O\'Connor',
      role: 'Frequent Traveler',
      comment: 'Best airport transfer service I\'ve used. Comfortable ride to Heathrow, fair pricing, and the driver helped with my luggage. Will use again!',
      rating: 5,
      location: 'Stanstead'
    },
    {
      name: 'Lisa Henderson',
      role: 'Tourist',
      comment: 'Took us on a wonderful tour to Stonehenge and surrounding areas. Driver was knowledgeable about local history and made the trip memorable.',
      rating: 5,
      location: 'Bournemouth'
    },
    {
      name: 'Sergeant Tom Davies',
      role: 'Military Personnel',
      comment: 'Reliable 24/7 service that understands military schedules. Clean vehicles and respectful drivers. The go-to taxi for everyone at Larkhill base.',
      rating: 5,
      location: 'Larkhill'
    },
    {
      name: 'Rachel Foster',
      role: 'Corporate Client',
      comment: 'We use them for all our business travel needs. Professional, discreet, and always impeccably presented. Perfect for client meetings and airport runs.',
      rating: 5,
      location: 'Salisbury'
    },
    {
      name: 'Captain James Wilson',
      role: 'Military Personnel',
      comment: 'Exceptional service for military families. They helped my family with a last-minute move from Tidworth. Reliable and understanding of military life.',
      rating: 5,
      location: 'Tidworth'
    },
    {
      name: 'Patricia Green',
      role: 'Senior Citizen',
      comment: 'Wonderful drivers who are patient and helpful. They always assist me with my shopping bags and make sure I get home safely. Highly recommend!',
      rating: 5,
      location: 'Amesbury'
    }
  ];

  const reviewsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 15000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentReviews = () => {
    const start = currentPage * reviewsPerPage;
    return testimonials.slice(start, start + reviewsPerPage);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Reviews Grid with Animation */}
          <div className="overflow-hidden">
            <div 
              className="grid md:grid-cols-4 gap-8 transition-all duration-700 ease-in-out"
              style={{ opacity: 1 }}
            >
              {getCurrentReviews().map((testimonial, idx) => (
                <div 
                  key={`${currentPage}-${idx}`} 
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative animate-fadeIn"
                >
                  <Quote className="w-8 h-8 text-yellow-500 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-yellow-600">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === idx 
                    ? 'bg-yellow-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;