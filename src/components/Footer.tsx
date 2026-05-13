import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [info, setInfo] = useState({
    name: '',
    phone: '',
    phoneRaw: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  useEffect(() => {
    fetch('/config.json')
      .then((r) => r.json())
      .then((data) => setInfo(data.siteInfo))
      .catch(() => { /* config optional */ });
  }, []);

  const phoneDigits = info.phoneRaw?.replace(/\D/g, '') || (info.phone || '').replace(/\D/g, '');
  const telHref = phoneDigits || '17733768058';

  const cityState = [info.city, info.state].filter(Boolean).join(', ');
  const fullAddress = info.address
    ? [info.address, [cityState, info.zip].filter(Boolean).join(' ')].filter(Boolean).join(', ')
    : '4139 S Halsted St, Chicago, IL 60609';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  const footerServices = [
    { name: 'Weekly Lawn Maintenance', slug: 'lawn-maintenance' },
    { name: 'Bi-Weekly Lawn Maintenance', slug: 'bi-weekly-lawn' },
    { name: 'Fertilizing', slug: 'fertilizing' },
    { name: 'Leaf Clean Up', slug: 'leaf-cleanup' },
    { name: 'Snow Shoveling', slug: 'snow-shoveling' },
    { name: 'Gardening', slug: 'gardening' },
  ];

  return (
    <footer className="bg-black text-gray-300 border-t border-white/15">
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <img
              src="/uno-pro-services-logo-footer.png"
              alt={info.name || 'Uno Pro Services'}
              width={200}
              height={96}
              className="h-16 sm:h-20 md:h-24 w-auto mb-4 object-contain"
            />

            <div className="h-px w-full bg-white/10 mb-4"></div>

            <p className="text-xs sm:text-sm leading-relaxed">
              Uno Pro Services provides dependable lawn care, fertilizing, leaf cleanups, snow
              shoveling, and gardening across Chicago and nearby areas. We serve both residential
              and commercial properties with reliable, affordable service.
              <span className="block mt-2 font-semibold text-white">Se Habla Español.</span>
            </p>
          </div>

          <nav aria-label="Footer">
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>

            <ul className="space-y-2 text-xs sm:text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Our Services</h4>

            <ul className="space-y-2 text-xs sm:text-sm">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services?s=${service.slug}`}
                    className="hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-colors text-left"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Contact Us</h4>

            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] text-brand-primary flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <address className="not-italic">{fullAddress}</address>
              </li>

              <li className="flex items-center gap-2">
                <Phone
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] text-brand-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${telHref}`}
                  className="hover:text-brand-primary transition-colors"
                >
                  {info.phone || '(773) 376-8058'}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={18} className="text-brand-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${info.email || 'unoproservices@gmail.com'}`}
                  className="hover:text-brand-primary transition-colors break-all"
                >
                  {info.email || 'unoproservices@gmail.com'}
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <p className="text-xs sm:text-sm font-semibold text-white mb-2">Business Hours:</p>

              <div className="space-y-1 text-[10px] sm:text-xs text-gray-300">
                <p>Mon-Fri: 8 am – 5 pm</p>
                <p>Saturday: 8 am – 12 pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/15">
          <p className="text-xs sm:text-sm text-center">
            <span className="font-semibold text-white">Service Areas:</span> Chicago • Cicero •
            Berwyn • Oak Park • Evanston • Skokie • Elmwood Park • Norridge • Harwood Heights •
            Lincolnwood
          </p>
        </div>

        <div className="mt-5 pt-5 border-t border-white/10 text-center text-xs sm:text-sm">
          <p>
            &copy; {currentYear} {info.name || 'Uno Pro Services'}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
