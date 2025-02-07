
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  language: "en" | "ar";
}

const ProductCard = ({ product, language }: ProductCardProps) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ar-SA", {
      style: "currency",
      currency: "SAR",
    }).format(price);
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="glass rounded-lg overflow-hidden hover-lift">
      <div className="relative">
        <img
          src={product.image}
          alt={language === "en" ? product.name : product.nameAr}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 hover:bg-white/50"
          onClick={handleWishlist}
        >
          <Heart
            className={`h-5 w-5 ${isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}`}
          />
        </Button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {language === "en" ? product.name : product.nameAr}
        </h3>
        <p className="text-neutral mb-4">
          {language === "en" ? product.description : product.descriptionAr}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <Button 
            variant="default" 
            className="hover-lift"
            onClick={() => addToCart(product)}
          >
            {language === "en" ? "Add to Cart" : "أضف إلى السلة"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
