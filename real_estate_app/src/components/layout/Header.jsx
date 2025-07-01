import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Users, Phone, MapPin, User } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/', icon: Home},
        { name: 'Properties', href: '/properties', icon: Search},
        { name: 'Agents', href: '/agents', icon: Users},
        { name: 'Contact', href: '/contact', icon: Phone}
    ];

    const isActive = (path) => location.pathname === path;
    return (
        <header className='bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                    <div className='w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center'>
                        <Home className="w-5 h-5 text-white" />
                    </div>
                    <span className='text-xl font-bold text-gray-900'>
                        Dream <span className='text-cyan-600'>Home</span>
                    </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex space-x-8'>
                        {navigation.map((item) => {
                           const Icon = item.icon;
                           return (
                              <Link 
                                key={item.name}
                                to={item.href}
                                className={`flex items-center space-x-1 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                                    isActive(item.href) ? 'text-cyan-600 bg-cyan-50' : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                                }`}
                              >
                              <Icon className="w-4 h-4" />
                              <span>{item.name}</span>
                              </Link>
                           );
                        })}
                    </nav>
                    {/* User Profile */}
                    <div className='hidden md:flex items-center space-x-4'>
                      <div className='flex items-center space-x-2 text-sm'>
                         <MapPin className="w-4 h-4 text-gray-500" />
                         <span className='text-gray-600'>Las Vegas</span>
                      </div>
                      <div className='w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center'>
                        <User className="w-8 h-8 text-gray-600" />
                      </div>
                    </div>
                    {/* Mobile menu button */}
                    <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-gray-100'>
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div>
                        <div>
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      onClick={() => 
                                        setIsMenuOpen(false)}
                                        className={`flex items-center space-x-2 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                                            isActive(item.href) ? 'text-cyan-600 bg-cyan-50' : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                                        }`}
                                    >
                                    <Icon className="w-5 h-5" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;