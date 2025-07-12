import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { properties, agents } from "../data/properties";
import PropertyCard from "../components/common/PropertyCard";

const PropertyDetailsPage = () => {
    const { id } = useParams();
    const property = properties.find(p => p.id === parseInt(id));

    if (!property) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Property not found</h2>
                    <Link to="/properties" className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold">
                       Back to Properties
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-8">
            <div className="max-w-md mx-auto px-4">
                <PropertyCard property={property} isDetailView={true} />
            </div>
        </div>
    );
};

export default PropertyDetailsPage;