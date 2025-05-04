
// هذا ملف يحتوي على بيانات المنتجات

export interface Product {
  id: string;
  name: string;
  price: number;
  code: string;
  image: string;
  category: 'أحذية رجالي' | 'أحذية نسائي' | 'ملابس رجالي' | 'ملابس نسائي' | 'ملابس أطفال';
  sizes?: string[];
  colors?: string[];
  description?: string;
}

const products: Product[] = [
  {
    id: "p1",
    name: "حذاء أبيض موديل ألكسندر",
    price: 380,
    code: "16",
    image: "/lovable-uploads/dd8f50fd-7fab-47d3-9a75-f2b694333000.png",
    category: "أحذية رجالي",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["أبيض"],
    description: "حذاء رجالي أنيق من ماركة ألكسندر، مصنوع من خامات عالية الجودة"
  },
  {
    id: "p2",
    name: "حذاء فاشون أبيض",
    price: 350,
    code: "14",
    image: "/lovable-uploads/229e4db7-1e9a-47ef-8e70-844c447b324b.png",
    category: "أحذية رجالي",
    sizes: ["40", "41", "42", "43"],
    colors: ["أبيض"],
    description: "حذاء رياضي أنيق للرجال، مريح وعملي لجميع المناسبات"
  },
  {
    id: "p3",
    name: "حذاء كونفرس برتقالي",
    price: 380,
    code: "8",
    image: "/lovable-uploads/1de85695-03a6-4a56-aab2-bab7601f899d.png",
    category: "أحذية نسائي",
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["برتقالي"],
    description: "حذاء كونفرس نسائي بلون برتقالي مميز، تصميم عصري وأنيق"
  },
  {
    id: "p4",
    name: "حذاء أندرويد رجالي",
    price: 450,
    code: "6",
    image: "/lovable-uploads/947bf07a-470c-4a97-9fe7-9bb673a5fae4.png",
    category: "أحذية رجالي",
    sizes: ["41", "42", "43", "44", "45"],
    colors: ["رمادي"],
    description: "حذاء رجالي من ماركة أندرويد، مصنوع من الجلد الطبيعي عالي الجودة"
  },
  {
    id: "p5",
    name: "حذاء رياضي أبيض وبيج",
    price: 300,
    code: "5",
    image: "/lovable-uploads/269d713e-f7d0-4e72-af25-5e58e62aa83e.png",
    category: "أحذية نسائي",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    colors: ["أبيض", "بيج"],
    description: "حذاء رياضي نسائي مريح بلونين أنيقين، مناسب للاستخدام اليومي"
  },
  {
    id: "p6",
    name: "حذاء أديداس أبيض",
    price: 400,
    code: "18",
    image: "/lovable-uploads/1578dfdc-09f5-4f9e-8111-537ae68bfbd3.png",
    category: "أحذية نسائي",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    colors: ["أبيض", "أسود"],
    description: "حذاء رياضي أديداس للنساء، خفيف ومريح، مثالي للاستخدام اليومي والرياضة"
  },
  {
    id: "p7",
    name: "أحذية نيو بالانس",
    price: 450,
    code: "7",
    image: "/lovable-uploads/a95cc38c-dd6c-42ed-a947-79521b3bea3c.png",
    category: "أحذية رجالي",
    sizes: ["41", "42", "43", "44", "45"],
    colors: ["أبيض", "أسود", "أخضر", "بيج"],
    description: "مجموعة أحذية نيو بالانس الرياضية للرجال، متوفرة بعدة ألوان وتصميمات عصرية"
  },
  {
    id: "p8",
    name: "حذاء رياضي جينز",
    price: 420,
    code: "9",
    image: "/lovable-uploads/2f4e5eb7-b751-4c03-8494-5f20dc02a138.png",
    category: "أحذية رجالي",
    sizes: ["41", "42", "43", "44", "45"],
    colors: ["أزرق جينز"],
    description: "حذاء رياضي رجالي من قماش الجينز الأصلي، تصميم مميز وعصري"
  },
  {
    id: "p9",
    name: "هودي أسود",
    price: 500,
    code: "22",
    image: "/lovable-uploads/f3e2fc5e-58bc-4592-8d4f-3fb5b7dc3181.png",
    category: "ملابس رجالي",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["أسود", "بني"],
    description: "هودي رجالي أنيق باللون الأسود، مصنوع من قماش قطني عالي الجودة"
  },
  {
    id: "p10",
    name: "هودي أسود مطبوع",
    price: 550,
    code: "23",
    image: "/lovable-uploads/af36ad81-35d3-4009-979a-3cb33479e46d.png",
    category: "ملابس رجالي",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["أسود", "أبيض"],
    description: "هودي رجالي أسود مع تطريز مميز، مناسب للشتاء، قطن 100%"
  },
  {
    id: "p11",
    name: "حذاء رياضي أديداس",
    price: 480,
    code: "25",
    image: "/lovable-uploads/d1be9693-e9b9-433c-9671-a2b5b5c4f711.png",
    category: "أحذية نسائي",
    sizes: ["37", "38", "39", "40", "41"],
    colors: ["رمادي", "أزرق", "وردي"],
    description: "حذاء رياضي نسائي من أديداس مع جوارب هدية، مناسب للاستخدام اليومي والرياضة"
  },
  {
    id: "p12",
    name: "قميص أبيض بأكمام ملونة",
    price: 320,
    code: "30",
    image: "/lovable-uploads/92549683-3410-4bd4-94f0-3af3072d8f6a.png",
    category: "ملابس رجالي",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["أبيض وأزرق", "أبيض وأخضر"],
    description: "قميص رجالي أبيض بأكمام ملونة، تصميم عصري وأنيق، مناسب للمناسبات الرسمية وغير الرسمية"
  },
];

export default products;
