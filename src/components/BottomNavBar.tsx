import { LayoutDashboard, GraduationCap, Sparkles, Briefcase, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface BottomNavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function BottomNavBar({ activeTab, setActiveTab }: BottomNavBarProps) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'learn', label: 'Learn', icon: GraduationCap },
    { id: 'ai', label: 'AI', icon: Sparkles },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 backdrop-blur-lg border-t border-gray-100">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center px-2 py-1 transition-all duration-300 relative",
              isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary-fixed rounded-2xl -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <Icon className={cn("w-6 h-6", isActive && "fill-current")} />
            <span className="text-[10px] font-bold uppercase tracking-wider mt-1">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
