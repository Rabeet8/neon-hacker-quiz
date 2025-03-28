
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Zap, Trophy, Star } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import CategoryCard from "@/components/quiz/CategoryCard";
import ModeCard from "@/components/quiz/ModeCard";
import { mockCategories, mockQuizModes, mockLeaderboard } from "@/services/mockDataService";

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleStartQuiz = (categoryId: string, modeId: string) => {
    navigate(`/quiz/${categoryId}/${modeId}`);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-black/30 rounded-lg overflow-hidden mb-10 border border-cyber-neon-blue/40">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-neon-purple/10 to-cyber-neon-blue/10"></div>
        
        <div className="relative z-10 py-12 px-6 md:px-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-cyber text-white mb-4">
            NEON<span className="text-cyber-neon-blue">QUIZ</span>
          </h1>
          <p className="text-lg md:text-xl font-cyber-alt text-cyber-neon-blue/80 max-w-2xl mb-6">
            Test your knowledge in the cyberpunk realm with timed challenges, 
            power-ups and competitive leaderboards
          </p>
          <button 
            onClick={() => setSelectedCategory(mockCategories[0].id)}
            className="cyber-button flex items-center gap-2 bg-cyber-neon-blue/10"
          >
            <Zap size={16} />
            START QUICK QUIZ
            <ArrowRight size={16} />
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
          <div className="absolute w-full h-full border-t border-l border-cyber-neon-blue/30 rounded-tl-full"></div>
          <div className="absolute w-3/4 h-3/4 top-1/4 right-1/4 border-t border-l border-cyber-neon-blue/30 rounded-tl-full"></div>
          <div className="absolute w-1/2 h-1/2 top-1/2 right-1/2 border-t border-l border-cyber-neon-blue/30 rounded-tl-full"></div>
        </div>
      </div>

      {!selectedCategory ? (
        <>
          {/* Categories Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-cyber text-white">
                <span className="text-cyber-neon-blue">#</span> QUIZ CATEGORIES
              </h2>
              <button className="text-cyber-neon-blue/80 text-sm font-cyber hover:text-cyber-neon-blue flex items-center gap-1">
                VIEW ALL <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockCategories.map((category) => (
                <CategoryCard 
                  key={category.id} 
                  category={category}
                  onClick={() => setSelectedCategory(category.id)}
                />
              ))}
            </div>
          </div>
          
          {/* Top Players Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-cyber text-white">
                <span className="text-cyber-yellow">#</span> TOP HACKERS
              </h2>
              <button 
                onClick={() => navigate('/leaderboard')}
                className="text-cyber-yellow/80 text-sm font-cyber hover:text-cyber-yellow flex items-center gap-1"
              >
                LEADERBOARD <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="bg-black/30 border border-cyber-yellow/20 rounded-md overflow-hidden">
              <div className="bg-cyber-yellow/10 px-4 py-2 border-b border-cyber-yellow/20">
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-1 text-cyber-yellow font-cyber-alt text-sm">#</div>
                  <div className="col-span-5 text-cyber-yellow font-cyber-alt text-sm">USER</div>
                  <div className="col-span-2 text-cyber-yellow font-cyber-alt text-sm text-center">LVL</div>
                  <div className="col-span-2 text-cyber-yellow font-cyber-alt text-sm text-right">SCORE</div>
                  <div className="col-span-2 text-cyber-yellow font-cyber-alt text-sm text-right">TIME</div>
                </div>
              </div>
              
              {mockLeaderboard.slice(0, 5).map((entry, index) => (
                <div 
                  key={entry.userId}
                  className="px-4 py-3 border-b border-cyber-yellow/10 hover:bg-cyber-yellow/5 transition-colors"
                >
                  <div className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-1 font-cyber text-cyber-yellow/80">{index + 1}</div>
                    <div className="col-span-5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyber-yellow/20 flex items-center justify-center">
                        <User size={16} className="text-cyber-yellow" />
                      </div>
                      <span className="font-cyber-alt text-white">{entry.username}</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="bg-cyber-yellow/10 text-cyber-yellow px-2 py-0.5 rounded text-xs font-cyber">
                        LVL {entry.level}
                      </span>
                    </div>
                    <div className="col-span-2 text-right font-cyber text-white/90">{entry.score.toLocaleString()}</div>
                    <div className="col-span-2 text-right font-mono text-cyber-yellow/80">
                      {Math.floor(entry.timeTaken / 60)}:{(entry.timeTaken % 60).toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Quiz Mode Selection */
        <div>
          <div className="flex items-center gap-2 mb-6">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="text-cyber-neon-blue hover:text-cyber-neon-blue/80"
            >
              ← BACK
            </button>
            <h2 className="text-xl font-cyber text-white">
              SELECT QUIZ MODE
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockQuizModes.map((mode) => (
              <ModeCard 
                key={mode.id} 
                mode={mode} 
                selectedCategoryId={selectedCategory}
                onClick={() => handleStartQuiz(selectedCategory, mode.id)}
              />
            ))}
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Index;

function User(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
