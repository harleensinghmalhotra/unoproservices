import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [info, setInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  // Load config.json from /public
  useEffect(() => {
    fetch('/config.json')
      .then((r) => r.json())
      .then((data) => setInfo(data.siteInfo))
      .catch((err) => console.error('config load failed', err));
  }, []);

  // Detect scroll for shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Added Blog
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // ✅ SAFETY FIX: avoid crash if phone is empty
  const phoneDigits = (info.phone || '').replace(/\D/g, '');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
          }`}
      >
        {/* Top bar */}
        <div className="bg-brand-primary text-white py-1">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <a
                href={`tel:${phoneDigits || '17733768058'}`}
                className="flex items-center gap-1 hover:text-brand-accent transition-colors"
              >
                <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
                <span className="text-xs sm:text-sm">
                  {info.phone || '(773) 376-8058'}
                </span>
              </a>

              <a
                href={`mailto:${info.email}`}
                className="hidden md:flex items-center gap-1 hover:text-brand-accent transition-colors"
              >
                <Mail size={12} className="sm:w-3.5 sm:h-3.5" />
                <span className="text-xs sm:text-sm">
                  {info.email || 'unoproservices@gmail.com'}
                </span>
              </a>
            </div>

            <div className="text-[10px] sm:text-xs hidden sm:block">
              {info.address || 'Chicago, IL'}
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/uno-pro-services-logo.png"
                alt={info.name || 'Uno Pro Services'}
                className={`h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-9 sm:h-10 md:h-12' : 'h-10 sm:h-12 md:h-14'
                  }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors font-medium ${location.pathname === item.path
                      ? 'text-brand-primary'
                      : 'text-gray-700 hover:text-brand-primary'
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium shadow-md hover:shadow-lg"
              >
                Get Free Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-brand-primary transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="sm:w-7 sm:h-7" />
              ) : (
                <Menu size={24} className="sm:w-7 sm:h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
            }`}
        >
          <nav className="container mx-auto px-4 py-4 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-3 transition-colors font-medium ${location.pathname === item.path
                    ? 'text-brand-primary'
                    : 'text-gray-700 hover:text-brand-primary'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full mt-3 bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all font-medium text-center"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-20 sm:h-22 md:h-24"></div>
    </>
  );
}