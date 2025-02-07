
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

const Wishlist = () => {
  const [wishlistItems] = useState<Product[]>([
    {
      id: "1",
      name: "Arabian Perfume",
      nameAr: "عطر عربي",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
      category: "Perfumes",
      description: "Luxurious Arabian perfume with deep, exotic notes",
      descriptionAr: "عطر عربي فاخر بروائح عميقة وغريبة"
    }
  ]);

  return (
    <div className="container mx-auto pt-24 px-4">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-neutral text-lg mb-4">Your wishlist is empty</p>
          <Button>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product.id} product={product} language="en" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
