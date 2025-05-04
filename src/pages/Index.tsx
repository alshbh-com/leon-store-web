
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import products from "@/data/products";
import ImageCard from "@/components/ProductCard";

const Index = () => {
  // عرض 4 صور مميزة فقط
  const featuredImages = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />

        {/* قسم نبذة تعريفية */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                مرحباً بكم في <span className="text-neon">Lèon Store</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                متخصصون في بيع الملابس والأحذية للرجال والنساء والأطفال بأفضل الخامات
                وأحدث الموديلات وبأسعار تنافسية تناسب الجميع.
              </p>
              <p className="text-muted-foreground text-lg font-bold mb-8">
                وعدنا ووفينا ودايماً عند ثقة عملائنا 👌
              </p>
              <Button asChild className="bg-neon text-dark hover:bg-neon/90">
                <Link to="/about">المزيد عنا</Link>
              </Button>
            </div>
          </div>
        </section>

        <FeaturesSection />

        {/* قسم الصور المميزة */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 text-foreground">
                صور <span className="text-neon">مميزة</span>
              </h2>
              <Button asChild variant="outline" className="border-neon text-neon hover:bg-neon/20">
                <Link to="/products">عرض جميع الصور</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredImages.map((product) => (
                <ImageCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.name}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* قسم العروض */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto bg-dark rounded-lg overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    معرض <span className="text-neon">الصور</span>
                  </h2>
                  <p className="text-gray-300 mb-6">
                    اكتشف معرضنا المميز للصور! صور عالية الجودة تعرض أحدث وأفضل المنتجات في متجرنا.
                  </p>
                  <div className="bg-neon/20 p-4 rounded-lg mb-6">
                    <h3 className="text-neon text-xl font-bold mb-2">معرض Lèon المميز!</h3>
                    <p className="text-white">
                      استعرض مجموعتنا المميزة من الصور عالية الجودة
                    </p>
                  </div>
                  <Button asChild size="lg" className="bg-neon text-dark hover:bg-neon/90 w-full md:w-auto">
                    <Link to="/products">تصفح المعرض</Link>
                  </Button>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-7xl md:text-8xl font-black text-white mb-2">
                      <span className="text-neon">Lèon</span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white">
                      معرض الصور المميز
                    </div>
                    <div className="text-lg text-gray-300">
                      صور حصرية وعالية الجودة
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم بانر الاتصال */}
        <section className="py-12 bg-dark text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  للاستفسارات والتواصل
                </h2>
                <p className="text-gray-300">
                  اتصل بنا الآن أو تواصل معنا عبر صفحتنا على فيسبوك
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-dark hover:bg-white/90">
                  <a href="tel:01012300358">01012300358</a>
                </Button>
                <Button asChild variant="outline" className="border-neon text-neon hover:bg-neon/20">
                  <Link to="/contact">تواصل معنا</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
