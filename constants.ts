import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "The Royal Obsidian Tuxedo",
    price: 65000,
    category: "Suits",
    image: "https://picsum.photos/id/1059/800/1000",
    description: "A masterpiece of tailoring, the Royal Obsidian Tuxedo features a slim-fit silhouette crafted from premium Italian wool with satin lapels. Perfect for galas and black-tie events.",
    sizes: ["46", "48", "50", "52", "54"],
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Gilded Weave Dress Shirt",
    price: 12500,
    category: "Shirts",
    image: "https://picsum.photos/id/1005/800/1000",
    description: "Experience unmatched comfort with our Gilded Weave Dress Shirt. Made from 100% Egyptian cotton, it offers a crisp look that stays fresh all day.",
    sizes: ["S", "M", "L", "XL"],
    isNewArrival: true,
  },
  {
    id: 3,
    name: "Midnight Oxford Shoes",
    price: 22000,
    category: "Shoes",
    image: "https://picsum.photos/id/103/800/1000",
    description: "Hand-polished leather Oxfords that redefine elegance. The Midnight Oxford is designed for the modern gentleman who values both style and durability.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Golden Hour Cufflinks",
    price: 4500,
    category: "Accessories",
    image: "https://picsum.photos/id/106/800/1000",
    description: "Add a touch of luxury to your cuffs with these gold-plated cufflinks. Minimalist yet striking design.",
    sizes: ["One Size"],
  },
  {
    id: 5,
    name: "Charcoal Pinstripe Suit",
    price: 58000,
    category: "Suits",
    image: "https://picsum.photos/id/1006/800/1000",
    description: "Power dressing at its finest. The Charcoal Pinstripe Suit commands respect in the boardroom and elegance at dinner.",
    sizes: ["46", "48", "50", "52", "54"],
    isNewArrival: true,
  },
  {
    id: 6,
    name: "Silk Noir Bow Tie",
    price: 3500,
    category: "Accessories",
    image: "https://picsum.photos/id/1062/800/1000",
    description: "100% Mulberry silk bow tie in deep black. The essential accessory for a complete formal look.",
    sizes: ["One Size"],
  },
  {
    id: 7,
    name: "Cognac Leather Loafers",
    price: 18500,
    category: "Shoes",
    image: "https://picsum.photos/id/1080/800/1000",
    description: "Versatile and stylish, these loafers bridge the gap between formal and smart-casual. Premium leather construction.",
    sizes: ["40", "41", "42", "43", "44"],
  },
  {
    id: 8,
    name: "Ivory Formal Shirt",
    price: 11000,
    category: "Shirts",
    image: "https://picsum.photos/id/1060/800/1000",
    description: "A softer alternative to stark white, this ivory shirt pairs beautifully with warm-toned suits and gold accessories.",
    sizes: ["S", "M", "L", "XL"],
  }
];

export const CATEGORIES = ['All', 'Suits', 'Shirts', 'Shoes', 'Accessories'];

export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  twitter: '#',
  whatsapp: 'https://wa.me/1234567890' 
};

export const WILAYAS = [
  "01 - Adrar", "02 - Chlef", "03 - Laghouat", "04 - Oum El Bouaghi", "05 - Batna", 
  "06 - Béjaïa", "07 - Biskra", "08 - Béchar", "09 - Blida", "10 - Bouira", 
  "11 - Tamanrasset", "12 - Tébessa", "13 - Tlemcen", "14 - Tiaret", "15 - Tizi Ouzou", 
  "16 - Algiers", "17 - Djelfa", "18 - Jijel", "19 - Sétif", "20 - Saïda", 
  "21 - Skikda", "22 - Sidi Bel Abbès", "23 - Annaba", "24 - Guelma", "25 - Constantine", 
  "26 - Médéa", "27 - Mostaganem", "28 - M'Sila", "29 - Mascara", "30 - Ouargla", 
  "31 - Oran", "32 - El Bayadh", "33 - Illizi", "34 - Bordj Bou Arréridj", "35 - Boumerdès", 
  "36 - El Tarf", "37 - Tindouf", "38 - Tissemsilt", "39 - El Oued", "40 - Khenchela", 
  "41 - Souk Ahras", "42 - Tipaza", "43 - Mila", "44 - Aïn Defla", "45 - Naâma", 
  "46 - Aïn Témouchent", "47 - Ghardaïa", "48 - Relizane", "49 - Timimoun", 
  "50 - Bordj Badji Mokhtar", "51 - Ouled Djellal", "52 - Béni Abbès", "53 - In Salah", 
  "54 - In Guezzam", "55 - Touggourt", "56 - Djanet", "57 - El M'Ghair", "58 - El Meniaa"
];