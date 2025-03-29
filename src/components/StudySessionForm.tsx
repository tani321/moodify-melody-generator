
import React from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface StudySessionFormProps {
  duration: number;
  setDuration: (value: number) => void;
  intensity: number;
  setIntensity: (value: number) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const StudySessionForm: React.FC<StudySessionFormProps> = ({
  duration,
  setDuration,
  intensity,
  setIntensity,
  onGenerate,
  isGenerating
}) => {
  return (
    <div className="py-6 px-4 rounded-xl border bg-card">
      <h3 className="text-xl font-bold mb-6">Customize Your Study Session</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="duration">Duration (minutes)</Label>
            <span className="text-sm font-medium">{duration} min</span>
          </div>
          <Slider 
            id="duration"
            min={15} 
            max={180} 
            step={15} 
            value={[duration]} 
            onValueChange={(value) => setDuration(value[0])} 
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>15 min</span>
            <span>3 hours</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="intensity">Intensity</Label>
            <span className="text-sm font-medium">{intensity === 1 ? 'Low' : intensity === 2 ? 'Medium' : 'High'}</span>
          </div>
          <Slider 
            id="intensity"
            min={1} 
            max={3} 
            step={1} 
            value={[intensity]} 
            onValueChange={(value) => setIntensity(value[0])} 
            className="py-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        <Button 
          onClick={onGenerate} 
          disabled={isGenerating}
          className="w-full bg-gradient-mood hover:opacity-90"
        >
          {isGenerating ? 'Generating...' : 'Generate Playlist'}
        </Button>
      </div>
    </div>
  );
};

export default StudySessionForm;
