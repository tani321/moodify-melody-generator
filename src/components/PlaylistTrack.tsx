
import React from 'react';
import { Play, PauseCircle } from 'lucide-react';

export interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  albumArt: string;
}

interface PlaylistTrackProps {
  track: Track;
  isPlaying: boolean;
  onPlay: () => void;
  index: number;
}

const PlaylistTrack: React.FC<PlaylistTrackProps> = ({ track, isPlaying, onPlay, index }) => {
  return (
    <div 
      className={`flex items-center gap-3 p-2 rounded-lg hover:bg-muted/60 transition-colors ${
        isPlaying ? 'bg-muted/80' : ''
      }`}
    >
      <span className="w-6 text-center text-muted-foreground">{index + 1}</span>
      <button 
        onClick={onPlay}
        className="p-1 rounded-full hover:bg-primary/10 text-primary"
      >
        {isPlaying ? <PauseCircle size={18} /> : <Play size={18} />}
      </button>
      
      <div className="h-10 w-10 rounded-md overflow-hidden">
        <img src={track.albumArt} alt={track.title} className="h-full w-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm truncate">{track.title}</h4>
        <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
      </div>
      
      <span className="text-xs text-muted-foreground">{track.duration}</span>
    </div>
  );
};

export default PlaylistTrack;
