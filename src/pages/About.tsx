
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* صورة العنوان */}
        <div className="relative h-72 bg-dark">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-black/70"></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              من <span className="text-neon">نحن</span>
            </h1>
          </div>
        </div>

        {/* قسم المعلومات الرئيسية */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  قصة <span className="text-neon">Lèon Store</span>
                </h2>
                <p className="text-gray-700 mb-4">
                  بدأت رحلتنا في عالم الموضة والأناقة عام 2022، بهدف توفير أفضل المنتجات بأسعار مناسبة للجميع. منذ ذلك الحين ونحن ملتزمون بتقديم ملابس وأحذية ذات جودة عالية تلبي مختلف الأذواق والاحتياجات.
                </p>
                <p className="text-gray-700 mb-4">
                  نفتخر بأن نكون واحداً من أفضل المتاجر في بنها، نوفر لعملائنا دائماً أحدث صيحات الموضة بأفضل الأسعار، ونسعى جاهدين للحفاظ على ثقة عملائنا الغالية.
                </p>
                <p className="text-gray-700 font-bold">
                  وعدنا ووفينا ودايماً عند ثقة عملائنا 👌
                </p>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/5055691a-4ae3-485a-8b58-5dcfe79899c6.png"
                  alt="Lèon Store Logo"
                  className="w-full max-w-md mx-auto"
                />
                <div className="absolute bottom-0 right-0 bg-neon/10 w-40 h-40 rounded-full -z-10"></div>
                <div className="absolute top-0 left-0 bg-dark/10 w-32 h-32 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم الرؤية والرسالة */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-neon text-dark flex items-center justify-center mr-3 font-bold">
                    R
                  </span>
                  رؤيتنا
                </h3>
                <p className="text-gray-700">
                  أن نكون الوجهة الأولى للمتسوقين الباحثين عن الجودة والأناقة بأسعار مناسبة، وأن نساهم في تعزيز ثقافة الأناقة والذوق الرفيع في المجتمع المصري.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-neon text-dark flex items-center justify-center mr-3 font-bold">
                    M
                  </span>
                  رسالتنا
                </h3>
                <p className="text-gray-700">
                  تقديم منتجات عالية الجودة تجمع بين الأناقة والراحة بأسعار تناسب الجميع، مع الالتزام بتحقيق رضا العملاء وتقديم خدمة مميزة تفوق توقعاتهم.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* قسم القيم */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
              قيمنا <span className="text-neon">الأساسية</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-neon">
                <h3 className="text-lg font-bold mb-3">الجودة</h3>
                <p className="text-gray-700">
                  نلتزم بتقديم منتجات ذات جودة عالية من أفضل المصانع والماركات المحلية والعالمية.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-neon">
                <h3 className="text-lg font-bold mb-3">رضا العملاء</h3>
                <p className="text-gray-700">
                  نسعى دائمًا لتحقيق رضا عملائنا وتلبية احتياجاتهم وتوقعاتهم بأفضل طريقة ممكنة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-neon">
                <h3 className="text-lg font-bold mb-3">التنوع</h3>
                <p className="text-gray-700">
                  نوفر تشكيلة واسعة من المنتجات لتناسب مختلف الأذواق والأعمار والمناسبات.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-neon">
                <h3 className="text-lg font-bold mb-3">الأمانة</h3>
                <p className="text-gray-700">
                  نلتزم بالصدق والشفافية في جميع تعاملاتنا مع العملاء والموردين والشركاء.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* اقتباس قرآني */}
        <section className="py-12 bg-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="quran-verse text-2xl md:text-3xl mb-2">
              {"{وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ}"}
            </p>
            <p className="text-neon italic">سورة الذاريات - الآية 22</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
