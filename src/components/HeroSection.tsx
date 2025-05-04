
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section relative text-white">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Lèon <span className="text-neon">Store</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            أناقتك تبدأ من هنا
          </h2>
          <p className="text-lg md:text-xl mb-4 opacity-90">
            أفضل الأزياء والأحذية بأفضل الأسعار في بنها
          </p>
          <p className="quran-verse text-xl md:text-2xl mb-8 opacity-90">
            {"{وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ}"}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-neon text-dark hover:bg-neon/90">
              <Link to="/products">تسوق الآن</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-neon text-white hover:bg-neon/20">
              <Link to="/offers">العروض الخاصة</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/90 z-0"></div>
    </section>
  );
};

export default HeroSection;
