import { HeartPulse, Wallet, Sparkles, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const aboutImage = 'https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&dpr=2';
const aboutImage2 = 'https://images.pexels.com/photos/6627671/pexels-photo-6627671.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&dpr=2';

const differentiators = [
  {
    icon: HeartPulse,
    title: 'Comfort-first care',
    desc: "We take time to listen, explain, and make sure you're relaxed — not rushed through a chair.",
  },
  {
    icon: Wallet,
    title: 'Honest, affordable pricing',
    desc: 'Clear written estimates before any treatment. No hidden charges, no unnecessary procedures.',
  },
  {
    icon: Sparkles,
    title: 'Modern equipment',
    desc: 'Digital X-rays, rotary endodontics, and sterilized instruments for precise, safe treatment.',
  },
  {
    icon: ShieldCheck,
    title: 'Strict hygiene protocols',
    desc: 'Every instrument is sterilized between patients. Disposable items, sanitized surfaces, PPE.',
  },
];

export function About() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-20 lg:py-28 tooth-pattern">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div ref={ref} className={`relative reveal ${revealed ? 'revealed' : ''}`}>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-xl shadow-navy-900/10 aspect-[4/3]">
                <img
                  src={aboutImage}
                  alt="Modern dental office at Thomas Dental Care in Mahavir Enclave"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-52 rounded-2xl overflow-hidden shadow-xl shadow-navy-900/10 border-4 border-cream-50 aspect-square">
                <img
                  src={aboutImage2}
                  alt="Sterilized dental tools at Thomas Dental Care New Delhi"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl bg-teal-100/60 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-4">
              About the Clinic
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy-900 leading-tight">
              A neighbourhood clinic built on trust, not upsells
            </h2>
            <p className="mt-5 text-navy-600 leading-relaxed">
              Thomas Dental Care started with a simple idea: that good dentistry shouldn't be intimidating or out of reach. Dr. Samuel Thomas opened the clinic in Mahavir Enclave to serve families across the neighbourhood with straightforward, honest treatment — the kind he'd want for his own family.
            </p>
            <p className="mt-3 text-navy-600 leading-relaxed">
              Today, our small team sees everyone from toddlers on their first visit to grandparents needing full-mouth restoration. We invest in modern equipment and strict hygiene, but what patients remember most is feeling heard, respected, and genuinely cared for.
            </p>

            {/* Differentiators */}
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {differentiators.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 text-sm">{item.title}</h3>
                    <p className="mt-1 text-sm text-navy-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
