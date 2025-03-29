
import React, { useState } from 'react';
import Header from '@/components/Header';
import MoodSelector from '@/components/MoodSelector';
import StudySessionForm from '@/components/StudySessionForm';
import PlaylistView from '@/components/PlaylistView';
import { MoodType } from '@/components/MoodCard';
import { Track } from '@/components/PlaylistTrack';
import { generatePlaylist } from '@/data/mockData';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [duration, setDuration] = useState<number>(45);
  const [intensity, setIntensity] = useState<number>(2);
  const [generatedPlaylist, setGeneratedPlaylist] = useState<Track[] | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSelectMood = (mood: MoodType) => {
    setSelectedMood(mood);
    // Reset playlist when mood changes
    setGeneratedPlaylist(null);
  };

  const handleGeneratePlaylist = () => {
    if (!selectedMood) {
      toast({
        title: "Select a mood first",
        description: "Please select a mood before generating a playlist",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      const playlist = generatePlaylist(selectedMood, duration, intensity);
      setGeneratedPlaylist(playlist);
      setIsGenerating(false);
      
      toast({
        title: "Playlist generated",
        description: `Created a ${playlist.length}-track playlist for your ${duration} minute session`,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-mood">Moodify</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate the perfect music playlist for your study session based on your mood
            </p>
          </div>
          
          <MoodSelector 
            selectedMood={selectedMood} 
            onSelectMood={handleSelectMood} 
          />
          
          {selectedMood && (
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <StudySessionForm 
                  duration={duration}
                  setDuration={setDuration}
                  intensity={intensity}
                  setIntensity={setIntensity}
                  onGenerate={handleGeneratePlaylist}
                  isGenerating={isGenerating}
                />
              </div>
              
              <div className="md:col-span-2">
                {generatedPlaylist ? (
                  <PlaylistView 
                    tracks={generatedPlaylist} 
                    selectedMood={selectedMood} 
                    duration={duration}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center border rounded-xl p-6 bg-card/50">
                    <div className="text-center text-muted-foreground">
                      <p className="mb-2">Complete your session details and generate a playlist</p>
                      <p className="text-sm">Your customized study playlist will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Moodify - AI Mood-Based Music & Study Playlist Generator</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
