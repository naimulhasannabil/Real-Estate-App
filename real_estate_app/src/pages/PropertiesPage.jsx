import { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/common/PropertyCard";
import { Search, Filter, MapPin, User } from "lucide-react";

const PropertiesPage = () => {
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [filters, setFilters] = useState({
        search: '',
        type: '',
        priceRange: '',
        bedrooms: ''
    });
    const [activeTab, setActiveTab] = useState('Popular');

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    const applyFilters = (currentFilters) => {
        let filtered = properties;

        if (currentFilters.search) {
            filtered = filtered.filter(property => property.title.toLowerCase().includes(currentFilters.search.toLowerCase()) || property.address.toLowerCase().includes(currentFilters.search.toLowerCase())
            );
        }

        if (currentFilters.type) {
            filtered = filtered.filter(property => property.type.toLowerCase() === currentFilters.type.toLowerCase()
            );
        }

        if (currentFilters.bedrooms) {
            filtered = filtered.filter(property => property.bedrooms >= parseInt(currentFilters.bedrooms)
            );
        }

        if (currentFilters.priceRange) {
            const [min, max] = currentFilters.priceRange.split('-').map(Number);
            filtered = filtered.filter(property => {
                if (max) {
                    return property.price >= min && property.price <= max;
                } else {
                    return property.price >= min;
                }
            });
        }

        setFilteredProperties(filtered);
    };

    const tabs = ['Popular', 'Recommended', 'Nearest'];

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-600" />
            <div>
              <p className="text-sm text-gray-500">location</p>
              <p className="font-semibold text-gray-900">Las Vegas</p>
            </div>
          </div>
          <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="search address, city, location"
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-12 pr-16 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Property Type Selection */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all cursor-pointer">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="House" className="w-12 h-12 rounded-lg object-cover" />
            </div>
            <p className="font-semibold text-gray-900">Rent a Home</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all cursor-pointer">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <img src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg" alt="Condo" className="w-12 h-12 rounded-lg object-cover" />
            </div>
            <p className="font-semibold text-gray-900">Buy a Home</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-6 text-sm mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-all ${
                activeTab === tab
                  ? 'text-gray-900 font-semibold border-b-2 border-cyan-500'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;