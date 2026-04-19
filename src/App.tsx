import { useState } from 'react';
import { TopAppBar } from './components/TopAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { Dashboard } from './components/Dashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#f8f9fa] selection:bg-primary/20">
      <TopAppBar />
      
      <main>
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab !== 'dashboard' && (
          <div className="flex flex-col items-center justify-center p-20 text-gray-400 italic">
            <p className="text-xl font-display font-bold mb-2 text-gray-300">Coming Soon</p>
            <p className="text-sm">The {activeTab} section is under development.</p>
          </div>
        )}
      </main>

      <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

