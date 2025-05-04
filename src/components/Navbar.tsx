
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-dark py-2 relative z-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top contact bar */}
        <div className="flex justify-between items-center py-2 text-white text-sm border-b border-white/10 mb-2">
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/leonstore" className="flex items-center gap-1 hover:text-neon transition-colors">
              <Facebook className="w-4 h-4" />
              <span className="hidden sm:inline">تابعنا على فيسبوك</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:01012300358" className="flex items-center gap-1 hover:text-neon transition-colors">
              <Phone className="w-4 h-4" />
              <span>01012300358</span>
            </a>
            <span className="hidden md:inline text-white/50">|</span>
            <a href="mailto:info@leonstore.com" className="hidden md:flex items-center gap-1 hover:text-neon transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@leonstore.com</span>
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/5055691a-4ae3-485a-8b58-5dcfe79899c6.png"
              alt="Lèon Store"
              className="h-16 w-16 mr-2"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">
                Lèon <span className="text-neon">Store</span>
              </h1>
              <p className="text-xs text-gray-400">CLOTHES&SHOES</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/"
              className="text-white hover:text-neon transition-colors px-3 py-2"
            >
              الرئيسية
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-neon transition-colors px-3 py-2"
            >
              من نحن
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-neon transition-colors px-3 py-2"
            >
              المنتجات
            </Link>
            <Link
              to="/offers"
              className="text-white hover:text-neon transition-colors px-3 py-2"
            >
              العروض
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-neon transition-colors px-3 py-2"
            >
              اتصل بنا
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-neon hover:bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-full bg-dark border-t border-white/10 py-4 px-4 z-50">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-white hover:text-neon transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-neon transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                to="/products"
                className="text-white hover:text-neon transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                المنتجات
              </Link>
              <Link
                to="/offers"
                className="text-white hover:text-neon transition-colors py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                العروض
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-neon transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
