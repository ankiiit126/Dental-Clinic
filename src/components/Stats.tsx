import { useCountUp } from '@/hooks/useCountUp';
import { useReveal } from '@/hooks/useReveal';
import { stats } from '@/data/clinic';

function StatCard({ stat, index }: { stat: typeof stats[number]; index: number }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const value = useCountUp(stat.value, 1800 + index * 200, revealed);

  return (
    <div
      ref={ref}
      className={`text-center reveal ${revealed ? 'revealed' : ''} reveal-delay-${index + 1}`}
    >
      <p className="font-serif text-4xl lg:text-5xl font-semibold text-navy-900">
        {value}
        <span className="text-teal-600">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-navy-500 font-medium">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-14 lg:py-16 bg-white border-y border-navy-50">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
