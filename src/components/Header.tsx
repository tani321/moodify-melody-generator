
import React from 'react';
import { Music, Calculator, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg">
            <Music className="h-5 w-5 text-white" />
          </div>
          <Link to="/">
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-mood">Moodify</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/calculator" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Calculator className="h-4 w-4" />
                Calculator
              </Link>
            </li>
            <li>
              <Link to="/sleep-journal" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                <Moon className="h-4 w-4" />
                Sleep Journal
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">My Playlists</Link>
            </li>
            <li>
              <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
