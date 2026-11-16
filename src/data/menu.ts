import type { MenuItem } from '@/types';

/** Prices, categories and photos. Names and descriptions are in src/i18n. */

const unsplash = (id: string): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const menuItems: MenuItem[] = [
  {
    id: 'espresso',
    price: 3.5,
    category: 'Espresso',
    image: unsplash('photo-1510707577719-ae7c14805e3a'),
    signature: true,
  },
  {
    id: 'caramel-macchiato',
    price: 5.75,
    category: 'Signature',
    image: unsplash('photo-1485808191679-5f86510681a2'),
    signature: true,
  },
  {
    id: 'matcha-latte',
    price: 5.5,
    category: 'Matcha',
    image: unsplash('photo-1515823064-d6e0c04616a7'),
    signature: true,
  },
  {
    id: 'cold-brew',
    price: 5,
    category: 'Iced',
    image: unsplash('photo-1461023058943-07fcbe16d735'),
    signature: true,
  },
  {
    id: 'cappuccino',
    price: 4.75,
    category: 'Espresso',
    image: unsplash('photo-1572442388796-11668a67e53d'),
    signature: true,
  },
  {
    id: 'spanish-latte',
    price: 6,
    category: 'Signature',
    image: unsplash('photo-1578314675249-a6910f80cc4e'),
    signature: true,
  },
  {
    id: 'flat-white',
    price: 4.5,
    category: 'Espresso',
    image: unsplash('photo-1577968897966-3d4325b36b61'),
    signature: false,
  },
  {
    id: 'cortado',
    price: 4.25,
    category: 'Espresso',
    image: unsplash('photo-1559496417-e7f25cb247f3'),
    signature: false,
  },
  {
    id: 'cafe-latte',
    price: 4.75,
    category: 'Espresso',
    image: unsplash('photo-1534778101976-62847782c213'),
    signature: false,
  },
  {
    id: 'americano',
    price: 3.75,
    category: 'Espresso',
    image: unsplash('photo-1514432324607-a09d9b4aefdd'),
    signature: false,
  },
  {
    id: 'butter-croissant',
    price: 4,
    category: 'Bakery',
    image: unsplash('photo-1555507036-ab1f4038808a'),
    signature: false,
  },
];
