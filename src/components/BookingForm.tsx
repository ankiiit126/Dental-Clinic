import { useState, type FormEvent } from 'react';
import { User, Phone, Calendar, Clock, Stethoscope, MessageSquare, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { services, clinicInfo } from '@/data/clinic';
import { supabase } from '@/lib/supabase';

type FormState = {
  name: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const initialForm: FormState = {
  name: '',
  phone: '',
  preferred_date: '',
  preferred_time: '',
  service: '',
  message: '',
};

const timeSlots = [
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 1:00 PM',
  '2:00 PM – 3:00 PM',
  '3:00 PM – 4:00 PM',
  '4:00 PM – 5:00 PM',
  '5:00 PM – 6:00 PM',
  '6:00 PM – 7:00 PM',
  '7:00 PM – 8:00 PM',
];

export function BookingForm() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^[0-9+\-\s]{10,15}$/.test(form.phone.trim())) e.phone = 'Please enter a valid phone number';
    if (!form.preferred_date) e.preferred_date = 'Please choose a date';
    if (!form.preferred_time) e.preferred_time = 'Please choose a time slot';
    if (!form.service) e.service = 'Please select a service';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const { error } = await supabase.from('appointments').insert({
        name: form.name.trim(),
        phone: form.phone.trim(),
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        service: form.service,
        message: form.message.trim() || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="book" className="py-20 lg:py-28 mesh-bg">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wide uppercase mb-4">
              Book Appointment
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-navy-900 leading-tight">
              Schedule your visit in minutes
            </h2>
            <p className="mt-4 text-navy-600 leading-relaxed">
              Fill out the form and our front desk will call you back to confirm your slot. Prefer to talk directly? We're just a call or WhatsApp away.
            </p>

            {/* Alternate booking options */}
            <div className="mt-8 space-y-3">
              <a
                href={`tel:${clinicInfo.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-navy-50 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-navy-400">Call us directly</p>
                  <p className="font-semibold text-navy-900">{clinicInfo.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${clinicInfo.whatsapp}?text=Hi%20Thomas%20Dental%20Care%2C%20I'd%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-navy-50 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-600" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-navy-400">WhatsApp us</p>
                  <p className="font-semibold text-navy-900">Chat & book instantly</p>
                </div>
              </a>
            </div>

            {/* Hours preview */}
            <div className="mt-6 p-5 rounded-2xl bg-navy-50">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-teal-600" />
                <p className="text-sm font-semibold text-navy-900">Clinic Hours</p>
              </div>
              <p className="text-sm text-navy-600">Mon – Sat: 10 AM – 8 PM</p>
              <p className="text-sm text-navy-600">Sunday: By appointment</p>
            </div>
          </div>

          {/* Right: form */}
          <div ref={ref} className={`lg:col-span-3 reveal ${revealed ? 'revealed' : ''}`}>
            <div className="card p-7 lg:p-9">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-navy-900">Appointment Requested!</h3>
                  <p className="mt-3 text-navy-600 max-w-sm leading-relaxed">
                    Thank you for choosing Thomas Dental Care. Our front desk will call you shortly to confirm your appointment.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-7"
                  >
                    Book another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-coral-500/10 border border-coral-400/20">
                      <AlertCircle className="w-5 h-5 text-coral-600 flex-shrink-0" />
                      <p className="text-sm text-coral-600">
                        Something went wrong. Please try again or call us directly at {clinicInfo.phoneDisplay}.
                      </p>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-2">
                      <User className="w-4 h-4 text-teal-600" />
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-cream-50 text-navy-900 placeholder-navy-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/30 ${
                        errors.name ? 'border-coral-400' : 'border-navy-100 focus:border-teal-400'
                      }`}
                      placeholder="e.g. Rahul Sharma"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-coral-600">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-2">
                      <Phone className="w-4 h-4 text-teal-600" />
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-cream-50 text-navy-900 placeholder-navy-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/30 ${
                        errors.phone ? 'border-coral-400' : 'border-navy-100 focus:border-teal-400'
                      }`}
                      placeholder="e.g. 98765 43210"
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-coral-600">{errors.phone}</p>}
                  </div>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-2">
                        <Calendar className="w-4 h-4 text-teal-600" />
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        type="date"
                        min={today}
                        value={form.preferred_date}
                        onChange={(e) => update('preferred_date', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border bg-cream-50 text-navy-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/30 ${
                          errors.preferred_date ? 'border-coral-400' : 'border-navy-100 focus:border-teal-400'
                        }`}
                      />
                      {errors.preferred_date && <p className="mt-1.5 text-xs text-coral-600">{errors.preferred_date}</p>}
                    </div>

                    <div>
                      <label htmlFor="time" className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-2">
                        <Clock className="w-4 h-4 text-teal-600" />
                        Preferred Time
                      </label>
                      <select
                        id="time"
                        value={form.preferred_time}
                        onChange={(e) => update('preferred_time', e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl border bg-cream-50 text-navy-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/30 ${
                          errors.preferred_time ? 'border-coral-400' : 'border-navy-100 focus:border-teal-400'
                        } ${!form.preferred_time ? 'text-navy-300' : ''}`}
                      >
                        <option value="">Select a slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="text-navy-900">{slot}</option>
                        ))}
                      </select>
                      {errors.preferred_time && <p className="mt-1.5 text-xs text-coral-600">{errors.preferred_time}</p>}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-2">
                      <Stethoscope className="w-4 h-4 text-teal-600" />
                      Service Needed
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border bg-cream-50 text-navy-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/30 ${
                        errors.service ? 'border-coral-400' : 'border-navy-100 focus:border-teal-400'
                      } ${!form.service ? 'text-navy-300' : ''}`}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.name} className="text-navy-900">{s.name}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1.5 text-xs text-coral-600">{errors.service}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-navy-700 mb-2">
                      <MessageSquare className="w-4 h-4 text-teal-600" />
                      Message <span className="text-navy-300 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-navy-100 bg-cream-50 text-navy-900 placeholder-navy-300 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 resize-none"
                      placeholder="Tell us about your symptoms or any specific concerns..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending request...
                      </>
                    ) : (
                      'Request Appointment'
                    )}
                  </button>

                  <p className="text-center text-xs text-navy-400">
                    By submitting, you agree to be contacted by Thomas Dental Care to confirm your appointment.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
