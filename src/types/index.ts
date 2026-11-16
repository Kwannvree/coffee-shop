export type IconName =
  | 'coffee'
  | 'trophy'
  | 'home'
  | 'environment'
  | 'clock'
  | 'phone'
  | 'mail'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'arrowRight';

export type MenuCategory = 'Espresso' | 'Signature' | 'Iced' | 'Matcha' | 'Bakery';

export type MenuItemId =
  | 'espresso'
  | 'caramel-macchiato'
  | 'matcha-latte'
  | 'cold-brew'
  | 'cappuccino'
  | 'spanish-latte'
  | 'flat-white'
  | 'cortado'
  | 'cafe-latte'
  | 'americano'
  | 'butter-croissant';

/** Language-independent menu data. Names, descriptions and notes live in the dictionaries. */
export interface MenuItem {
  id: MenuItemId;
  price: number;
  category: MenuCategory;
  image: string;
  /** Signature items are shown by default; the rest appear in the full menu. */
  signature: boolean;
}

export type NavKey = 'home' | 'about' | 'menu' | 'experience' | 'contact';

export interface NavLink {
  key: NavKey;
  href: `#${string}`;
}

export type FeatureId = 'beans' | 'baristas' | 'atmosphere';

export interface Feature {
  id: FeatureId;
  icon: IconName;
}

export type ProcessStepId = 'source' | 'roast' | 'brew';

export interface ProcessStep {
  id: ProcessStepId;
  step: string;
}

export type TestimonialId = 'amara' | 'daniel' | 'hannah';

export interface Testimonial {
  id: TestimonialId;
  name: string;
  rating: number;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface ContactInfo {
  addressLines: [string, string];
  mapQuery: string;
  phone: string;
  phoneHref: string;
  email: string;
  socials: SocialLink[];
}
