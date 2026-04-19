import { Bell } from 'lucide-react';

export function TopAppBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md flex justify-between items-center w-full px-6 py-4 border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden border-2 border-primary-fixed">
          <img 
            alt="User Profile" 
            className="w-full h-full object-cover" 
            src="https://picsum.photos/seed/kwame/200/200"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-xl font-extrabold text-primary font-display tracking-tight">AFRISKILL</span>
      </div>
      <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
        <Bell className="w-6 h-6 text-primary" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
    </header>
  );
}
