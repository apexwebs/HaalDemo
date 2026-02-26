import React from 'react';
import { DriverNavigationProps } from './DriverApp';
import { Menu, DollarSign, Clock, TrendingUp, Navigation } from 'lucide-react';
import { Card } from '../ui/card';
import { Switch } from '../ui/switch';
import { motion } from 'motion/react';

interface DriverHomeProps extends DriverNavigationProps {
  isOnline: boolean;
}

export function DriverHome({ onNavigate, onExit, isOnline }: DriverHomeProps) {
  const handleToggleOnline = () => {
    if (isOnline) {
      onNavigate('home-offline');
    } else {
      onNavigate('home-online');
    }
  };

  return (
    <div className="h-screen bg-background pt-11">
      {/* Map area */}
      <div className="absolute inset-0 top-11 bg-gradient-to-br from-primary/5 to-accent/5">
        {isOnline && (
          <div className="relative w-full h-full">
            {/* Current location */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Navigation className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-accent rounded-full"
                />
              </div>
            </div>
          )}

          {!isOnline && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center px-6">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">You're offline</p>
                <p className="text-sm text-muted-foreground">Go online to start accepting rides</p>
              </div>
            </div>
          )}
        </div>

        {/* Top bar */}
        <div className="absolute top-14 left-4 right-4 z-10">
          <div className="flex justify-between items-center">
            <button
              onClick={() => onNavigate('profile')}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>

            {isOnline && (
              <Card className="px-4 py-2">
                <p className="text-sm text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </p>
              </Card>
            )}
          </div>
        </div>

        {/* Online toggle button (large, centered when offline) */}
        {!isOnline && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-64">
            <button
              onClick={handleToggleOnline}
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-2xl py-6 shadow-2xl transition-all hover:scale-105"
            >
              <p className="text-2xl mb-2">GO ONLINE</p>
              <p className="text-sm opacity-90">INGIA MTANDAONI</p>
            </button>
          </div>
        )}

        {/* Bottom sheet */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <Card className="rounded-t-3xl border-0 shadow-2xl p-6">
            <div className="w-12 h-1 bg-border rounded-full mx-auto mb-6"></div>

            {/* Today's earnings */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-foreground">Today's Earnings</h3>
                <button
                  onClick={() => onNavigate('earnings')}
                  className="text-sm text-primary hover:underline"
                >
                  View all
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <Card className="p-4 bg-accent/5">
                  <DollarSign className="w-5 h-5 text-accent mb-2" />
                  <p className="text-2xl text-foreground mb-1">KES 2,450</p>
                  <p className="text-xs text-muted-foreground">Total</p>
                </Card>
                <Card className="p-4 bg-primary/5">
                  <TrendingUp className="w-5 h-5 text-primary mb-2" />
                  <p className="text-2xl text-foreground mb-1">8</p>
                  <p className="text-xs text-muted-foreground">Trips</p>
                </Card>
                <Card className="p-4 bg-secondary/5">
                  <Clock className="w-5 h-5 text-secondary mb-2" />
                  <p className="text-2xl text-foreground mb-1">4.5</p>
                  <p className="text-xs text-muted-foreground">Hours</p>
                </Card>
              </div>
            </div>

            {/* Online toggle */}
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground mb-1">
                    {isOnline ? 'You\'re Online' : 'You\'re Offline'}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {isOnline ? 'Ready to accept rides' : 'Go online to start earning'}
                  </p>
                </div>
                <Switch checked={isOnline} onCheckedChange={handleToggleOnline} />
              </div>
            </div>

            {isOnline && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center"
              >
                <button
                  onClick={() => onNavigate('incoming-request')}
                  className="text-sm text-primary hover:underline"
                >
                  Simulate incoming ride request →
                </button>
              </motion.div>
            )}
          </Card>
        </div>
      </div>
  );
}
