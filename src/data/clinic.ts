import {
  Stethoscope,
  Activity,
  Crown,
  Sparkles,
  Smile,
  Bone,
  Wrench,
  Baby,
  Sun,
  Scissors,
  Siren,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  shortDesc: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'general-checkup',
    name: 'General Checkup',
    icon: Stethoscope,
    shortDesc: 'Routine exams to keep your smile healthy.',
    description:
      'A thorough examination of your teeth, gums, and mouth to catch problems early — before they become painful or expensive. We check for cavities, gum health, bite alignment, and oral cancer signs.',
    features: ['Digital X-rays', 'Oral cancer screening', 'Personalized care plan', 'Gum health assessment'],
  },
  {
    id: 'root-canal-treatment',
    name: 'Root Canal Treatment',
    icon: Activity,
    shortDesc: 'Painless root canals that save your natural tooth.',
    description:
      'When a tooth is deeply decayed or infected, a root canal removes the damaged pulp, relieves the pain, and seals the tooth — letting you keep it for life instead of pulling it out.',
    features: ['Single-sitting RCT available', 'Rotary endodontic technology', 'Virtually painless procedure', 'Tooth-coloured crown fitting'],
  },
  {
    id: 'crowns-capping',
    name: 'Crowns & Capping',
    icon: Crown,
    shortDesc: 'Restore broken or weak teeth to full strength.',
    description:
      'Crowns (caps) cover and protect teeth that are cracked, broken, or worn down. We use tooth-coloured ceramic and zirconia crowns that look natural and last for years.',
    features: ['Zirconia & ceramic options', 'Natural tooth colour', 'Long-lasting protection', 'Custom-fit to your bite'],
  },
  {
    id: 'teeth-cleaning-scaling',
    name: 'Teeth Cleaning & Scaling',
    icon: Sparkles,
    shortDesc: 'Remove plaque and tartar for a fresh, healthy mouth.',
    description:
      "Professional scaling and polishing removes hardened tartar that brushing can't reach, prevents gum disease, and leaves your teeth feeling smooth and fresh.",
    features: ['Ultrasonic scaling', 'Polishing & stain removal', 'Gum disease prevention', 'Fresh breath'],
  },
  {
    id: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    icon: Smile,
    shortDesc: 'Veneers, bonding, and smile makeovers.',
    description:
      'From subtle fixes to full smile transformations — veneers, composite bonding, and contouring reshape and brighten your teeth so you can smile with confidence.',
    features: ['Porcelain veneers', 'Composite bonding', 'Smile design consultation', 'Before/after preview'],
  },
  {
    id: 'braces-orthodontics',
    name: 'Braces / Orthodontics',
    icon: Wrench,
    shortDesc: 'Straighten crooked teeth and fix your bite.',
    description:
      'Traditional metal braces and clear aligners gently move teeth into proper alignment — improving both appearance and how your teeth bite together.',
    features: ['Metal & ceramic braces', 'Clear aligners', 'Bite correction', 'Child & adult orthodontics'],
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    icon: Bone,
    shortDesc: 'Permanent replacements for missing teeth.',
    description:
      'Implants are titanium roots placed in the jawbone to support crowns, bridges, or dentures — the closest thing to natural teeth when a tooth is lost.',
    features: ['Single tooth to full mouth', 'Titanium implant systems', 'Natural-looking crowns', 'Long-term solution'],
  },
  {
    id: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    icon: Baby,
    shortDesc: 'Gentle dental care for little smiles.',
    description:
      'We make children feel safe and relaxed — from their first dental visit to sealants, fluoride, and early orthodontic checks that set them up for a lifetime of healthy teeth.',
    features: ['Child-friendly environment', 'Fluoride & sealants', 'Early ortho assessment', 'Cavity prevention'],
  },
  {
    id: 'teeth-whitening',
    name: 'Teeth Whitening',
    icon: Sun,
    shortDesc: 'Brighten stained or yellow teeth safely.',
    description:
      'Professional whitening lifts years of stains from coffee, tea, and tobacco — several shades brighter in a single visit, with results that last.',
    features: ['In-clinic whitening', 'Take-home kits', 'Enamel-safe formula', 'Visible results same day'],
  },
  {
    id: 'extractions',
    name: 'Extractions',
    icon: Scissors,
    shortDesc: 'Safe removal of damaged or wisdom teeth.',
    description:
      "When a tooth can't be saved, we remove it with care — including impacted wisdom teeth — and discuss replacement options so your smile stays complete.",
    features: ['Simple & surgical extraction', 'Wisdom tooth removal', 'Sedation options', 'Post-care guidance'],
  },
  {
    id: 'emergency-dental-care',
    name: 'Emergency Dental Care',
    icon: Siren,
    shortDesc: 'Same-day relief for toothaches and injuries.',
    description:
      "Severe toothache, a knocked-out tooth, or a broken crown can't wait. Call us and we'll do our best to see you the same day and get you out of pain fast.",
    features: ['Same-day appointments', 'Pain relief first', 'Trauma & injury care', 'Walk-ins welcome'],
  },
];

export interface Doctor {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  specialties: string[];
  initials: string;
}

export const doctors: Doctor[] = [
  {
    name: 'Dr. Samuel Thomas',
    role: 'Lead Dentist & Founder',
    qualification: 'BDS, MDS — Conservative Dentistry',
    bio: 'Dr. Samuel founded Thomas Dental Care with a simple belief: quality dental treatment should be affordable and comfortable for everyone in the neighbourhood. With over a decade of clinical experience, he specializes in root canals and restorative dentistry, and is known for his calm, patient-first approach.',
    specialties: ['Root Canal Treatment', 'Crowns & Bridges', 'Restorative Dentistry'],
    initials: 'ST',
  },
  {
    name: 'Dr. Pooja',
    role: 'Dental Surgeon',
    qualification: 'BDS',
    bio: 'Dr. Pooja brings warmth and precision to every appointment. She focuses on preventive and cosmetic dentistry, helping patients understand their treatment options clearly so they can make confident decisions about their own care.',
    specialties: ['Cosmetic Dentistry', 'Teeth Whitening', 'Preventive Care'],
    initials: 'P',
  },
  {
    name: 'Dr. Divya Bhatheja',
    role: 'Dental Surgeon',
    qualification: 'BDS',
    bio: 'Dr. Divya has a gentle hand and a special way with children and anxious patients. She handles general dentistry, extractions, and pediatric care, making sure every visit is as stress-free as possible.',
    specialties: ['Pediatric Dentistry', 'Extractions', 'General Dentistry'],
    initials: 'DB',
  },
];

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Rahul Verma',
    rating: 5,
    context: 'Root Canal Treatment',
    text: "I was terrified of getting a root canal, but Dr. Samuel explained every step and it was completely painless. The clinic is spotless and the staff actually care about making you comfortable. Couldn't have asked for better treatment.",
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    context: 'Teeth Cleaning & Scaling',
    text: 'Got my scaling done here last month. Very reasonable pricing compared to other clinics I called in the area. Dr. Pooja walked me through what she was doing the whole time. My teeth have never felt cleaner.',
  },
  {
    name: 'Amit Khanna',
    rating: 5,
    context: 'Dental Implants',
    text: 'Had an implant placed after years of avoiding the dentist. The whole process was smooth, hygienic, and the result looks completely natural. They never pushed unnecessary procedures on me.',
  },
  {
    name: 'Sneha Gupta',
    rating: 4,
    context: 'Orthodontics',
    text: 'My daughter got her braces here. Dr. Divya is so patient with kids — she made my daughter actually look forward to her appointments! The clinic follows all safety protocols and feels very clean.',
  },
  {
    name: 'Mohammed Irfan',
    rating: 5,
    context: 'Emergency Care',
    text: 'Had a severe toothache on a Sunday and they saw me the same day. Quick diagnosis, pain relief, and a clear plan for the follow-up. This is what a neighbourhood clinic should be.',
  },
  {
    name: 'Anjali Mehta',
    rating: 5,
    context: 'Cosmetic Dentistry',
    text: "Got veneers for my front teeth and I can't stop smiling. The doctors took the time to show me a preview before committing. Modern equipment, fair prices, and genuinely kind people.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What should I expect during my first visit?',
    answer:
      "Your first visit includes a full mouth examination, digital X-rays if needed, and an honest assessment of your oral health. We'll walk you through any findings, explain your treatment options, and answer all your questions — no pressure, no unnecessary procedures.",
  },
  {
    question: 'Do you handle dental emergencies?',
    answer:
      "Yes. If you have severe pain, swelling, a broken tooth, or a knocked-out tooth, call us at 09599635191 and we'll do our best to see you the same day. For a knocked-out tooth, keep it in milk or saliva and bring it with you — time matters.",
  },
  {
    question: 'Is root canal treatment painful?',
    answer:
      'With modern techniques and local anaesthesia, root canal treatment is virtually painless — most patients feel only mild pressure. In fact, the procedure relieves the pain of an infected tooth. We also offer single-sitting RCT for suitable cases.',
  },
  {
    question: 'How much do treatments cost?',
    answer:
      "We believe quality dental care should be affordable. Treatment costs vary by procedure, and we'll give you a clear, written estimate before starting any work. We also offer flexible payment options for larger treatments like implants and braces.",
  },
  {
    question: 'At what age should my child first visit the dentist?',
    answer:
      'We recommend a first dental visit by age one or within six months of the first tooth appearing. Early visits help prevent cavities, let us monitor development, and build a positive relationship with the dentist from the start.',
  },
  {
    question: 'What payment options do you accept?',
    answer:
      "We accept cash, UPI, and all major debit/credit cards. For extensive treatment plans, we offer installment options so cost doesn't come between you and your dental health. Ask us at your visit and we'll work something out.",
  },
  {
    question: 'Do you follow COVID-19 safety protocols?',
    answer:
      'Absolutely. We sterilize all instruments between patients, use disposable items where possible, sanitize surfaces regularly, and our staff wear appropriate PPE. Your safety and comfort are non-negotiable.',
  },
];

export interface DayHours {
  day: string;
  hours: string;
  isToday?: boolean;
}

export const hours: DayHours[] = [
  { day: 'Monday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Thursday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Friday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', hours: 'By Appointment' },
];

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export const stats: Stat[] = [
  { label: 'Years of Experience', value: 12, suffix: '+' },
  { label: 'Happy Patients', value: 5000, suffix: '+' },
  { label: 'Google Reviews', value: 167, suffix: '' },
  { label: 'Rating', value: 4.7, suffix: '★' },
];

export const clinicInfo = {
  name: 'Thomas Dental Care',
  nameHindi: 'थॉमस डेंटल केयर',
  tagline: 'Gentle, modern dentistry in the heart of Mahavir Enclave',
  phone: '09599635191',
  phoneDisplay: '+91 95996 35191',
  whatsapp: '919599635191',
  address:
    'H1/34, behind Sulabh International Museum, Kali Nagar, Mahavir Enclave I, Mahavir Enclave Part 1, Mahavir Enclave, New Delhi, Delhi 110045',
  addressShort: 'H1/34, Kali Nagar, Mahavir Enclave, New Delhi 110045',
  plusCode: 'H3WJ+H6 New Delhi',
  rating: 4.7,
  reviewCount: 167,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Thomas+Dental+Care+Mahavir+Enclave+New+Delhi',
  mapsEmbed:
    'https://www.google.com/maps?q=H1/34+Kali+Nagar+Mahavir+Enclave+New+Delhi+110045&output=embed',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Thomas+Dental+Care+Mahavir+Enclave+New+Delhi',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];
