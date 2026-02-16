import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { Leaf, Droplets, Shovel, Sprout, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string, params?: string) => void;
  sectionId?: string;
}

export default function ServicesPage({ onNavigate, sectionId }: ServicesPageProps) {
  const services = [
    {
      icon: Leaf,
      title: 'Weekly Lawn Maintenance',
      slug: 'lawn-maintenance',
      image: '/services-weekly-lawn.jpg',
      alt: 'Weekly lawn mowing and trimming service in Chicago',
      description:
        'Reliable weekly mowing, edging, trimming, and cleanup to keep your lawn looking sharp all season.',
      benefits: ['Weekly mowing + trimming', 'Edging for clean lines', 'Blowing + cleanup included'],
      process: ['Schedule your service', 'Weekly maintenance visits', 'Consistent results all season']
    },
    {
      icon: Leaf,
      title: 'Bi-Weekly Lawn Maintenance',
      slug: 'bi-weekly-lawn',
      image: '/services-biweekly-lawn.jpg',
      alt: 'Bi-weekly lawn maintenance in Chicago',
      description:
        'Affordable every-2-week mowing service for properties that need consistent upkeep without weekly visits.',
      benefits: ['Every 2-week mowing', 'Trim + edge included', 'Great for low-growth lawns'],
      process: ['Choose your schedule', 'Bi-weekly visits', 'Clean finish every time']
    },
    {
      icon: Droplets,
      title: 'Fertilizing',
      slug: 'fertilizing',
      image: '/services-fertilizing.jpg',
      alt: 'Lawn fertilizing service in Chicago',
      description:
        'Seasonal fertilizing programs designed to strengthen your lawn and improve color, density, and growth.',
      benefits: ['Seasonal applications', 'Healthier grass growth', 'Improved lawn color'],
      process: ['Evaluate lawn needs', 'Apply seasonal fertilizer', 'Monitor results over time']
    },
    {
      icon: Shovel,
      title: 'Leaf Clean Up',
      slug: 'leaf-cleanup',
      image: '/services-leaf-cleanup.jpg',
      alt: 'Leaf cleanup and hauling service in Chicago',
      description:
        'Full fall and spring cleanups including leaf removal, hauling, and property refresh for a clean finish.',
      benefits: ['Leaf removal + hauling', 'Yard cleanup + edging', 'Spring + fall available'],
      process: ['Walkthrough + estimate', 'Cleanup + removal', 'Final detail + haul away']
    },
    {
      icon: Sparkles,
      title: 'Snow Shoveling',
      slug: 'snow-shoveling',
      image: '/services-snow-shoveling.jpg',
      alt: 'Snow shoveling service in Chicago',
      description:
        'Fast and dependable snow shoveling for sidewalks, driveways, and entrances during Chicago winters.',
      benefits: ['Sidewalk + driveway clearing', 'Fast response', 'Safer walkways'],
      process: ['Add your property', 'Snow day service', 'Clear + safe access restored']
    },
    {
      icon: Sprout,
      title: 'Gardening',
      slug: 'gardening',
      image: '/services-gardening.jpg',
      alt: 'Gardening and planting service in Chicago',
      description:
        'Garden bed cleanup, planting, mulching, and seasonal refreshes to keep your property looking beautiful.',
      benefits: ['Bed cleanup + weeding', 'Planting + refresh', 'Mulch + seasonal care'],
      process: ['Discuss goals', 'Clean + prep beds', 'Plant + finish with cleanup']
    }
  ];

  // ✅ THIS IS THE ONLY SCROLL LOGIC YOU NEED
  // Works with HomePage: onNavigate('services', service.slug)
  useEffect(() => {
    if (!sectionId) return;

    const isValid = services.some((s) => s.slug === sectionId);
    if (!isValid) return;

    // wait for render
    const t = setTimeout(() => {
      const el = document.getElementById(sectionId);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);

    return () => clearTimeout(t);
  }, [sectionId]);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Services | Uno Pro Services (Chicago)</title>
        <meta
          name="description"
          content="Uno Pro Services provides weekly lawn maintenance, bi-weekly mowing, fertilizing, leaf cleanups, snow shoveling, and gardening across Chicago and nearby areas."
        />
        <link rel="canonical" href="https://unoproservices.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/banner2.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white"
              style={{
                textShadow:
                  '3px 3px 12px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)'
              }}
            >
              Lawn Care & Property Services in Chicago
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-white"
              style={{
                textShadow:
                  '2px 2px 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 35px rgba(0,0,0,0.7)'
              }}
            >
              Weekly lawn maintenance, fertilizing, cleanups, snow shoveling, and gardening — all
              handled by one reliable team.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`scroll-mt-28 mb-12 sm:mb-16 md:mb-20 last:mb-0 ${
                  index !== 0 ? 'pt-10 sm:pt-12 md:pt-16 border-t border-gray-200' : ''
                }`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col`}>
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-brand-primary" size={24} />
                      </div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-base sm:text-lg text-gray-600 mb-5 sm:mb-6">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-5 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        What’s Included
                      </h3>

                      <div className="space-y-2 sm:space-y-2.5">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle
                              className="text-brand-primary flex-shrink-0 mt-1"
                              size={18}
                            />
                            <p className="text-sm sm:text-base text-gray-600">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                        Our Process
                      </h3>

                      <div className="space-y-2 sm:space-y-2.5">
                        {service.process.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">
                              {idx + 1}
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 pt-1">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-8">
                      <button
                        onClick={() => onNavigate('contact')}
                        className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-sm sm:text-base shadow-lg inline-flex items-center gap-2"
                      >
                        Get Free Quote
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 leading-tight">
              Ready to Get Started?
            </h2>

            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8">
              Contact us today for a free quote on lawn care, cleanups, fertilizing, snow shoveling,
              or gardening.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-brand-primary px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base sm:text-lg shadow-xl inline-flex items-center gap-2"
            >
              Get Free Quote
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}