import { useEffect, useState } from 'react';
import { Star, Phone, Calendar, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { clinicInfo } from '@/data/clinic';

const heroImage = 'https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden mesh-bg">
      {/* Floating decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-teal-200/30 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-navy-200/20 blur-3xl animate-float pointer-events-none" />

      <div className="section-container relative pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: content */}
          <div className="animate-fade-up">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white shadow-sm shadow-navy-900/5 border border-navy-50 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400 text-amber-400'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-navy-900">{clinicInfo.rating}</span>
              <span className="text-xs text-navy-400">· {clinicInfo.reviewCount} Google reviews</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-navy-900 tracking-tight">
              Your smile deserves{' '}
              <span className="text-gradient">gentle, expert</span> care
            </h1>

            <p className="mt-5 text-lg text-navy-600 leading-relaxed max-w-xl">
              {clinicInfo.tagline}. Thomas Dental Care brings modern, affordable dentistry to your neighbourhood — with honest treatment plans and doctors who genuinely listen.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo('#book')} className="btn-primary">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
              <a href={`tel:${clinicInfo.phone}`} className="btn-secondary">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {[
                { icon: ShieldCheck, label: '12+ years experience' },
                { icon: Heart, label: 'LGBTQ+ friendly' },
                { icon: Sparkles, label: 'Women-owned' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-navy-600">
                  <badge.icon className="w-4 h-4 text-teal-600" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative animate-fade-in" style={{ transform: `translateY(${scrollY * 0.04}px)` }}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-navy-900/10 aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={heroImage}
                alt="Modern dental clinic interior at Thomas Dental Care New Delhi"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating card: rating */}
            <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-white rounded-2xl shadow-xl shadow-navy-900/10 p-4 flex items-center gap-3 animate-float">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="font-serif font-semibold text-navy-900 text-lg leading-none">{clinicInfo.rating}/5</p>
                <p className="text-xs text-navy-400 mt-1">{clinicInfo.reviewCount} reviews</p>
              </div>
            </div>

            {/* Floating card: patients */}
            <div className="absolute -top-4 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl shadow-navy-900/10 p-4 animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-navy-900 text-lg leading-none">5,000+</p>
                  <p className="text-xs text-navy-400 mt-1">patients treated</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <button onClick={() => scrollTo('#about')} className="flex flex-col items-center gap-2 text-navy-400 hover:text-teal-600 transition-colors">
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
