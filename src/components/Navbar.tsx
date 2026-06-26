import { Menu, X, Leaf, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home', title: 'Botanic Glow Home Page' },
    { path: '/about', label: 'About Us', title: 'Learn About Botanic Glow' },
    { path: '/organic-skincare-products', label: 'Shop', title: 'Shop Natural Skincare Products' },
    { path: '/blog', label: 'Blog', title: 'Read the Botanic Glow Skincare Blog' },
    { path: '/contact', label: 'Contact', title: 'Contact Botanic Glow' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`} 
      aria-label="Main Navigation" 
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" title="Botanic Glow Home Page" aria-label="Botanic Glow Logo" className="flex items-center group">
            <Leaf aria-hidden="true" className="h-8 w-8 text-emerald-700 group-hover:text-emerald-800 transition-colors" />
            <span className="ml-2.5 font-serif text-2xl md:text-3xl font-semibold tracking-tight text-emerald-950 group-hover:text-emerald-900 transition-colors">Botanic Glow</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.path} className="flex items-center">
                  <NavLink
                    to={item.path}
                    title={item.title}
                    className={({ isActive }) =>
                      `text-[15px] font-medium transition-all duration-300 relative py-2 ${
                        isActive ? 'text-emerald-900' : 'text-stone-500 hover:text-emerald-800'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative">
                        {item.label}
                        <span 
                          className={`absolute -bottom-1.5 left-0 w-full h-0.5 bg-emerald-800 rounded-full transition-transform origin-left duration-300 ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`} 
                        />
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center pl-6 border-l border-stone-200">
              <button className="text-stone-600 hover:text-emerald-800 transition-transform hover:scale-105 relative p-2" aria-label="Shopping Cart">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-emerald-600 rounded-full border-2 border-white"></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-stone-600 hover:text-emerald-800 transition-colors relative p-2" aria-label="Shopping Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-emerald-600 rounded-full border-2 border-white"></span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isOpen}
              className="text-stone-600 hover:text-emerald-800 p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-lg"
            >
              {isOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-stone-200 shadow-lg transition-all duration-300 origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <ul className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                title={item.title}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                    isActive ? 'bg-emerald-50 text-emerald-900' : 'text-stone-600 hover:bg-stone-50 hover:text-emerald-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
