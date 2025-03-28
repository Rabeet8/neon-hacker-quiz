
import React from "react";
import { Zap, Heart, Swords } from "lucide-react";
import { QuizMode } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface ModeCardProps {
  mode: QuizMode;
  selectedCategoryId: string;
  onClick: () => void;
}

const ModeCard: React.FC<ModeCardProps> = ({ mode, onClick }) => {
  // Map mode icons to Lucide components
  const IconComponent = () => {
    switch (mode.icon) {
      case "zap":
        return <Zap className="h-5 w-5" />;
      case "heart":
        return <Heart className="h-5 w-5" />;
      case "swords":
        return <Swords className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  // Define color styles based on mode
  const getModeColors = () => {
    switch (mode.id) {
      case "mode1": // Quick Play
        return {
          border: "border-cyber-neon-blue/40 hover:border-cyber-neon-blue/80",
          icon: "text-cyber-neon-blue",
          bgGlow: "from-cyber-neon-blue/5 to-transparent"
        };
      case "mode2": // Survival
        return {
          border: "border-cyber-neon-green/40 hover:border-cyber-neon-green/80",
          icon: "text-cyber-neon-green",
          bgGlow: "from-cyber-neon-green/5 to-transparent"
        };
      case "mode3": // Challenge
        return {
          border: "border-cyber-neon-pink/40 hover:border-cyber-neon-pink/80",
          icon: "text-cyber-neon-pink",
          bgGlow: "from-cyber-neon-pink/5 to-transparent"
        };
      default:
        return {
          border: "border-cyber-neon-blue/40 hover:border-cyber-neon-blue/80",
          icon: "text-cyber-neon-blue",
          bgGlow: "from-cyber-neon-blue/5 to-transparent"
        };
    }
  };

  const colors = getModeColors();

  return (
    <div 
      className={cn(
        "cyber-card group cursor-pointer transition-all hover:scale-[1.02]",
        "flex flex-col h-full",
        colors.border
      )}
      onClick={onClick}
    >
      <div className="relative">
        <div className={cn(
          "absolute -inset-1 rounded-lg bg-gradient-to-b opacity-50",
          colors.bgGlow
        )} />
      
        <div className="flex items-center gap-2 mb-2">
          <div className={cn(
            "p-2 rounded bg-black/70 border border-white/5",
            colors.icon
          )}>
            <IconComponent />
          </div>
          <h3 className="font-cyber text-white text-lg tracking-wide">{mode.name}</h3>
        </div>
      </div>
      
      <p className="text-sm text-white/70 font-cyber-alt mb-4">
        {mode.description}
      </p>
      
      <div className="mt-auto">
        <div className="text-xs text-white/50 font-cyber mb-1">RULES:</div>
        <ul className="space-y-1">
          {mode.rules.map((rule, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs">
              <span className={cn("text-xs mt-0.5", colors.icon)}>•</span>
              <span className="text-white/70">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-3 pt-2 border-t border-white/10 flex justify-end">
        <span className={cn("group-hover:translate-x-1 transition-transform text-sm flex items-center", colors.icon)}>
          START <span className="ml-1">→</span>
        </span>
      </div>
    </div>
  );
};

export default ModeCard;
