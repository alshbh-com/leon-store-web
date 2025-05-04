
import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* العنوان */}
        <section className="bg-dark text-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              اتصل <span className="text-neon">بنا</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              يسعدنا تواصلك معنا في أي وقت للاستفسارات أو الطلبات
            </p>
          </div>
        </section>

        {/* معلومات الاتصال + نموذج التواصل */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* معلومات الاتصال */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  معلومات <span className="text-neon">التواصل</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-neon/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">رقم الهاتف</h3>
                      <a href="tel:01012300358" className="text-gray-600 hover:text-neon transition-colors block">01012300358</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-neon/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">البريد الإلكتروني</h3>
                      <a href="mailto:info@leonstore.com" className="text-gray-600 hover:text-neon transition-colors block">info@leonstore.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-neon/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">العنوان</h3>
                      <address className="text-gray-600 not-italic">
                        شارع الهرم كفر شكر، بنها، مصر
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-neon/10 p-3 rounded-full mr-4">
                      <Facebook className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">صفحة الفيسبوك</h3>
                      <a href="https://facebook.com/leonstore" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-neon transition-colors block">Lèon Store</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="font-bold mb-2">مواعيد العمل:</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>السبت - الخميس: 10:00 صباحًا - 10:00 مساءً</li>
                    <li>الجمعة: 2:00 ظهرًا - 10:00 مساءً</li>
                  </ul>
                </div>
              </div>
              
              {/* نموذج التواصل */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">
                  نموذج <span className="text-neon">التواصل</span>
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* خدمة الشحن */}
        <section className="py-12 bg-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              خدمة <span className="text-neon">الشحن</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              نوفر خدمة الشحن إلى جميع محافظات مصر
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
