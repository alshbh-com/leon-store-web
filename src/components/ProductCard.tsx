
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  code: string;
  category: string;
}

const ProductCard = ({ id, image, name, price, code, category }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="group">
      <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-dark text-neon text-xs font-bold px-2 py-1 rounded">
            كود: {code}
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-1 truncate">{name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-neon font-bold">{price} جنيه</p>
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">{category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
