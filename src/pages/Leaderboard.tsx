
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trophy, Calendar, Star, Users, User, ArrowRight, ArrowLeft } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { mockLeaderboard } from "@/services/mockDataService";
import { LeaderboardType } from "@/types/quiz";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const Leaderboard = () => {
  const navigate = useNavigate();
  const [leaderboardType, setLeaderboardType] = useState<LeaderboardType>("all-time");
  
  return (
    <MainLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-cyber text-white mb-2">
          <span className="text-cyber-yellow">#</span> LEADERBOARD
        </h1>
        <p className="text-cyber-yellow/70 font-cyber-alt">
          Top quiz performers in the cyberpunk realm
        </p>
      </div>
      
      {/* Leaderboard Tabs */}
      <Tabs defaultValue="all-time" className="mb-8" onValueChange={(value) => setLeaderboardType(value as LeaderboardType)}>
        <TabsList className="bg-black/30 border border-cyber-yellow/30 p-1">
          <TabsTrigger 
            value="daily" 
            className={cn(
              "data-[state=active]:bg-cyber-yellow/20 data-[state=active]:text-cyber-yellow",
              "data-[state=inactive]:text-cyber-yellow/60 px-4 py-2 font-cyber text-sm"
            )}
          >
            <Calendar size={16} className="mr-2" />
            DAILY
          </TabsTrigger>
          <TabsTrigger 
            value="weekly" 
            className={cn(
              "data-[state=active]:bg-cyber-yellow/20 data-[state=active]:text-cyber-yellow",
              "data-[state=inactive]:text-cyber-yellow/60 px-4 py-2 font-cyber text-sm"
            )}
          >
            <Star size={16} className="mr-2" />
            WEEKLY
          </TabsTrigger>
          <TabsTrigger 
            value="all-time" 
            className={cn(
              "data-[state=active]:bg-cyber-yellow/20 data-[state=active]:text-cyber-yellow",
              "data-[state=inactive]:text-cyber-yellow/60 px-4 py-2 font-cyber text-sm"
            )}
          >
            <Trophy size={16} className="mr-2" />
            ALL-TIME
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="daily" className="mt-4">
          <LeaderboardTable data={mockLeaderboard.slice().sort((a, b) => b.score - a.score)} />
        </TabsContent>
        <TabsContent value="weekly" className="mt-4">
          <LeaderboardTable data={mockLeaderboard.slice().sort((a, b) => b.score - a.score)} />
        </TabsContent>
        <TabsContent value="all-time" className="mt-4">
          <LeaderboardTable data={mockLeaderboard.slice().sort((a, b) => b.score - a.score)} />
        </TabsContent>
      </Tabs>
      
      {/* Friend Challenge */}
      <div className="bg-black/30 border border-cyber-yellow/30 rounded-md p-6 mb-8">
        <h2 className="text-xl font-cyber text-white mb-4">
          <span className="text-cyber-yellow">#</span> CHALLENGE FRIENDS
        </h2>
        <p className="text-cyber-yellow/70 font-cyber-alt mb-4">
          Compete against your network and climb the ranks together
        </p>
        <button 
          onClick={() => navigate('/friends')}
          className="cyber-button bg-cyber-yellow/10 border-cyber-yellow/50 text-cyber-yellow hover:bg-cyber-yellow/20"
        >
          <Users size={16} />
          FRIENDS LEADERBOARD
          <ArrowRight size={16} />
        </button>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between">
        <button 
          onClick={() => navigate('/')}
          className="text-cyber-neon-blue flex items-center gap-1 hover:text-cyber-neon-blue/80 transition-colors"
        >
          <ArrowLeft size={16} />
          BACK TO HOME
        </button>
        <button 
          onClick={() => navigate('/profile')}
          className="text-cyber-neon-blue flex items-center gap-1 hover:text-cyber-neon-blue/80 transition-colors"
        >
          MY PROFILE
          <ArrowRight size={16} />
        </button>
      </div>
    </MainLayout>
  );
};

// Leaderboard Table Component
const LeaderboardTable = ({ data }) => {
  return (
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
      
      {data.map((entry, index) => (
        <div 
          key={entry.userId}
          className={cn(
            "px-4 py-3 border-b border-cyber-yellow/10 hover:bg-cyber-yellow/5 transition-colors",
            index === 0 ? "bg-cyber-yellow/10" : ""
          )}
        >
          <div className="grid grid-cols-12 gap-2 items-center">
            <div className={cn(
              "col-span-1 font-cyber",
              index === 0 ? "text-cyber-yellow" : "text-cyber-yellow/80"
            )}>
              {index + 1}
            </div>
            <div className="col-span-5 flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                index === 0 ? "bg-cyber-yellow/30" : "bg-cyber-yellow/20"
              )}>
                <User size={16} className="text-cyber-yellow" />
              </div>
              <span className="font-cyber-alt text-white">{entry.username}</span>
              {index === 0 && (
                <span className="ml-2">
                  <Trophy size={16} className="text-cyber-yellow animate-pulse" />
                </span>
              )}
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
  );
};

export default Leaderboard;
