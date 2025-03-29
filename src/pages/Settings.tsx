
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VolumeX, Volume2, Eye, EyeOff, Monitor, Moon, Sun, Bell, BellOff, User, LogOut } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const Settings = () => {
  const navigate = useNavigate();
  
  // Settings state
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [soundVolume, setSoundVolume] = useState(80);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [musicVolume, setMusicVolume] = useState(60);
  const [darkMode, setDarkMode] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [profileVisible, setProfileVisible] = useState(true);
  
  return (
    <MainLayout>
      {/* Settings Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-cyber text-white mb-2">
          <span className="text-cyber-neon-blue">#</span> SETTINGS
        </h1>
        <p className="text-cyber-neon-blue/70 font-cyber-alt">
          Configure your NeonQuiz experience
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Audio Settings */}
        <div className="md:col-span-2">
          <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-md overflow-hidden mb-6">
            <div className="bg-cyber-neon-blue/10 px-6 py-3 border-b border-cyber-neon-blue/30">
              <h2 className="font-cyber text-white text-lg">AUDIO SETTINGS</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Sound Effects */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {soundEnabled ? (
                      <Volume2 className="text-cyber-neon-blue h-5 w-5" />
                    ) : (
                      <VolumeX className="text-cyber-neon-blue/50 h-5 w-5" />
                    )}
                    <span className="font-cyber-alt text-white">Sound Effects</span>
                  </div>
                  <Switch 
                    checked={soundEnabled} 
                    onCheckedChange={setSoundEnabled}
                    className="data-[state=checked]:bg-cyber-neon-blue"
                  />
                </div>
                
                <div className={cn("flex gap-4 items-center pl-8", !soundEnabled && "opacity-50")}>
                  <span className="text-xs text-white/70 w-16">Volume</span>
                  <Slider
                    disabled={!soundEnabled}
                    value={[soundVolume]}
                    onValueChange={(value) => setSoundVolume(value[0])}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-xs text-white/70 w-8 text-right">{soundVolume}%</span>
                </div>
                
                <Separator className="bg-cyber-neon-blue/10" />
                
                {/* Background Music */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {musicEnabled ? (
                      <Volume2 className="text-cyber-neon-purple h-5 w-5" />
                    ) : (
                      <VolumeX className="text-cyber-neon-purple/50 h-5 w-5" />
                    )}
                    <span className="font-cyber-alt text-white">Background Music</span>
                  </div>
                  <Switch 
                    checked={musicEnabled} 
                    onCheckedChange={setMusicEnabled}
                    className="data-[state=checked]:bg-cyber-neon-purple"
                  />
                </div>
                
                <div className={cn("flex gap-4 items-center pl-8", !musicEnabled && "opacity-50")}>
                  <span className="text-xs text-white/70 w-16">Volume</span>
                  <Slider
                    disabled={!musicEnabled}
                    value={[musicVolume]}
                    onValueChange={(value) => setMusicVolume(value[0])}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-xs text-white/70 w-8 text-right">{musicVolume}%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Display Settings */}
          <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-md overflow-hidden">
            <div className="bg-cyber-neon-blue/10 px-6 py-3 border-b border-cyber-neon-blue/30">
              <h2 className="font-cyber text-white text-lg">DISPLAY SETTINGS</h2>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Dark Mode */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {darkMode ? (
                    <Moon className="text-cyber-neon-green h-5 w-5" />
                  ) : (
                    <Sun className="text-cyber-yellow h-5 w-5" />
                  )}
                  <span className="font-cyber-alt text-white">Dark Mode</span>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode}
                  className="data-[state=checked]:bg-cyber-neon-green"
                />
              </div>
              
              <Separator className="bg-cyber-neon-blue/10" />
              
              {/* Display Settings */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Monitor className="text-cyber-neon-blue h-5 w-5" />
                  <span className="font-cyber-alt text-white">Full Screen Mode</span>
                </div>
                <button 
                  className="cyber-button py-1 px-3 text-xs bg-cyber-neon-blue/10 text-cyber-neon-blue"
                >
                  TOGGLE
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Account and Notifications */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-md overflow-hidden">
            <div className="bg-cyber-neon-blue/10 px-6 py-3 border-b border-cyber-neon-blue/30">
              <h2 className="font-cyber text-white text-lg">NOTIFICATIONS</h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {notificationsEnabled ? (
                    <Bell className="text-cyber-neon-pink h-5 w-5" />
                  ) : (
                    <BellOff className="text-cyber-neon-pink/50 h-5 w-5" />
                  )}
                  <span className="font-cyber-alt text-white">All Notifications</span>
                </div>
                <Switch 
                  checked={notificationsEnabled} 
                  onCheckedChange={setNotificationsEnabled}
                  className="data-[state=checked]:bg-cyber-neon-pink"
                />
              </div>
            </div>
          </div>
          
          {/* Account Settings */}
          <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-md overflow-hidden">
            <div className="bg-cyber-neon-blue/10 px-6 py-3 border-b border-cyber-neon-blue/30">
              <h2 className="font-cyber text-white text-lg">ACCOUNT</h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {profileVisible ? (
                    <Eye className="text-cyber-neon-blue h-5 w-5" />
                  ) : (
                    <EyeOff className="text-cyber-neon-blue/50 h-5 w-5" />
                  )}
                  <span className="font-cyber-alt text-white">Public Profile</span>
                </div>
                <Switch 
                  checked={profileVisible} 
                  onCheckedChange={setProfileVisible}
                  className="data-[state=checked]:bg-cyber-neon-blue"
                />
              </div>
              
              <Separator className="bg-cyber-neon-blue/10" />
              
              <div className="space-y-4">
                <button 
                  onClick={() => navigate('/profile')}
                  className="w-full cyber-button py-2 bg-cyber-neon-blue/10 text-cyber-neon-blue justify-between"
                >
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    EDIT PROFILE
                  </div>
                  <ChevronRight size={16} />
                </button>
                
                <button 
                  className="w-full cyber-button py-2 bg-cyber-neon-red/10 text-cyber-neon-red justify-between"
                >
                  <div className="flex items-center gap-2">
                    <LogOut size={16} />
                    LOG OUT
                  </div>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          
          {/* About */}
          <div className="bg-black/30 border border-cyber-neon-blue/30 rounded-md p-6">
            <div className="text-center">
              <h3 className="font-cyber text-white mb-2">NEONQUIZ</h3>
              <p className="text-xs text-cyber-neon-blue/70 mb-4">Version 1.0.0</p>
              <p className="text-xs text-white/60 mb-2">© 2023 NEONQUIZ</p>
              <div className="flex justify-center gap-4 text-xs text-cyber-neon-blue/70">
                <a href="#" className="hover:text-cyber-neon-blue">Terms</a>
                <a href="#" className="hover:text-cyber-neon-blue">Privacy</a>
                <a href="#" className="hover:text-cyber-neon-blue">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

function ChevronRight(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export default Settings;
