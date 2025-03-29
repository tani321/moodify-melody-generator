
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Calculator } from 'lucide-react';

const CalculatorPage = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast({
        title: "Input required",
        description: "Please enter a calculation or question",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);
    
    // Simulate AI calculation with basic math evaluation
    // In a real implementation, this would be an API call to an AI service
    setTimeout(() => {
      try {
        // This is a simple eval for demonstration
        // In a production app, you'd want to use a safer approach or AI API
        let calculatedResult = '';
        
        // Handle some basic engineering calculations as examples
        if (input.toLowerCase().includes('ohm')) {
          calculatedResult = "According to Ohm's Law: V = I × R, where V is voltage, I is current, and R is resistance.";
        } else if (input.toLowerCase().includes('newton') || input.toLowerCase().includes('force')) {
          calculatedResult = "Newton's Second Law: F = m × a, where F is force, m is mass, and a is acceleration.";
        } else if (input.toLowerCase().includes('energy') || input.toLowerCase().includes('einstein')) {
          calculatedResult = "Einstein's Energy-Mass Equivalence: E = mc², where E is energy, m is mass, and c is the speed of light.";
        } else {
          try {
            // For simple math expressions
            // eslint-disable-next-line no-eval
            calculatedResult = eval(input).toString();
          } catch (error) {
            calculatedResult = "I couldn't understand that calculation. Try something like '2+2' or ask about 'Ohm's law'.";
          }
        }

        setResult(calculatedResult);
        setIsCalculating(false);
      } catch (error) {
        setResult("I couldn't process that calculation. Please try a different format.");
        setIsCalculating(false);
        toast({
          title: "Calculation error",
          description: "There was a problem processing your calculation",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Engineering Calculator
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solve engineering problems or perform calculations with natural language
            </p>
          </div>
          
          <div className="bg-card rounded-xl border p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="calculation">Enter your calculation or question</Label>
                <Input
                  id="calculation"
                  placeholder="e.g., '(5 * 9.8) / 2' or 'Explain Ohm's law'"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isCalculating}
              >
                {isCalculating ? 'Calculating...' : 'Calculate'}
              </Button>
            </form>
            
            {result && (
              <div className="mt-6 p-4 rounded-lg bg-muted/50 border">
                <Label className="mb-2 block">Result:</Label>
                <Textarea 
                  value={result} 
                  readOnly 
                  className="min-h-[100px] bg-background"
                />
              </div>
            )}
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p className="font-medium mb-2">Example calculations:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Basic math operations: (24 * 7) + 365</li>
                <li>Ask about engineering principles: "Explain Ohm's law"</li>
                <li>Physics calculations: "What is Einstein's energy equation?"</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Engineering Calculator - Solve complex problems with ease</p>
        </div>
      </footer>
    </div>
  );
};

export default CalculatorPage;
