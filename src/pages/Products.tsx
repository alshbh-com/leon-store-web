
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { Input } from "@/components/ui/input";
import products from "@/data/products";
import { Search } from "lucide-react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // استخراج التصنيفات الفريدة من المنتجات
  const categories = [...new Set(products.map((product) => product.category))];

  // فلترة المنتجات حسب التصنيف والبحث
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            معرض <span className="text-neon">الصور</span>
          </h1>

          {/* فلاتر البحث */}
          <div className="bg-card text-card-foreground p-4 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="ابحث عن صورة..."
                  className="pl-10 pr-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* فلتر التصنيفات */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          {/* عرض الصور */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ImageCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.name}
                  category={product.category}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <h2 className="text-xl font-semibold mb-2 text-foreground">
                  لا توجد صور متطابقة مع البحث
                </h2>
                <p className="text-muted-foreground">
                  جرب تغيير معايير البحث أو اختيار تصنيف آخر
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
