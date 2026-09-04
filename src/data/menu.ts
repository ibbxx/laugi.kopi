export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'americano-series',
    name: 'Americano Series',
    items: [
      { id: 'am-1', name: 'Coffee Americano Ice/Hot', price: 17000 },
      { id: 'am-2', name: 'Coffee Americano Strawberry', price: 24000 },
      { id: 'am-3', name: 'Coffee Americano Peach', price: 24000 },
      { id: 'am-4', name: 'Coffee Americano Lychee', price: 26000 },
      { id: 'am-5', name: 'Coffee Americano Orange', price: 26000 },
    ],
  },
  {
    id: 'milk-based',
    name: 'Milk Based',
    items: [
      { id: 'mb-1', name: 'Choco Banana', price: 25000 },
      { id: 'mb-2', name: 'Choco Caramel', price: 25000 },
      { id: 'mb-3', name: 'Choco Cheese', price: 25000 },
      { id: 'mb-4', name: 'Choco Ice', price: 25000 },
      { id: 'mb-5', name: 'UBE Laugi', price: 22000 },
    ],
  },
  {
    id: 'matcha',
    name: 'Matcha',
    items: [
      { id: 'ma-1', name: 'Matcha Latte', price: 25000 },
      { id: 'ma-2', name: 'Matcha UB', price: 29000 },
      { id: 'ma-3', name: 'Matcha Strawberry', price: 29000 },
      { id: 'ma-4', name: 'Matcha Cheese', price: 29000 },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    items: [
      { id: 'fd-1', name: 'Nasi Ayam Goreng Laugi', price: 30000 },
      { id: 'fd-2', name: 'Nasi Goreng Laugi', price: 27000 },
      { id: 'fd-3', name: 'Rice Ball', price: 30000 },
      { id: 'fd-4', name: 'Indomie Goreng Soto/Kaldu Ayam', price: 18000 },
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
