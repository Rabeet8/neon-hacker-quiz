
import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuizQuestion } from "@/types/quiz";

interface QuestionDisplayProps {
  question: QuizQuestion;
  onAnswerSubmit: (answer: string) => void;
  timeRemaining: number;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  onAnswerSubmit,
  timeRemaining,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setIsRevealing(false);
    setShowFeedback(false);
  }, [question]);

  const handleOptionClick = (option: string) => {
    if (selectedAnswer || showFeedback || timeRemaining <= 0) return;
    
    setSelectedAnswer(option);
    setIsCorrect(option === question.correctAnswer);
    setShowFeedback(true);
    
    // Show feedback for a brief moment
    setTimeout(() => {
      setShowFeedback(false);
      onAnswerSubmit(option);
    }, 1000);
  };

  // Get points with time bonus
  const getPointsText = () => {
    const basePoints = question.points;
    const timeBonus = Math.floor((timeRemaining / question.timeLimit) * basePoints * 0.5);
    return `+${basePoints + timeBonus} PTS`;
  };

  return (
    <div className="animate-fade-in">
      {/* Question difficulty badge */}
      <div className="mb-2">
        <span className={cn(
          "px-2 py-0.5 rounded text-xs font-cyber uppercase",
          question.difficulty === "easy" ? "bg-cyber-neon-green/20 text-cyber-neon-green" :
          question.difficulty === "medium" ? "bg-cyber-yellow/20 text-cyber-yellow" :
          "bg-cyber-neon-pink/20 text-cyber-neon-pink"
        )}>
          {question.difficulty}
        </span>
        
        {/* Points badge */}
        <span className="ml-2 px-2 py-0.5 bg-cyber-neon-blue/10 rounded text-xs font-cyber-alt text-cyber-neon-blue">
          {timeRemaining > 0 ? getPointsText() : `+${question.points} PTS`}
        </span>
      </div>
      
      {/* Question text */}
      <div className="bg-black/40 border border-cyber-neon-blue/30 rounded-lg p-5 mb-6">
        <h2 className="text-lg md:text-xl font-cyber-alt text-white leading-tight">
          {question.question}
        </h2>
      </div>
      
      {/* Answer options */}
      <div className={cn(
        "grid gap-4",
        question.type === "multiple-choice" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
      )}>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={showFeedback || timeRemaining <= 0}
            className={cn(
              "p-4 border rounded-lg text-left transition-all duration-200",
              "hover:border-cyber-neon-blue hover:bg-cyber-neon-blue/5",
              "focus:outline-none focus:ring-2 focus:ring-cyber-neon-blue/50",
              "relative overflow-hidden group",
              selectedAnswer === option && showFeedback
                ? isCorrect
                  ? "border-cyber-neon-green bg-cyber-neon-green/10"
                  : "border-cyber-neon-pink bg-cyber-neon-pink/10"
                : "border-white/10 bg-black/30"
            )}
          >
            {/* Option label */}
            <div className="flex items-start gap-3">
              <div className={cn(
                "flex items-center justify-center w-6 h-6 rounded-full border text-sm font-bold",
                selectedAnswer === option && showFeedback
                  ? isCorrect
                    ? "border-cyber-neon-green text-cyber-neon-green"
                    : "border-cyber-neon-pink text-cyber-neon-pink"
                  : "border-cyber-neon-blue/50 text-cyber-neon-blue group-hover:border-cyber-neon-blue"
              )}>
                {String.fromCharCode(65 + index)}
              </div>
              
              <span className={cn(
                "font-cyber-alt",
                selectedAnswer === option && showFeedback
                  ? isCorrect
                    ? "text-cyber-neon-green"
                    : "text-cyber-neon-pink"
                  : "text-white"
              )}>
                {option}
              </span>
            </div>
            
            {/* Feedback icon */}
            {selectedAnswer === option && showFeedback && (
              <div className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2",
                "flex items-center justify-center w-6 h-6 rounded-full",
                isCorrect ? "bg-cyber-neon-green" : "bg-cyber-neon-pink"
              )}>
                {isCorrect ? (
                  <Check className="text-black" size={16} />
                ) : (
                  <X className="text-black" size={16} />
                )}
              </div>
            )}
            
            {/* Background glow effect */}
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity",
              "bg-gradient-to-r from-transparent via-cyber-neon-blue/20 to-transparent",
              selectedAnswer === option && showFeedback
                ? isCorrect
                  ? "opacity-30 !bg-cyber-neon-green/20"
                  : "opacity-30 !bg-cyber-neon-pink/20"
                : ""
            )} />
          </button>
        ))}
      </div>
      
      {/* Time's up message */}
      {timeRemaining <= 0 && !showFeedback && (
        <div className="mt-6 text-center">
          <div className="inline-block px-4 py-2 bg-cyber-neon-pink/10 border border-cyber-neon-pink/30 rounded">
            <p className="text-cyber-neon-pink font-cyber animate-pulse">TIME'S UP!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionDisplay;
