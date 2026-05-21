// Mock catalog powers the UI until the frontend is connected to MongoDB-backed APIs.
export const products = [
  {
    id: 'p1',
    slug: 'coastline-runner',
    title: 'Coastline Runner',
    subtitle: 'Lightweight knit sneaker for everyday miles.',
    price: 128,
    rating: 4.9,
    category: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description:
      'A soft knit upper, responsive foam base, and clean profile designed for commuting, errands, and everything in between.',
    features: ['Breathable knit upper', 'Cushioned foam midsole', 'Machine-wash friendly', 'All-day traction outsole'],
    tags: ['sneaker', 'wool', 'commuter', 'everyday'],
    isNew: true,
    reviews: [
      { author: 'Nia', rating: 5, comment: 'Comfort straight out of the box and easy to style.' },
      { author: 'David', rating: 5, comment: 'The clean shape makes this feel premium without trying too hard.' },
    ],
  },
  {
    id: 'p2',
    slug: 'mesa-quarter-zip',
    title: 'Mesa Quarter Zip',
    subtitle: 'Structured layer with a relaxed weekend drape.',
    price: 94,
    rating: 4.8,
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    description:
      'Soft brushed fabric, clean collar construction, and an easy silhouette you can wear for work-from-anywhere or a cool evening out.',
    features: ['Brushed cotton blend', 'Relaxed shoulder seam', 'YKK quarter zipper', 'Minimal branding'],
    tags: ['layering', 'zip', 'casual', 'soft'],
    isNew: false,
    reviews: [
      { author: 'Kevin', rating: 5, comment: 'Feels elevated enough for meetings but still easygoing.' },
      { author: 'Sasha', rating: 4, comment: 'Great fit and the fabric has the right amount of weight.' },
    ],
  },
  {
    id: 'p3',
    slug: 'sundown-carryall',
    title: 'Sundown Carryall',
    subtitle: 'A refined weekender with smart pocketing.',
    price: 146,
    rating: 4.7,
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    description:
      'Built for quick overnights and gym-to-office carry, with a wide opening, hidden shoe compartment, and weather-ready canvas shell.',
    features: ['Water-resistant canvas', 'Laptop sleeve', 'Hidden shoe pocket', 'Trolley pass-through'],
    tags: ['bag', 'travel', 'carryall', 'weekender'],
    isNew: true,
    reviews: [
      { author: 'Faith', rating: 5, comment: 'Looks smart enough for travel and fits more than expected.' },
      { author: 'Omar', rating: 4, comment: 'The hidden compartment is a genuinely useful detail.' },
    ],
  },
  {
    id: 'p4',
    slug: 'harbor-slide',
    title: 'Harbor Slide',
    subtitle: 'Slip-on comfort for off-duty moments.',
    price: 72,
    rating: 4.6,
    category: 'Footwear',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
    description:
      'Soft footbed support and clean molded lines make this the easy pair for travel days, quick errands, and lounging.',
    features: ['Contoured footbed', 'Quick-clean upper', 'Packable shape', 'Indoor-outdoor grip'],
    tags: ['slide', 'comfort', 'travel', 'minimal'],
    isNew: false,
    reviews: [
      { author: 'Lena', rating: 5, comment: 'Exactly the kind of quiet, comfortable slide I wanted.' },
      { author: 'Joel', rating: 4, comment: 'Simple, soft, and easy to wear every day.' },
    ],
  },
  {
    id: 'p5',
    slug: 'atlas-utility-short',
    title: 'Atlas Utility Short',
    subtitle: 'Stretch short for sun, city, and travel.',
    price: 68,
    rating: 4.8,
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1506629905607-d9d1cbe4e7f3?auto=format&fit=crop&w=900&q=80',
    description:
      'Clean waistband, subtle stretch, and a trim fit inspired by modern coastal style without going overboard.',
    features: ['4-way stretch fabric', 'Zip security pocket', 'Quick-dry finish', 'Tailored fit'],
    tags: ['shorts', 'travel', 'summer', 'stretch'],
    isNew: true,
    reviews: [
      { author: 'Brian', rating: 5, comment: 'The fit is excellent and the fabric moves well.' },
      { author: 'Amani', rating: 5, comment: 'The kind of short that works from brunch to beach.' },
    ],
  },
  {
    id: 'p6',
    slug: 'drift-crew-tee',
    title: 'Drift Crew Tee',
    subtitle: 'Soft premium tee with a crisp collar hold.',
    price: 42,
    rating: 4.9,
    category: 'Apparel',
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80',
    description:
      'An everyday essential built with better fabric recovery, a cleaner neckline, and just enough structure to wear solo.',
    features: ['Premium jersey cotton', 'Pre-shrunk finish', 'Clean collar shape', 'Relaxed tailored cut'],
    tags: ['tee', 'cotton', 'basics', 'everyday'],
    isNew: false,
    reviews: [
      { author: 'Sam', rating: 5, comment: 'It nails the premium basic look.' },
      { author: 'Grace', rating: 5, comment: 'Soft without feeling flimsy.' },
    ],
  },
  {
    id: 'p7',
    slug: 'ridge-cap',
    title: 'Ridge Cap',
    subtitle: 'Structured everyday cap with tonal branding.',
    price: 36,
    rating: 4.5,
    category: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80',
    description:
      'A clean six-panel cap with a subtle curve, soft hand-feel, and low-key finish that works across seasons.',
    features: ['Cotton twill shell', 'Adjustable strap', 'Ventilated eyelets', 'Tonal embroidery'],
    tags: ['cap', 'hat', 'accessories', 'casual'],
    isNew: false,
    reviews: [
      { author: 'Maya', rating: 4, comment: 'Sharp silhouette and easy to pair with daily fits.' },
      { author: 'Chris', rating: 5, comment: 'The understated branding is a win.' },
    ],
  },
  {
    id: 'p8',
    slug: 'commuter-shell',
    title: 'Commuter Shell',
    subtitle: 'Lightweight outer layer built around movement.',
    price: 164,
    rating: 4.8,
    category: 'Outerwear',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    description:
      'An easy shell for unpredictable weather with matte texture, packable construction, and a smart city-ready profile.',
    features: ['Water-resistant shell', 'Packable hood', 'Two-way zip front', 'Ventilated back panel'],
    tags: ['jacket', 'outerwear', 'weather', 'commute'],
    isNew: true,
    reviews: [
      { author: 'Tariq', rating: 5, comment: 'Looks premium and handles light rain really well.' },
      { author: 'Ivy', rating: 4, comment: 'Perfect weight for travel and cool mornings.' },
    ],
  },
]

export const categories = [
  {
    name: 'Footwear',
    itemCount: 12,
    description: 'Breathable everyday shoes and low-profile comfort pieces.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Apparel',
    itemCount: 24,
    description: 'Soft essentials, polished layers, and warm-weather staples.',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Accessories',
    itemCount: 9,
    description: 'Travel-ready carry, caps, and everyday finishing details.',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Outerwear',
    itemCount: 6,
    description: 'Light layers designed for motion, weather, and smart utility.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
]

export const featuredCollections = [
  {
    label: 'Fast checkout',
    title: 'Fewer decisions. Better momentum.',
    description:
      'A homepage and cart built to reduce friction, surface confidence, and keep actions obvious.',
  },
  {
    label: 'Clean discovery',
    title: 'Search and browse without clutter.',
    description:
      'The catalog emphasizes whitespace, category clarity, and quick scanning over heavy chrome.',
  },
  {
    label: 'Kenya-friendly',
    title: 'Checkout designed for local trust.',
    description:
      'Stripe, PayPal, and M-Pesa are all accounted for in the experience roadmap from the start.',
  },
]

export const testimonials = [
  {
    quote:
      'The product layout feels premium and the path to checkout is surprisingly calm.',
    author: 'Sharon M.',
    role: 'Beta customer',
  },
  {
    quote:
      'Atlas makes browsing feel easy. I found what I wanted quickly and never felt lost.',
    author: 'Kelvin O.',
    role: 'Repeat shopper',
  },
  {
    quote:
      'The balance of large imagery and whitespace gives it real brand confidence.',
    author: 'Dina W.',
    role: 'Design reviewer',
  },
]

export const bestSellers = products.slice(0, 4)

export const mockOrders = [
  { id: 'AT-1024', customer: 'Naomi Ouma', total: 184, status: 'In transit' },
  { id: 'AT-1025', customer: 'Joseph Kimani', total: 128, status: 'Processing' },
  { id: 'AT-1026', customer: 'Linda Achieng', total: 236, status: 'Delivered' },
]

export function formatCurrency(amount) {
  // Currency formatting is centralized so price display stays consistent across pages.
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}
