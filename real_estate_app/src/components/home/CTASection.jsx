import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, Section } from "lucide-react";

const CTASection = () => {
    return (
       <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden">
           {/* Background Elements */}
           <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float">
            </div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-400 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
           </div>

           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Find Your
                <span className="block text-accent-400">Dream Home?</span>
                </h2>

                <p className="text-xl text-primary-200 max-w-3xl mx-auto mb-12 leading-relaxed">
                    Don't wait any longer. Our expert team is ready to help you navigate the real estate market and find the perfect property for your needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/properties" className="inline-flex items-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Browse Properties 
                     <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    
                    <Link to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-900 transition-all duration-200">
                        <Phone className="mr-2 w-5 h-5" />
                        Schedule Consultation
                    </Link>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-primary-600">
                    <div className="flex items-center space-x-3">
                        <Phone className="w-6 h-6 text-accent-400" />
                        <div>
                            <div className="text-sm text-primary-300">Call us now</div>
                            <div className="text-lg font-semibold">(555) 123-4567</div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <MessageCircle className="w-6 h-6 text-accent-400" />
                        <div>
                            <div className="text-sm text-primary-300">Email us</div>
                            <div className="text-lg font-semibold">info@dreamhome.com</div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           

       </section>
    );
};

export default CTASection;