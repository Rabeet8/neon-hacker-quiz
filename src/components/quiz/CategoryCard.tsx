import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Brain, KeySquare, Terminal } from "lucide-react";
import { QuizCategory } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: QuizCategory;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/category/${category.id}`);
    }
  };

  // Map category icons to Lucide components
  const IconComponent = () => {
    switch (category.icon) {
      case "shield":
        return <Shield className="h-6 w-6 text-cyber-neon-blue" />;
      case "brain-circuit":
        return <Brain className="h-6 w-6 text-cyber-neon-purple" />;
      case "key-square":
        return <KeySquare className="h-6 w-6 text-cyber-neon-green" />;
      case "terminal":
        return <Terminal className="h-6 w-6 text-cyber-neon-pink" />;
      default:
        return <Shield className="h-6 w-6 text-cyber-neon-blue" />;
    }
  };

  return (
    <div 
      className={cn(
        "cyber-card group cursor-pointer transition-transform hover:scale-[1.02] hover:-translate-y-1",
        "border-cyber-neon-blue/40 hover:border-cyber-neon-blue/80"
      )}
      onClick={handleClick}
    >
      <div className="relative overflow-hidden rounded h-32 mb-3 bg-gradient-to-br from-black to-cyber-dark">
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-40 transition-opacity">
          <div className="text-cyber-neon-blue animate-pulse-neon scale-[2.5]">
            <IconComponent />
          </div>
        </div>
      </div>
      
      <div className="px-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1 rounded bg-black/50 border border-cyber-neon-blue/30">
            <IconComponent />
          </div>
          <h3 className="font-cyber text-lg text-white">{category.name}</h3>
        </div>
        <p className="text-sm text-cyber-neon-blue/70 font-cyber-alt line-clamp-2">
          {category.description}
        </p>
      </div>
      
      <div className="mt-3 pt-2 border-t border-cyber-neon-blue/20 flex justify-between items-center">
        <span className="text-xs text-cyber-neon-blue/60 font-cyber-alt">
          4 QUIZ MODES
        </span>
        <span className="text-cyber-neon-blue group-hover:translate-x-1 transition-transform text-sm flex items-center">
          SELECT <span className="ml-1">→</span>
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
