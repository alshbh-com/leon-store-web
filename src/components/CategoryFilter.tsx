
import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) => {
  const [showAll, setShowAll] = useState(false);
  
  // Display all categories or just the first 4 if showAll is false
  const displayCategories = showAll ? categories : categories.slice(0, 4);
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-3">التصنيفات</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === 'all' ? 'default' : 'outline'}
          className={`rounded-full ${
            activeCategory === 'all' ? 'bg-neon text-dark hover:bg-neon/90' : 'hover:text-neon hover:border-neon'
          }`}
          onClick={() => setActiveCategory('all')}
        >
          الكل
        </Button>
        
        {displayCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            className={`rounded-full ${
              activeCategory === category ? 'bg-neon text-dark hover:bg-neon/90' : 'hover:text-neon hover:border-neon'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
        
        {categories.length > 4 && (
          <Button
            variant="ghost"
            className="text-neon hover:text-neon/90"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'عرض أقل' : 'عرض المزيد'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
