import { Link } from "react-router-dom";
import { Search, MapPin, User } from "lucide-react";

const HeroSection = () => {
    return (
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    {/* Hero Image */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <img 
                               src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" 
                               alt="Modern luxury home"
                               className="w-full h-80 object-cover"
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Find Your
                            <br />
                            <span className="text-cyan-600">Sweet Dreams</span> 
                        </h1>

                        <Link
                          to="/properties"
                          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                           Let's Start
                        </Link>
                    </div>
                </div>

                {/* Right Content - Search & Properties */}
                <div className="space-y-6">
                    {/* Search Bar */}
                    <div className="bg-white rounded-2xl shadow-lg p-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input 
                               type="text"
                               placeholder="search address, city, location"
                               className="w-full pl-12 pr-16 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all" 
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-500 text-white p-2 rounded-lg">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Property Type Selection */}
                    <div className="grid grid-cols-2 gap-4">
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
                    <div className="flex space-x-6 text-sm">
                        <button className="text-gray-900 font-semibold border-b-2 border-cyan-500 pb-2">Popular</button>
                        <button className="text-gray-500 hover:text-gray-900 pb-2">Recommended</button>
                        <button className="text-gray-500 hover:text-gray-900 pb-2">Nearest</button>
                    </div>

                    {/* Featured Property Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" 
                  alt="Decan Dan Property"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">Decan Dan</h3>
                    <p className="text-sm text-gray-500">Alan Street, Amanta, Las Vegas</p>
                  </div>
                  <p className="text-cyan-600 font-bold">$ 250,000</p>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <span>🛏️</span>
                    <span>3</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🚿</span>
                    <span>3</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🚗</span>
                    <span>3</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📐</span>
                    <span>200</span>
                  </div>
                </div>
              </div>
            </div>
                </div>
            </div>
        </div>
      </section>
    );
};

export default HeroSection;