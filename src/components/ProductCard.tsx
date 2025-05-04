
import { Link } from "react-router-dom";

interface ImageCardProps {
  id: string;
  image: string;
  title: string;
  category?: string;
}

const ImageCard = ({ id, image, title, category }: ImageCardProps) => {
  return (
    <Link to={`/products/${id}`} className="group">
      <div className="image-card bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <div className="absolute top-2 left-2 bg-dark/80 text-neon text-xs font-bold px-2 py-1 rounded">
              {category}
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-800">
          <h3 className="font-semibold text-foreground mb-1 truncate">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
