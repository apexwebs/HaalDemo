import React, { useState } from 'react';
import { MobileFrame } from '../common/MobileFrame';
import { RiderNavigationProps } from './RiderApp';
import { CheckCircle, Star } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { motion } from 'motion/react';

export function RiderTripCompleted({ onNavigate, onExit }: RiderNavigationProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('home');
    }, 1500);
  };

  return (
    <MobileFrame onExit={onExit}>
      <div className="h-full flex flex-col bg-background pt-11 overflow-auto">
        {!submitted ? (
          <>
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

            {/* Trip summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 mb-6"
            >
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Distance</span>
                    <span className="text-foreground">8.5 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Time</span>
                    <span className="text-foreground">15 min 32 sec</span>
                  </div>
                  <div className="h-px bg-border"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Total Fare</span>
                    <span className="text-2xl text-primary">KES 680</span>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">M</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-green-900">Paid via M-Pesa</p>
                        <p className="text-xs text-green-700">+254 712 345 678</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Driver info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 mb-6"
            >
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjAzMDMzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Driver"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-foreground">James Kariuki</p>
                    <p className="text-xs text-muted-foreground">Toyota Prius • KDD 123A</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="px-6 mb-6"
            >
              <h3 className="mb-3 text-foreground">Rate your driver</h3>
              <p className="text-sm text-muted-foreground mb-4">Kadiria dereva wako</p>
              <div className="flex justify-center gap-4 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-12 h-12 ${
                        star <= rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-border'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <Textarea
                placeholder="Add a comment (optional) / Ongeza maoni (hiari)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-24 rounded-xl border-border resize-none"
              />
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="px-6 pb-8 mt-auto"
            >
              <Button
                onClick={handleSubmit}
                disabled={rating === 0}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 mb-3"
              >
                Submit Rating
              </Button>
              <Button
                onClick={() => onNavigate('home')}
                variant="ghost"
                className="w-full rounded-xl h-12"
              >
                Skip
              </Button>
            </motion.div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-xl mb-2 text-foreground">Thank you!</h2>
              <p className="text-muted-foreground">Your feedback helps us improve</p>
            </motion.div>
          </div>
        )}
      </div>
    </MobileFrame>
  );
}
