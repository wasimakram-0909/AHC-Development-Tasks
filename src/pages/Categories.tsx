
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const CATEGORIES = [
  {
    id: 1,
    name: "Perfumes",
    nameAr: "العطور",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    description: "Discover luxurious Arabian fragrances",
    descriptionAr: "اكتشف العطور العربية الفاخرة",
    productCount: 24
  },
  {
    id: 2,
    name: "Home Decor",
    nameAr: "ديكور المنزل",
    image: "https://images.unsplash.com/photo-1584285405429-136bf988919c",
    description: "Traditional and modern Arabian home decoration",
    descriptionAr: "ديكورات منزلية عربية تقليدية وعصرية",
    productCount: 18
  },
  {
    id: 3,
    name: "Fashion",
    nameAr: "الأزياء",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    description: "Traditional and modern Arabian fashion",
    descriptionAr: "أزياء عربية تقليدية وعصرية",
    productCount: 32
  },
  {
    id: 4,
    name: "Accessories",
    nameAr: "الإكسسوارات",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Complete your look with Arabian accessories",
    descriptionAr: "أكمل إطلالتك مع الإكسسوارات العربية",
    productCount: 45
  }
];

const Categories = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto pt-24 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {language === "en" ? "Browse Categories" : "تصفح الفئات"}
          </h1>
          <p className="text-neutral text-lg">
            {language === "en" 
              ? "Explore our curated collection of authentic Arabian products" 
              : "اكتشف مجموعتنا المختارة من المنتجات العربية الأصيلة"}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.name}`}
              className="group relative overflow-hidden rounded-lg hover-lift"
            >
              <div className="aspect-[16/9]">
                <img
                  src={category.image}
                  alt={language === "en" ? category.name : category.nameAr}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {language === "en" ? category.name : category.nameAr}
                  </h3>
                  <p className="text-white/80 mb-2">
                    {language === "en" ? category.description : category.descriptionAr}
                  </p>
                  <span className="text-white/60 text-sm">
                    {category.productCount} {language === "en" ? "Products" : "منتج"}
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
