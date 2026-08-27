import { GraduationCap, Stethoscope } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { doctors } from '@/data/clinic';

export function Doctors() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-navy-50 text-navy-600 text-xs font-semibold tracking-wide uppercase mb-4">
            Meet the Team
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy-900 leading-tight">
            Doctors who put you at ease
          </h2>
          <p className="mt-4 text-navy-500 leading-relaxed">
            Our team brings together experience, gentle hands, and a genuine love for patient care.
          </p>
        </div>

        {/* Doctor cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doctor, i) => (
            <div
              key={doctor.name}
              className={`card p-7 hover:shadow-xl hover:shadow-navy-900/8 hover:-translate-y-1 reveal ${revealed ? 'revealed' : ''} reveal-delay-${i + 1}`}
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-navy-600 flex items-center justify-center mb-5 shadow-lg shadow-teal-600/15">
                <span className="font-serif text-2xl font-semibold text-white">{doctor.initials}</span>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                  <Stethoscope className="w-4 h-4 text-teal-600" />
                </div>
              </div>

              <h3 className="font-serif text-xl font-semibold text-navy-900">{doctor.name}</h3>
              <p className="text-sm text-teal-600 font-medium mt-0.5">{doctor.role}</p>

              <div className="flex items-center gap-1.5 mt-2 text-xs text-navy-400">
                <GraduationCap className="w-3.5 h-3.5" />
                {doctor.qualification}
              </div>

              <p className="mt-4 text-sm text-navy-600 leading-relaxed">{doctor.bio}</p>

              {/* Specialties */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {doctor.specialties.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center mt-10 text-sm text-navy-400">
          Photos coming soon — these are placeholder avatars for our doctors.
        </p>
      </div>
    </section>
  );
}
