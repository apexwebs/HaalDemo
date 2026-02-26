import React, { useState, useEffect } from 'react';
import { DriverNavigationProps } from './DriverApp';
import { Phone, AlertTriangle, Navigation } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { motion } from 'motion/react';

export function DriverActiveTrip({ onNavigate, onExit }: DriverNavigationProps) {
  const [fare, setFare] = useState(650);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
      setDistance(prev => prev + 0.05);
      // Simulate fare increase
      if (timeElapsed % 5 === 0) {
        setFare(prev => prev + Math.floor(Math.random() * 15));
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
    <div className="h-screen relative bg-background pt-11">
        {/* Map area */}
        <div className="absolute inset-0 top-11 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="relative w-full h-full">
            {/* Moving car animation */}
            <motion.div
              animate={{
                top: ['70%', '25%'],
                left: ['10%', '80%'],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute"
            >
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trip info bar */}
        <div className="absolute top-14 left-4 right-4 z-10">
          <div className="grid grid-cols-3 gap-2">
            <Card className="p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Fare</p>
              <p className="text-lg text-accent">KES {fare}</p>
            </Card>
            <Card className="p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Time</p>
              <p className="text-lg text-foreground">{formatTime(timeElapsed)}</p>
            </Card>
            <Card className="p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Distance</p>
              <p className="text-lg text-foreground">{distance.toFixed(1)} km</p>
            </Card>
          </div>
        </div>

        {/* Emergency button */}
        <div className="absolute top-36 right-4 z-10">
          <button className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center shadow-lg">
            <AlertTriangle className="w-6 h-6 text-white" />
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
                <p className="text-sm text-muted-foreground">Safari inaendelea</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-500">Live</span>
              </div>
            </div>

            {/* Rider info */}
            <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-muted/50">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm">JD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">John Doe</p>
                <p className="text-xs text-muted-foreground">Rider</p>
              </div>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
                <Phone className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Route */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
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
                    <p className="text-xs text-muted-foreground">Destination</p>
                    <p className="text-sm text-foreground">Nyali Cinemax</p>
                    <p className="text-xs text-muted-foreground mt-1">4.3 km remaining</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete trip button */}
            <Button
              onClick={() => onNavigate('trip-completed')}
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-14"
            >
              Complete Trip / Maliza Safari
            </Button>
          </Card>
        </div>
      </div>
  );
}
