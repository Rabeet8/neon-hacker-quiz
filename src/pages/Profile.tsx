
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Trophy, Star, Zap, Award, Activity, ChevronRight, History, Settings } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { mockUser } from "@/services/mockDataService";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("stats");
  
  // XP needed for next level (example calculation)
  const nextLevelXp = 10000;
  const xpProgress = (mockUser.xp / nextLevelXp) * 100;

  return (
    <MainLayout>
      {/* Profile Header */}
      <div className="mb-8 pb-8 border-b border-cyber-neon-blue/30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Avatar & Basic Info */}
          <div className="col-span-1">
            <div className="relative">
              <div className="w-32 h-32 rounded-lg overflow-hidden border-2 border-cyber-neon-blue bg-cyber-neon-blue/10 flex items-center justify-center">
                <User className="w-16 h-16 text-cyber-neon-blue/80" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-black border border-cyber-neon-blue/50 text-cyber-neon-blue px-2 py-1 rounded font-cyber text-xs">
                LVL {mockUser.level}
              </div>
            </div>
          </div>
          
          {/* User Details */}
          <div className="col-span-3">
            <h1 className="text-3xl font-cyber text-white mb-2 flex items-center">
              {mockUser.username}
              <span className="ml-2 bg-cyber-neon-blue/10 px-2 py-0.5 rounded text-cyber-neon-blue text-sm">
                ELITE
              </span>
            </h1>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-cyber-neon-blue/80 font-cyber-alt">
                  XP: {mockUser.xp} / {nextLevelXp}
                </span>
                <span className="text-xs text-cyber-neon-blue/80 font-cyber">
                  LEVEL {mockUser.level} → {mockUser.level + 1}
                </span>
              </div>
              <Progress value={xpProgress} className="h-2 bg-black border border-cyber-neon-blue/30">
                <div className="h-full bg-gradient-to-r from-cyber-neon-blue to-cyber-neon-purple rounded-sm" />
              </Progress>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              <StatCard icon={<Trophy />} label="Total Score" value={mockUser.totalScore.toLocaleString()} />
              <StatCard icon={<Activity />} label="Accuracy" value={`${mockUser.stats.accuracy}%`} />
              <StatCard icon={<Zap />} label="Games Played" value={mockUser.stats.gamesPlayed} />
              <StatCard icon={<Award />} label="Badges" value={`${mockUser.badges.filter(b => b.unlocked).length}/${mockUser.badges.length}`} />
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => navigate('/settings')}
                className="cyber-button bg-cyber-neon-blue/10 text-cyber-neon-blue py-1.5"
              >
                <Settings size={16} />
                SETTINGS
              </button>
              <button 
                onClick={() => navigate('/leaderboard')}
                className="cyber-button bg-cyber-yellow/10 text-cyber-yellow py-1.5"
              >
                <Trophy size={16} />
                LEADERBOARD
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs for Stats/Badges/History */}
      <Tabs defaultValue="stats" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-black/30 border border-cyber-neon-blue/30 p-1 mb-6">
          <TabsTrigger 
            value="stats" 
            className={cn(
              "data-[state=active]:bg-cyber-neon-blue/20 data-[state=active]:text-cyber-neon-blue",
              "data-[state=inactive]:text-cyber-neon-blue/60 px-4 py-2 font-cyber text-sm"
            )}
          >
            <Activity size={16} className="mr-2" />
            STATS
          </TabsTrigger>
          <TabsTrigger 
            value="badges" 
            className={cn(
              "data-[state=active]:bg-cyber-neon-blue/20 data-[state=active]:text-cyber-neon-blue",
              "data-[state=inactive]:text-cyber-neon-blue/60 px-4 py-2 font-cyber text-sm"
            )}
          >
            <Award size={16} className="mr-2" />
            BADGES
          </TabsTrigger>
          <TabsTrigger 
            value="history" 
            className={cn(
              "data-[state=active]:bg-cyber-neon-blue/20 data-[state=active]:text-cyber-neon-blue",
              "data-[state=inactive]:text-cyber-neon-blue/60 px-4 py-2 font-cyber text-sm"
            )}
          >
            <History size={16} className="mr-2" />
            HISTORY
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-md p-6">
              <h3 className="text-xl font-cyber text-white mb-4">
                <span className="text-cyber-neon-blue">#</span> QUIZ STATS
              </h3>
              
              <div className="space-y-4">
                <StatRow label="Games Played" value={mockUser.stats.gamesPlayed} />
                <StatRow label="Questions Answered" value={mockUser.stats.questionsAnswered} />
                <StatRow label="Correct Answers" value={mockUser.stats.correctAnswers} />
                <StatRow label="Accuracy" value={`${mockUser.stats.accuracy}%`} />
                <StatRow label="Average Time per Question" value={`${mockUser.stats.averageTime}s`} />
              </div>
            </div>
            
            <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-md p-6">
              <h3 className="text-xl font-cyber text-white mb-4">
                <span className="text-cyber-neon-blue">#</span> ACHIEVEMENTS
              </h3>
              
              <div className="space-y-4">
                <StatRow label="Current Streak" value={mockUser.stats.currentStreak} />
                <StatRow label="Longest Streak" value={mockUser.stats.longestStreak} />
                <StatRow label="Power-Ups Used" value={mockUser.stats.powerUpsUsed} />
                <StatRow label="Total Score" value={mockUser.totalScore.toLocaleString()} />
                <StatRow label="Highest Single Quiz Score" value="3,240" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="badges">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockUser.badges.map((badge) => (
              <div 
                key={badge.id}
                className={cn(
                  "border rounded-md p-4 flex flex-col items-center text-center",
                  badge.unlocked 
                    ? "border-cyber-neon-blue/50 bg-cyber-neon-blue/5" 
                    : "border-white/10 bg-black/30 opacity-50"
                )}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-3",
                  badge.unlocked 
                    ? "bg-cyber-neon-blue/20 text-cyber-neon-blue" 
                    : "bg-white/5 text-white/20"
                )}>
                  <Award size={32} />
                </div>
                <h4 className="font-cyber text-white mb-1">{badge.name}</h4>
                <p className="text-xs text-white/60 mb-2">{badge.description}</p>
                {badge.unlocked ? (
                  <span className="text-xs text-cyber-neon-blue bg-cyber-neon-blue/10 px-2 py-0.5 rounded font-cyber">
                    UNLOCKED
                  </span>
                ) : (
                  <span className="text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded font-cyber">
                    LOCKED
                  </span>
                )}
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-md overflow-hidden">
            <div className="bg-cyber-neon-blue/10 px-4 py-2 border-b border-cyber-neon-blue/30">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-5 text-cyber-neon-blue font-cyber-alt text-sm">QUIZ</div>
                <div className="col-span-2 text-cyber-neon-blue font-cyber-alt text-sm text-center">SCORE</div>
                <div className="col-span-2 text-cyber-neon-blue font-cyber-alt text-sm text-center">ACCURACY</div>
                <div className="col-span-3 text-cyber-neon-blue font-cyber-alt text-sm text-right">DATE</div>
              </div>
            </div>
            
            {/* Example history entries */}
            {[
              { quiz: "Network Security - Challenge Mode", score: 3240, accuracy: 92, date: "2023-05-15" },
              { quiz: "Cryptography - Quick Play", score: 1860, accuracy: 80, date: "2023-05-14" },
              { quiz: "AI & Machine Learning - Survival", score: 2750, accuracy: 88, date: "2023-05-12" },
              { quiz: "Hardware Hacking - Quick Play", score: 1580, accuracy: 75, date: "2023-05-10" },
              { quiz: "Network Security - Quick Play", score: 2100, accuracy: 83, date: "2023-05-08" },
            ].map((entry, index) => (
              <div 
                key={index}
                className="px-4 py-3 border-b border-cyber-neon-blue/10 hover:bg-cyber-neon-blue/5 transition-colors"
              >
                <div className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-5 font-cyber-alt text-white/90">{entry.quiz}</div>
                  <div className="col-span-2 text-center font-cyber text-cyber-neon-blue">{entry.score}</div>
                  <div className="col-span-2 text-center">
                    <span className="bg-cyber-neon-blue/10 text-cyber-neon-blue px-2 py-0.5 rounded text-xs">
                      {entry.accuracy}%
                    </span>
                  </div>
                  <div className="col-span-3 text-right font-mono text-white/60">{entry.date}</div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

// Stat Card Component
const StatCard = ({ icon, label, value }) => (
  <div className="bg-black/30 border border-cyber-neon-blue/20 rounded p-3 flex flex-col items-center">
    <div className="text-cyber-neon-blue/80 mb-1">{icon}</div>
    <div className="text-xs text-white/60 font-cyber-alt mb-1">{label}</div>
    <div className="text-lg font-cyber text-white">{value}</div>
  </div>
);

// Stat Row Component
const StatRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-cyber-neon-blue/10 pb-2">
    <span className="text-white/70 font-cyber-alt">{label}</span>
    <span className="font-cyber text-cyber-neon-blue">{value}</span>
  </div>
);

function User(props) {
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

export default Profile;
