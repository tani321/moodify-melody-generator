
import React, { useState } from 'react';
import PlaylistTrack, { Track } from './PlaylistTrack';
import { Button } from '@/components/ui/button';
import { Disc3, Download, Heart, ListMusic, Share2 } from 'lucide-react';
import { MoodType } from './MoodCard';
import { useToast } from '@/components/ui/use-toast';

interface PlaylistViewProps {
  tracks: Track[];
  selectedMood: MoodType;
  duration: number;
}

const getMoodTitle = (mood: MoodType): string => {
  switch (mood) {
    case 'happy': return 'Happy Vibes';
    case 'calm': return 'Calm & Relaxed';
    case 'focus': return 'Deep Focus';
    case 'energetic': return 'Energy Boost';
    case 'melancholy': return 'Reflective Mood';
    default: return 'Custom Playlist';
  }
};

const PlaylistView: React.FC<PlaylistViewProps> = ({ tracks, selectedMood, duration }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  const handlePlay = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Removed from library" : "Saved to library",
      description: isSaved ? 
        "This playlist has been removed from your library" : 
        "This playlist has been saved to your library",
    });
  };

  const handleExport = () => {
    toast({
      title: "Playlist exported",
      description: "Your playlist has been copied to clipboard",
    });
  };

  // Calculate total duration
  const totalDuration = tracks.reduce((acc, track) => {
    const [mins, secs] = track.duration.split(':').map(Number);
    return acc + mins * 60 + secs;
  }, 0);
  
  const formattedTotalDuration = `${Math.floor(totalDuration / 60)}:${(totalDuration % 60).toString().padStart(2, '0')}`;

  return (
    <div className="bg-card rounded-xl border p-6 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-48 h-48 bg-gradient-to-br from-mood-focus to-mood-melancholy rounded-lg flex items-center justify-center shadow-md">
          <Disc3 className="h-16 w-16 text-white animate-pulse-subtle" />
        </div>
        
        <div className="flex-1">
          <div className="mb-4">
            <h4 className="text-sm font-medium uppercase text-muted-foreground">Playlist</h4>
            <h2 className="text-3xl font-bold">{getMoodTitle(selectedMood)} Study Mix</h2>
            <p className="text-muted-foreground mt-2">
              A custom playlist for your {duration} minute study session.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>{tracks.length} songs • {formattedTotalDuration} total</p>
          </div>
          
          <div className="flex gap-2 mt-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleSave}
              className={isSaved ? "text-primary border-primary" : ""}
            >
              <Heart className={`mr-1 h-4 w-4 ${isSaved ? "fill-primary" : ""}`} />
              {isSaved ? "Saved" : "Save"}
            </Button>
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="mr-1 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex items-center gap-2 mb-4">
          <ListMusic className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Tracks</h3>
        </div>
        
        <div className="space-y-1">
          {tracks.map((track, index) => (
            <PlaylistTrack
              key={track.id}
              track={track}
              isPlaying={playingIndex === index}
              onPlay={() => handlePlay(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
