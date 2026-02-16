import { Helmet } from 'react-helmet-async';
import {
  Award,
  Target,
  Heart,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  ShieldCheck,
  Briefcase,
  BadgeCheck,
  Receipt
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  // ✅ Updated: Owner is Armando (not Marcus)
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description:
        'We show up on time, every time. Chicagoland property owners depend on us, and we take that responsibility seriously.'
    },
    {
      icon: Award,
      title: 'Quality Work',
      description:
        'We take pride in doing the job right — clean edges, professional results, and attention to detail on every visit.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description:
        'Honest communication, fair pricing, and doing exactly what we say we will do — that is our promise to you.'
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description:
        'When the season hits (leaves or snow), speed matters. We work efficiently so your property stays safe and clean.'
    }
  ];

  // ✅ Updated for Uno Pro Services (not M. Dailey)
  const whyChoose = [
    'Direct owner communication and project oversight',
    'Reliable weekly and bi-weekly lawn maintenance',
    'Seasonal leaf cleanups (spring + fall)',
    'Fast snow shoveling service in winter',
    'Residential + commercial properties',
    'Friendly communication — Se Habla Español'
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>About Uno Pro Services | Lawn Care & Snow Service in Chicagoland</title>
        <meta
          name="description"
          content="Meet Armando, owner of Uno Pro Services. We provide dependable lawn maintenance, fertilizing, leaf cleanups, gardening, and snow shoveling across Chicagoland. Se Habla Español."
        />
        <link rel="canonical" href="https://unoproservices.com/about" />
      </Helmet>

      {/* ✅ HERO SECTION (FIXED TO MATCH OTHER PAGES) */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/marcusbhai.png')"
          }}
        >
          {/* Gradient Overlay (same style as other pages) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        </div>

        {/* Text */}
        <div className="container mx-auto px-4 relative z-10 pt-10 sm:pt-14 md:pt-20">
          <div className="max-w-3xl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 text-white"
              style={{
                textShadow:
                  '3px 3px 12px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)'
              }}
            >
              Meet Armando | Owner of Uno Pro Services
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-white"
              style={{
                textShadow:
                  '2px 2px 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 35px rgba(0,0,0,0.7)'
              }}
            >
              Dependable lawn care, cleanups, gardening, and snow service across Chicagoland.
              <span className="block mt-2 font-semibold">Se Habla Español.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                About the Owner
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-700 text-base sm:text-lg">
                <p>
                  Uno Pro Services is owned and operated by <strong>Armando</strong>, a hardworking
                  professional who takes pride in providing dependable property services for
                  homeowners and businesses across Chicagoland.
                </p>

                <p>
                  The goal is simple: show up on time, do clean and professional work, and leave
                  every property looking better than before — whether it’s a weekly mow, a full leaf
                  cleanup, or snow shoveling during winter.
                </p>

                <p>
                  At Uno Pro Services, we focus on consistent quality, fair pricing, and friendly
                  communication. Many of our clients stay with us season after season because they
                  know they can rely on us.
                </p>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="/About Us Photo.jpg"
                alt="Uno Pro Services owner working on a property in Chicagoland"
                className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="text-brand-primary" size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  To provide dependable lawn care, seasonal cleanups, gardening, and snow service
                  with honest pricing and consistent results for every client we serve.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <TrendingUp className="text-brand-primary" size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  To be one of Chicagoland’s most trusted property service teams — known for
                  reliability, quality work, and strong long-term client relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary text-white rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 text-center">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Dedicated to delivering reliable service and clean results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="bg-white border-2 border-brand-primary rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <ShieldCheck className="text-brand-primary" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Reliable Service</h3>
              <p className="text-brand-primary font-semibold text-sm">On time & consistent</p>
            </div>

            <div className="bg-white border-2 border-brand-primary rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Briefcase className="text-brand-primary" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                Residential + Commercial
              </h3>
              <p className="text-brand-primary font-semibold text-sm">Homes & businesses</p>
            </div>

            <div className="bg-white border-2 border-brand-primary rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <BadgeCheck className="text-brand-primary" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Quality Work</h3>
              <p className="text-brand-primary font-semibold text-sm">Clean, professional results</p>
            </div>

            <div className="bg-white border-2 border-brand-primary rounded-xl p-5 sm:p-6 text-center hover:shadow-lg transition-all">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Receipt className="text-brand-primary" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Fair Pricing</h3>
              <p className="text-brand-primary font-semibold text-sm">No surprises</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose Uno Pro Services?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Dependable service, friendly communication, and clean results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {whyChoose.map((reason, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                <p className="text-base sm:text-lg">{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-brand-primary px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base sm:text-lg shadow-xl"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}