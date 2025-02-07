import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Arabian Oud Perfume",
    nameAr: "عطر العود العربي",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    category: "Perfumes",
    description: "Luxurious Arabian oud perfume with deep, exotic notes",
    descriptionAr: "عطر عود عربي فاخر برائحة خشب العود العميقة"
  },
  {
    id: "2",
    name: "Persian Carpet",
    nameAr: "سجادة فارسية",
    price: 2999.99,
    image: "https://images.unsplash.com/photo-1584285405429-136bf988919c",
    category: "Home",
    description: "Handwoven Persian carpet with intricate patterns",
    descriptionAr: "سجادة فارسية منسوجة يدويًا"
  },
  {
    id: "3",
    name: "Arabic Coffee Set",
    nameAr: "طقم قهوة عربية",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b",
    category: "Kitchen",
    description: "Traditional Arabic coffee pot with cups",
    descriptionAr: "دلة قهوة عربية تقليدية مع فناجين"
  },
  {
    id: "4",
    name: "Embroidered Abaya",
    nameAr: "عباية مطرزة",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1611509533710-51542cd5f0ff",
    category: "Fashion",
    description: "Elegant black abaya with gold embroidery",
    descriptionAr: "عباية سوداء أنيقة مع تطريز ذهبي"
  },
  {
    id: "5",
    name: "Moroccan Lamp",
    nameAr: "مصباح مغربي",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1580651316320-a8fd7e199e9c",
    category: "Home",
    description: "Handcrafted Moroccan mosaic lamp",
    descriptionAr: "مصباح مغربي يدوي الصنع"
  },
  {
    id: "6",
    name: "Luxury Prayer Mat",
    nameAr: "سجادة صلاة فاخرة",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1585502866757-0da206fea11e",
    category: "Accessories",
    description: "Premium quality prayer mat with intricate design",
    descriptionAr: "سجادة صلاة فاخرة بتصميم معقد"
  },
  {
    id: "7",
    name: "Arabian Dates Gift Box",
    nameAr: "صندوق تمور عربية",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd",
    category: "Food",
    description: "Premium selection of Arabian dates",
    descriptionAr: "تشكيلة فاخرة من التمور العربية"
  },
  {
    id: "8",
    name: "Traditional Jewelry Box",
    nameAr: "صندوق مجوهرات تقليدي",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1584297091611-d4344a4f6954",
    category: "Accessories",
    description: "Handcrafted wooden jewelry box with pearl inlay",
    descriptionAr: "صندوق مجوهرات خشبي مرصع باللؤلؤ"
  },
  {
    id: "9",
    name: "Amber Musk Perfume",
    nameAr: "عطر المسك العنبري",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    category: "Perfumes",
    description: "Rich amber and musk fragrance",
    descriptionAr: "عطر غني بالعنبر والمسك"
  },
  {
    id: "10",
    name: "Calligraphy Art Set",
    nameAr: "طقم خط عربي",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a",
    category: "Art",
    description: "Complete Arabic calligraphy set with tools",
    descriptionAr: "طقم كامل للخط العربي مع الأدوات"
  }
];

const CATEGORIES = ["All", "Perfumes", "Home", "Fashion", "Kitchen", "Accessories", "Food", "Art"];
const PRICE_RANGES = ["All", "Under 200 SAR", "200-500 SAR", "500-1000 SAR", "Over 1000 SAR"];

const Products = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      let filtered = [...SAMPLE_PRODUCTS];

      // Apply category filter
      if (selectedCategory !== "All") {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }

      // Apply price range filter
      if (selectedPriceRange !== "All") {
        filtered = filtered.filter(product => {
          switch (selectedPriceRange) {
            case "Under 200 SAR":
              return product.price < 200;
            case "200-500 SAR":
              return product.price >= 200 && product.price < 500;
            case "500-1000 SAR":
              return product.price >= 500 && product.price < 1000;
            case "Over 1000 SAR":
              return product.price >= 1000;
            default:
              return true;
          }
        });
      }

      // Apply search filter
      if (searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredProducts(filtered);
      setLoading(false);
    }, 1000);
  }, [selectedCategory, selectedPriceRange, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto pt-24 px-2 md:px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">All Products</h1>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant={showFilters ? "default" : "outline"}
              className="hover-lift"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mb-8 p-4 bg-white rounded-lg shadow-lg animate-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Categories</h3>
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
                <h3 className="font-semibold mb-3">Price Range</h3>
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
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCard key={index} product={{} as Product} loading={true} />
            ))
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Products;
