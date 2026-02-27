import React from 'react';
import { RiderNavigationProps } from './RiderApp';
import { Phone, MessageCircle, X, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { motion } from 'motion/react';

export function RiderDriverMatched({ onNavigate, onExit }: RiderNavigationProps) {
  return (
    <div className="h-screen relative bg-background pt-11">
        {/* Map area */}
        <div className="absolute inset-0 top-11 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="relative w-full h-full">
            {/* Route visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 h-2/3">
                {/* Driver location (moving) */}
                <motion.div
                  animate={{ top: ['20%', '50%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  className="absolute left-1/4"
                >
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                  </div>
                </motion.div>

                {/* Your location */}
                <div className="absolute bottom-0 right-1/4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-full px-6 py-3 shadow-lg"
          >
            <p className="text-sm text-foreground">Driver arriving in <span className="text-primary">3 min</span></p>
          </motion.div>
        </div>

        {/* Driver info card */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <Card className="rounded-t-3xl border-0 shadow-2xl p-6">
            <div className="w-12 h-1 bg-border rounded-full mx-auto mb-6"></div>

            <div className="flex items-start gap-4 mb-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjAzMDMzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Driver"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg text-foreground">James Kariuki</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-foreground">4.9</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Halla Comfort Driver</p>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">Vehicle</p>
                    <p className="text-foreground">Toyota Prius</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Color</p>
                    <p className="text-foreground">Silver</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Plate</p>
                    <p className="text-foreground">KDD 123A</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Button
                variant="outline"
                className="h-12 rounded-xl border-primary text-primary hover:bg-primary/10"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-xl border-primary text-primary hover:bg-primary/10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Message
              </Button>
            </div>

            {/* Trip details */}
            <div className="bg-muted/50 rounded-xl p-4 mb-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1"></div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Pickup</p>
                    <p className="text-sm text-foreground">Mombasa CBD, Moi Avenue</p>
                  </div>
                </div>
                <div className="ml-1.5 border-l-2 border-dashed border-border h-4"></div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1"></div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Destination</p>
                    <p className="text-sm text-foreground">Nyali Cinemax, Nyali Road</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button
                onClick={() => onNavigate('active-trip')}
                className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-xl h-14"
              >
                View Trip Progress
              </Button>
              <button className="ml-3 w-14 h-14 flex items-center justify-center rounded-xl border border-border hover:bg-muted">
                <X className="w-5 h-5 text-destructive" />
              </button>
            </div>
          </Card>
        </div>
      </div>
  );
}
