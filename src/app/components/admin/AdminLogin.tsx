import React, { useState } from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { Car, ArrowRight, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';

export function AdminLogin({ onNavigate, onExit }: AdminNavigationProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-6">
      {onExit && (
        <button
          onClick={onExit}
          className="fixed top-6 right-6 text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to home
        </button>
      )}

      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Car className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl mb-2 text-foreground">HALLA TAXI</h1>
          <p className="text-muted-foreground">Admin Portal</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2 text-foreground">Email Address</label>
            <Input
              type="email"
              placeholder="admin@hallataxi.ke"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl pl-11"
              />
            </div>
          </div>

          <Button
            onClick={handleLogin}
            disabled={!email || !password}
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12"
          >
            Sign In
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <button className="w-full text-sm text-primary hover:underline">
            Forgot password?
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Mombasa, Kenya • Secure Admin Access
          </p>
        </div>
      </Card>
    </div>
  );
}
