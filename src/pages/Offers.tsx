
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Offers = () => {
  // اختيار بعض المنتجات للعروض (عروض وهمية)
  const discountedProducts = products.filter((_, index) => index % 3 === 0).slice(0, 4);
  const specialProducts = products.filter((_, index) => index % 4 === 0).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* قسم العنوان */}
        <section className="bg-dark text-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              عروض <span className="text-neon">حصرية</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              استمتع بأفضل العروض على تشكيلة واسعة من الملابس والأحذية الأنيقة
            </p>
          </div>
        </section>

        {/* العرض الرئيسي */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-r from-dark to-gray-800 rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block bg-neon text-dark text-sm font-bold px-3 py-1 rounded-full mb-6">
                    العرض الأقوى
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    عرض الـ 1000 جنيه
                  </h2>
                  <p className="text-gray-300 mb-6">
                    احصل على طقم كامل (حذاء + بنطلون + تيشيرت) من أفضل الماركات بـ 1000 جنيه فقط!
                    العرض متاح لفترة محدودة.
                  </p>
                  <ul className="text-gray-300 mb-8 space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-neon ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      حذاء رياضي أنيق
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-neon ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      بنطلون جينز عصري
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-neon ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      تيشيرت قطن 100%
                    </li>
                  </ul>
                  <Button asChild className="bg-neon text-dark hover:bg-neon/90 w-full md:w-auto">
                    <Link to="/contact">احجز العرض الآن</Link>
                  </Button>
                </div>
                <div className="hidden md:flex items-center justify-center p-12 bg-black/30">
                  <div className="animate-float">
                    <div className="text-8xl font-black text-white">1000</div>
                    <div className="text-2xl font-bold text-neon text-center">جنيه فقط</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* المنتجات المخفضة */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              خصومات <span className="text-neon">حصرية</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {discountedProducts.map((product) => (
                <div key={product.id} className="relative">
                  <div className="absolute top-4 right-4 bg-neon text-dark text-sm font-bold px-3 py-1 rounded-full z-10">
                    خصم 25%
                  </div>
                  <ProductCard
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    code={product.code}
                    category={product.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* العروض الخاصة */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              عروض <span className="text-neon">خاصة</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialProducts.map((product, index) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 group hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-neon font-bold">{product.price} جنيه</span>
                        <span className="bg-neon/20 text-neon text-xs px-2 py-1 rounded">كود: {product.code}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{product.category}</span>
                      </div>
                      {index === 0 && (
                        <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                          ينفذ قريبًا
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">الشحن مجاني</span>
                      <Button asChild variant="ghost" className="text-neon hover:text-neon/90 hover:bg-transparent p-0">
                        <Link to={`/products/${product.id}`}>عرض التفاصيل</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* بانر التشجيع */}
        <section className="py-12 bg-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              لا تفوت <span className="text-neon">الفرصة!</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              العروض متاحة لفترة محدودة ومتوفرة حتى نفاد الكمية
            </p>
            <Button asChild size="lg" className="bg-neon text-dark hover:bg-neon/90">
              <Link to="/contact">تواصل معنا للاستفسار</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
