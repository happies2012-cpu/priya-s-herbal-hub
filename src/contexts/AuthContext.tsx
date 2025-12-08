import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, Order } from "@/types/product";
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  orders: Order[];
  addOrder: (order: Order) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("priya-user");
    return saved ? JSON.parse(saved) : null;
  });
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem("priya-orders");
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem("priya-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("priya-user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("priya-orders", JSON.stringify(orders));
  }, [orders]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6) {
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: email.split('@')[0],
        isDistributor: false,
        createdAt: new Date().toISOString(),
      };
      setUser(newUser);
      toast.success("Welcome back!");
      setIsLoading(false);
      return true;
    }
    
    toast.error("Invalid credentials");
    setIsLoading(false);
    return false;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password.length >= 6 && name) {
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name,
        isDistributor: false,
        referralCode: `PRIYA${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        createdAt: new Date().toISOString(),
      };
      setUser(newUser);
      toast.success("Account created successfully!");
      setIsLoading(false);
      return true;
    }
    
    toast.error("Please fill all fields correctly");
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    toast.success("Logged out successfully");
  };

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
      toast.success("Profile updated");
    }
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        updateProfile,
        orders,
        addOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
