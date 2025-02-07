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
    name: "Arabian Oud Perfume",
    nameAr: "عطر العود العربي",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    category: "Perfumes",
    description: "Luxurious Arabian oud perfume with deep, exotic notes of agarwood",
    descriptionAr: "عطر عود عربي فاخر برائحة خشب العود العميقة والفريدة"
  },
  {
    id: "2",
    name: "Handwoven Persian Carpet",
    nameAr: "سجادة فارسية منسوجة يدويًا",
    price: 3999.99,
    image: "https://images.unsplash.com/photo-1584285405429-136bf988919c",
    category: "Home",
    description: "Traditional handwoven Persian carpet with intricate Islamic patterns",
    descriptionAr: "سجادة فارسية تقليدية منسوجة يدويًا بنقوش إسلامية معقدة"
  },
  {
    id: "3",
    name: "Moroccan Tea Set",
    nameAr: "طقم شاي مغربي",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1578937014186-bacd3628d401",
    category: "Kitchen",
    description: "Authentic Moroccan tea set with ornate silver teapot and glasses",
    descriptionAr: "طقم شاي مغربي أصيل مع إبريق فضي مزخرف وأكواب"
  },
  {
    id: "4",
    name: "Arabic Coffee Dallah",
    nameAr: "دلة قهوة عربية",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b",
    category: "Kitchen",
    description: "Traditional Arabic coffee pot (Dallah) made of brass with gold finish",
    descriptionAr: "دلة قهوة عربية تقليدية مصنوعة من النحاس مع لمسات ذهبية"
  },
  {
    id: "5",
    name: "Embroidered Abaya",
    nameAr: "عباية مطرزة",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1611509533710-51542cd5f0ff",
    category: "Fashion",
    description: "Elegant black abaya with intricate golden embroidery",
    descriptionAr: "عباية سوداء أنيقة مع تطريز ذهبي دقيق"
  },
  {
    id: "6",
    name: "Arabian Dates Gift Box",
    nameAr: "علبة تمور عربية فاخرة",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd",
    category: "Food",
    description: "Premium selection of Ajwa and Medjool dates in a luxury gift box",
    descriptionAr: "تشكيلة فاخرة من تمور العجوة والمجدول في علبة هدايا فاخرة"
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
