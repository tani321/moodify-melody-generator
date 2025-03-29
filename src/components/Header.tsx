
import React from 'react';
import { Music } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg">
            <Music className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-mood">Moodify</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">My Playlists</a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
