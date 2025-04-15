
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

type NavLink = {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
};

const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    children: [
      { name: 'Application Development', path: '/services/application-development' },
      { name: 'Consulting Services', path: '/services/consulting-services' },
      { name: 'Advisory Services', path: '/services/advisory-services' },
    ] 
  },
  { name: 'Clients', path: '/clients' },
  { name: 'Careers', path: '/careers' },
  { name: 'Product', path: '/product' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-foreground">
              <span className="text-bean">Bean</span> Info System
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => 
              link.children ? (
                <div key={link.name} className="relative group">
                  <button 
                    className="nav-link flex items-center gap-1"
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.name}
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="bg-card border border-border rounded-md shadow-lg overflow-hidden">
                      {link.children.map((child) => (
                        <Link 
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-3 hover:bg-secondary text-sm transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'text-bean' : ''}`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-foreground" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pt-6 pb-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => 
                link.children ? (
                  <div key={link.name} className="border-b border-border pb-2">
                    <button 
                      className="flex items-center justify-between w-full py-2 text-left"
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 mt-2 border-l border-border space-y-2">
                        {link.children.map((child) => (
                          <Link 
                            key={child.name}
                            to={child.path}
                            className="block py-2 text-foreground/80 hover:text-foreground text-sm"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    key={link.name}
                    to={link.path}
                    className={`block py-2 border-b border-border ${
                      location.pathname === link.path ? 'text-bean' : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
