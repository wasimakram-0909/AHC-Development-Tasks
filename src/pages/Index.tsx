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
    name_ar: "عطر العود العربي",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    category: "Perfumes",
    description: "Luxurious Arabian oud perfume with deep, exotic notes of agarwood",
    description_ar: "عطر عود عربي فاخر برائحة خشب العود العميقة والفريدة"
  },
  {
    id: "2",
    name: "Handwoven Persian Carpet",
    name_ar: "سجادة فارسية منسوجة يدويًا",
    price: 3999.99,
    image: "https://images.unsplash.com/photo-1584285405429-136bf988919c",
    category: "Home",
    description: "Traditional handwoven Persian carpet with intricate Islamic patterns",
    description_ar: "سجادة فارسية تقليدية منسوجة يدويًا بنقوش إسلامية معقدة"
  },
  {
    id: "3",
    name: "Moroccan Tea Set",
    name_ar: "طقم شاي مغربي",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1578937014186-bacd3628d401",
    category: "Kitchen",
    description: "Authentic Moroccan tea set with ornate silver teapot and glasses",
    description_ar: "طقم شاي مغربي أصيل مع إبريق فضي مزخرف وأكواب"
  },
  {
    id: "4",
    name: "Arabic Coffee Dallah",
    name_ar: "دلة قهوة عربية",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b",
    category: "Kitchen",
    description: "Traditional Arabic coffee pot (Dallah) made of brass with gold finish",
    description_ar: "دلة قهوة عربية تقليدية مصنوعة من النحاس مع لمسات ذهبية"
  },
  {
    id: "5",
    name: "Embroidered Abaya",
    name_ar: "عباية مطرزة",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1559503452-527aa3f0536e",
    category: "Fashion",
    description: "Elegant black abaya with intricate golden embroidery",
    description_ar: "عباية سوداء أنيقة مع تطريز ذهبي دقيق"
  },
  {
    id: "6",
    name: "Luxury Prayer Mat",
    name_ar: "سجادة صلاة فاخرة",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1591284353939-0d4b2c0c8d4a",
    category: "Accessories",
    description: "Premium quality prayer mat with intricate design",
    description_ar: "سجادة صلاة فاخرة بتصميم معقد"
  }
];

const FEATURED_CATEGORIES = [
  {
    id: 1,
    name: "Perfumes",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f"
  },
  {
    id: 2,
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1584285405429-136bf988919c"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-primary to-secondary">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be')] bg-cover bg-center"></div>
        </div>
        <div className="relative text-center text-white z-10 container mx-auto px-4 py-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in">
            Discover Arabian<br />Treasures
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Explore our curated collection of authentic Arabian luxury goods, 
            from exquisite perfumes to handcrafted treasures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button size="lg" className="hover-lift bg-accent hover:bg-accent/90 text-black text-lg px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="lg" variant="outline" className="hover-lift text-white border-white hover:bg-white/10 text-lg px-8">
                Explore Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Categories
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
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
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
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg" className="hover-lift">
                View All Products
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
