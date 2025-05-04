
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import products from "@/data/products";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const product = products.find((p) => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">المنتج غير موجود</h1>
            <Button onClick={() => navigate("/products")}>العودة إلى المنتجات</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleOrder = () => {
    if (!selectedSize) {
      toast({
        title: "اختر المقاس",
        description: "يرجى اختيار المقاس المناسب قبل طلب المنتج",
        variant: "destructive",
      });
      return;
    }
    
    // Open WhatsApp to order
    const message = `أريد طلب هذا المنتج: ${product.name} - كود: ${product.code} - المقاس: ${selectedSize}`;
    const whatsappUrl = `https://wa.me/201012300358?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 md:px-6">
          {/* Navigation breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <button onClick={() => navigate("/")} className="hover:text-neon">
              الرئيسية
            </button>
            <span className="mx-2">/</span>
            <button onClick={() => navigate("/products")} className="hover:text-neon">
              المنتجات
            </button>
            <span className="mx-2">/</span>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain aspect-square"
              />
            </div>

            {/* Product details */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-dark text-white">{product.category}</Badge>
                <span className="text-gray-500">كود: {product.code}</span>
              </div>
              
              <div className="text-2xl font-bold mb-6 text-neon">
                {product.price} جنيه
              </div>
              
              {product.description && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">وصف المنتج</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              )}
              
              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-3">المقاسات المتاحة</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        className={`rounded-md ${
                          selectedSize === size ? "bg-neon text-dark hover:bg-neon/90" : "hover:border-neon hover:text-neon"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">الألوان المتاحة</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="secondary" className="py-1 px-3">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  className="bg-neon text-dark hover:bg-neon/90 flex-1"
                  size="lg"
                  onClick={handleOrder}
                >
                  اطلب الآن
                </Button>
                
                <Button
                  variant="outline"
                  className="border-neon text-dark hover:bg-neon/10 flex-1"
                  size="lg"
                  onClick={() => {
                    // Open WhatsApp to inquire
                    const message = `أريد الاستفسار عن هذا المنتج: ${product.name} - كود: ${product.code}`;
                    const whatsappUrl = `https://wa.me/201012300358?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                >
                  استفسر عن المنتج
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-bold mb-2">معلومات إضافية:</h3>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• الشحن متاح لجميع محافظات مصر</li>
                  <li>• للطلب والاستفسار: 01012300358</li>
                  <li>• المنتج متوفر في المتجر بشارع الهرم كفر شكر، بنها</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetails;
