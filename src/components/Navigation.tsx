
import { useState } from "react";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
    document.documentElement.classList.toggle("rtl");
  };

  return (
    <nav className="glass fixed w-full z-50 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
          <Link to="/" className="text-2xl font-bold text-primary">متجر</Link>
        </div>

        <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white glass p-4 animate-slide-in' : 'hidden'}`}>
          <Link to="/">
            <Button variant="ghost" className="hover-lift">Home</Button>
          </Link>
          <Button variant="ghost" className="hover-lift">Products</Button>
          <Button variant="ghost" className="hover-lift">Categories</Button>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="hover-lift">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="hover-lift">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" size="icon" className="hover-lift">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="hover-lift"
          >
            {language.toUpperCase()}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
