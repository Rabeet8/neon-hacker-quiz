
import React from "react";
import { Shield, Heart, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Quiz } from "@/types/quiz";

interface QuizHeaderProps {
  quiz: Quiz;
  currentQuestion: number;
  totalQuestions: string;
  streak: number;
  lives?: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  quiz,
  currentQuestion,
  totalQuestions,
  streak,
  lives
}) => {
  return (
    <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-lg mb-6 p-4">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded bg-black/70 border border-cyber-neon-blue/30">
            <Shield className="h-5 w-5 text-cyber-neon-blue" />
          </div>
          <div>
            <h1 className="font-cyber text-lg md:text-xl text-white">
              {quiz.category.name}
            </h1>
            <p className="text-xs text-cyber-neon-blue/80 font-cyber-alt">
              {quiz.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Progress indicator */}
          <div className="px-3 py-1 bg-black/50 rounded border border-cyber-neon-blue/30 flex items-center">
            <span className="text-cyber-neon-blue font-cyber text-sm mr-1">Q</span>
            <span className="text-white font-cyber text-sm">
              {currentQuestion}/{totalQuestions}
            </span>
          </div>

          {/* Streak counter */}
          <div className="px-3 py-1 bg-black/50 rounded border border-cyber-neon-pink/30 flex items-center">
            <span className="text-cyber-neon-pink font-cyber text-sm mr-1">STREAK</span>
            <span className="text-white font-cyber text-sm">
              {streak}
            </span>
          </div>

          {/* Lives indicator - only shown in survival mode */}
          {lives !== undefined && (
            <div className="px-3 py-1 bg-black/50 rounded border border-cyber-neon-green/30 flex items-center">
              <span className="text-cyber-neon-green font-cyber text-sm mr-1">LIVES</span>
              <div className="flex space-x-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Heart
                    key={i}
                    size={14}
                    className={cn(
                      i < lives ? "text-cyber-neon-green" : "text-cyber-neon-green/30",
                      "transition-colors duration-300"
                    )}
                    fill={i < lives ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 bg-cyber-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-cyber-neon-blue rounded-full"
          style={{
            width: `${(currentQuestion / Number(totalQuestions === "∞" ? 50 : totalQuestions)) * 100}%`,
            transition: "width 0.5s ease"
          }}
        />
      </div>
    </div>
  );
};

export default QuizHeader;
