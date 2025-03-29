
import React, { useMemo } from "react";
import { Timer } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizTimerProps {
  timeRemaining: number;
  totalTime: number;
  mode: string;
}

const QuizTimer: React.FC<QuizTimerProps> = ({ timeRemaining, totalTime, mode }) => {
  // Get color and animation based on time remaining
  const { color, timeClass } = useMemo(() => {
    const percentage = (timeRemaining / totalTime) * 100;
    
    if (percentage <= 25) {
      return {
        color: "text-cyber-neon-pink border-cyber-neon-pink/50",
        timeClass: "text-cyber-neon-pink animate-pulse",
      };
    } else if (percentage <= 50) {
      return {
        color: "text-cyber-yellow border-cyber-yellow/50",
        timeClass: "text-cyber-yellow",
      };
    } else {
      return {
        color: "text-cyber-neon-green border-cyber-neon-green/50",
        timeClass: "text-cyber-neon-green",
      };
    }
  }, [timeRemaining, totalTime]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, [timeRemaining]);

  const progressPercentage = (timeRemaining / totalTime) * 100;

  return (
    <div className="mb-6">
      <div className={cn(
        "flex items-center justify-between px-4 py-2 bg-black/40 rounded border",
        color
      )}>
        <div className="flex items-center">
          <Timer className={timeClass} size={18} />
          <span className="ml-2 font-cyber text-sm text-white/80">
            {mode === "mode3" ? "CHALLENGE TIME" : "QUESTION TIME"}
          </span>
        </div>
        <div className={cn("font-mono font-bold", timeClass)}>
          {formattedTime}
        </div>
      </div>
      
      <div className="mt-1 h-1 bg-black/50 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-linear",
            timeRemaining <= totalTime * 0.25 ? "bg-cyber-neon-pink" :
            timeRemaining <= totalTime * 0.5 ? "bg-cyber-yellow" : 
            "bg-cyber-neon-green"
          )}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default QuizTimer;
