
import React from "react";
import { Link } from "react-router-dom";
import { User, Menu, Home, Award, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cyber-dark relative overflow-hidden">
      {/* Scan line effect */}
      <div className="scan-line" />
      
      {/* Background grid overlay */}
      <div className="fixed inset-0 bg-cyber-grid opacity-10 pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-md bg-cyber-neon-blue/20 border border-cyber-neon-blue flex items-center justify-center">
                <span className="text-cyber-neon-blue font-cyber text-xl">N</span>
              </div>
              <h1 className="text-2xl font-cyber text-white tracking-wider">
                NEON<span className="text-cyber-neon-blue">QUIZ</span>
              </h1>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/" icon={<Home size={18} />} label="Home" />
              <NavLink to="/leaderboard" icon={<Award size={18} />} label="Leaderboard" />
              <NavLink to="/profile" icon={<User size={18} />} label="Profile" />
              <NavLink to="/settings" icon={<Settings size={18} />} label="Settings" />
            </nav>
            
            <div className="md:hidden">
              <button className="cyber-button py-1 px-3">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main>{children}</main>
        
        {/* Footer */}
        <footer className="mt-12 pb-6">
          <div className="border-t border-cyber-neon-blue/30 pt-6 text-center text-sm text-cyber-neon-blue/60 font-cyber-alt">
            NEONQUIZ © 2023 • HACK THE SYSTEM • ACCESS KNOWLEDGE
          </div>
        </footer>
      </div>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, label, active }) => {
  return (
    <Link
      to={to}
      className={cn(
        "relative flex items-center gap-1.5 px-3 py-1.5 font-cyber-alt text-sm transition-colors",
        "text-cyber-neon-blue hover:text-cyber-neon-blue/90 group"
      )}
    >
      <span className="text-cyber-neon-blue/80 group-hover:text-cyber-neon-blue transition-colors">
        {icon}
      </span>
      {label}
      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyber-neon-blue/50 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
    </Link>
  );
};

export default MainLayout;
