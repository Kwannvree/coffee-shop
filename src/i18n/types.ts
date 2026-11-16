import type {
  FeatureId,
  MenuCategory,
  MenuItemId,
  NavKey,
  OpeningHours,
  ProcessStepId,
  TestimonialId,
} from '@/types';

interface TextBlock {
  title: string;
  description: string;
}

/**
 * Every user-facing string on the site.
 * In `title` strings, wrap a phrase in *asterisks* to render it as the accent <em>.
 */
export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  common: {
    socialMedia: string;
    opensInNewTab: (label: string) => string;
    backToTop: (brand: string) => string;
  };
  preferences: {
    /** Label of the button that switches to the *other* language */
    languageLabel: string;
    switchLanguage: string;
    toDark: string;
    toLight: string;
  };
  nav: {
    links: Record<NavKey, string>;
    primary: string;
    mobile: string;
    orderNow: string;
    openMenu: string;
    closeMenu: string;
    drawerNote: [string, string];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: { origins: string; rating: string; since: string };
    scroll: string;
    scrollLabel: string;
  };
  about: {
    imageAlt: string;
    badge: [string, string];
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    values: string[];
    cta: string;
  };
  menu: {
    eyebrow: string;
    title: string;
    intro: string;
    viewFull: string;
    showSignature: string;
    addToOrder: (name: string) => string;
    added: (name: string) => string;
    categories: Record<MenuCategory, string>;
    items: Record<MenuItemId, { name: string; description: string; notes: string; imageAlt: string }>;
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: Record<FeatureId, TextBlock>;
  };
  experience: {
    mainImageAlt: string;
    beansImageAlt: string;
    caption: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: Record<ProcessStepId, TextBlock>;
    promo: { label: string; eyebrow: string; title: string; note: string; cta: string };
  };
  testimonials: {
    eyebrow: string;
    title: string;
    rated: (rating: number) => string;
    items: Record<TestimonialId, { role: string; quote: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    visit: string;
    openingHours: string;
    callOrWrite: string;
    hours: OpeningHours[];
    formTitle: string;
    formIntro: string;
    mapTitle: (place: string) => string;
    form: {
      name: string;
      nameRequired: string;
      nameMin: string;
      namePlaceholder: string;
      email: string;
      emailRequired: string;
      emailInvalid: string;
      emailPlaceholder: string;
      phone: string;
      phoneInvalid: string;
      phonePlaceholder: string;
      message: string;
      messageRequired: string;
      messageMin: string;
      messagePlaceholder: string;
      submit: string;
      success: (firstName: string) => string;
      error: string;
    };
  };
  footer: {
    description: string;
    navLabel: string;
    explore: string;
    contact: string;
    hours: string;
    rights: (year: number, brand: string) => string;
    madeIn: string;
  };
}
