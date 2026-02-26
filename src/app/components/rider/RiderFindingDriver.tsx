import React, { useEffect } from 'react';
import { MobileFrame } from '../common/MobileFrame';
import { RiderNavigationProps } from './RiderApp';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

export function RiderFindingDriver({ onNavigate, onExit }: RiderNavigationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('driver-matched');
    }, 3000);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <MobileFrame onExit={onExit}>
      <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-11 px-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center relative">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>

            {/* Animated rings */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 border-4 border-primary rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 border-4 border-primary rounded-full"
            />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl mb-2 text-foreground text-center"
        >
          Finding your driver...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mb-8"
        >
          Tunatafuta dereva wako...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg mb-8"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Pickup</span>
              <span className="text-sm text-foreground">Mombasa CBD</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Destination</span>
              <span className="text-sm text-foreground">Nyali Cinemax</span>
            </div>
            <div className="h-px bg-border"></div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Ride Type</span>
              <span className="text-sm text-primary">Haal Comfort</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Estimated Fare</span>
              <span className="text-sm text-foreground">KES 650</span>
            </div>
          </div>
        </motion.div>

        <Button
          onClick={() => onNavigate('home')}
          variant="outline"
          className="w-full max-w-sm rounded-xl h-12"
        >
          Cancel Request
        </Button>
      </div>
    </MobileFrame>
  );
}
