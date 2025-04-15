
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-bean">Bean</span> Info System
            </h3>
            <p className="text-foreground/70 mb-4">
              Empowering Digital Evolution through innovative software solutions and strategic consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-bean transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-bean transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-bean transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-bean transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-bean transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-bean transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/70 hover:text-bean transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-bean transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/application-development" className="text-foreground/70 hover:text-bean transition-colors">
                  Application Development
                </Link>
              </li>
              <li>
                <Link to="/services/consulting-services" className="text-foreground/70 hover:text-bean transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link to="/services/advisory-services" className="text-foreground/70 hover:text-bean transition-colors">
                  Advisory Services
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-foreground/70 hover:text-bean transition-colors">
                  SocialBirds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-bean flex-shrink-0 mt-1" />
                <span className="text-foreground/70">
                  123 Tech Drive, Innovation Valley,<br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-bean flex-shrink-0" />
                <span className="text-foreground/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-bean flex-shrink-0" />
                <span className="text-foreground/70">contact@beaninfosystem.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Bean Info System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
