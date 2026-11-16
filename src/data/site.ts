import type { ContactInfo, Feature, NavLink, ProcessStep, Testimonial } from '@/types';

/** Language-independent site data. All translatable copy lives in src/i18n. */

export const brand = {
  name: 'Hearth & Bean',
  tagline: 'Coffee Roasters',
} as const;

export const images = {
  hero: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2400&q=80',
  about: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
  experience:
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1600&q=80',
  beans: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80',
} as const;

export const navLinks: NavLink[] = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'menu', href: '#menu' },
  { key: 'experience', href: '#experience' },
  { key: 'contact', href: '#contact' },
];

export const features: Feature[] = [
  { id: 'beans', icon: 'coffee' },
  { id: 'baristas', icon: 'trophy' },
  { id: 'atmosphere', icon: 'home' },
];

export const processSteps: ProcessStep[] = [
  { id: 'source', step: '01' },
  { id: 'roast', step: '02' },
  { id: 'brew', step: '03' },
];

export const testimonials: Testimonial[] = [
  { id: 'amara', name: 'Amara Okafor', rating: 5 },
  { id: 'daniel', name: 'Daniel Reyes', rating: 5 },
  { id: 'hannah', name: 'Hannah Kim', rating: 4.5 },
];

export const contactInfo: ContactInfo = {
  addressLines: ['1120 NW Hoyt Street', 'Portland, OR 97209'],
  mapQuery: 'Pearl District, Portland, OR',
  phone: '(503) 555-0142',
  phoneHref: 'tel:+15035550142',
  email: 'hello@hearthandbean.com',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
    { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
  ],
};
