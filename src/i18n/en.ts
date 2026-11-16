import type { Dictionary } from './types';

const en: Dictionary = {
  meta: {
    title: 'Hearth & Bean | Specialty Coffee Roasters',
    description:
      'Small-batch roasted specialty coffee, expert baristas and a cozy café in the heart of Portland. Discover your perfect cup.',
    ogDescription: 'Crafted with passion, brewed with love.',
  },
  common: {
    socialMedia: 'Social media',
    opensInNewTab: (label) => `${label} (opens in a new tab)`,
    backToTop: (brand) => `${brand}, back to top`,
  },
  preferences: {
    languageLabel: 'ไทย',
    switchLanguage: 'เปลี่ยนเป็นภาษาไทย (Switch to Thai)',
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },
  nav: {
    links: {
      home: 'Home',
      about: 'About',
      menu: 'Menu',
      experience: 'Our Coffee',
      contact: 'Contact',
    },
    primary: 'Primary',
    mobile: 'Mobile',
    orderNow: 'Order Now',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    drawerNote: ['Open daily from 7 AM.', 'Come in, stay a while.'],
  },
  hero: {
    eyebrow: 'Specialty Coffee & Roastery',
    title: 'Discover Your *Perfect* Cup',
    subtitle: 'Crafted with passion, brewed with love.',
    primaryCta: 'Explore Our Menu',
    secondaryCta: 'Visit Our Café',
    highlights: {
      origins: 'Single origins',
      rating: 'Guest rating',
      since: 'Roasting since',
    },
    scroll: 'Scroll',
    scrollLabel: 'Scroll to our story',
  },
  about: {
    imageAlt:
      'Cups of latte with heart-shaped latte art among potted plants on a wooden table',
    badge: ['Years of', 'small-batch roasting'],
    eyebrow: 'Our Story',
    title: 'More Than *Just* Coffee',
    lead: 'Hearth & Bean began in 2014 with a secondhand roaster, a borrowed storefront and one simple belief: that a great cup of coffee can make an ordinary morning feel special.',
    body: 'We still roast every bean ourselves, buying from farms we visit and growers we call friends. Behind the bar, our baristas treat each order as a small craft. In the café, we keep the lights warm and the chairs comfortable, so you can slow down and stay a while.',
    values: ['Direct-trade sourcing', 'Roasted in-house weekly', 'Zero-waste bar program'],
    cta: 'Learn More',
  },
  menu: {
    eyebrow: 'Our Signature Menu',
    title: 'Poured with *Intention*',
    intro:
      'Every drink starts with our own roasts and milk from a local dairy. Here are the favorites our regulars keep coming back for.',
    viewFull: 'View Full Menu',
    showSignature: 'Show Signature Only',
    addToOrder: (name) => `Add ${name} to order`,
    added: (name) => `${name} added to your order`,
    categories: {
      Espresso: 'Espresso',
      Signature: 'Signature',
      Iced: 'Iced',
      Matcha: 'Matcha',
      Bakery: 'Bakery',
    },
    items: {
      espresso: {
        name: 'Espresso',
        description:
          'A syrupy double shot of our house Hearth blend with a long, caramelized finish.',
        notes: 'Dark chocolate · Cherry',
        imageAlt: 'A cup of espresso with golden crema on a dark table',
      },
      'caramel-macchiato': {
        name: 'Caramel Macchiato',
        description:
          'Velvety steamed milk marked with espresso and finished with house-made salted caramel.',
        notes: 'Toffee · Vanilla',
        imageAlt: 'Small macchiato with a heart of latte art on a pale blue saucer',
      },
      'matcha-latte': {
        name: 'Matcha Latte',
        description:
          'Ceremonial-grade Uji matcha whisked to order with oat milk and a touch of wildflower honey.',
        notes: 'Grassy · Sweet cream',
        imageAlt: 'Bright green matcha latte with leaf latte art',
      },
      'cold-brew': {
        name: 'Cold Brew',
        description:
          'Steeped for 18 hours for a smooth, low-acid cup that stays bright over ice.',
        notes: 'Cocoa · Toasted almond',
        imageAlt: 'Tall glass of iced cold brew swirling with cream',
      },
      cappuccino: {
        name: 'Cappuccino',
        description:
          'Equal parts espresso, steamed milk and silky microfoam. The café classic, done right.',
        notes: 'Milk chocolate · Hazelnut',
        imageAlt: 'Cappuccino with rosetta latte art viewed from above',
      },
      'spanish-latte': {
        name: 'Spanish Latte',
        description:
          'Espresso over ice with sweetened condensed milk. Creamy and indulgent, with a hint of cinnamon.',
        notes: 'Dulce de leche · Cinnamon',
        imageAlt: 'Iced Spanish latte with a bamboo straw',
      },
      'flat-white': {
        name: 'Flat White',
        description:
          'A ristretto double with a thin, glossy layer of microfoam for a bold, silky cup.',
        notes: 'Caramel · Brown sugar',
        imageAlt: 'Flat white with latte art on a wooden table',
      },
      cortado: {
        name: 'Cortado',
        description:
          'Espresso cut with an equal measure of warm milk, served in a Gibraltar glass.',
        notes: 'Cocoa nib · Honey',
        imageAlt: 'Cortado in a small glass in soft morning light',
      },
      'cafe-latte': {
        name: 'Café Latte',
        description:
          'Our everyday favorite: a mellow double shot under plenty of creamy steamed milk.',
        notes: 'Malt · Vanilla bean',
        imageAlt: 'Latte with tulip art on a wooden café table',
      },
      americano: {
        name: 'Americano',
        description:
          'A double shot lengthened with hot water. Clean, aromatic and endlessly drinkable.',
        notes: 'Black tea · Plum',
        imageAlt: 'Black Americano in a white cup seen from above',
      },
      'butter-croissant': {
        name: 'Butter Croissant',
        description:
          'Laminated over three days with cultured French butter, baked fresh every morning.',
        notes: 'Flaky · Golden',
        imageAlt: 'Two golden croissants being dusted with sugar',
      },
    },
  },
  features: {
    eyebrow: 'Why Choose Us',
    title: 'The Little Things, *Done Well*',
    description:
      'Great coffee is a hundred small decisions made with care. These are the ones we never compromise on.',
    items: {
      beans: {
        title: 'Premium Coffee Beans',
        description:
          'We buy directly from family farms in Ethiopia, Colombia and Guatemala, then roast in small batches every week so each cup is at its peak.',
      },
      baristas: {
        title: 'Expert Baristas',
        description:
          'Our SCA-trained team dials in every shot by hand, adjusting dose, grind and time until the cup tastes exactly as it should.',
      },
      atmosphere: {
        title: 'Cozy Atmosphere',
        description:
          'Warm wood, soft light and unhurried music make a calm corner of the city for slow mornings and good conversation.',
      },
    },
  },
  experience: {
    mainImageAlt: 'A barista holding a freshly poured cup with layered rosetta latte art',
    beansImageAlt: 'Freshly roasted coffee beans',
    caption: 'Roasted every Tuesday, brewed every morning.',
    eyebrow: 'Our Coffee Experience',
    title: 'From Seed *to Sip*',
    description:
      'Every cup we serve has a story that starts thousands of miles away. We handle each step ourselves so nothing is lost along the way.',
    steps: {
      source: {
        title: 'Source',
        description:
          'We buy direct from growers we know by name and pay well above Fairtrade minimums.',
      },
      roast: {
        title: 'Roast',
        description:
          'Small batches on our 15 kg drum roaster, profiled to bring out each origin’s character.',
      },
      brew: {
        title: 'Brew',
        description:
          'Precise recipes for every method, from espresso to pour-over, dialed in fresh each morning.',
      },
    },
    promo: {
      label: 'Seasonal release',
      eyebrow: 'Seasonal Release · Limited Lot',
      title: 'Ethiopia Guji, natural process. Blueberry, jasmine and wildflower honey.',
      note: 'Free tasting flight every Saturday at 10 AM',
      cta: 'Reserve a Tasting',
    },
  },
  testimonials: {
    eyebrow: 'Customer Reviews',
    title: 'Kind Words from *Our Regulars*',
    rated: (rating) => `Rated ${rating} out of 5`,
    items: {
      amara: {
        role: 'Regular since 2019',
        quote:
          'The Spanish latte is dangerously good, but the people are what keep me coming back. They remember my order and always have a new single origin for me to try.',
      },
      daniel: {
        role: 'Remote designer',
        quote:
          'My favorite place to work in the city. Bright corners, reliable Wi-Fi and a cortado that’s perfect every time. It feels like a living room that serves world-class coffee.',
      },
      hannah: {
        role: 'Home brewer',
        quote:
          'Their pour-over tasting changed how I brew at home. The team explained every step without a hint of snobbery. I left with a bag of Guji and a new obsession.',
      },
    },
  },
  contact: {
    eyebrow: 'Location & Contact',
    title: 'Come Say *Hello*',
    description:
      "Pull up a chair, book a tasting or ask us about catering. We'd love to hear from you.",
    visit: 'Visit',
    openingHours: 'Opening Hours',
    callOrWrite: 'Call or Write',
    hours: [
      { days: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
      { days: 'Saturday', hours: '8:00 AM – 8:00 PM' },
      { days: 'Sunday', hours: '8:00 AM – 5:00 PM' },
    ],
    formTitle: 'Send us a message',
    formIntro:
      'Reservations, tastings, events or wholesale. We reply within one business day.',
    mapTitle: (place) => `Map showing ${place}`,
    form: {
      name: 'Full name',
      nameRequired: 'Please tell us your name',
      nameMin: 'Name must be at least 2 characters',
      namePlaceholder: 'Jane Doe',
      email: 'Email',
      emailRequired: 'Please enter your email',
      emailInvalid: 'Please enter a valid email address',
      emailPlaceholder: 'jane@example.com',
      phone: 'Phone (optional)',
      phoneInvalid: 'Please enter a valid phone number',
      phonePlaceholder: '(503) 555-0100',
      message: 'Message',
      messageRequired: 'Please write a short message',
      messageMin: 'Message must be at least 10 characters',
      messagePlaceholder: "I'd love to book a tasting for four this Saturday…",
      submit: 'Send Message',
      success: (firstName) =>
        `Thanks, ${firstName}! We'll be in touch within one business day.`,
      error: 'Something went wrong. Please try again or give us a call.',
    },
  },
  footer: {
    description:
      'A neighborhood specialty coffee house and roastery. We roast in small batches, brew with care and keep a warm seat waiting for you.',
    navLabel: 'Footer',
    explore: 'Explore',
    contact: 'Contact',
    hours: 'Hours',
    rights: (year, brand) => `© ${year} ${brand} Coffee Roasters. All rights reserved.`,
    madeIn: 'Roasted & brewed in Portland, Oregon.',
  },
};

export default en;
