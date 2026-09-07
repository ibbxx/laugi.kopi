export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  isPopular?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'signature-coffee',
    name: 'Signature Coffee',
    items: [
      { id: 'sc-1', name: 'Coffee Aren Hot', price: 26000 },
      { id: 'sc-2', name: 'Coffee Aren Ice', price: 23000 },
      { id: 'sc-3', name: 'Coffee Latte', price: 22000 },
      { id: 'sc-4', name: 'Coffee Pandan', price: 26000 },
      { id: 'sc-5', name: 'Coffee Banana', price: 26000 },
      { id: 'sc-6', name: 'Butterscotch', price: 29000 },
      { id: 'sc-7', name: 'Coffee Caramel', price: 29000 },
      { id: 'sc-8', name: 'Coffee Susu Basic (Hot)', price: 15000 },
      { id: 'sc-9', name: 'Coffee Susu Creamy', price: 22000 },
    ],
  },
  {
    id: 'tea-series',
    name: 'Tea Series',
    items: [
      { id: 'ts-1', name: 'Peach Mint Tea', price: 22000 },
      { id: 'ts-2', name: 'Lemon Tea', price: 18000 },
      { id: 'ts-3', name: 'Lychee Tea', price: 22000 },
      { id: 'ts-4', name: 'Strawberry Tea', price: 18000, image: '/images/menu/strawberry-tea.webp' },
    ],
  },
  {
    id: 'mocktail',
    name: 'Mocktail',
    items: [
      { id: 'mt-1', name: 'Strawberry', price: 22000, image: '/images/menu/mocktail-strawberry.webp' },
    ],
  },
  {
    id: 'americano-series',
    name: 'Americano Series',
    items: [
      { id: 'am-1', name: 'Coffee Americano Ice/Hot', price: 17000, image: '/images/menu/americano.webp' },
      { id: 'am-2', name: 'Coffee Americano Strawberry', price: 24000 },
      { id: 'am-3', name: 'Coffee Americano Peach', price: 24000 },
      { id: 'am-4', name: 'Coffee Americano Lychee', price: 24000, image: '/images/menu/americano-lychee.webp' },
      { id: 'am-5', name: 'Coffee Americano Orange', price: 24000 },
    ],
  },
  {
    id: 'milk-based',
    name: 'Milk Based',
    items: [
      { id: 'mb-1', name: 'Choco Banana', price: 25000 },
      { id: 'mb-2', name: 'Choco Caramel', price: 25000 },
      { id: 'mb-3', name: 'Choco Cheese', price: 25000 },
      { id: 'mb-4', name: 'Choco Ice', price: 23000 },
      { id: 'mb-5', name: 'UBE Laugi', price: 22000, image: '/images/menu/ube-laugi.webp' },
    ],
  },
  {
    id: 'matcha',
    name: 'Matcha',
    items: [
      { id: 'ma-1', name: 'Matcha Latte', price: 25000, image: '/images/menu/matcha-latte.webp' },
      { id: 'ma-2', name: 'Matcha UB', price: 29000, image: '/images/menu/matcha-ube.webp' },
      { id: 'ma-3', name: 'Matcha Strawberry', price: 29000 },
      { id: 'ma-4', name: 'Matcha Cheese', price: 29000, image: '/images/menu/matcha-cheese.webp' },
    ],
  },
  {
    id: 'snack',
    name: 'Snack',
    items: [
      { id: 'sn-1', name: 'Bakwan', price: 15000, image: '/images/menu/bakwan.webp' },
      { id: 'sn-2', name: 'Pisang Goreng Palm Sugar', price: 19000, image: '/images/menu/pisang-goreng-palm-sugar.webp' },
      { id: 'sn-3', name: 'Pisang Goreng', price: 17000, image: '/images/menu/pisang-goreng.webp' },
      { id: 'sn-4', name: 'Kentang Goreng', price: 15000 },
      { id: 'sn-5', name: 'Mix Plater', price: 27000, image: '/images/menu/mix-platter.webp' },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    items: [
      { id: 'fd-1', name: 'Nasi Ayam Goreng Laugi', price: 30000, image: '/images/menu/ayam-goreng-laugi.webp' },
      { id: 'fd-2', name: 'Nasi Goreng Laugi', price: 27000 },
      { id: 'fd-3', name: 'Rice Ball', price: 30000, image: '/images/menu/rice-bowl.webp' },
      { id: 'fd-4', name: 'Indomie Goreng Soto/Kaldu Ayam', price: 18000, image: '/images/menu/indomie-goreng.webp' },
    ],
  },
  {
    id: 'additional',
    name: 'Additional',
    items: [
      { id: 'ad-1', name: 'Nasi', price: 5000 },
      { id: 'ad-2', name: 'Air Mineral', price: 5000 },
      { id: 'ad-3', name: 'Telur', price: 4000 },
    ],
  },
];

// Helper to format currency
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
