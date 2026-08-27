import { Phone, MapPin, Clock, Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { clinicInfo, navLinks, services } from '@/data/clinic';

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-cream-100 pt-16 pb-8">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-teal-600 flex items-center justify-center shadow-lg shadow-teal-600/20">
                <svg viewBox="0 0 32 32" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M16 6c-2.5 0-4 1.5-4 4 0 1.5.5 3 .5 5.5s-.5 4-.5 6.5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5c0-2.5-.5-4-.5-6.5s.5-4 .5-5.5c0-2.5-1.5-4-4-4z" />
                </svg>
              </div>
              <div>
                <p className="font-serif font-semibold text-lg text-white">Thomas Dental Care</p>
                <p className="text-xs text-teal-300">{clinicInfo.nameHindi}</p>
              </div>
            </div>
            <p className="text-sm text-navy-200 leading-relaxed">
              Gentle, modern dentistry in Mahavir Enclave, New Delhi. Caring for neighbourhood smiles since 2012.
            </p>

            {/* Trust badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-800 text-xs font-medium text-teal-200">
                <Heart className="w-3 h-3" />
                LGBTQ+ Friendly
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy-800 text-xs font-medium text-teal-200">
                <ShieldCheck className="w-3 h-3" />
                Women-Owned
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-navy-200 hover:text-teal-300 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('#book')}
                  className="text-sm text-navy-200 hover:text-teal-300 transition-colors"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-navy-200 hover:text-teal-300 transition-colors text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-navy-200">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{clinicInfo.addressShort}</span>
              </li>
              <li>
                <a href={`tel:${clinicInfo.phone}`} className="flex items-center gap-2.5 text-sm text-navy-200 hover:text-teal-300 transition-colors">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  {clinicInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-navy-200">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Sat: 10 AM – 8 PM</p>
                  <p>Sunday: By appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-300">
            © {new Date().getFullYear()} Thomas Dental Care. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-navy-300">Mahavir Enclave · New Delhi 110045</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-9 h-9 rounded-full bg-navy-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
