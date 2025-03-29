
import React from "react";
import { Trophy, Award, Clock, Star, BarChart, Home, RefreshCcw } from "lucide-react";
import { QuizResult } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface ResultsScreenProps {
  result: QuizResult;
  onTryAgain: () => void;
  onBackToHome: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  result,
  onTryAgain,
  onBackToHome,
}) => {
  // Format the time taken
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Stats cards configuration
  const statsCards = [
    {
      label: "SCORE",
      value: result.score.toLocaleString(),
      icon: <Trophy className="text-cyber-yellow" />,
      color: "border-cyber-yellow/40 bg-cyber-yellow/5",
      textColor: "text-cyber-yellow"
    },
    {
      label: "ACCURACY",
      value: `${result.accuracy}%`,
      icon: <Award className="text-cyber-neon-green" />,
      color: "border-cyber-neon-green/40 bg-cyber-neon-green/5",
      textColor: "text-cyber-neon-green"
    },
    {
      label: "TIME",
      value: formatTime(result.timeTaken),
      icon: <Clock className="text-cyber-neon-blue" />,
      color: "border-cyber-neon-blue/40 bg-cyber-neon-blue/5",
      textColor: "text-cyber-neon-blue"
    },
    {
      label: "STREAK",
      value: result.streak.toString(),
      icon: <Star className="text-cyber-neon-pink" />,
      color: "border-cyber-neon-pink/40 bg-cyber-neon-pink/5",
      textColor: "text-cyber-neon-pink"
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-cyber text-white mb-2">
          QUIZ <span className="text-cyber-neon-blue">COMPLETED</span>
        </h1>
        <p className="text-cyber-neon-blue/80 font-cyber-alt">
          {result.correctAnswers} of {result.totalQuestions} questions answered correctly
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className={cn(
              "border rounded-lg p-4 flex flex-col items-center justify-center",
              "transition-all duration-300 hover:scale-[1.03]",
              card.color
            )}
          >
            <div className="p-2 rounded-full bg-black/30 mb-2">
              {card.icon}
            </div>
            <span className={cn("text-lg md:text-xl font-cyber", card.textColor)}>
              {card.value}
            </span>
            <span className="text-xs text-white/60 font-cyber-alt mt-1">
              {card.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* XP Badge */}
      <div className="bg-black/40 border border-cyber-neon-blue/30 rounded-lg p-4 mb-8 flex justify-between items-center">
        <div className="flex items-center">
          <BarChart className="text-cyber-neon-blue mr-3" />
          <div>
            <p className="text-white font-cyber-alt">EXPERIENCE EARNED</p>
            <p className="text-xs text-white/60">
              Keep playing to level up and unlock achievements
            </p>
          </div>
        </div>
        <div className="px-3 py-1 bg-cyber-neon-blue/20 rounded">
          <span className="text-cyber-neon-blue font-cyber">
            +{result.xpEarned} XP
          </span>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onTryAgain}
          className="cyber-button bg-cyber-neon-blue/10 flex-1 flex items-center justify-center gap-2"
        >
          <RefreshCcw size={16} />
          TRY AGAIN
        </button>
        <button
          onClick={onBackToHome}
          className="cyber-button bg-cyber-yellow/10 flex-1 flex items-center justify-center gap-2"
        >
          <Home size={16} />
          BACK TO HOME
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-10 pointer-events-none">
        <div className="absolute w-full h-full border-t border-l border-cyber-neon-blue/30 rounded-tl-full"></div>
        <div className="absolute w-3/4 h-3/4 top-1/4 right-1/4 border-t border-l border-cyber-neon-blue/30 rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default ResultsScreen;
