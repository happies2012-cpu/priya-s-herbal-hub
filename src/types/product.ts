export interface NutritionFact {
  name: string;
  amount: string;
  dailyValue?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  images: string[];
  mainImage: string;
  benefits: string[];
  ingredients: string[];
  nutritionFacts: NutritionFact[];
  howToUse: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  servingsPerContainer: number;
  servingSize: string;
  variants?: string[];
  relatedProducts?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
}

export interface Address {
  fullName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  isDistributor: boolean;
  referralCode?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  story: string;
  weightLost?: string;
  duration?: string;
  productsUsed: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
