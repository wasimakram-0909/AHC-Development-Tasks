
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Arabian Perfume",
    nameAr: "عطر عربي",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    category: "Perfumes",
    description: "Luxurious Arabian perfume with deep, exotic notes",
    descriptionAr: "عطر عربي فاخر بروائح عميقة وغريبة"
  },
  {
    id: "2",
    name: "Traditional Carpet",
    nameAr: "سجادة تقليدية",
    price: 2999.99,
    image: "https://images.unsplash.com/photo-1584285405429-136bf988919c",
    category: "Home",
    description: "Hand-woven traditional Arabian carpet",
    descriptionAr: "سجادة عربية تقليدية منسوجة يدويًا"
  }
];

const FEATURED_CATEGORIES = [
  {
    id: 1,
    name: "Perfumes",
    nameAr: "العطور",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f"
  },
  {
    id: 2,
    name: "Home Decor",
    nameAr: "ديكور المنزل",
    image: "https://images.unsplash.com/photo-1584285405429-136bf988919c"
  }
];

const Index = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1466442929976-97f336a657be)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative text-center text-white z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {language === "en" ? "Discover Arabian Treasures" : "اكتشف الكنوز العربية"}
          </h1>
          <p className="text-xl mb-8">
            {language === "en" 
              ? "Explore authentic Arabian products curated just for you" 
              : "اكتشف المنتجات العربية الأصيلة المختارة خصيصاً لك"}
          </p>
          <Link to="/products">
            <Button size="lg" className="hover-lift">
              {language === "en" ? "Shop Now" : "تسوق الآن"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {language === "en" ? "Featured Categories" : "الفئات المميزة"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_CATEGORIES.map((category) => (
            <Link 
              key={category.id}
              to={`/categories`}
              className="relative group overflow-hidden rounded-lg hover-lift"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={language === "en" ? category.name : category.nameAr}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  {language === "en" ? category.name : category.nameAr}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === "en" ? "Featured Products" : "المنتجات المميزة"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in">
            {SAMPLE_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                language={language}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg" className="hover-lift">
                {language === "en" ? "View All Products" : "عرض جميع المنتجات"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
