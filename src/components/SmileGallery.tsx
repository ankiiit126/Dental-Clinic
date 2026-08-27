import { useReveal } from '@/hooks/useReveal';
import { Sparkles } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/3881140/pexels-photo-3881140.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
    alt: 'Happy patient smiling after dental treatment at Thomas Dental Care',
    label: 'Confident Smiles',
  },
  {
    url: 'https://images.pexels.com/photos/8669945/pexels-photo-8669945.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
    alt: 'Dental checkup at Thomas Dental Care New Delhi',
    label: 'Gentle Care',
  },
  {
    url: 'https://images.pexels.com/photos/6502543/pexels-photo-6502543.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
    alt: 'Advanced dental chair at Thomas Dental Care clinic',
    label: 'Modern Equipment',
  },
  {
    url: 'https://images.pexels.com/photos/3881296/pexels-photo-3881296.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
    alt: 'Female dentist treating patient at Thomas Dental Care',
    label: 'Expert Hands',
  },
];

export function SmileGallery() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold tracking-wide uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Smile Gallery
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy-900 leading-tight">
            A glimpse inside the clinic
          </h2>
          <p className="mt-4 text-navy-500 leading-relaxed">
            Real moments from our clinic — these will be replaced with before/after cosmetic cases soon.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden aspect-square shadow-md shadow-navy-900/5 cursor-pointer reveal ${revealed ? 'revealed' : ''} reveal-delay-${(i % 4) + 1}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 text-white font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
