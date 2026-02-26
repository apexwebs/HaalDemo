import React, { useState } from 'react';
import { DriverNavigationProps } from './DriverApp';
import { CheckCircle, Star, DollarSign } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

export function DriverTripCompleted({ onNavigate, onExit }: DriverNavigationProps) {
  const [rating, setRating] = useState(0);

  const handleContinue = () => {
    setTimeout(() => {
      onNavigate('home-online');
    }, 500);
  };

  return (
    <div className="h-screen flex flex-col bg-background pt-11 overflow-auto">
        {/* Header */}
        <div className="text-center py-8 px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4"
          >
            <CheckCircle className="w-10 h-10 text-green-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl mb-2 text-foreground"
          >
            Trip Completed!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground"
          >
            Safari imekamilika!
          </motion.p>
        </div>

        {/* Earnings card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="px-6 mb-6"
        >
          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-3">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">You Earned</p>
              <p className="text-4xl text-accent mb-1">KES 520</p>
              <p className="text-xs text-muted-foreground">(80% of KES 650 fare)</p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Distance</p>
                <p className="text-foreground">8.5 km</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Time</p>
                <p className="text-foreground">15:32</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Payment</p>
                <p className="text-foreground">M-Pesa</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* M-Pesa confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="px-6 mb-6"
        >
          <Card className="p-4 bg-green-50 border border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">M</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-green-900">Payment Confirmed</p>
                <p className="text-xs text-green-700">Malipo yamethibitishwa</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </Card>
        </motion.div>

        {/* Rate rider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="px-6 mb-6"
        >
          <Card className="p-6">
            <h3 className="mb-3 text-foreground text-center">Rate your rider</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">Kadiria abiria wako</p>

            <div className="flex justify-center gap-3 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-border'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-muted/50">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm">JD</span>
              </div>
              <div>
                <p className="text-sm text-foreground">John Doe</p>
                <p className="text-xs text-muted-foreground">Rider</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Today's summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="px-6 mb-6"
        >
          <Card className="p-4">
            <p className="text-sm text-muted-foreground mb-3">Today's Total</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl text-foreground mb-1">KES 2,970</p>
                <p className="text-xs text-muted-foreground">9 trips completed</p>
              </div>
              <button
                onClick={() => onNavigate('earnings')}
                className="text-sm text-primary hover:underline"
              >
                View Details
              </button>
            </div>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="px-6 pb-8"
        >
          <Button
            onClick={handleContinue}
            className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-14"
          >
            Continue Driving
          </Button>
        </motion.div>
      </div>
  );
}
