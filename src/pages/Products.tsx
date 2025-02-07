
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

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

const CATEGORIES = ["All", "Perfumes", "Home", "Fashion", "Accessories"];
const PRICE_RANGES = ["All", "Under 100 SAR", "100-500 SAR", "500-1000 SAR", "Over 1000 SAR"];

const Products = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto pt-24 px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">
            {language === "en" ? "All Products" : "جميع المنتجات"}
          </h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder={language === "en" ? "Search products..." : "البحث عن المنتجات..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              className="hover-lift"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              {language === "en" ? "Filters" : "التصفية"}
            </Button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8 p-4 glass rounded-lg animate-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">
                  {language === "en" ? "Categories" : "الفئات"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="hover-lift"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">
                  {language === "en" ? "Price Range" : "نطاق السعر"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PRICE_RANGES.map((range) => (
                    <Button
                      key={range}
                      variant={selectedPriceRange === range ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPriceRange(range)}
                      className="hover-lift"
                    >
                      {range}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default Products;
