import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

const SearchSection = () => {
    const [searchData, setSearchData] = useState({
        location: '',
        propertyType: '',
        priceRange: '',
        bedrooms: ''
    });

    const handleInputChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Search data:', searchData);
    }

    return (
       <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Find Your Perfect Property
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Use our advance search to discover properties that match your exact requirements
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <form onSubmit={handleSearch} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Location */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                                Location
                            </label>
                            <input 
                               type="text" 
                               name="location"
                               value={searchData.location}
                               onChange={handleInputChange}
                               placeholder="Enter city or area"
                               className="input-field"
                            />
                        </div>

                        {/* Property Type */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Home className="w-4 h-4 mr-2 text-primary-600" />
                                Property Type
                            </label>
                            <select 
                                name="propertyType"
                                value={searchData.propertyType}
                                onChange={handleInputChange}
                                className="input-field"
                            >
                                <option value="">All Types</option>
                                <option value="house">House</option>
                                <option value="condo">Condo</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="loft">Loft</option>
                                <option value="villa">Villa</option>
                            </select>
                        </div>

                        {/* Price Range */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700-">
                                <DollarSign className="w-4 h-4 mr-2 text-primary-600" />
                                Price Range
                            </label>
                            <select 
                               name="priceRange"
                               value={searchData.priceRange}
                               onChange={handleInputChange}
                               className="input-field"
                            >
                               <option value="">Any Price</option>
                               <option value="0-300000">Under $300k</option>
                               <option value="300000-500000">$300k - $500k</option>
                               <option value="500000-750000">$500k - $750k</option>
                               <option value="750000-1000000">$750k - $1M</option>
                               <option value="1000000+">Over $1M</option>
                            </select>
                        </div>

                        {/* Bedrooms */}
                        <div className="space-y-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <Home className="w-4 h-4 mr-2 text-primary-600" />
                                Bedrooms
                            </label>
                            <select 
                               name="bedrooms"
                               value={searchData.bedrooms}
                               onChange={handleInputChange}
                               className="input-field"
                            >
                              <option value="">Any</option>
                              <option value="1">1 Bedroom</option>
                              <option value="2">2 Bedrooms</option>
                              <option value="3">3 Bedrooms</option>
                              <option value="4">4 Bedrooms</option>
                              <option value="5+">5+ Bedrooms</option>
                            </select>
                        </div>
                   </div>

                   <div className="flex justify-center pt-4">
                    <button
                       type="submit"
                       className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-lg transform hover:-translate-y-1"
                    >
                        <Search className="w-5 h-5 mr-2" />
                        Search Properties
                    </button>
                   </div>
                </form>
            </div>
         </div>
       </section>
    );
};

export default SearchSection;