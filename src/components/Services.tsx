import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/clinic';

export function Services() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const scrollToBooking = () => {
    document.querySelector('#book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 lg:py-28 mesh-bg">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy-900 leading-tight">
            Complete dental care, all under one roof
          </h2>
          <p className="mt-4 text-navy-500 leading-relaxed">
            From routine checkups to complex procedures — every treatment is done in-house with modern equipment and a gentle touch.
          </p>
        </div>

        {/* Services grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const isOpen = expanded === service.id;
            return (
              <div
                key={service.id}
                className={`card p-6 cursor-pointer hover:shadow-lg hover:shadow-navy-900/8 hover:border-teal-100 transition-all duration-300 reveal ${revealed ? 'revealed' : ''} reveal-delay-${(i % 3) + 1}`}
                onClick={() => toggle(service.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(service.id); } }}
                aria-expanded={isOpen}
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-navy-50 flex items-center justify-center transition-colors group-hover:from-teal-100">
                    <service.icon className="w-6 h-6 text-teal-600" strokeWidth={1.8} />
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-navy-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : ''}`}
                  />
                </div>

                <h3 className="font-serif text-lg font-semibold text-navy-900">{service.name}</h3>
                <p className="mt-2 text-sm text-navy-500 leading-relaxed">{service.shortDesc}</p>

                {/* Expandable detail */}
                <div
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-navy-600 leading-relaxed">{service.description}</p>
                    <ul className="mt-3 space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-navy-500">
                          <span className="w-1 h-1 rounded-full bg-teal-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => { e.stopPropagation(); scrollToBooking(); }}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      Book this treatment
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
