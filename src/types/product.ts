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
  relatedProducts?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
