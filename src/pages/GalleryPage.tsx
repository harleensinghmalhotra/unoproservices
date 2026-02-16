import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  ZoomIn
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export default function GalleryPage({ onNavigate }: GalleryPageProps) {
  // ✅ Keep photo names EXACTLY as-is, but reduce to 6 transformations
  const beforeAfterProjects = [
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
        'Consistent mowing, trimming, and cleanup that keeps your lawn looking fresh and well maintained.',
      alt: 'Before and after lawn maintenance in Chicago'
    },
    {
      before: '/After 3.jpg',
      after: '/Before 3.jpg',
      title: 'Garden Bed Refresh',
      description:
        'Cleaned up beds, removed weeds, added mulch, and refreshed planting areas for a clean look.',
      alt: 'Garden bed cleanup and mulching before and after'
    },
    {
      before: '/After 4.jpg',
      after: '/Before 4.jpg',
      title: 'Fall Leaf Removal',
      description:
        'Leaf cleanup and hauling service that leaves your yard clean, safe, and ready for winter.',
      alt: 'Leaf removal and yard cleanup in Chicago'
    },
    {
      before: '/After 5.png',
      after: '/Before 5.jpg',
      title: 'Property Maintenance Cleanup',
      description:
        'Seasonal property cleanup including debris removal, trimming, and a full yard reset.',
      alt: 'Seasonal yard cleanup before and after'
    },
    {
      before: '/After 6.png',
      after: '/Before 6.jpg',
      title: 'Outdoor Refresh & Detail Work',
      description:
        'A complete outdoor refresh with cleanup, edging, and detail work to sharpen the finish.',
      alt: 'Outdoor landscaping refresh before and after'
    }
  ];

  // ✅ FIX: each transformation has its OWN slider value
  const [sliderValues, setSliderValues] = useState<number[]>(
    Array(beforeAfterProjects.length).fill(50)
  );

  // ✅ NEW: Regular gallery section (non-transformations)
  // Only add images that exist in /public.
  const galleryImages = [
    { src: '/Gallery 1.jpg', alt: 'Uno Pro Services lawn care work in Chicago' },
    { src: '/Gallery 2.jpg', alt: 'Uno Pro Services cleanup work in Chicagoland' },
    { src: '/Gallery 3.jpg', alt: 'Uno Pro Services gardening work in Chicago' },
    { src: '/Gallery 4.jpg', alt: 'Uno Pro Services snow shoveling service' },
    { src: '/Gallery 5.jpg', alt: 'Uno Pro Services property maintenance' }
  ];

  // ✅ Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Keep sliderValues synced
  useEffect(() => {
    setSliderValues(Array(beforeAfterProjects.length).fill(50));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSliderChange = (index: number, value: number) => {
    setSliderValues((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // ESC + Arrow keys support
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Uno Pro Services Gallery | Lawn Care, Cleanups & Snow Service</title>
        <meta
          name="description"
          content="See real before-and-after results from Uno Pro Services in Chicagoland. Lawn care, leaf cleanups, gardening, and snow shoveling."
        />
        <link rel="canonical" href="https://unoproservices.com/gallery" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[340px] md:h-[420px] flex items-center bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner2.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
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
              Our Work in Chicagoland
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-white/95"
              style={{
                textShadow:
                  '2px 2px 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 35px rgba(0,0,0,0.7)'
              }}
            >
              Real results from <strong>lawn maintenance</strong>, <strong>leaf cleanups</strong>,{' '}
              <strong>gardening</strong>, and <strong>snow service</strong>.
              <span className="block mt-2 font-semibold">Se Habla Español.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-10 sm:py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Before & After Transformations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              See the difference professional service makes
            </p>
          </div>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {beforeAfterProjects.map((project, index) => (
              <div key={index} className="max-w-5xl mx-auto">
                <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-xl">
                    {/* After Image */}
                    <img
                      src={project.after}
                      alt={`Completed ${project.alt}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Before Image */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: `inset(0 0 0 ${sliderValues[index]}%)`
                      }}
                    >
                      <img
                        src={project.before}
                        alt={`Before ${project.alt}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Slider line */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                      style={{ left: `${sliderValues[index]}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-xl">
                        <div className="flex gap-1">
                          <ChevronLeft size={20} className="text-brand-primary" />
                          <ChevronRight size={20} className="text-brand-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base">
                      BEFORE
                    </div>
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-brand-primary text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm md:text-base">
                      AFTER
                    </div>

                    {/* Slider input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValues[index]}
                      onChange={(e) => handleSliderChange(index, Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                      aria-label={`Before and after slider for ${project.title}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Gallery Section */}
      <section className="py-10 sm:py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              More Photos From Recent Jobs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Additional photos from lawn maintenance, cleanups, gardening, and seasonal work across
              Chicagoland.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all text-left"
              >
                <div className="relative w-full h-[240px] sm:h-[260px] md:h-[280px]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Small zoom icon */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-20 bg-black text-white border-t border-white/15">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Need Lawn Care, Cleanup, or Snow Service?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact Uno Pro Services today for a free quote. We serve homeowners and businesses
            across Chicagoland.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-brand-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-base sm:text-lg shadow-xl inline-flex items-center gap-2"
          >
            Get Free Quote
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>

      {/* ✅ LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/90 hover:text-white transition-colors flex items-center gap-2"
            >
              <X size={22} />
              <span className="text-sm font-semibold">Close</span>
            </button>

            {/* Image */}
            <div className="relative w-full h-[70vh] sm:h-[75vh] rounded-2xl overflow-hidden">
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="absolute inset-0 w-full h-full object-contain bg-black"
              />
            </div>

            {/* Left arrow */}
            {galleryImages.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 rounded-full transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Right arrow */}
            {galleryImages.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 bg-white/10 hover:bg-white/20 text-white p-3 sm:p-4 rounded-full transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Counter */}
            <div className="mt-4 text-center text-white/80 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}