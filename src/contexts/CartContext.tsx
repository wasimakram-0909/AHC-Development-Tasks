
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";
import { useToast } from "@/components/ui/use-toast";

interface CartContextType {
  cartItems: Product[];
  wishlistItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  isInWishlist: (productId: string) => boolean;
  updateQuantity: (productId: string, change: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    if (!isInCart(product.id)) {
      setCartItems([...cartItems, product]);
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
    });
  };

  const updateQuantity = (productId: string, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      )
    );
  };

  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.id)) {
      setWishlistItems([...wishlistItems, product]);
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
    toast({
      title: "Removed from Wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const isInCart = (productId: string) => {
    return cartItems.some(item => item.id === productId);
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlistItems,
      addToCart,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
      isInCart,
      isInWishlist,
      updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
