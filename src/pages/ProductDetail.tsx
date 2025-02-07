import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

const ProductDetail = () => {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - replace with actual data fetching
  const product: Product = {
    id: "1",
    name: "Arabian Perfume",
    name_ar: "عطر عربي",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    category: "Perfumes",
    description: "Luxurious Arabian perfume with deep, exotic notes",
    description_ar: "عطر عربي فاخر بروائح عميقة وغريبة"
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
    }).format(price);
  };

  return (
    <div className="container mx-auto pt-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg object-cover aspect-square"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 hover:bg-white/50"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={`h-6 w-6 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
            />
          </Button>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold text-primary">
            {formatPrice(product.price)}
          </p>
          <p className="text-neutral">{product.description}</p>

          <div className="space-y-4">
            <Button className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
