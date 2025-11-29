import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Protein Shake - Vanilla",
    slug: "premium-protein-shake-vanilla",
    category: "nutrition",
    type: "shake",
    price: 49.99,
    originalPrice: 59.99,
    description: "Delicious vanilla protein shake with 24g of protein per serving",
    longDescription: "Our Premium Protein Shake is formulated with high-quality protein to support muscle recovery, weight management, and overall wellness. Each serving delivers 24g of protein along with essential vitamins and minerals. Perfect for post-workout nutrition or as a meal replacement.",
    images: [
      "https://images.unsplash.com/photo-1622484211423-f609c35e2b38?w=800",
      "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800",
    ],
    mainImage: "https://images.unsplash.com/photo-1622484211423-f609c35e2b38?w=800",
    benefits: [
      "24g of high-quality protein per serving",
      "Supports muscle recovery and growth",
      "Helps maintain healthy weight",
      "Rich in essential vitamins and minerals",
      "Delicious vanilla flavor"
    ],
    ingredients: [
      "Protein Blend (Whey Protein, Soy Protein)",
      "Fructose",
      "Natural Flavors",
      "Vitamin & Mineral Blend",
      "Guar Gum",
      "Soy Lecithin"
    ],
    nutritionFacts: [
      { name: "Calories", amount: "200", dailyValue: "10%" },
      { name: "Total Fat", amount: "6g", dailyValue: "8%" },
      { name: "Saturated Fat", amount: "2g", dailyValue: "10%" },
      { name: "Cholesterol", amount: "30mg", dailyValue: "10%" },
      { name: "Sodium", amount: "180mg", dailyValue: "8%" },
      { name: "Total Carbohydrate", amount: "13g", dailyValue: "5%" },
      { name: "Dietary Fiber", amount: "1g", dailyValue: "4%" },
      { name: "Total Sugars", amount: "9g" },
      { name: "Protein", amount: "24g", dailyValue: "48%" },
      { name: "Vitamin D", amount: "5mcg", dailyValue: "25%" },
      { name: "Calcium", amount: "250mg", dailyValue: "19%" },
      { name: "Iron", amount: "3mg", dailyValue: "17%" },
    ],
    howToUse: "Mix 2 scoops (26g) with 250ml of cold water or milk. Shake well and enjoy. Can be consumed 1-2 times daily.",
    inStock: true,
    rating: 4.8,
    reviewCount: 234,
    servingsPerContainer: 30,
    servingSize: "2 scoops (26g)",
    relatedProducts: ["2", "3", "4"]
  },
  {
    id: "2",
    name: "Herbal Tea Concentrate - Lemon",
    slug: "herbal-tea-concentrate-lemon",
    category: "nutrition",
    type: "tea",
    price: 39.99,
    description: "Refreshing herbal tea concentrate with natural caffeine boost",
    longDescription: "Our Herbal Tea Concentrate provides a natural energy boost with antioxidants and botanicals. Made with green tea, orange pekoe, and natural lemon flavor for a refreshing and invigorating beverage.",
    images: [
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800",
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800",
    ],
    mainImage: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800",
    benefits: [
      "Natural energy boost",
      "Rich in antioxidants",
      "Supports metabolism",
      "Refreshing lemon flavor",
      "Low calorie beverage"
    ],
    ingredients: [
      "Green Tea Extract",
      "Orange Pekoe Extract",
      "Natural Lemon Flavor",
      "Caffeine",
      "Botanical Blend"
    ],
    nutritionFacts: [
      { name: "Calories", amount: "5" },
      { name: "Total Fat", amount: "0g", dailyValue: "0%" },
      { name: "Sodium", amount: "5mg", dailyValue: "0%" },
      { name: "Total Carbohydrate", amount: "1g", dailyValue: "0%" },
      { name: "Protein", amount: "0g" },
      { name: "Caffeine", amount: "85mg" },
    ],
    howToUse: "Mix 1/2 teaspoon with 250ml of hot or cold water. Stir well and enjoy. Can be consumed up to 3 times daily.",
    inStock: true,
    rating: 4.7,
    reviewCount: 189,
    servingsPerContainer: 100,
    servingSize: "1/2 teaspoon (0.5g)",
    relatedProducts: ["1", "3", "5"]
  },
  {
    id: "3",
    name: "Daily Multivitamin Complex",
    slug: "daily-multivitamin-complex",
    category: "nutrition",
    type: "supplement",
    price: 29.99,
    description: "Complete multivitamin formula with 24 essential nutrients",
    longDescription: "Support your daily nutritional needs with our comprehensive multivitamin complex. Contains 24 essential vitamins and minerals to fill nutritional gaps and support overall health and wellness.",
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    ],
    mainImage: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800",
    benefits: [
      "24 essential vitamins and minerals",
      "Supports immune system",
      "Promotes energy metabolism",
      "Antioxidant protection",
      "Easy-to-swallow tablets"
    ],
    ingredients: [
      "Vitamin A, C, D, E, K",
      "B-Complex Vitamins",
      "Calcium, Magnesium, Zinc",
      "Selenium, Chromium",
      "Biotin, Folic Acid"
    ],
    nutritionFacts: [
      { name: "Vitamin A", amount: "900mcg", dailyValue: "100%" },
      { name: "Vitamin C", amount: "90mg", dailyValue: "100%" },
      { name: "Vitamin D", amount: "20mcg", dailyValue: "100%" },
      { name: "Vitamin E", amount: "15mg", dailyValue: "100%" },
      { name: "B-Complex", amount: "Various", dailyValue: "100%" },
      { name: "Calcium", amount: "200mg", dailyValue: "15%" },
      { name: "Iron", amount: "8mg", dailyValue: "44%" },
      { name: "Zinc", amount: "11mg", dailyValue: "100%" },
    ],
    howToUse: "Take 1 tablet daily with food and water. Best taken in the morning with breakfast.",
    inStock: true,
    rating: 4.6,
    reviewCount: 312,
    servingsPerContainer: 60,
    servingSize: "1 tablet",
    relatedProducts: ["1", "2", "6"]
  },
  {
    id: "4",
    name: "Collagen Beauty Boost",
    slug: "collagen-beauty-boost",
    category: "skincare",
    type: "supplement",
    price: 44.99,
    description: "Hydrolyzed collagen supplement for skin, hair, and nails",
    longDescription: "Support your natural beauty from within with our premium collagen supplement. Contains hydrolyzed collagen peptides, biotin, and vitamin C for healthy skin, strong nails, and lustrous hair.",
    images: [
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
    ],
    mainImage: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800",
    benefits: [
      "Supports skin elasticity and hydration",
      "Strengthens hair and nails",
      "Contains hydrolyzed collagen peptides",
      "Enhanced with biotin and vitamin C",
      "Easy to mix powder"
    ],
    ingredients: [
      "Hydrolyzed Collagen Peptides",
      "Biotin",
      "Vitamin C",
      "Hyaluronic Acid",
      "Natural Flavors"
    ],
    nutritionFacts: [
      { name: "Calories", amount: "50" },
      { name: "Protein", amount: "11g", dailyValue: "22%" },
      { name: "Collagen Peptides", amount: "10g" },
      { name: "Vitamin C", amount: "60mg", dailyValue: "67%" },
      { name: "Biotin", amount: "300mcg", dailyValue: "1000%" },
      { name: "Hyaluronic Acid", amount: "50mg" },
    ],
    howToUse: "Mix 1 scoop with 250ml of water or your favorite beverage. Best taken daily in the morning.",
    inStock: true,
    rating: 4.9,
    reviewCount: 267,
    servingsPerContainer: 30,
    servingSize: "1 scoop (11g)",
    relatedProducts: ["5", "6", "7"]
  },
  {
    id: "5",
    name: "Aloe Vera Concentrate",
    slug: "aloe-vera-concentrate",
    category: "nutrition",
    type: "supplement",
    price: 34.99,
    description: "Pure aloe vera concentrate for digestive health",
    longDescription: "Support your digestive health with our premium aloe vera concentrate. Made from 100% pure aloe vera inner leaf gel for optimal digestive support and overall wellness.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800",
    ],
    mainImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800",
    benefits: [
      "Supports digestive health",
      "Made from pure aloe vera",
      "Soothing and refreshing",
      "Rich in nutrients",
      "Easy to consume"
    ],
    ingredients: [
      "Aloe Vera Inner Leaf Gel",
      "Citric Acid",
      "Natural Flavors",
      "Potassium Sorbate"
    ],
    nutritionFacts: [
      { name: "Calories", amount: "10" },
      { name: "Total Carbohydrate", amount: "2g", dailyValue: "1%" },
      { name: "Aloe Vera Gel", amount: "120ml" },
    ],
    howToUse: "Mix 3 tablespoons (45ml) with 120ml of water or juice. Drink 1-2 times daily before meals.",
    inStock: true,
    rating: 4.5,
    reviewCount: 145,
    servingsPerContainer: 33,
    servingSize: "3 tablespoons (45ml)",
    relatedProducts: ["2", "3", "6"]
  },
  {
    id: "6",
    name: "Omega-3 Fish Oil",
    slug: "omega-3-fish-oil",
    category: "nutrition",
    type: "supplement",
    price: 32.99,
    description: "Premium omega-3 supplement for heart and brain health",
    longDescription: "Support your cardiovascular and cognitive health with our high-quality omega-3 fish oil. Each softgel delivers essential EPA and DHA fatty acids from purified fish oil.",
    images: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    ],
    mainImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    benefits: [
      "Supports heart health",
      "Promotes brain function",
      "High in EPA and DHA",
      "Molecularly distilled for purity",
      "Easy-to-swallow softgels"
    ],
    ingredients: [
      "Fish Oil Concentrate",
      "EPA (Eicosapentaenoic Acid)",
      "DHA (Docosahexaenoic Acid)",
      "Vitamin E",
      "Gelatin, Glycerin"
    ],
    nutritionFacts: [
      { name: "Calories", amount: "10" },
      { name: "Total Fat", amount: "1g", dailyValue: "1%" },
      { name: "Omega-3 Fatty Acids", amount: "600mg" },
      { name: "EPA", amount: "360mg" },
      { name: "DHA", amount: "240mg" },
      { name: "Vitamin E", amount: "1mg", dailyValue: "7%" },
    ],
    howToUse: "Take 2 softgels daily with meals. Do not exceed recommended dosage.",
    inStock: true,
    rating: 4.7,
    reviewCount: 198,
    servingsPerContainer: 60,
    servingSize: "2 softgels",
    relatedProducts: ["3", "5", "1"]
  },
  {
    id: "7",
    name: "Hydrating Body Lotion",
    slug: "hydrating-body-lotion",
    category: "skincare",
    type: "bodycare",
    price: 24.99,
    description: "Nourishing body lotion with aloe and vitamin E",
    longDescription: "Deeply hydrate and nourish your skin with our luxurious body lotion. Enriched with aloe vera, vitamin E, and botanical extracts for soft, smooth, and radiant skin.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    ],
    mainImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    benefits: [
      "Deeply moisturizes skin",
      "Contains aloe vera and vitamin E",
      "Fast-absorbing formula",
      "Leaves skin soft and smooth",
      "Suitable for all skin types"
    ],
    ingredients: [
      "Aloe Vera",
      "Vitamin E",
      "Shea Butter",
      "Botanical Extracts",
      "Natural Fragrance"
    ],
    nutritionFacts: [],
    howToUse: "Apply generously to clean, dry skin. Massage gently until absorbed. Use daily for best results.",
    inStock: true,
    rating: 4.8,
    reviewCount: 221,
    servingsPerContainer: 0,
    servingSize: "As needed",
    relatedProducts: ["4", "8"]
  },
  {
    id: "8",
    name: "Radiant Skin Serum",
    slug: "radiant-skin-serum",
    category: "skincare",
    type: "skincare",
    price: 54.99,
    originalPrice: 64.99,
    description: "Advanced vitamin C serum for brighter, more youthful skin",
    longDescription: "Transform your complexion with our powerful vitamin C serum. Formulated with antioxidants and botanical extracts to brighten, firm, and protect your skin for a radiant, youthful glow.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
    ],
    mainImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
    benefits: [
      "Brightens skin tone",
      "Reduces fine lines and wrinkles",
      "High potency vitamin C",
      "Antioxidant protection",
      "Improves skin texture"
    ],
    ingredients: [
      "Vitamin C (L-Ascorbic Acid)",
      "Hyaluronic Acid",
      "Vitamin E",
      "Ferulic Acid",
      "Botanical Extracts"
    ],
    nutritionFacts: [],
    howToUse: "Apply 2-3 drops to clean face and neck. Gently massage until absorbed. Use morning and evening before moisturizer.",
    inStock: true,
    rating: 4.9,
    reviewCount: 312,
    servingsPerContainer: 0,
    servingSize: "2-3 drops",
    relatedProducts: ["7", "4"]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined)
    .slice(0, limit);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsByType = (type: string): Product[] => {
  return products.filter(p => p.type === type);
};
