import { Microscope, IndianRupee, ShieldCheck, Clock, Award, HeartHandshake } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const reasons = [
  {
    icon: Microscope,
    title: 'Modern Equipment',
    desc: 'Digital X-rays, rotary endodontics, and ultrasonic scalers for precise, efficient treatment.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    desc: 'Fair, transparent pricing with written estimates. Flexible payment options for larger plans.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic & Safe',
    desc: 'Strict sterilization protocols, disposable items, and sanitized surfaces between every patient.',
  },
  {
    icon: Clock,
    title: 'Flexible Timing',
    desc: 'Open daily until 8 PM with same-day emergency slots. We work around your schedule.',
  },
  {
    icon: Award,
    title: 'Experienced Doctors',
    desc: 'Over 12 years of clinical experience across root canals, implants, cosmetic and pediatric dentistry.',
  },
  {
    icon: HeartHandshake,
    title: 'Comfortable Environment',
    desc: 'A calm, friendly clinic where anxious patients and children feel safe and at ease.',
  },
];

export function WhyChooseUs() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-teal-900/50 text-teal-300 text-xs font-semibold tracking-wide uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-white leading-tight">
            What our patients tell us they love
          </h2>
          <p className="mt-4 text-navy-200 leading-relaxed">
            We listen to feedback from every visit. Here's what keeps our patients coming back — and recommending us to their families.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group p-7 rounded-3xl bg-navy-800/50 border border-navy-700/50 hover:bg-navy-800 hover:border-teal-700/40 transition-all duration-300 reveal ${revealed ? 'revealed' : ''} reveal-delay-${(i % 3) + 1}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-600/20 flex items-center justify-center mb-5 group-hover:bg-teal-600/30 transition-colors">
                <reason.icon className="w-6 h-6 text-teal-300" strokeWidth={1.8} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm text-navy-200 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
