
import React from 'react';
import MoodCard, { MoodType } from './MoodCard';

interface MoodSelectorProps {
  selectedMood: MoodType | null;
  onSelectMood: (mood: MoodType) => void;
}

const moods = [
  {
    type: 'happy' as MoodType,
    title: 'Happy',
    description: 'Upbeat and cheerful music to boost your mood'
  },
  {
    type: 'calm' as MoodType,
    title: 'Calm',
    description: 'Relaxing tunes to help you unwind and destress'
  },
  {
    type: 'focus' as MoodType,
    title: 'Focus',
    description: 'Concentration-enhancing tracks for deep work'
  },
  {
    type: 'energetic' as MoodType,
    title: 'Energetic',
    description: 'High-energy music to keep you motivated'
  },
  {
    type: 'melancholy' as MoodType,
    title: 'Melancholy',
    description: 'Reflective and emotional tunes for introspection'
  }
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onSelectMood }) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">How are you feeling today?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {moods.map((mood) => (
          <MoodCard
            key={mood.type}
            mood={mood.type}
            title={mood.title}
            description={mood.description}
            isSelected={selectedMood === mood.type}
            onClick={() => onSelectMood(mood.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
