import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Review } from "@/types/product";
import { toast } from "sonner";

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date' | 'helpful'>) => void;
  getProductReviews: (productId: string) => Review[];
  markHelpful: (reviewId: string) => void;
  getAverageRating: (productId: string) => number;
}

const initialReviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userName: "Priya S.",
    rating: 5,
    title: "Amazing results!",
    comment: "I've been using Formula 1 for 3 months and lost 8 kgs! The vanilla flavor is delicious and keeps me full until lunch.",
    date: "2024-11-15",
    verified: true,
    helpful: 45
  },
  {
    id: "2",
    productId: "1",
    userName: "Rahul M.",
    rating: 4,
    title: "Great protein shake",
    comment: "Good quality protein shake. I add banana and it tastes amazing. Only wish it had more flavors.",
    date: "2024-11-10",
    verified: true,
    helpful: 23
  },
  {
    id: "3",
    productId: "4",
    userName: "Anita K.",
    rating: 5,
    title: "Perfect morning boost",
    comment: "The herbal tea gives me energy without jitters. I drink it every morning instead of coffee now.",
    date: "2024-11-08",
    verified: true,
    helpful: 34
  },
  {
    id: "4",
    productId: "7",
    userName: "Vikram P.",
    rating: 5,
    title: "Complete nutrition",
    comment: "Great multivitamin! I feel more energetic since I started taking it daily.",
    date: "2024-11-05",
    verified: true,
    helpful: 18
  },
  {
    id: "5",
    productId: "22",
    userName: "Sneha R.",
    rating: 5,
    title: "Skin transformation!",
    comment: "My skin is so much brighter after using this serum. Dark spots have visibly reduced.",
    date: "2024-11-01",
    verified: true,
    helpful: 56
  }
];

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem("priya-reviews");
    return saved ? JSON.parse(saved) : initialReviews;
  });

  useEffect(() => {
    localStorage.setItem("priya-reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (review: Omit<Review, 'id' | 'date' | 'helpful'>) => {
    const newReview: Review = {
      ...review,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    };
    setReviews(prev => [newReview, ...prev]);
    toast.success("Review submitted successfully!");
  };

  const getProductReviews = (productId: string) => {
    return reviews.filter(r => r.productId === productId);
  };

  const markHelpful = (reviewId: string) => {
    setReviews(prev => 
      prev.map(r => r.id === reviewId ? { ...r, helpful: r.helpful + 1 } : r)
    );
  };

  const getAverageRating = (productId: string) => {
    const productReviews = getProductReviews(productId);
    if (productReviews.length === 0) return 0;
    return productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        addReview,
        getProductReviews,
        markHelpful,
        getAverageRating,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviews = () => {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error("useReviews must be used within a ReviewProvider");
  }
  return context;
};
