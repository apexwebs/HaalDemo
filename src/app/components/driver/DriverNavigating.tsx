import React from 'react';
import { DriverNavigationProps } from './DriverApp';
import { Phone, Navigation, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { motion } from 'motion/react';

export function DriverNavigating({ onNavigate, onExit }: DriverNavigationProps) {
  return (
    <div className="h-screen relative bg-background pt-11">
        {/* Map with navigation */}
        <div className="absolute inset-0 top-11 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="relative w-full h-full">
            {/* Route visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 h-2/3">
                {/* Your location (moving) */}
                <motion.div
                  animate={{ top: ['60%', '30%'] }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
                  className="absolute left-1/4"
                >
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                  </div>
                </motion.div>

                {/* Rider location */}
                <div className="absolute top-10 right-1/4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top navigation bar */}
        <div className="absolute top-14 left-4 right-4 z-10">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Navigating to pickup</p>
                <p className="text-lg text-foreground">3 min away</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Distance</p>
                <p className="text-foreground">2.5 km</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <Card className="rounded-t-3xl border-0 shadow-2xl p-6">
            <div className="w-12 h-1 bg-border rounded-full mx-auto mb-6"></div>

            {/* Rider info */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-foreground">Rider Details</h3>
                <span className="text-sm text-muted-foreground">Halla Comfort</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">JD</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">+254 712 345 678</p>
                </div>
                <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90">
                  <Phone className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Pickup location */}
            <div className="bg-muted/50 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">Pickup Location</p>
                  <p className="text-sm text-foreground">Mombasa CBD</p>
                  <p className="text-xs text-muted-foreground mt-1">Moi Avenue, near KCB Bank</p>
                </div>
              </div>
            </div>

            {/* Arrived button */}
            <Button
              onClick={() => onNavigate('active-trip')}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14"
            >
              I've Arrived / Nimefika
            </Button>
          </Card>
        </div>
      </div>
  );
}
