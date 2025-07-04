import { Home, Search, TrendingUp, Calculator, FileText, Users } from "lucide-react";

const ServicesSection = () => {
   const services = [
    {
        icon: Search,
        title: "Property Search",
        description: "Advanced search tools to find your perfect home with detailed filters and neighborhood insights.",
        color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Home,
      title: "Property Management",
      description: "Complete property management services for landlords and property investors.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "Comprehensive market analysis and property valuation to make informed decisions.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Calculator,
      title: "Mortgage Calculator",
      description: "Calculate your mortgage payments and explore financing options tailored to your budget.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: FileText,
      title: "Legal Support",
      description: "Professional legal support throughout your property transaction process.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "One-on-one consultation with our experienced real estate professionals.",
      color: "bg-indigo-100 text-indigo-600"
    }
   ];

   return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Comprehensive real estate services designed to meet all your property needs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                       <div
                          key={index}
                          className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                       >
                           <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                               <Icon className="w-8 h-8" />
                           </div>

                           <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                              {service.title}
                           </h3>

                           <p className="text-gray-600 leading-relaxed">
                             {service.description}
                           </p>
                       </div>
                    );
                })}
            </div>
        </div>
      </section> 
   );
};

export default ServicesSection;