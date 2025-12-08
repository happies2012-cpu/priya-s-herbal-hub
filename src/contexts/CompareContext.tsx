import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";
import { toast } from "sonner";

interface CompareContextType {
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  isInCompare: (productId: string) => boolean;
  clearCompare: () => void;
  getCompareCount: () => number;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareList, setCompareList] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    if (compareList.length >= 4) {
      toast.error("You can compare up to 4 products");
      return;
    }
    if (!isInCompare(product.id)) {
      setCompareList(prev => [...prev, product]);
      toast.success("Added to compare");
    }
  };

  const removeFromCompare = (productId: string) => {
    setCompareList(prev => prev.filter(item => item.id !== productId));
    toast.success("Removed from compare");
  };

  const isInCompare = (productId: string) => {
    return compareList.some(item => item.id === productId);
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const getCompareCount = () => compareList.length;

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,
        getCompareCount,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
};
