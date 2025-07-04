import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const PropertyCard = ({ property, isDetailView = false }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorited(!isFavorited);
  };

  if (isDetailView) {
    return (
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-sm mx-auto">
        {/* Property Image */}
        <div className="relative h-64">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          {/* Back Button */}
          <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorited ? 'text-red-500 fill-current' : 'text-gray-700'
              }`}
            />
          </button>

          {/* True Tour Badge */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
              True Tour
            </span>
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{property.title}</h3>
              <p className="text-sm text-gray-500">{property.address}</p>
            </div>
            <div className="text-right">
              <div className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded text-xs font-medium mb-1">
                4.5 Ratings
              </div>
            </div>
          </div>

          {/* Property Features */}
          <div className="flex items-center justify-between mb-6 text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span>🛏️</span>
                <span className="text-sm">{property.bedrooms}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🚿</span>
                <span className="text-sm">{property.bathrooms}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>🚗</span>
                <span className="text-sm">{property.parking}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>📐</span>
                <span className="text-sm">{Math.floor(property.sqft / 10)}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6">
            This Structure Is Located In Distance To Nearest Shopping Center
          </p>

          {/* Property Images Thumbnails */}
          <div className="flex space-x-2 mb-6">
            {property.images.slice(0, 4).map((image, index) => (
              <div key={index} className="w-16 h-16 rounded-lg overflow-hidden">
                <img src={image} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Price and Buy Button */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-600 font-bold text-xl">{formatPrice(property.price)}</p>
              <p className="text-gray-500 text-sm">Total Price</p>
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Buy a Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Property Image */}
      <div className="relative h-48">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-md"
        >
          <Heart
            className={`w-4 h-4 ${
              isFavorited ? 'text-red-500 fill-current' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link to={`/property/${property.id}`}>
              <h3 className="font-bold text-gray-900 hover:text-cyan-600 transition-colors">
                {property.title}
              </h3>
            </Link>
            <p className="text-sm text-gray-500">{property.address}</p>
          </div>
          <p className="text-cyan-600 font-bold">{formatPrice(property.price)}</p>
        </div>

        {/* Property Features */}
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <span>🛏️</span>
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🚿</span>
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🚗</span>
            <span>{property.parking}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>📐</span>
            <span>{Math.floor(property.sqft / 10)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;