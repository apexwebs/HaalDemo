import React, { useEffect } from 'react';
import { MobileFrame } from '../common/MobileFrame';
import { RiderNavigationProps } from './RiderApp';
import { Car, Waves } from 'lucide-react';
import { motion } from 'motion/react';

export function RiderSplash({ onNavigate, onExit }: RiderNavigationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <MobileFrame onExit={onExit} showStatusBar={false}>
      <div className="h-full bg-gradient-to-br from-primary via-cyan-500 to-accent flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated waves */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="bg-white rounded-full p-8 mb-6 shadow-2xl">
            <Car className="w-20 h-20 text-primary" />
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl text-white text-center mb-3"
          >
            HAAL CABS
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/90 text-center text-lg"
          >
            Your Ride, Your Way
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-white/80 text-center text-sm mt-1"
          >
            Safari Yako, Njia Yako
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-20"
        >
          <div className="flex gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 bg-white rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </MobileFrame>
  );
}
