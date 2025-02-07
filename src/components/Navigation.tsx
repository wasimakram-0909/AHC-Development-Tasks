
import { useState } from "react";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
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

        <div className={`${isMenuOpen 
          ? 'absolute top-full left-0 right-0 bg-white shadow-lg p-4 lg:p-0 lg:shadow-none' 
          : 'hidden'} lg:flex lg:static lg:bg-transparent items-center space-y-2 lg:space-y-0 lg:space-x-8`}>
          <Link to="/" className="block lg:inline">
            <Button 
              variant={isActive("/") ? "default" : "ghost"} 
              className="w-full lg:w-auto hover-lift"
            >
              Home
            </Button>
          </Link>
          <Link to="/products" className="block lg:inline">
            <Button 
              variant={isActive("/products") ? "default" : "ghost"} 
              className="w-full lg:w-auto hover-lift"
            >
              Products
            </Button>
          </Link>
          <Link to="/categories" className="block lg:inline">
            <Button 
              variant={isActive("/categories") ? "default" : "ghost"} 
              className="w-full lg:w-auto hover-lift"
            >
              Categories
            </Button>
          </Link>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
