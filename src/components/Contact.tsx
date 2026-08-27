import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { clinicInfo, hours } from '@/data/clinic';

export function Contact() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  const todayIndex = new Date().getDay();
  const todayLabel = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][todayIndex];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy-900 leading-tight">
            Find us in Mahavir Enclave
          </h2>
          <p className="mt-4 text-navy-500 leading-relaxed">
            We're easy to reach — behind Sulabh International Museum, with parking nearby.
          </p>
        </div>

        <div ref={ref} className={`grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch reveal ${revealed ? 'revealed' : ''}`}>
          {/* Left: contact info */}
          <div className="space-y-5">
            {/* Address card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-navy-900">Our Address</h3>
                  <p className="mt-1.5 text-sm text-navy-600 leading-relaxed">{clinicInfo.address}</p>
                  <p className="mt-2 text-xs text-navy-400">Plus Code: {clinicInfo.plusCode}</p>
                  <a
                    href={clinicInfo.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900">Phone</h3>
                  <a href={`tel:${clinicInfo.phone}`} className="mt-1.5 block text-sm text-navy-600 hover:text-teal-600 transition-colors">
                    {clinicInfo.phoneDisplay}
                  </a>
                  <p className="mt-1 text-xs text-navy-400">Tap to call — we answer during clinic hours</p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-navy-900">Business Hours</h3>
                  <div className="mt-3 space-y-1.5">
                    {hours.map((h) => (
                      <div
                        key={h.day}
                        className={`flex items-center justify-between text-sm py-1.5 px-3 rounded-lg ${h.day === todayLabel ? 'bg-teal-50 text-teal-800 font-medium' : 'text-navy-600'}`}
                      >
                        <span>{h.day}</span>
                        <span className={h.day === todayLabel ? 'text-teal-700' : 'text-navy-500'}>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Rating badge */}
            <a
              href={clinicInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4 hover:border-teal-200 transition-colors"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-navy-900">{clinicInfo.rating} out of 5</p>
                <p className="text-xs text-navy-400">{clinicInfo.reviewCount} Google reviews · See all reviews</p>
              </div>
            </a>
          </div>

          {/* Right: map */}
          <div className="rounded-3xl overflow-hidden shadow-lg shadow-navy-900/10 min-h-[400px] lg:min-h-full">
            <iframe
              src={clinicInfo.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thomas Dental Care location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
