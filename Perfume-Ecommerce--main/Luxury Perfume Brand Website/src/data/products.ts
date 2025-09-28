import { Product } from '../App';

export const products: Product[] = [
  {
    id: '1',
    name: 'Chocolate Noir',
    price: 129,
    image: 'https://images.unsplash.com/photo-1610113550457-62d4de9cc267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwbWFyYmxlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTkwNDUxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'unisex',
    description: 'A rich, decadent fragrance with notes of dark chocolate, vanilla, and amber. Perfect for evening wear.',
    notes: {
      top: ['Dark Chocolate', 'Bergamot', 'Pink Pepper'],
      middle: ['Vanilla', 'Rose', 'Jasmine'],
      base: ['Amber', 'Sandalwood', 'Musk']
    },
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Velvet Rose',
    price: 145,
    image: 'https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwd29tZW4lMjBlbGVnYW50fGVufDF8fHx8MTc1OTA0NTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'women',
    description: 'An elegant floral composition featuring Bulgarian rose, peony, and white musk.',
    notes: {
      top: ['Bulgarian Rose', 'Peony', 'Lemon'],
      middle: ['White Rose', 'Lily of the Valley', 'Peach'],
      base: ['White Musk', 'Cedar', 'Vanilla']
    },
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Marble Oud',
    price: 189,
    image: 'https://images.unsplash.com/photo-1758871993077-e084cc7eca86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWVuJTIwY29sb2duZXxlbnwxfHx8fDE3NTkwNDUyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'men',
    description: 'A sophisticated blend of oud, leather, and spices for the modern gentleman.',
    notes: {
      top: ['Cardamom', 'Saffron', 'Black Pepper'],
      middle: ['Oud', 'Rose', 'Leather'],
      base: ['Amber', 'Patchouli', 'Vanilla']
    },
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Golden Essence',
    price: 159,
    image: 'https://images.unsplash.com/photo-1655500064410-95e2f2c7b769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTg5Mzg0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'limited',
    description: 'Limited edition fragrance with 24k gold flakes and rare botanical extracts.',
    notes: {
      top: ['Golden Apple', 'Champagne', 'Citrus'],
      middle: ['Gold Orchid', 'Magnolia', 'Honey'],
      base: ['Golden Amber', 'Precious Woods', 'Silk Musk']
    },
    rating: 5.0,
    reviews: 42
  },
  {
    id: '5',
    name: 'Ocean Breeze',
    price: 99,
    image: 'https://images.unsplash.com/photo-1758225502621-9102d2856dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwY29sbGVjdGlvbiUyMGx1eHVyeSUyMGJvdHRsZXN8ZW58MXx8fHwxNzU5MDQ1MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'unisex',
    description: 'Fresh and invigorating scent reminiscent of ocean waves and sea salt.',
    notes: {
      top: ['Sea Salt', 'Bergamot', 'Aqua'],
      middle: ['Marine Accord', 'Lily', 'Mint'],
      base: ['Driftwood', 'Ambergris', 'White Musk']
    },
    rating: 4.6,
    reviews: 203
  },
  {
    id: '6',
    name: 'Sunset Paradise',
    price: 119,
    image: 'https://images.unsplash.com/photo-1543422655-ac1c6ca993ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwd29tZW4lMjBlbGVnYW50fGVufDF8fHx8MTc1OTA0NTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'women',
    description: 'Tropical and warm fragrance with exotic fruits and floral undertones.',
    notes: {
      top: ['Mango', 'Passion Fruit', 'Coconut'],
      middle: ['Frangipani', 'Hibiscus', 'Orange Blossom'],
      base: ['Vanilla', 'Sandalwood', 'Tropical Woods']
    },
    rating: 4.5,
    reviews: 167
  },
  {
    id: '7',
    name: 'Midnight Storm',
    price: 139,
    image: 'https://images.unsplash.com/photo-1758871993077-e084cc7eca86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWVuJTIwY29sb2duZXxlbnwxfHx8fDE3NTkwNDUyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'men',
    description: 'Dark and mysterious fragrance with smoky and woody notes.',
    notes: {
      top: ['Black Pepper', 'Grapefruit', 'Elemi'],
      middle: ['Vetiver', 'Cedarwood', 'Geranium'],
      base: ['Patchouli', 'Labdanum', 'Smoke']
    },
    rating: 4.8,
    reviews: 134
  },
  {
    id: '8',
    name: 'Crystal Garden',
    price: 169,
    image: 'https://images.unsplash.com/photo-1610113550457-62d4de9cc267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwbHV4dXJ5JTIwdW5pc2V4fGVufDF8fHx8MTc1OTA0NTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'limited',
    description: 'Crystalline and pure fragrance with rare white flowers and crystal essences.',
    notes: {
      top: ['Crystal Dew', 'White Tea', 'Silver Mint'],
      middle: ['White Lotus', 'Crystal Rose', 'Moonflower'],
      base: ['Clear Musk', 'Crystal Amber', 'Pure Vanilla']
    },
    rating: 4.9,
    reviews: 76
  }
];