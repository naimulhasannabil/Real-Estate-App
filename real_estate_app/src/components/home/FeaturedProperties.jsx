import { Link } from "react-router-dom";
import { properties } from '../../data/properties';
import PropertyCard from '../common/PropertyCard';
import { ArrowRight } from "lucide-react";

const FeaturedProperties = () => {
    const featuredProperties = properties.filter(property => property.featured);

    return (
       <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Featured Properties
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discover our handpicked selection of premium properties
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            <div className="text-center">
                <Link
                   to="/properties"
                   className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    View All Properties 
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
            </div>
        </div>
       </section>
    );
};

export default FeaturedProperties;