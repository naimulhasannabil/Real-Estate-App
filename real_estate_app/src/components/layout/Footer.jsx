import { Link } from 'react-router-dom'
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Company Info */}
                    <div className='space-y-4'>
                        <Link to="/" className='flex items-center space-x-2'>
                          <div className='w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center'>
                            <Home className='w-6 h-6 text-white' />
                          </div>
                          <span className='text-xl font-bold text-white'>
                        Dream <span className='text-cyan-600'>Home</span>
                        </span>
                        </Link>
                        <p className='text-gray-400'>
                            Your trusted partner in finding the perfect home. We make real estate simple, transparent, and rewarding.
                        </p>
                        <div className='flex space-x-4'>
                            <Facebook className='w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors' />
                            <Twitter className='w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors' />
                            <Instagram className='w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors' />
                            <Linkedin className='w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors' />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/properties" className="text-gray-400 hover:text-white transition-colors">Properties</Link></li>
                            <li><Link to="/agents" className="text-gray-400 hover:text-white transition-colors">Our Agents</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Services</h3>
                        <ul className='space-y-2 text-gray-400'>
                            <li>Buy Properties</li>
                            <li>Sell Properties</li>
                            <li>Rent Properties</li>
                            <li>Property Management</li>
                            <li>Investment Consulting</li>
                            <li>Mortgage Services</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Contact Info</h3>
                        <div className='space-y-3'>
                            <div className='flex items-center space-x-3'>
                                <MapPin className='w-5 h-5 text-primary-400' />
                                <span className='text-gray-400'>123 Real Estate Ave, City, State 12345</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Phone className='w-5 h-5 text-primary-400' />
                                <span className='text-gray-400'>(555) 123-4567</span>
                            </div>
                            <div className='flex items-center space-x-3'>
                                <Mail className='w-5 h-5 text-primary-400' />
                                <span className='text-gray-400'>info@dreamhome.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
                    <p>&copy; 2025 Real Estate App. All rights reserved.</p>
                </div>
            </div>
        </footer>
       
    );
};

export default Footer;