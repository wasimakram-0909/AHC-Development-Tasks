
import { useState } from "react";
import { ShoppingCart, Heart, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("User logged out");
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
          <Link to="/" className="text-2xl font-bold text-primary">Store</Link>
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="icon" className="hover-lift">
                <LogOut className="h-5 w-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                <AlertDialogDescription>
                  You will need to login again to access your account.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
