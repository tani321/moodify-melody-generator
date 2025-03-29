
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Moon, Brain, Calendar, Clock } from 'lucide-react';

const SleepJournal = () => {
  const [dream, setDream] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [sleepDuration, setSleepDuration] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dream.trim()) {
      toast({
        title: "Dream description required",
        description: "Please enter your dream to analyze it",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      try {
        // In a real app, this would be an API call to an AI service
        let dreamAnalysis = '';
        
        if (dream.toLowerCase().includes('falling')) {
          dreamAnalysis = "Dreams about falling often relate to feelings of insecurity or anxiety. You might be experiencing a lack of control in some aspect of your life.";
        } else if (dream.toLowerCase().includes('flying')) {
          dreamAnalysis = "Flying dreams typically symbolize freedom, ambition, and a desire to escape limitations. You may be experiencing a sense of empowerment in your waking life.";
        } else if (dream.toLowerCase().includes('chase') || dream.toLowerCase().includes('chased')) {
          dreamAnalysis = "Being chased in dreams often represents avoiding a fear or confrontation in your waking life. Consider what you might be running from.";
        } else if (dream.toLowerCase().includes('water')) {
          dreamAnalysis = "Water in dreams often symbolizes emotions and the unconscious mind. Calm water may indicate peace, while turbulent water could suggest emotional turmoil.";
        } else {
          dreamAnalysis = "Your dream appears to reflect your subconscious processing daily experiences and emotions. Consider the emotional tone of the dream and how it relates to your current life situations. Dreams often use symbols that are personally meaningful to the dreamer.";
        }

        setAnalysis(dreamAnalysis);
        setIsAnalyzing(false);
        
        toast({
          title: "Dream analyzed!",
          description: "Your dream has been analyzed successfully",
        });
      } catch (error) {
        setAnalysis("I couldn't process that dream. Please try a different description.");
        setIsAnalyzing(false);
        toast({
          title: "Analysis error",
          description: "There was a problem analyzing your dream",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-500 p-2 rounded-lg">
                <Moon className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500">
                Sleep Journal & Dream Analyzer
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track your sleep patterns and understand the meaning behind your dreams
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-card rounded-xl border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  Record Your Dream
                </CardTitle>
                <CardDescription>
                  Enter details about your sleep and dream
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sleepDuration">Hours of Sleep</Label>
                    <Input
                      id="sleepDuration"
                      type="number"
                      min="0"
                      max="24" 
                      step="0.5"
                      placeholder="e.g., 7.5"
                      value={sleepDuration}
                      onChange={(e) => setSleepDuration(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dream">Describe Your Dream</Label>
                    <Textarea
                      id="dream"
                      placeholder="What did you dream about? Include as many details as you can remember..."
                      value={dream}
                      onChange={(e) => setDream(e.target.value)}
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? 'Analyzing Dream...' : 'Analyze Dream'}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-xl border shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  Dream Analysis
                </CardTitle>
                <CardDescription>
                  AI interpretation of your dream symbols and meaning
                </CardDescription>
              </CardHeader>
              <CardContent>
                {analysis ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-muted/50 border min-h-[150px]">
                      <p className="whitespace-pre-line">{analysis}</p>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <p className="italic">
                        Remember that dream interpretations are subjective and should be considered along with your personal experiences and feelings.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8 text-muted-foreground h-[250px]">
                    <Moon className="h-12 w-12 mb-4 opacity-30" />
                    <p className="text-lg">Enter your dream details and click "Analyze Dream" to receive AI insights</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Track your sleep patterns over time for better insights</span>
                </div>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8 bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Common Dream Symbols</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 rounded-lg bg-muted/50 border">
                <h3 className="font-medium mb-2">Falling</h3>
                <p className="text-sm text-muted-foreground">Often represents insecurity, anxiety, or feeling out of control</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border">
                <h3 className="font-medium mb-2">Flying</h3>
                <p className="text-sm text-muted-foreground">Usually symbolizes freedom, ambition, and rising above challenges</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border">
                <h3 className="font-medium mb-2">Being Chased</h3>
                <p className="text-sm text-muted-foreground">Often indicates avoiding a problem or fear in your waking life</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border">
                <h3 className="font-medium mb-2">Water</h3>
                <p className="text-sm text-muted-foreground">Typically represents emotions; calm or turbulent waters reflect emotional state</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border">
                <h3 className="font-medium mb-2">Teeth</h3>
                <p className="text-sm text-muted-foreground">Dreams about losing teeth often relate to anxiety about appearance or communication</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border">
                <h3 className="font-medium mb-2">Naked in Public</h3>
                <p className="text-sm text-muted-foreground">Usually symbolizes vulnerability, exposure, or fear of judgment</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Sleep Journal & Dream Analyzer - Understand your dreams and improve your sleep</p>
        </div>
      </footer>
    </div>
  );
};

export default SleepJournal;
