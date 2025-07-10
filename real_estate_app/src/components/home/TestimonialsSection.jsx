import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
    const testimonial = [
        {
           name: "Jennifer Martinez",
           role: "First-time Homebuyer",
           image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
           rating: 5,
           text: "The team at Productive Real Estate made buying my first home incredibly easy. Their expertise and patience throughout the process was exceptional. I couldn't be happier with my new home!"
        },
        {
           name: "Robert Thompson",
           role: "Property Investor",
           image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
           rating: 5,
           text: "As an investor, I need agents who understand the market. This team has helped me build a portfolio of 12 properties. Their market analysis is always spot-on and their service is unmatched."
        },
        {
           name: "Sarah Chen",
           role: "Family Relocating",
           image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
           rating: 5,
           text: "Moving across the country was stressful, but the team made finding our perfect family home seamless. They understood our needs and found us a home that checked every box. Highly recommended!"
        }
    ];

   return (
     <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Don't just take our word for it - hear from our satisfied clients
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonial.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-lg transition-all duration-300 relative"
                    >
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6 opacity-10">
                            <Quote className="w-12 h-12 text-primary-600" />
                        </div>

                        {/* Rating */}
                        <div className="flex mb-6">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                            "{testimonial.text}"
                        </p>

                        {/* Client Info */}
                        <div className="flex items-center">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                <div className="text-sm text-gray-600">{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </section>
   );
};

export default TestimonialsSection;