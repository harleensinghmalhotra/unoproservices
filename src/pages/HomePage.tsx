import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  Leaf,
  Snowflake,
  Shovel,
  Sprout,
  Droplets
} from 'lucide-react';
import { useState } from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

interface HomePageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Leaf,
      title: 'Weekly Lawn Maintenance',
      description:
        'Reliable weekly mowing, edging, trimming, and cleanup to keep your lawn looking sharp all season.',
      slug: 'lawn-maintenance'
    },
    {
      icon: Leaf,
      title: 'Bi-Weekly Lawn Maintenance',
      description:
        'Affordable every-2-week mowing service for properties that need consistent upkeep without weekly visits.',
      slug: 'bi-weekly-lawn'
    },
    {
      icon: Droplets,
      title: 'Fertilizing',
      description:
        'Seasonal fertilizing programs designed to strengthen your lawn and improve color, density, and growth.',
      slug: 'fertilizing'
    },
    {
      icon: Shovel,
      title: 'Leaf Clean Up',
      description:
        'Full fall and spring cleanups including leaf removal, hauling, and property refresh for a clean finish.',
      slug: 'leaf-cleanup'
    },
    {
      icon: Snowflake,
      title: 'Snow Shoveling',
      description:
        'Fast and dependable snow shoveling for sidewalks, driveways, and entrances during Chicago winters.',
      slug: 'snow-shoveling'
    },
    {
      icon: Sprout,
      title: 'Gardening',
      description:
        'Garden bed cleanup, planting, mulching, and seasonal refreshes to keep your property looking beautiful.',
      slug: 'gardening'
    }
  ];

  const transformations = [
    {
      before: '/After 1.png',
      after: '/Before 1.jpg',
      title: 'Seasonal Cleanup Transformation',
      description:
        'Full yard cleanup, edging, and refresh to restore curb appeal and prepare for the next season.',
      alt: 'Before and after yard cleanup in Chicago'
    },
    {
      before: '/After 2.jpg',
      after: '/Before 2.png',
      title: 'Lawn Maintenance Results',
      description:
        'Consistent weekly mowing, trimming, and cleanup that keeps your lawn looking fresh all month.',
      alt: 'Before and after lawn maintenance in Chicago'
    },
    {
      before: '/After 3.jpg',
      after: '/Before 3.jpg',
      title: 'Garden Bed Refresh',
      description:
        'Cleaned up beds, removed weeds, added mulch, and replanted for a clean, vibrant look.',
      alt: 'Garden bed cleanup and mulching before and after'
    },
    {
      before: '/After 4.jpg',
      after: '/Before 4.jpg',
      title: 'Fall Leaf Removal',
      description:
        'Leaf cleanup and hauling service that leaves your yard clean, safe, and ready for winter.',
      alt: 'Leaf removal and yard cleanup in Chicago'
    }
  ];

  const testimonials = [
    {
      text: 'Quick response, fair pricing, and the lawn looked amazing right after the first visit. Highly recommend.',
      author: 'Verified Client',
      position: 'Lawn Maintenance',
      company: ''
    },
    {
      text: 'They showed up on time and did a full leaf cleanup fast. Everything looked clean and professional.',
      author: 'Verified Client',
      position: 'Leaf Clean Up',
      company: ''
    },
    {
      text: 'Very reliable and easy to communicate with. Great service for regular mowing.',
      author: 'Verified Client',
      position: 'Bi-Weekly Lawn Service',
      company: ''
    },
    {
      text: 'Snow shoveling was done early and the sidewalks were clear before we left for work.',
      author: 'Verified Client',
      position: 'Snow Shoveling',
      company: ''
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Uno Pro Services | Lawn Care, Snow Shoveling & Gardening in Chicago</title>
        <meta
          name="description"
          content="Uno Pro Services provides lawn maintenance, fertilizing, leaf cleanups, snow shoveling, and gardening across Chicago. Se Habla Español. Call for a free quote."
        />
        <link rel="canonical" href="https://unoproservices.com/" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner2.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>

        {/* Booking banner */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-brand-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-xl text-xs sm:text-sm md:text-base font-bold tracking-wide flex items-center gap-2">
            🍂 Booking Now Open — Lawn, Cleanup & Snow Service
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight"
              style={{
                textShadow:
                  '3px 3px 12px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)'
              }}
            >
              Lawn Care, Snow Shoveling & Property Services in Chicago, IL
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
            >
              Uno Pro Services provides dependable <strong>weekly lawn maintenance</strong>,{' '}
              <strong>fertilizing</strong>, <strong>leaf cleanups</strong>,{' '}
              <strong>snow shoveling</strong>, and <strong>gardening</strong> for residential and
              commercial properties.
              <br />
              <span className="font-semibold">Se Habla Español.</span>
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-bold text-base sm:text-lg shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </button>

              <a
                href="tel:17733768058"
                className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all font-bold text-base sm:text-lg shadow-2xl hover:scale-105 border-2 border-white flex items-center justify-center gap-2"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
                (773) 376-8058
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 sm:py-6 md:py-8 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center max-w-4xl mx-auto">
            <div className="py-2 sm:py-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">10+</div>
              <div className="text-xs sm:text-sm md:text-base leading-tight">
                Years
                <br className="sm:hidden" /> Experience
              </div>
            </div>

            <div className="py-2 sm:py-3 border-l border-r border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">100+</div>
              <div className="text-xs sm:text-sm md:text-base leading-tight">
                Residential & Commercial
                <br className="sm:hidden" /> Properties
              </div>
            </div>

            <div className="py-2 sm:py-3">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 sm:mb-1">3.7★</div>
              <div className="text-xs sm:text-sm md:text-base leading-tight">
                Google
                <br className="sm:hidden" /> Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional lawn care and property services built for Chicago’s seasons — from weekly
              mowing to fall cleanups and winter snow shoveling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="text-brand-primary" size={28} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    {service.description}
                  </p>

                  <button
                    onClick={() => onNavigate('services', service.slug)}
                    className="text-brand-primary font-semibold hover:gap-3 flex items-center gap-2 transition-all text-sm sm:text-base"
                  >
                    Learn More
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* ✅ FIX: force scroll to top by passing undefined explicitly */}
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('services', undefined)}
              className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-lg"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose Uno Pro Services?
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {[
                  'Reliable weekly & bi-weekly lawn maintenance',
                  'Seasonal leaf cleanups (spring + fall)',
                  'Fertilizing programs for healthier lawns',
                  'Fast snow shoveling service in winter',
                  'Residential + commercial property service',
                  'Friendly communication — Se Habla Español'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                    <p className="text-base sm:text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="mt-6 sm:mt-8 bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-lg"
              >
                Learn About Us
              </button>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="/whychooseus-new.jpg"
                alt="Professional lawn care and property services in Chicago"
                className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Transformations */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Recent Work
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Before-and-after results from lawn care, cleanups, and gardening services across
              Chicago.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {transformations.map((transformation, index) => (
              <BeforeAfterSlider
                key={index}
                before={transformation.before}
                after={transformation.after}
                title={transformation.title}
                description={transformation.description}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('gallery')}
              className="bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-lg"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Trusted by homeowners and property managers across Chicago
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative px-8 sm:px-12">
            <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 sm:mb-8 italic text-center leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="text-center">
                <p className="font-bold text-lg sm:text-xl text-gray-900">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-brand-primary font-semibold text-sm sm:text-base">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-brand-primary hover:text-white transition-all"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-brand-primary hover:text-white transition-all"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-brand-primary w-6 sm:w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Serving Chicago & Nearby Areas
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Lawn care, gardening, cleanups, and snow shoveling across the Greater Chicago Metro
              Area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              'Chicago',
              'Cicero',
              'Berwyn',
              'Oak Park',
              'Evanston',
              'Skokie',
              'Elmwood Park',
              'Norridge',
              'Harwood Heights',
              'Lincolnwood'
            ].map((city, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <p className="text-sm sm:text-base md:text-lg font-semibold">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black text-white border-b border-white/15">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Need Lawn Care or Snow Service?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get a free quote from Uno Pro Services. We provide dependable, affordable service for
            Chicago homes and businesses.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-xl"
            >
              Get Free Quote
            </button>

            <a
              href="tel:17733768058"
              className="bg-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base sm:text-lg shadow-xl flex items-center justify-center gap-2"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              (773) 376-8058
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
