
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

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
  },
  // Add more sample products as needed
];

const Index = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto pt-24 px-4">
        <header className="text-center mb-12 animate-in">
          <h1 className="text-4xl font-bold text-primary mb-4">
            {language === "en" ? "Arabian Marketplace" : "السوق العربي"}
          </h1>
          <p className="text-neutral text-lg">
            {language === "en"
              ? "Discover authentic Arabian products"
              : "اكتشف المنتجات العربية الأصيلة"}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              language={language}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
