import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { testimonials, clinicInfo } from '@/data/clinic';

export function Testimonials() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-cream-100">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Patient Reviews
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy-900 leading-tight">
            Real stories from our patients
          </h2>

          {/* Rating badge */}
          <a
            href={clinicInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-5 px-5 py-3 rounded-full bg-white shadow-sm shadow-navy-900/5 border border-navy-50 hover:border-teal-200 transition-colors"
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-navy-900">{clinicInfo.rating}/5</span>
            <span className="text-sm text-navy-400">· {clinicInfo.reviewCount} Google reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-navy-300" />
          </a>
        </div>

        {/* Carousel */}
        <div
          ref={ref}
          className={`max-w-3xl mx-auto reveal ${revealed ? 'revealed' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            <div className="card p-8 lg:p-10 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-teal-50" fill="currentColor" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5 relative">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonials[active].rating ? 'fill-amber-400 text-amber-400' : 'fill-navy-100 text-navy-100'}`}
                  />
                ))}
                <span className="ml-3 text-xs text-navy-400 font-medium">{testimonials[active].context}</span>
              </div>

              {/* Text */}
              <p className="font-serif text-lg lg:text-xl text-navy-800 leading-relaxed relative">
                "{testimonials[active].text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-500 to-navy-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonials[active].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">{testimonials[active].name}</p>
                  <p className="text-xs text-navy-400">Verified patient</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full bg-white border border-navy-100 flex items-center justify-center text-navy-600 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-teal-600' : 'w-2 bg-navy-200 hover:bg-navy-300'}`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-full bg-white border border-navy-100 flex items-center justify-center text-navy-600 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
