import React, { useState, useEffect } from 'react';
import { DriverNavigationProps } from './DriverApp';
import { MapPin, User, DollarSign, Navigation as NavigationIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { motion } from 'motion/react';

export function DriverIncomingRequest({ onNavigate, onExit }: DriverNavigationProps) {
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onNavigate('home-online');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onNavigate]);

  const handleAccept = () => {
    onNavigate('navigating');
  };

  const handleDecline = () => {
    onNavigate('home-online');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-accent/10 to-primary/10 pt-11 px-6">
      {/* Animated background */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 opacity-50"
      />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Timer */}
        <div className="text-center py-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4"
          >
            <span className="text-4xl text-accent">{timeLeft}</span>
          </motion.div>
          <p className="text-white text-lg">New Ride Request</p>
          <p className="text-white/80 text-sm">Ombi la Safari Mpya</p>
        </div>

        {/* Request details */}
        <div className="flex-1 px-6">
          <Card className="p-6 mb-4">
            {/* Rider info */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground">4.8 ★ Rating</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Haal Comfort</p>
              </div>
            </div>

            {/* Pickup location */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Pickup Location</p>
                  <p className="text-sm text-foreground">Mombasa CBD, Moi Avenue</p>
                  <p className="text-xs text-muted-foreground mt-1">2.5 km away • 5 min drive</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <NavigationIcon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Destination</p>
                  <p className="text-sm text-foreground">Nyali Cinemax, Nyali Road</p>
                  <p className="text-xs text-muted-foreground mt-1">8.5 km trip • ~15 min</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Estimated Fare</p>
                  <p className="text-2xl text-foreground">KES 650</p>
                  <p className="text-xs text-green-600 mt-1">You earn: KES 520 (80%)</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Action buttons */}
        <div className="px-6 pb-8">
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="h-16 rounded-xl border-2 border-white text-white hover:bg-white/10"
            >
              <div className="text-center">
                <p className="text-lg">DECLINE</p>
                <p className="text-xs opacity-80">Kataa</p>
              </div>
            </Button>
            <Button
              onClick={handleAccept}
              className="h-16 rounded-xl bg-white hover:bg-white/90 text-accent"
            >
              <div className="text-center">
                <p className="text-lg">ACCEPT</p>
                <p className="text-xs opacity-80">Kubali</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
