import { Product } from "@/types/product";

export const products: Product[] = [
  // SHAKES & MEAL REPLACEMENTS
  {
    id: "1",
    name: "Formula 1 Nutritional Shake Mix - Vanilla",
    slug: "formula-1-shake-vanilla",
    category: "weight-management",
    type: "shake",
    price: 2500,
    originalPrice: 2800,
    description: "Healthy meal replacement shake with balanced nutrition, protein, fiber & essential nutrients.",
    longDescription: "Formula 1 Nutritional Shake Mix is a delicious and nutritious meal replacement shake that provides balanced nutrition with protein, fiber, and up to 21 essential vitamins and minerals. Perfect for supporting your weight management goals while keeping you satisfied and energized throughout the day. Each serving delivers high-quality soy and whey protein blend to support lean muscle mass.",
    images: [
      "https://images.unsplash.com/photo-1622484211423-f609c35e2b38?w=800",
      "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1622484211423-f609c35e2b38?w=800",
    benefits: [
      "Provides balanced nutrition with 17g protein per serving",
      "Contains up to 21 vitamins and minerals",
      "Rich in fiber for digestive health",
      "Supports healthy weight management",
      "Delicious vanilla flavor loved by customers"
    ],
    ingredients: ["Soy Protein Isolate", "Fructose", "Whey Protein Concentrate", "Cellulose Powder", "Honey Powder", "Calcium Caseinate", "Oat Fiber", "Canola Oil", "Vitamin & Mineral Blend"],
    nutritionFacts: [
      { name: "Calories", amount: "220 kcal", dailyValue: "11%" },
      { name: "Total Fat", amount: "3g", dailyValue: "4%" },
      { name: "Saturated Fat", amount: "1g", dailyValue: "5%" },
      { name: "Trans Fat", amount: "0g" },
      { name: "Cholesterol", amount: "5mg", dailyValue: "2%" },
      { name: "Sodium", amount: "210mg", dailyValue: "9%" },
      { name: "Total Carbohydrate", amount: "21g", dailyValue: "8%" },
      { name: "Dietary Fiber", amount: "3g", dailyValue: "11%" },
      { name: "Total Sugars", amount: "9g" },
      { name: "Protein", amount: "17g", dailyValue: "34%" },
      { name: "Vitamin A", amount: "525mcg", dailyValue: "58%" },
      { name: "Vitamin C", amount: "54mg", dailyValue: "60%" },
      { name: "Vitamin D", amount: "5mcg", dailyValue: "25%" },
      { name: "Calcium", amount: "350mg", dailyValue: "27%" },
      { name: "Iron", amount: "6mg", dailyValue: "33%" }
    ],
    howToUse: "Blend 2 scoops (26g) of Formula 1 with 250ml of cold low-fat milk or soy milk. For best results, enjoy as a delicious breakfast or lunch replacement. Add fresh fruits or ice for variety.",
    inStock: true,
    rating: 4.9,
    reviewCount: 1247,
    servingsPerContainer: 30,
    servingSize: "2 scoops (26g)",
    variants: ["Vanilla", "Chocolate", "Strawberry", "Cookies & Cream", "Mango", "Kulfi"],
    relatedProducts: ["2", "3", "4", "5"]
  },
  {
    id: "2",
    name: "Formula 1 Nutritional Shake Mix - Chocolate",
    slug: "formula-1-shake-chocolate",
    category: "weight-management",
    type: "shake",
    price: 2500,
    originalPrice: 2800,
    description: "Rich chocolate flavored meal replacement with 17g protein and essential nutrients.",
    longDescription: "Indulge in the rich, satisfying taste of chocolate while nourishing your body with Formula 1 Chocolate Shake Mix. This scientifically formulated meal replacement provides complete balanced nutrition to support your weight management journey.",
    images: [
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
      "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    benefits: [
      "Delicious Dutch cocoa chocolate flavor",
      "17g of quality protein per serving",
      "Low glycemic index for sustained energy",
      "Contains antioxidant vitamins C & E",
      "Supports muscle retention during weight loss"
    ],
    ingredients: ["Soy Protein Isolate", "Dutch Process Cocoa", "Fructose", "Whey Protein Concentrate", "Cellulose Powder", "Calcium Caseinate", "Vitamin & Mineral Blend"],
    nutritionFacts: [
      { name: "Calories", amount: "220 kcal", dailyValue: "11%" },
      { name: "Protein", amount: "17g", dailyValue: "34%" },
      { name: "Total Carbohydrate", amount: "21g", dailyValue: "8%" },
      { name: "Dietary Fiber", amount: "3g", dailyValue: "11%" },
      { name: "Total Fat", amount: "3g", dailyValue: "4%" }
    ],
    howToUse: "Blend 2 scoops with 250ml milk. Add banana or peanut butter for extra nutrition.",
    inStock: true,
    rating: 4.8,
    reviewCount: 982,
    servingsPerContainer: 30,
    servingSize: "2 scoops (26g)",
    variants: ["Chocolate"],
    relatedProducts: ["1", "3", "4"]
  },
  {
    id: "3",
    name: "Protein Drink Mix - Vanilla",
    slug: "protein-drink-mix-vanilla",
    category: "protein",
    type: "shake",
    price: 1800,
    description: "Additional protein boost with 15g whey and soy protein blend per serving.",
    longDescription: "Enhance your daily protein intake with Protein Drink Mix. This versatile protein powder can be added to your Formula 1 shake or consumed on its own to support muscle growth and maintenance.",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800",
    benefits: [
      "15g protein per serving",
      "Whey and soy protein blend",
      "Supports muscle growth",
      "Low fat and carbohydrate",
      "Great vanilla taste"
    ],
    ingredients: ["Whey Protein Concentrate", "Soy Protein Isolate", "Natural Vanilla Flavor", "Lecithin"],
    nutritionFacts: [
      { name: "Calories", amount: "80 kcal", dailyValue: "4%" },
      { name: "Protein", amount: "15g", dailyValue: "30%" },
      { name: "Total Fat", amount: "1g", dailyValue: "1%" },
      { name: "Carbohydrate", amount: "2g", dailyValue: "1%" }
    ],
    howToUse: "Add 1 scoop to your Formula 1 shake or mix with 250ml water/milk.",
    inStock: true,
    rating: 4.7,
    reviewCount: 567,
    servingsPerContainer: 30,
    servingSize: "1 scoop (21g)",
    relatedProducts: ["1", "2", "4"]
  },
  // TEAS & BEVERAGES
  {
    id: "4",
    name: "Herbal Tea Concentrate - Lemon",
    slug: "herbal-tea-concentrate-lemon",
    category: "energy",
    type: "tea",
    price: 1950,
    description: "Refreshing instant tea with natural caffeine for energy boost and metabolism support.",
    longDescription: "Kickstart your day with Herbal Tea Concentrate - a refreshing, low-calorie beverage made from green tea, orange pekoe, and botanicals. Contains natural caffeine for an energy boost without the crash.",
    images: [
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800",
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800",
    benefits: [
      "Natural energy boost with 85mg caffeine",
      "Rich in antioxidants",
      "Supports thermogenesis and metabolism",
      "Only 5 calories per serving",
      "Refreshing lemon flavor"
    ],
    ingredients: ["Green Tea Extract", "Orange Pekoe Extract", "Natural Lemon Flavor", "Hibiscus Extract", "Cardamom Seed Extract"],
    nutritionFacts: [
      { name: "Calories", amount: "5 kcal" },
      { name: "Caffeine", amount: "85mg" },
      { name: "Total Carbohydrate", amount: "1g", dailyValue: "0%" }
    ],
    howToUse: "Mix 1/2 teaspoon (1.7g) with 250ml hot or cold water. Enjoy up to 3 times daily.",
    inStock: true,
    rating: 4.8,
    reviewCount: 892,
    servingsPerContainer: 100,
    servingSize: "1/2 teaspoon (1.7g)",
    variants: ["Lemon", "Original", "Peach", "Raspberry"],
    relatedProducts: ["5", "6", "1"]
  },
  {
    id: "5",
    name: "Herbal Aloe Concentrate - Mango",
    slug: "herbal-aloe-concentrate-mango",
    category: "digestive",
    type: "beverage",
    price: 1650,
    description: "Soothing aloe vera drink with mango flavor for digestive comfort and hydration.",
    longDescription: "Support your digestive system with Herbal Aloe Concentrate. Made from premium aloe vera gel, this refreshing drink helps soothe the digestive tract and promotes nutrient absorption.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800",
    benefits: [
      "Soothes the digestive system",
      "Supports nutrient absorption",
      "Premium aloe vera gel",
      "Delicious mango flavor",
      "Promotes hydration"
    ],
    ingredients: ["Aloe Vera Gel", "Natural Mango Flavor", "Citric Acid", "Potassium Sorbate"],
    nutritionFacts: [
      { name: "Calories", amount: "5 kcal" },
      { name: "Total Carbohydrate", amount: "1g" },
      { name: "Aloe Vera Gel", amount: "40%" }
    ],
    howToUse: "Mix 3 capfuls (45ml) with 120ml water. Drink 2-3 times daily.",
    inStock: true,
    rating: 4.6,
    reviewCount: 445,
    servingsPerContainer: 32,
    servingSize: "3 capfuls (45ml)",
    variants: ["Mango", "Original", "Cranberry"],
    relatedProducts: ["4", "6", "7"]
  },
  {
    id: "6",
    name: "Instant Herbal Beverage with Tea Extracts",
    slug: "instant-herbal-beverage",
    category: "energy",
    type: "tea",
    price: 1450,
    description: "Aromatic blend of green tea, black tea, and cardamom for daily refreshment.",
    longDescription: "Enjoy the traditional taste of aromatic tea with modern nutrition benefits. This instant beverage combines green tea, black tea, and cardamom for a refreshing drink that can be enjoyed hot or cold.",
    images: [
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800",
    benefits: [
      "Aromatic cardamom flavor",
      "Contains antioxidants",
      "Quick and easy preparation",
      "Refreshing hot or cold",
      "Low calorie beverage"
    ],
    ingredients: ["Green Tea Extract", "Black Tea Extract", "Cardamom Extract", "Natural Flavors"],
    nutritionFacts: [
      { name: "Calories", amount: "6 kcal" },
      { name: "Caffeine", amount: "40mg" }
    ],
    howToUse: "Mix 1g with 200ml hot or cold water. Enjoy anytime.",
    inStock: true,
    rating: 4.5,
    reviewCount: 312,
    servingsPerContainer: 50,
    servingSize: "1g",
    relatedProducts: ["4", "5"]
  },
  // VITAMINS & SUPPLEMENTS
  {
    id: "7",
    name: "Formula 2 Multivitamin Complex",
    slug: "formula-2-multivitamin",
    category: "daily-nutrition",
    type: "supplement",
    price: 1350,
    description: "Complete daily multivitamin with 24 essential vitamins and minerals.",
    longDescription: "Fill nutritional gaps in your diet with Formula 2 Multivitamin Complex. This comprehensive formula provides 24 essential vitamins and minerals to support overall health and vitality.",
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800",
    benefits: [
      "24 essential vitamins and minerals",
      "Supports immune function",
      "Promotes bone health",
      "Antioxidant protection",
      "Supports energy metabolism"
    ],
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D3", "Vitamin E", "B-Complex", "Calcium", "Magnesium", "Zinc", "Selenium", "Chromium"],
    nutritionFacts: [
      { name: "Vitamin A", amount: "900mcg", dailyValue: "100%" },
      { name: "Vitamin C", amount: "90mg", dailyValue: "100%" },
      { name: "Vitamin D", amount: "20mcg", dailyValue: "100%" },
      { name: "Vitamin E", amount: "15mg", dailyValue: "100%" },
      { name: "Calcium", amount: "200mg", dailyValue: "15%" },
      { name: "Iron", amount: "8mg", dailyValue: "44%" },
      { name: "Zinc", amount: "11mg", dailyValue: "100%" }
    ],
    howToUse: "Take 1 tablet daily with a meal.",
    inStock: true,
    rating: 4.7,
    reviewCount: 678,
    servingsPerContainer: 90,
    servingSize: "1 tablet",
    relatedProducts: ["8", "9", "10"]
  },
  {
    id: "8",
    name: "Cell Activator",
    slug: "cell-activator",
    category: "daily-nutrition",
    type: "supplement",
    price: 1550,
    description: "Advanced cellular nutrition with alpha-lipoic acid and botanical extracts.",
    longDescription: "Support cellular nutrition and antioxidant activity with Cell Activator. This advanced formula contains alpha-lipoic acid, aloe vera, and pine bark extract to support nutrient absorption at the cellular level.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    benefits: [
      "Supports nutrient absorption",
      "Contains alpha-lipoic acid",
      "Antioxidant protection",
      "Supports cellular energy",
      "Contains botanical extracts"
    ],
    ingredients: ["Alpha-Lipoic Acid", "Aloe Vera Powder", "Pine Bark Extract", "Cayenne", "Rhodiola Extract"],
    nutritionFacts: [
      { name: "Alpha-Lipoic Acid", amount: "25mg" },
      { name: "Aloe Vera", amount: "100mg" },
      { name: "Pine Bark Extract", amount: "10mg" }
    ],
    howToUse: "Take 1 capsule three times daily with meals.",
    inStock: true,
    rating: 4.6,
    reviewCount: 389,
    servingsPerContainer: 90,
    servingSize: "1 capsule",
    relatedProducts: ["7", "9", "10"]
  },
  {
    id: "9",
    name: "Herbalifeline Max Omega-3",
    slug: "herbalifeline-omega3",
    category: "heart-health",
    type: "supplement",
    price: 2200,
    description: "Premium omega-3 fatty acids EPA and DHA for heart and brain health.",
    longDescription: "Support your cardiovascular and cognitive health with Herbalifeline Max. This premium omega-3 supplement provides EPA and DHA from sustainably sourced fish oil, plus essential oils of thyme and peppermint.",
    images: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    benefits: [
      "Supports heart health",
      "Promotes brain function",
      "Sustainably sourced fish oil",
      "Contains EPA and DHA",
      "No fishy aftertaste"
    ],
    ingredients: ["Fish Oil Concentrate", "EPA", "DHA", "Vitamin E", "Thyme Oil", "Peppermint Oil"],
    nutritionFacts: [
      { name: "Omega-3 Fatty Acids", amount: "600mg" },
      { name: "EPA", amount: "360mg" },
      { name: "DHA", amount: "240mg" },
      { name: "Vitamin E", amount: "6.7mg", dailyValue: "45%" }
    ],
    howToUse: "Take 2 softgels daily with meals.",
    inStock: true,
    rating: 4.8,
    reviewCount: 534,
    servingsPerContainer: 60,
    servingSize: "2 softgels",
    relatedProducts: ["7", "8", "10"]
  },
  {
    id: "10",
    name: "Xtra-Cal Advanced",
    slug: "xtra-cal-calcium",
    category: "bone-health",
    type: "supplement",
    price: 950,
    description: "Calcium and vitamin D supplement for strong bones and teeth.",
    longDescription: "Support strong bones and teeth with Xtra-Cal Advanced. This formula combines calcium with vitamin D and magnesium for optimal absorption and bone health support.",
    images: [
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800",
    benefits: [
      "Supports bone density",
      "Contains vitamin D for absorption",
      "Includes magnesium",
      "Supports teeth health",
      "Easy to swallow tablets"
    ],
    ingredients: ["Calcium Carbonate", "Calcium Citrate", "Vitamin D3", "Magnesium", "Zinc"],
    nutritionFacts: [
      { name: "Calcium", amount: "500mg", dailyValue: "38%" },
      { name: "Vitamin D", amount: "5mcg", dailyValue: "25%" },
      { name: "Magnesium", amount: "75mg", dailyValue: "18%" }
    ],
    howToUse: "Take 1 tablet twice daily with meals.",
    inStock: true,
    rating: 4.5,
    reviewCount: 287,
    servingsPerContainer: 120,
    servingSize: "1 tablet",
    relatedProducts: ["7", "8", "9"]
  },
  {
    id: "11",
    name: "Niteworks",
    slug: "niteworks",
    category: "heart-health",
    type: "supplement",
    price: 4500,
    originalPrice: 5000,
    description: "Nighttime heart health formula with L-arginine and L-citrulline.",
    longDescription: "Support your cardiovascular system while you sleep with Niteworks. This Nobel Prize-winning formula promotes nitric oxide production for healthy blood flow and heart function.",
    images: [
      "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=800",
    benefits: [
      "Supports nitric oxide production",
      "Promotes healthy blood flow",
      "Nighttime cardiovascular support",
      "Contains L-arginine and L-citrulline",
      "Refreshing lemon flavor"
    ],
    ingredients: ["L-Arginine", "L-Citrulline", "Vitamin C", "Vitamin E", "Folic Acid", "Lemon Flavor"],
    nutritionFacts: [
      { name: "L-Arginine", amount: "4500mg" },
      { name: "L-Citrulline", amount: "150mg" },
      { name: "Vitamin C", amount: "60mg", dailyValue: "67%" },
      { name: "Vitamin E", amount: "30mg", dailyValue: "200%" }
    ],
    howToUse: "Mix 1 scoop (10g) with 250ml water before bedtime.",
    inStock: true,
    rating: 4.7,
    reviewCount: 423,
    servingsPerContainer: 30,
    servingSize: "1 scoop (10g)",
    relatedProducts: ["9", "7", "8"]
  },
  // SPORTS NUTRITION
  {
    id: "12",
    name: "Herbalife24 Formula 1 Sport",
    slug: "h24-formula1-sport",
    category: "sports",
    type: "shake",
    price: 3200,
    description: "NSF Certified sports protein shake for athletes with 20g protein.",
    longDescription: "Designed specifically for athletes, Herbalife24 Formula 1 Sport provides complete nutrition with 20g of high-quality protein, complex carbohydrates, and essential vitamins and minerals. NSF Certified for Sport.",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    benefits: [
      "NSF Certified for Sport",
      "20g protein per serving",
      "Complex carbohydrates",
      "No artificial flavors",
      "Informed-Sport certified"
    ],
    ingredients: ["Milk Protein Isolate", "Whey Protein Concentrate", "Oat Flour", "Natural Flavors", "Vitamin & Mineral Blend"],
    nutritionFacts: [
      { name: "Calories", amount: "250 kcal" },
      { name: "Protein", amount: "20g", dailyValue: "40%" },
      { name: "Carbohydrate", amount: "35g", dailyValue: "13%" },
      { name: "Fat", amount: "4g", dailyValue: "5%" }
    ],
    howToUse: "Blend 2 scoops with 300ml water or milk. Use as pre/post workout meal.",
    inStock: true,
    rating: 4.9,
    reviewCount: 356,
    servingsPerContainer: 20,
    servingSize: "2 scoops (52g)",
    variants: ["Vanilla", "Chocolate"],
    relatedProducts: ["13", "14", "15"]
  },
  {
    id: "13",
    name: "Herbalife24 Rebuild Strength",
    slug: "h24-rebuild-strength",
    category: "sports",
    type: "protein",
    price: 2800,
    description: "Post-workout recovery shake with 25g protein and iron for muscle recovery.",
    longDescription: "Accelerate your post-workout recovery with Rebuild Strength. This powerful formula delivers 25g of protein plus iron for muscle repair and growth after intense training.",
    images: [
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800",
    benefits: [
      "25g tri-blend protein",
      "Contains iron for oxygen delivery",
      "NSF Certified for Sport",
      "Fast and slow release proteins",
      "Supports muscle recovery"
    ],
    ingredients: ["Whey Protein Isolate", "Micellar Casein", "Whey Protein Concentrate", "Iron", "L-Glutamine"],
    nutritionFacts: [
      { name: "Calories", amount: "190 kcal" },
      { name: "Protein", amount: "25g", dailyValue: "50%" },
      { name: "Iron", amount: "8mg", dailyValue: "44%" },
      { name: "L-Glutamine", amount: "2g" }
    ],
    howToUse: "Mix 2 scoops with 300ml cold water within 30 minutes post-workout.",
    inStock: true,
    rating: 4.8,
    reviewCount: 278,
    servingsPerContainer: 20,
    servingSize: "2 scoops (45g)",
    relatedProducts: ["12", "14", "15"]
  },
  {
    id: "14",
    name: "Herbalife24 Hydrate",
    slug: "h24-hydrate",
    category: "sports",
    type: "beverage",
    price: 1200,
    description: "Low-calorie electrolyte drink for optimal hydration during activity.",
    longDescription: "Stay hydrated during workouts with Herbalife24 Hydrate. This refreshing, low-calorie electrolyte drink helps replace fluids lost during exercise without excess sugar or calories.",
    images: [
      "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?w=800",
    benefits: [
      "Essential electrolyte replacement",
      "Only 15 calories per serving",
      "B vitamins for energy",
      "NSF Certified for Sport",
      "Refreshing orange flavor"
    ],
    ingredients: ["Potassium", "Calcium", "Magnesium", "Sodium", "B Vitamins", "Natural Orange Flavor"],
    nutritionFacts: [
      { name: "Calories", amount: "15 kcal" },
      { name: "Potassium", amount: "200mg", dailyValue: "4%" },
      { name: "Calcium", amount: "50mg", dailyValue: "4%" },
      { name: "Sodium", amount: "110mg", dailyValue: "5%" }
    ],
    howToUse: "Mix 1 scoop with 500ml water. Drink during exercise.",
    inStock: true,
    rating: 4.6,
    reviewCount: 234,
    servingsPerContainer: 20,
    servingSize: "1 scoop (5.3g)",
    relatedProducts: ["12", "13", "15"]
  },
  {
    id: "15",
    name: "Herbalife24 CR7 Drive",
    slug: "h24-cr7-drive",
    category: "sports",
    type: "beverage",
    price: 1500,
    description: "Performance carbohydrate-electrolyte drink developed with Cristiano Ronaldo.",
    longDescription: "Fuel your performance with CR7 Drive, developed in partnership with elite athlete Cristiano Ronaldo. This carbohydrate-electrolyte drink helps sustain activity during exercise.",
    images: [
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800",
    benefits: [
      "Developed with Cristiano Ronaldo",
      "Carbohydrate for sustained energy",
      "Essential electrolytes",
      "NSF Certified for Sport",
      "Refreshing acai berry flavor"
    ],
    ingredients: ["Maltodextrin", "Fructose", "Sodium Citrate", "Potassium Chloride", "Acai Berry Flavor", "Vitamin B6"],
    nutritionFacts: [
      { name: "Calories", amount: "45 kcal" },
      { name: "Carbohydrate", amount: "11g", dailyValue: "4%" },
      { name: "Sodium", amount: "250mg", dailyValue: "11%" },
      { name: "Potassium", amount: "90mg", dailyValue: "2%" }
    ],
    howToUse: "Mix 1 sachet with 500ml water. Consume before and during exercise.",
    inStock: true,
    rating: 4.7,
    reviewCount: 456,
    servingsPerContainer: 20,
    servingSize: "1 sachet (27g)",
    relatedProducts: ["12", "13", "14"]
  },
  // WEIGHT MANAGEMENT
  {
    id: "16",
    name: "Total Control",
    slug: "total-control",
    category: "weight-management",
    type: "supplement",
    price: 1750,
    description: "Metabolism booster with green tea, ginger, and caffeine for energy.",
    longDescription: "Support your weight management goals with Total Control. This powerful blend of green tea, ginger, and caffeine helps boost metabolism and provides natural energy throughout the day.",
    images: [
      "https://images.unsplash.com/photo-1556228578-dd539282b964?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1556228578-dd539282b964?w=800",
    benefits: [
      "Boosts metabolism",
      "Contains green tea extract",
      "Provides natural energy",
      "Supports thermogenesis",
      "Contains ginger root"
    ],
    ingredients: ["Green Tea Extract", "Caffeine", "Ginger Root", "Chromium", "Black Pepper Extract"],
    nutritionFacts: [
      { name: "Green Tea Extract", amount: "250mg" },
      { name: "Caffeine", amount: "82mg" },
      { name: "Ginger Root", amount: "100mg" }
    ],
    howToUse: "Take 1 tablet three times daily with meals.",
    inStock: true,
    rating: 4.5,
    reviewCount: 367,
    servingsPerContainer: 90,
    servingSize: "1 tablet",
    relatedProducts: ["17", "1", "4"]
  },
  {
    id: "17",
    name: "Cell-U-Loss",
    slug: "cell-u-loss",
    category: "weight-management",
    type: "supplement",
    price: 1200,
    description: "Herbal blend with corn silk for healthy fluid balance.",
    longDescription: "Support healthy fluid balance with Cell-U-Loss. This herbal supplement combines corn silk extract with other botanicals to help maintain electrolyte balance and reduce water retention.",
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800",
    benefits: [
      "Supports healthy fluid balance",
      "Contains corn silk extract",
      "Herbal botanical blend",
      "Supports electrolyte balance",
      "Easy to take tablets"
    ],
    ingredients: ["Corn Silk Extract", "Dandelion Leaf", "Parsley", "Asparagus", "Potassium"],
    nutritionFacts: [
      { name: "Corn Silk Extract", amount: "150mg" },
      { name: "Potassium", amount: "50mg", dailyValue: "1%" }
    ],
    howToUse: "Take 1 tablet three times daily with water.",
    inStock: true,
    rating: 4.4,
    reviewCount: 234,
    servingsPerContainer: 90,
    servingSize: "1 tablet",
    relatedProducts: ["16", "1", "18"]
  },
  {
    id: "18",
    name: "Snack Defense",
    slug: "snack-defense",
    category: "weight-management",
    type: "supplement",
    price: 1600,
    description: "Gymnema sylvestre supplement to help reduce sugar cravings.",
    longDescription: "Control your cravings with Snack Defense. This unique formula contains Gymnema sylvestre, an herb traditionally used to support healthy blood sugar levels and reduce sweet cravings.",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    benefits: [
      "Helps reduce sugar cravings",
      "Contains Gymnema sylvestre",
      "Supports healthy blood sugar",
      "All-natural herbal formula",
      "Supports weight management"
    ],
    ingredients: ["Gymnema Sylvestre Extract", "Chromium", "Cinnamon Extract"],
    nutritionFacts: [
      { name: "Gymnema Sylvestre", amount: "400mg" },
      { name: "Chromium", amount: "200mcg", dailyValue: "571%" }
    ],
    howToUse: "Chew 1-2 tablets when craving sweets.",
    inStock: true,
    rating: 4.3,
    reviewCount: 198,
    servingsPerContainer: 60,
    servingSize: "1-2 tablets",
    relatedProducts: ["16", "17", "1"]
  },
  // SKIN CARE
  {
    id: "19",
    name: "Herbal Aloe Soothing Gel",
    slug: "herbal-aloe-gel",
    category: "skincare",
    type: "skincare",
    price: 1100,
    description: "Cooling aloe vera gel for skin hydration and soothing relief.",
    longDescription: "Soothe and hydrate your skin with Herbal Aloe Soothing Gel. This lightweight, fast-absorbing formula contains premium aloe vera to calm irritation and provide lasting moisture.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    benefits: [
      "Soothes and cools skin",
      "Premium aloe vera formula",
      "Fast-absorbing",
      "Provides lasting moisture",
      "Suitable for all skin types"
    ],
    ingredients: ["Aloe Vera Gel", "Allantoin", "Vitamin E", "Chamomile Extract"],
    nutritionFacts: [],
    howToUse: "Apply liberally to skin as needed. Ideal after sun exposure or shaving.",
    inStock: true,
    rating: 4.7,
    reviewCount: 567,
    servingsPerContainer: 0,
    servingSize: "As needed",
    relatedProducts: ["20", "21", "22"]
  },
  {
    id: "20",
    name: "SKIN Energizing Eye Cream",
    slug: "skin-eye-cream",
    category: "skincare",
    type: "skincare",
    price: 2200,
    description: "Revitalizing eye cream to reduce dark circles and fine lines.",
    longDescription: "Refresh tired eyes with SKIN Energizing Eye Cream. This luxurious formula targets dark circles, puffiness, and fine lines for a more youthful, awakened appearance.",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
    benefits: [
      "Reduces dark circles",
      "Minimizes fine lines",
      "Reduces puffiness",
      "Hydrates delicate eye area",
      "Quick absorption"
    ],
    ingredients: ["Caffeine", "Peptides", "Aloe Vera", "Vitamin E", "Cucumber Extract"],
    nutritionFacts: [],
    howToUse: "Apply small amount around eye area morning and evening.",
    inStock: true,
    rating: 4.8,
    reviewCount: 345,
    servingsPerContainer: 0,
    servingSize: "Pea-sized amount",
    relatedProducts: ["19", "21", "22"]
  },
  {
    id: "21",
    name: "SKIN Hydrating Eye Gel",
    slug: "skin-hydrating-eye-gel",
    category: "skincare",
    type: "skincare",
    price: 1800,
    description: "Lightweight gel for intense hydration around delicate eye area.",
    longDescription: "Give your eyes the hydration they deserve with SKIN Hydrating Eye Gel. This lightweight, gel formula provides intense moisture without heaviness.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
    benefits: [
      "Intense hydration",
      "Lightweight gel formula",
      "Reduces puffiness",
      "Soothes tired eyes",
      "Non-greasy finish"
    ],
    ingredients: ["Hyaluronic Acid", "Aloe Vera", "Green Tea Extract", "Vitamin B5"],
    nutritionFacts: [],
    howToUse: "Gently pat around eye area twice daily.",
    inStock: true,
    rating: 4.6,
    reviewCount: 234,
    servingsPerContainer: 0,
    servingSize: "Small amount",
    relatedProducts: ["19", "20", "22"]
  },
  {
    id: "22",
    name: "Radiant C Daily Skin Booster",
    slug: "radiant-c-booster",
    category: "skincare",
    type: "skincare",
    price: 2800,
    originalPrice: 3200,
    description: "Vitamin C serum for brighter, more even skin tone.",
    longDescription: "Reveal radiant skin with Radiant C Daily Skin Booster. This potent vitamin C serum brightens, evens skin tone, and provides antioxidant protection against environmental stressors.",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
    benefits: [
      "Brightens skin tone",
      "Powerful antioxidant protection",
      "Reduces dark spots",
      "Firms and tightens skin",
      "Boosts collagen production"
    ],
    ingredients: ["Vitamin C (L-Ascorbic Acid)", "Vitamin E", "Ferulic Acid", "Hyaluronic Acid"],
    nutritionFacts: [],
    howToUse: "Apply 2-3 drops to clean face and neck each morning before moisturizer.",
    inStock: true,
    rating: 4.9,
    reviewCount: 456,
    servingsPerContainer: 0,
    servingSize: "2-3 drops",
    relatedProducts: ["19", "20", "21"]
  },
  // BODY CARE
  {
    id: "23",
    name: "Herbal Aloe Body Wash",
    slug: "herbal-aloe-body-wash",
    category: "bodycare",
    type: "bodycare",
    price: 850,
    description: "Gentle cleansing body wash with aloe vera and natural extracts.",
    longDescription: "Cleanse and refresh your skin with Herbal Aloe Body Wash. This gentle formula cleanses without stripping natural moisture, leaving skin soft and refreshed.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    benefits: [
      "Gentle cleansing",
      "Contains aloe vera",
      "pH balanced formula",
      "Moisturizes while cleansing",
      "Fresh natural scent"
    ],
    ingredients: ["Aloe Vera", "Coconut Derived Cleansers", "Chamomile", "Vitamin E"],
    nutritionFacts: [],
    howToUse: "Apply to wet skin, lather, and rinse thoroughly.",
    inStock: true,
    rating: 4.5,
    reviewCount: 289,
    servingsPerContainer: 0,
    servingSize: "As needed",
    relatedProducts: ["24", "25", "19"]
  },
  {
    id: "24",
    name: "Herbal Aloe Strengthening Shampoo",
    slug: "herbal-aloe-shampoo",
    category: "haircare",
    type: "bodycare",
    price: 750,
    description: "Strengthening shampoo with aloe vera for healthy, shiny hair.",
    longDescription: "Strengthen and nourish your hair with Herbal Aloe Strengthening Shampoo. This gentle formula cleanses while providing essential nutrients for stronger, healthier-looking hair.",
    images: [
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=800",
    benefits: [
      "Strengthens hair",
      "Adds natural shine",
      "Contains aloe vera",
      "Gentle daily use formula",
      "Sulfate-free"
    ],
    ingredients: ["Aloe Vera", "Wheat Protein", "Vitamin E", "Pro-Vitamin B5"],
    nutritionFacts: [],
    howToUse: "Apply to wet hair, massage into scalp, rinse and repeat if needed.",
    inStock: true,
    rating: 4.6,
    reviewCount: 345,
    servingsPerContainer: 0,
    servingSize: "As needed",
    relatedProducts: ["25", "23", "19"]
  },
  {
    id: "25",
    name: "Herbal Aloe Strengthening Conditioner",
    slug: "herbal-aloe-conditioner",
    category: "haircare",
    type: "bodycare",
    price: 750,
    description: "Nourishing conditioner for smooth, manageable hair.",
    longDescription: "Complete your hair care routine with Herbal Aloe Strengthening Conditioner. This rich formula detangles, softens, and provides lasting moisture for beautifully manageable hair.",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800",
    benefits: [
      "Deeply conditions",
      "Detangles hair",
      "Adds softness and shine",
      "Protects from damage",
      "Pleasant natural scent"
    ],
    ingredients: ["Aloe Vera", "Jojoba Oil", "Keratin", "Vitamin E", "Panthenol"],
    nutritionFacts: [],
    howToUse: "Apply to clean, wet hair. Leave for 2-3 minutes, then rinse thoroughly.",
    inStock: true,
    rating: 4.6,
    reviewCount: 312,
    servingsPerContainer: 0,
    servingSize: "As needed",
    relatedProducts: ["24", "23", "19"]
  },
  // PROTEIN SNACKS
  {
    id: "26",
    name: "Protein Bar Deluxe - Chocolate Peanut",
    slug: "protein-bar-chocolate-peanut",
    category: "protein",
    type: "snack",
    price: 250,
    description: "Delicious protein bar with 15g protein and rich chocolate peanut flavor.",
    longDescription: "Satisfy your hunger with Protein Bar Deluxe. Each bar delivers 15g of high-quality protein with delicious chocolate peanut flavor - perfect for a healthy on-the-go snack.",
    images: [
      "https://images.unsplash.com/photo-1622484211423-f609c35e2b38?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1622484211423-f609c35e2b38?w=800",
    benefits: [
      "15g protein per bar",
      "Satisfies hunger",
      "Convenient on-the-go snack",
      "Rich chocolate peanut flavor",
      "Low sugar"
    ],
    ingredients: ["Whey Protein", "Soy Protein", "Peanuts", "Dark Chocolate Coating", "Fiber Blend"],
    nutritionFacts: [
      { name: "Calories", amount: "200 kcal" },
      { name: "Protein", amount: "15g", dailyValue: "30%" },
      { name: "Carbohydrate", amount: "18g", dailyValue: "7%" },
      { name: "Fat", amount: "8g", dailyValue: "10%" },
      { name: "Fiber", amount: "5g", dailyValue: "18%" }
    ],
    howToUse: "Enjoy as a snack between meals or after workout.",
    inStock: true,
    rating: 4.4,
    reviewCount: 567,
    servingsPerContainer: 1,
    servingSize: "1 bar (45g)",
    variants: ["Chocolate Peanut", "Vanilla Almond", "Citrus Lemon"],
    relatedProducts: ["27", "3", "13"]
  },
  {
    id: "27",
    name: "Roasted Soy Nuts",
    slug: "roasted-soy-nuts",
    category: "protein",
    type: "snack",
    price: 450,
    description: "Crunchy roasted soy nuts with 9g protein per serving.",
    longDescription: "Snack smart with Roasted Soy Nuts. These crunchy, protein-packed snacks deliver 9g of soy protein per serving - perfect for satisfying hunger the healthy way.",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    benefits: [
      "9g protein per serving",
      "Crunchy and satisfying",
      "Heart-healthy snack",
      "Rich in fiber",
      "All-natural"
    ],
    ingredients: ["Roasted Soybeans", "Sea Salt"],
    nutritionFacts: [
      { name: "Calories", amount: "120 kcal" },
      { name: "Protein", amount: "9g", dailyValue: "18%" },
      { name: "Fat", amount: "5g", dailyValue: "6%" },
      { name: "Fiber", amount: "4g", dailyValue: "14%" }
    ],
    howToUse: "Enjoy as a snack anytime. Store in cool, dry place.",
    inStock: true,
    rating: 4.3,
    reviewCount: 234,
    servingsPerContainer: 12,
    servingSize: "1/4 cup (30g)",
    relatedProducts: ["26", "3", "18"]
  },
  // IMMUNE SUPPORT
  {
    id: "28",
    name: "Tri-Shield Softgels",
    slug: "tri-shield-softgels",
    category: "immune",
    type: "supplement",
    price: 2100,
    description: "Advanced fish oil with omega-3 and vitamin E for heart and immune health.",
    longDescription: "Support your heart and immune system with Tri-Shield. This advanced fish oil formula provides concentrated omega-3 fatty acids plus vitamin E for comprehensive cardiovascular support.",
    images: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800",
    benefits: [
      "Heart health support",
      "Immune system boost",
      "Concentrated omega-3",
      "Contains vitamin E",
      "No fishy aftertaste"
    ],
    ingredients: ["Fish Oil", "EPA", "DHA", "Vitamin E", "Neptune Krill Oil"],
    nutritionFacts: [
      { name: "Total Omega-3", amount: "900mg" },
      { name: "EPA", amount: "450mg" },
      { name: "DHA", amount: "300mg" },
      { name: "Vitamin E", amount: "10mg", dailyValue: "67%" }
    ],
    howToUse: "Take 3 softgels daily with meals.",
    inStock: true,
    rating: 4.7,
    reviewCount: 389,
    servingsPerContainer: 30,
    servingSize: "3 softgels",
    relatedProducts: ["9", "7", "29"]
  },
  {
    id: "29",
    name: "RoseGuard",
    slug: "roseguard",
    category: "immune",
    type: "supplement",
    price: 1450,
    description: "Antioxidant supplement with rosemary and turmeric extracts.",
    longDescription: "Protect your cells with RoseGuard. This powerful antioxidant supplement combines rosemary extract with turmeric and other botanicals to combat oxidative stress and support cellular health.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    benefits: [
      "Powerful antioxidant protection",
      "Contains rosemary extract",
      "Includes turmeric",
      "Supports cellular health",
      "Fights oxidative stress"
    ],
    ingredients: ["Rosemary Extract", "Turmeric Extract", "Vitamin A", "Vitamin C", "Astaxanthin"],
    nutritionFacts: [
      { name: "Vitamin A", amount: "600mcg", dailyValue: "67%" },
      { name: "Vitamin C", amount: "40mg", dailyValue: "44%" },
      { name: "Rosemary Extract", amount: "100mg" }
    ],
    howToUse: "Take 1 tablet twice daily with meals.",
    inStock: true,
    rating: 4.5,
    reviewCount: 267,
    servingsPerContainer: 60,
    servingSize: "1 tablet",
    relatedProducts: ["28", "7", "8"]
  },
  // DIGESTIVE HEALTH
  {
    id: "30",
    name: "Active Fiber Complex",
    slug: "active-fiber-complex",
    category: "digestive",
    type: "supplement",
    price: 1350,
    description: "Soluble and insoluble fiber blend for digestive health.",
    longDescription: "Support healthy digestion with Active Fiber Complex. This blend of soluble and insoluble fibers helps maintain digestive regularity and promotes gut health.",
    images: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    benefits: [
      "5g fiber per serving",
      "Supports digestive regularity",
      "Contains prebiotics",
      "Easy to mix",
      "No taste or texture"
    ],
    ingredients: ["Oat Fiber", "Apple Fiber", "Guar Gum", "Citrus Fiber", "Inulin"],
    nutritionFacts: [
      { name: "Calories", amount: "20 kcal" },
      { name: "Total Fiber", amount: "5g", dailyValue: "18%" },
      { name: "Soluble Fiber", amount: "3g" },
      { name: "Insoluble Fiber", amount: "2g" }
    ],
    howToUse: "Mix 1 scoop with 250ml water or add to shake. Take 1-2 times daily.",
    inStock: true,
    rating: 4.5,
    reviewCount: 345,
    servingsPerContainer: 30,
    servingSize: "1 scoop (6g)",
    relatedProducts: ["5", "31", "7"]
  },
  {
    id: "31",
    name: "Florafiber",
    slug: "florafiber",
    category: "digestive",
    type: "supplement",
    price: 950,
    description: "Natural fiber tablets for daily digestive support.",
    longDescription: "Get your daily fiber with Florafiber tablets. Each tablet provides natural dietary fiber to support digestive health and regular bowel function.",
    images: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800",
    benefits: [
      "Natural fiber source",
      "Supports regularity",
      "Easy to swallow tablets",
      "Convenient daily use",
      "No added sugars"
    ],
    ingredients: ["Oat Bran", "Beet Fiber", "Cellulose"],
    nutritionFacts: [
      { name: "Calories", amount: "10 kcal" },
      { name: "Total Fiber", amount: "2g", dailyValue: "7%" }
    ],
    howToUse: "Take 4 tablets with 250ml water, 3 times daily.",
    inStock: true,
    rating: 4.3,
    reviewCount: 198,
    servingsPerContainer: 30,
    servingSize: "4 tablets",
    relatedProducts: ["30", "5", "7"]
  },
  // ENERGY & FOCUS
  {
    id: "32",
    name: "Liftoff Energy Tablets - Lemon",
    slug: "liftoff-lemon",
    category: "energy",
    type: "supplement",
    price: 1200,
    description: "Effervescent energy tablets with vitamins, caffeine, and taurine.",
    longDescription: "Get an instant energy boost with Liftoff. These effervescent tablets combine caffeine, B vitamins, and taurine for mental clarity and physical energy without the crash.",
    images: [
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800",
    benefits: [
      "Instant energy boost",
      "Contains B vitamins",
      "Supports mental clarity",
      "Refreshing lemon flavor",
      "No sugar"
    ],
    ingredients: ["Caffeine", "Taurine", "Vitamin B Complex", "Vitamin C", "Panax Ginseng"],
    nutritionFacts: [
      { name: "Calories", amount: "10 kcal" },
      { name: "Caffeine", amount: "75mg" },
      { name: "Vitamin B12", amount: "200mcg", dailyValue: "8333%" },
      { name: "Vitamin C", amount: "60mg", dailyValue: "67%" }
    ],
    howToUse: "Dissolve 1 tablet in 250ml cold water. Maximum 2 tablets daily.",
    inStock: true,
    rating: 4.6,
    reviewCount: 567,
    servingsPerContainer: 30,
    servingSize: "1 tablet",
    variants: ["Lemon-Lime", "Orange", "Ignite-Me Orange"],
    relatedProducts: ["4", "16", "33"]
  },
  {
    id: "33",
    name: "N-R-G Tea",
    slug: "nrg-tea",
    category: "energy",
    type: "tea",
    price: 1350,
    description: "Natural energy tea made from guarana and orange pekoe.",
    longDescription: "Boost your energy naturally with N-R-G Tea. This invigorating blend of guarana and orange pekoe tea provides natural caffeine for lasting energy and mental focus.",
    images: [
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800",
    benefits: [
      "Natural energy source",
      "Contains guarana",
      "Supports mental focus",
      "Antioxidant properties",
      "Low calorie"
    ],
    ingredients: ["Guarana Seed Extract", "Orange Pekoe Tea", "Natural Lemon Flavor"],
    nutritionFacts: [
      { name: "Calories", amount: "5 kcal" },
      { name: "Caffeine", amount: "40mg" }
    ],
    howToUse: "Mix 1/2 teaspoon with 250ml hot or cold water.",
    inStock: true,
    rating: 4.4,
    reviewCount: 234,
    servingsPerContainer: 60,
    servingSize: "1/2 teaspoon (1g)",
    relatedProducts: ["4", "32", "6"]
  },
  // MEN'S & WOMEN'S HEALTH
  {
    id: "34",
    name: "Formula 2 Multivitamin for Women",
    slug: "multivitamin-women",
    category: "daily-nutrition",
    type: "supplement",
    price: 1450,
    description: "Complete multivitamin formulated specifically for women's nutritional needs.",
    longDescription: "Support your unique nutritional needs with Formula 2 for Women. This comprehensive multivitamin provides essential vitamins and minerals including extra iron, folic acid, and calcium.",
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800",
    benefits: [
      "Formulated for women",
      "Contains extra iron",
      "Includes folic acid",
      "Supports bone health",
      "Antioxidant protection"
    ],
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "Iron", "Folic Acid", "Calcium", "B-Complex"],
    nutritionFacts: [
      { name: "Iron", amount: "18mg", dailyValue: "100%" },
      { name: "Folic Acid", amount: "400mcg", dailyValue: "100%" },
      { name: "Calcium", amount: "250mg", dailyValue: "19%" },
      { name: "Vitamin D", amount: "20mcg", dailyValue: "100%" }
    ],
    howToUse: "Take 1 tablet daily with a meal.",
    inStock: true,
    rating: 4.7,
    reviewCount: 456,
    servingsPerContainer: 90,
    servingSize: "1 tablet",
    relatedProducts: ["35", "7", "10"]
  },
  {
    id: "35",
    name: "Formula 2 Multivitamin for Men",
    slug: "multivitamin-men",
    category: "daily-nutrition",
    type: "supplement",
    price: 1450,
    description: "Complete multivitamin designed specifically for men's health needs.",
    longDescription: "Fuel your body with Formula 2 for Men. This targeted multivitamin provides essential nutrients including zinc, selenium, and vitamin D to support men's unique nutritional requirements.",
    images: [
      "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=800",
    benefits: [
      "Formulated for men",
      "Contains zinc and selenium",
      "Supports muscle health",
      "Promotes energy metabolism",
      "Immune system support"
    ],
    ingredients: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E", "Zinc", "Selenium", "B-Complex", "Lycopene"],
    nutritionFacts: [
      { name: "Zinc", amount: "15mg", dailyValue: "136%" },
      { name: "Selenium", amount: "70mcg", dailyValue: "127%" },
      { name: "Vitamin D", amount: "20mcg", dailyValue: "100%" },
      { name: "Vitamin B12", amount: "6mcg", dailyValue: "250%" }
    ],
    howToUse: "Take 1 tablet daily with a meal.",
    inStock: true,
    rating: 4.6,
    reviewCount: 389,
    servingsPerContainer: 90,
    servingSize: "1 tablet",
    relatedProducts: ["34", "7", "8"]
  },
  // COLLAGEN & BEAUTY
  {
    id: "36",
    name: "Collagen Beauty Booster",
    slug: "collagen-beauty-booster",
    category: "skincare",
    type: "supplement",
    price: 3200,
    originalPrice: 3600,
    description: "Premium collagen peptides with vitamin C for radiant skin, hair, and nails.",
    longDescription: "Nourish your beauty from within with Collagen Beauty Booster. This premium formula combines hydrolyzed collagen peptides with vitamin C and biotin for visible improvements in skin elasticity, hair strength, and nail health.",
    images: [
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800"
    ],
    mainImage: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800",
    benefits: [
      "10g collagen peptides",
      "Improves skin elasticity",
      "Strengthens hair and nails",
      "Contains vitamin C and biotin",
      "Delicious strawberry lemonade flavor"
    ],
    ingredients: ["Hydrolyzed Collagen Peptides", "Vitamin C", "Biotin", "Hyaluronic Acid", "Natural Strawberry Flavor"],
    nutritionFacts: [
      { name: "Calories", amount: "50 kcal" },
      { name: "Protein", amount: "10g", dailyValue: "20%" },
      { name: "Collagen Peptides", amount: "10g" },
      { name: "Vitamin C", amount: "60mg", dailyValue: "67%" },
      { name: "Biotin", amount: "300mcg", dailyValue: "1000%" }
    ],
    howToUse: "Mix 1 scoop with 250ml water. Best taken in the morning.",
    inStock: true,
    rating: 4.9,
    reviewCount: 678,
    servingsPerContainer: 30,
    servingSize: "1 scoop (12g)",
    relatedProducts: ["22", "20", "21"]
  }
];

// Utility functions
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
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductsByType = (type: string): Product[] => {
  return products.filter(p => p.type.toLowerCase() === type.toLowerCase());
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.type.toLowerCase().includes(lowerQuery) ||
    p.benefits.some(b => b.toLowerCase().includes(lowerQuery))
  );
};

export const getProductCategories = (): string[] => {
  return [...new Set(products.map(p => p.category))];
};

export const getProductTypes = (): string[] => {
  return [...new Set(products.map(p => p.type))];
};

export const getFeaturedProducts = (limit: number = 8): Product[] => {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

export const getProductsOnSale = (): Product[] => {
  return products.filter(p => p.originalPrice && p.originalPrice > p.price);
};
