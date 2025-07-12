import { agents } from "../data/properties";
import { Star, Phone, Mail, Award, Home } from "lucide-react";

const AgentsPage = () => {
    return(
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Meet Our Expert Agents
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our experienced team of real estate professionals is here to help you navigate the market and find your perfect property.
                    </p>
                </div>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {agents.map((agent) => (
                        <div 
                          key={agent.id}
                          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Agent Photo */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                  src={agent.image}
                                  alt={agent.name}
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium">{agent.rating}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Agent Info */}
                             <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
                                <p className="text-primary-600 font-medium mb-2">{agent.title}</p>
                                <p className="text-gray-600 text-sm mb-4">{agent.bio}</p>

                                {/* Experience and Sales */}
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                        <div className="text-2xl font-bold text-primary-600">{agent.experience}</div>
                                        <div className="text-xs text-gray-600">Experience</div>
                                    </div>
                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                        <div className="text-2xl font-bold text-primary-600">{agent.sales}</div>
                                        <div className="text-xs text-gray-600">Properties Sold</div>
                                    </div>
                                </div>

                                {/* Specialties */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {agent.specialties.map((specialty, index) => (
                                            <span 
                                              key={index}
                                              className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full" >
                                                {specialty}
                                              </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Buttons */}
                                <div className="space-y-2">
                                    <a 
                                      href={`tel:${agent.phone}`}
                                      className="flex items-center justify-center space-x-2 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                                    >
                                        <Phone className="w-4 h-4" />
                                        <span>Call Now</span>
                                    </a>
                                    <a 
                                      href={`mailto:${agent.email}`}
                                      className="flex items-center justify-center space-x-2 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors duration-200"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>Send Email</span>
                                    </a>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Can't Find the Right Agent?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Tell us about your needs and we'll match you with the perfect agent for your situation.
                    </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(555)123-4567"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (555) 123-4567
            </a>
            <a
              href="mailto:info@productiverealestate.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-all duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
                </div>
            </div>
        </div>
    );
};

export default AgentsPage;