import React, { useState, useEffect } from 'react';
import { MobileFrame } from '../common/MobileFrame';
import { RiderNavigationProps } from './RiderApp';
import { AlertTriangle, Share2, Phone, MessageCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

export function RiderActiveTrip({ onNavigate, onExit }: RiderNavigationProps) {
  const [fare, setFare] = useState(650);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
      // Simulate fare increase
      if (timeElapsed % 5 === 0) {
        setFare(prev => prev + Math.floor(Math.random() * 20));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeElapsed]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <MobileFrame onExit={onExit}>
      <div className="h-full relative bg-background pt-11">
        {/* Map area with route */}
        <div className="absolute inset-0 top-11 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="relative w-full h-full">
            {/* Animated route */}
            <motion.div
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg className="w-full h-full" viewBox="0 0 390 800">
                <motion.path
                  d="M 50 600 Q 200 400 350 200"
                  stroke="#0891b2"
                  strokeWidth="4"
                  strokeDasharray="10 10"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
            </motion.div>

            {/* Moving car */}
            <motion.div
              animate={{
                top: ['70%', '30%'],
                left: ['10%', '80%'],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute"
            >
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Top info bar */}
        <div className="absolute top-16 left-4 right-4 z-10">
          <div className="flex gap-3">
            <Card className="flex-1 p-3">
              <p className="text-xs text-muted-foreground mb-1">ETA</p>
              <p className="text-lg text-foreground">12 min</p>
            </Card>
            <Card className="flex-1 p-3">
              <p className="text-xs text-muted-foreground mb-1">Distance</p>
              <p className="text-lg text-foreground">5.2 km</p>
            </Card>
            <Card className="flex-1 p-3">
              <p className="text-xs text-muted-foreground mb-1">Fare</p>
              <p className="text-lg text-primary">KES {fare}</p>
            </Card>
          </div>
        </div>

        {/* Emergency button */}
        <div className="absolute top-44 right-4 z-10">
          <button className="w-14 h-14 bg-destructive rounded-full flex items-center justify-center shadow-lg hover:bg-destructive/90 transition-colors">
            <AlertTriangle className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <Card className="rounded-t-3xl border-0 shadow-2xl p-6">
            <div className="w-12 h-1 bg-border rounded-full mx-auto mb-6"></div>

            {/* Status */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg text-foreground mb-1">Trip in Progress</h3>
                <p className="text-sm text-muted-foreground">Safari inaendelea • {formatTime(timeElapsed)}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-500">Live</span>
              </div>
            </div>

            {/* Driver info */}
            <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-muted/50">
              <img
                src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjAzMDMzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Driver"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-sm text-foreground">James Kariuki</p>
                <p className="text-xs text-muted-foreground">Toyota Prius • KDD 123A</p>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
                <Phone className="w-5 h-5 text-primary" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
                <MessageCircle className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Route */}
            <div className="bg-muted/50 rounded-xl p-4 mb-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                  <div className="flex-1">
                    <p className="text-xs text-green-600">Picked up</p>
                    <p className="text-sm text-foreground">Mombasa CBD</p>
                  </div>
                </div>
                <div className="ml-1.5 border-l-2 border-dashed border-border h-4"></div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1"></div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Heading to</p>
                    <p className="text-sm text-foreground">Nyali Cinemax</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="h-12 rounded-xl"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Trip
              </Button>
              <Button
                onClick={() => onNavigate('trip-completed')}
                className="h-12 rounded-xl bg-primary hover:bg-primary/90 text-white"
              >
                Simulate Complete
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </MobileFrame>
  );
}
