
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <h1 className="text-7xl font-bold text-dark mb-4">404</h1>
          <div className="h-2 w-20 bg-neon mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold mb-4">الصفحة غير موجودة</h2>
          <p className="text-gray-600 mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو تغيير اسمها.
          </p>
          <Button asChild className="bg-neon text-dark hover:bg-neon/90">
            <Link to="/">العودة إلى الصفحة الرئيسية</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
