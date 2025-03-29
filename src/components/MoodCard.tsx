
import React from 'react';
import { cn } from '@/lib/utils';

export type MoodType = 'happy' | 'calm' | 'focus' | 'energetic' | 'melancholy';

interface MoodCardProps {
  mood: MoodType;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const getMoodEmoji = (mood: MoodType): string => {
  switch (mood) {
    case 'happy': return '😊';
    case 'calm': return '😌';
    case 'focus': return '🧠';
    case 'energetic': return '⚡';
    case 'melancholy': return '😔';
    default: return '🎵';
  }
};

const MoodCard: React.FC<MoodCardProps> = ({ mood, title, description, isSelected, onClick }) => {
  return (
    <div 
      className={cn(
        "music-card rounded-xl p-4 cursor-pointer overflow-hidden",
        "border-2 hover:bg-mood-" + mood + "/10",
        isSelected ? `border-mood-${mood} bg-mood-${mood}/20` : "border-border"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col gap-3">
        <div className="text-4xl">{getMoodEmoji(mood)}</div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default MoodCard;
