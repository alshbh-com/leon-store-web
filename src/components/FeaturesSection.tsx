
import { Truck, Award, Clock, BadgePercent } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Award className="w-10 h-10 text-neon" />,
      title: "جودة عالية",
      description: "نوفر منتجات ذات جودة عالية وخامات ممتازة",
    },
    {
      icon: <BadgePercent className="w-10 h-10 text-neon" />,
      title: "أسعار مناسبة",
      description: "أسعارنا مناسبة وتنافسية مع ضمان الجودة",
    },
    {
      icon: <Truck className="w-10 h-10 text-neon" />,
      title: "شحن لجميع المحافظات",
      description: "نوفر خدمة الشحن إلى جميع محافظات مصر",
    },
    {
      icon: <Clock className="w-10 h-10 text-neon" />,
      title: "خدمة سريعة",
      description: "وعدنا ووفينا ودايماً عند ثقة عملائنا 👌",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          لماذا تختار <span className="text-neon">Lèon Store</span>؟
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-neon transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
