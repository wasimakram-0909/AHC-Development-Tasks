
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Product } from "@/types/product";

const Index = () => {
  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['featured-products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(6);
      
      if (error) throw error;
      return data as Product[];
    }
  });

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['featured-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('category')
        .limit(2);
      
      if (error) throw error;
      return data.map(item => ({
        id: item.category,
        name: item.category,
        image: products?.find(p => p.category === item.category)?.image || ''
      }));
    },
    enabled: !!products
  });

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
        {isLoadingCategories ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-[16/9] bg-neutral-light animate-pulse rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories?.map((category) => (
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
        )}
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          {isLoadingProducts ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="glass p-4 rounded-lg aspect-[3/4] animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          )}
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
