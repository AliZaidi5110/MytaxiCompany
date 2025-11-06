import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'James Thompson',
      role: 'Business Executive',
      comment: 'Absolutely reliable service! Never missed a flight thanks to their punctuality. The professional service makes every journey pleasant.',
      rating: 5,
      location: 'London'
    },
    {
      name: 'Emma Williams',
      role: 'Tourist',
      comment: 'The best way to explore the UK. Drivers are knowledgeable, friendly, and provide excellent service with military precision.',
      rating: 5,
      location: 'Manchester'
    },
    {
      name: 'David Brown',
      role: 'Local Resident',
      comment: 'Professional, safe, and affordable. My go-to taxi service for years. The military precision combined with warm service is unmatched.',
      rating: 5,
      location: 'Birmingham'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative">
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
    </section>
  );
};

export default Testimonials;