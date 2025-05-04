
import { Facebook, Phone, Mail, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/5055691a-4ae3-485a-8b58-5dcfe79899c6.png"
                alt="Lèon Store"
                className="h-12 w-12 mr-2"
              />
              <div>
                <h3 className="text-xl font-bold">
                  Lèon <span className="text-neon">Store</span>
                </h3>
                <p className="text-xs text-gray-400">CLOTHES&SHOES</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              نوفر لكم أفضل الملابس والأحذية بجودة ممتازة وبأسعار مناسبة. نسعى دائمًا لتحقيق رضا عملائنا وتقديم خدمة مميزة.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.facebook.com/share/16ShDdURAS/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-neon hover:text-dark p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="tel:01012300358" className="bg-white/10 hover:bg-neon hover:text-dark p-2 rounded-full transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:info@leonstore.com" className="bg-white/10 hover:bg-neon hover:text-dark p-2 rounded-full transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-neon pr-3">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-neon transition-colors inline-block">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-neon transition-colors inline-block">من نحن</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-neon transition-colors inline-block">المنتجات</Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-neon transition-colors inline-block">العروض</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-neon transition-colors inline-block">اتصل بنا</Link>
              </li>
              <li>
                <a href="https://www.facebook.com/share/16ShDdURAS/" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors inline-block">تابعنا على فيسبوك</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-r-4 border-neon pr-3">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Home className="h-5 w-5 mt-1 ml-2 text-neon" />
                <span>شارع الهرم كفر شكر، بنها، مصر</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 ml-2 text-neon" />
                <span dir="ltr">01012300358</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 ml-2 text-neon" />
                <span>info@leonstore.com</span>
              </li>
              <li className="flex items-center">
                <Facebook className="h-5 w-5 ml-2 text-neon" />
                <a href="https://www.facebook.com/share/16ShDdURAS/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  تابعنا على فيسبوك
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-black/30 rounded-md">
              <p className="font-bold mb-1">خدمة الشحن:</p>
              <p className="text-sm">متوفرة لجميع محافظات مصر</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} Lèon Store</p>
          <p className="mt-1">
            <span className="quran-verse text-neon">{"{وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ}"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
