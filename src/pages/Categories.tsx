
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Skeleton } from "@/components/ui/skeleton";

const CATEGORIES = [
  {
    id: 1,
    name: "Perfumes",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    description: "Discover luxurious Arabian fragrances",
    productCount: 24
  },
  {
    id: 2,
    name: "Home Decor",
    image: "https://images.unsplash.com/photo-1584285405429-136bf988919c",
    description: "Traditional and modern Arabian home decoration",
    productCount: 18
  },
  {
    id: 3,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    description: "Traditional and modern Arabian fashion",
    productCount: 32
  },
  {
    id: 4,
    name: "Kitchen",
    image: "https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b",
    description: "Traditional Arabic kitchen essentials",
    productCount: 15
  },
  {
    id: 5,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Complete your look with Arabian accessories",
    productCount: 45
  },
  {
    id: 6,
    name: "Food",
    image: "https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd",
    description: "Traditional Arabian delicacies",
    productCount: 20
  }
];

const CategorySkeleton = () => (
  <div className="relative overflow-hidden rounded-lg">
    <Skeleton className="aspect-[16/9] w-full" />
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <Skeleton className="h-8 w-1/3 mb-2" />
      <Skeleton className="h-4 w-2/3 mb-2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  </div>
);

const Categories = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto pt-24 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
          <p className="text-neutral text-lg">
            Explore our curated collection of authentic Arabian products
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <CategorySkeleton key={index} />
              ))
            : CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.name}`}
                  className="group relative overflow-hidden rounded-lg hover-lift"
                >
                  <div className="aspect-[16/9]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-white/80 mb-2">
                        {category.description}
                      </p>
                      <span className="text-white/60 text-sm">
                        {category.productCount} Products
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;
