import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <Navbar />
      
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tech-500/20 to-cyber-500/20 border border-tech-500/30 mx-auto mb-6">
                <Construction className="w-8 h-8 text-tech-400" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-tech-400 to-cyber-500 bg-clip-text text-transparent">
                  {title}
                </span>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                  <h3 className="text-xl font-semibold text-tech-400 mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground">
                    This section is currently under development. We're working hard to bring you 
                    amazing content and features. Check back soon!
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button variant="outline" className="border-tech-500/50 text-tech-400 hover:bg-tech-500/10">
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Back to Home
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => window.history.back()}
                    className="bg-gradient-to-r from-tech-500 to-cyber-500 hover:from-tech-600 hover:to-cyber-600 text-white"
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
