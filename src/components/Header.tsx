import { useEffect, useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { navLinks, clinicInfo } from '@/data/clinic';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Emergency strip */}
      <div className="hidden md:block bg-navy-900 text-cream-100 text-xs">
        <div className="section-container flex items-center justify-between h-9">
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-coral-400 animate-pulse-soft" />
            Open daily until 8 PM — Emergency appointments available
          </p>
          <div className="flex items-center gap-5">
            <span className="text-teal-200">LGBTQ+ Friendly · Women-Owned</span>
            <a href={`tel:${clinicInfo.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              {clinicInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm shadow-navy-900/5 border-b border-navy-50' : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-600/20 transition-transform group-hover:scale-105">
              <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M16 6c-2.5 0-4 1.5-4 4 0 1.5.5 3 .5 5.5s-.5 4-.5 6.5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-2.5-.5-4-.5-6.5s.5-4 .5-5.5c0-2.5-1.5-4-4-4z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-semibold text-lg text-navy-900 tracking-tight">Thomas Dental Care</span>
              <span className="text-[10px] text-teal-600 font-medium tracking-wide uppercase">Mahavir Enclave · New Delhi</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="btn-ghost"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${clinicInfo.phone}`} className="btn-secondary !py-2.5 !px-5">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button onClick={() => handleNavClick('#book')} className="btn-primary !py-2.5">
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={`tel:${clinicInfo.phone}`} className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white shadow-lg shadow-teal-600/20">
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-800"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-cream-50 shadow-2xl flex flex-col animate-fade-in">
            <div className="flex items-center justify-between h-16 px-5 border-b border-navy-50">
              <span className="font-serif font-semibold text-navy-900">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-800"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3.5 rounded-2xl text-navy-800 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto p-4 space-y-3">
              <button onClick={() => handleNavClick('#book')} className="btn-primary w-full">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
              <a href={`tel:${clinicInfo.phone}`} className="btn-secondary w-full">
                <Phone className="w-4 h-4" />
                {clinicInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
