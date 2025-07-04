import { TrendingUp, Award, Users, Home } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Home,
      number: "500+",
      label: "Properties Sold",
      description: "Successfully closed deals"
    },
    {
      icon: Users,
      number: "1,200+",
      label: "Happy Clients",
      description: "Satisfied customers"
    },
    {
      icon: Award,
      number: "15+",
      label: "Awards Won",
      description: "Industry recognition"
    },
    {
      icon: TrendingUp,
      number: "$50M+",
      label: "Sales Volume",
      description: "Total property value"
    }
  ];

  return (
     <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Our Track Record Speaks
                </h2>
                <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                    Numbers that showcase our commitment to excellence in real estate
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                       <div
                          key={index}
                          className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                       >
                         <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-800 rounded-full mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                            <Icon className="w-8 h-8" />
                         </div>
                         <div className="text-4xl lg:text-5xl font-bold text-accent-400 mb-2">
                            {stat.number}
                         </div>
                         <div className="text-xl font-semibold mb-2">
                            {stat.label}
                         </div>
                         <div className="text-primary-300">
                            {stat.description}
                         </div>
                       </div>
                    );
                })}
            </div>
        </div>
     </section>
  );
};

export default StatsSection;