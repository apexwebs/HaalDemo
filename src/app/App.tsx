import React, { useState } from 'react';
import { RiderApp } from './components/rider/RiderApp';
import { DriverApp } from './components/driver/DriverApp';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { Button } from './components/ui/button';
import { Car, Users, LayoutDashboard } from 'lucide-react';

type AppView = 'selector' | 'rider' | 'driver' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('selector');

  if (currentView === 'rider') {
    return <RiderApp onExit={() => setCurrentView('selector')} />;
  }

  if (currentView === 'driver') {
    return <DriverApp onExit={() => setCurrentView('selector')} />;
  }

  if (currentView === 'admin') {
    return <AdminDashboard onExit={() => setCurrentView('selector')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
            <Car className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl mb-3 text-foreground">HAAL CABS</h1>
          <p className="text-xl text-muted-foreground">Your Ride, Your Way / Safari Yako, Njia Yako</p>
          <p className="text-sm text-muted-foreground mt-2">Prototype Navigation - Select an interface to explore</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <button
            onClick={() => setCurrentView('rider')}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Rider App</h3>
              <p className="text-sm text-muted-foreground mb-4">Mobile iOS/Android</p>
              <p className="text-xs text-muted-foreground">Book rides, track drivers, pay with M-Pesa</p>
            </div>
          </button>

          <button
            onClick={() => setCurrentView('driver')}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <Car className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Driver App</h3>
              <p className="text-sm text-muted-foreground mb-4">Mobile iOS/Android</p>
              <p className="text-xs text-muted-foreground">Accept rides, navigate, earn money</p>
            </div>
          </button>

          <button
            onClick={() => setCurrentView('admin')}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                <LayoutDashboard className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl mb-2 text-foreground">Admin Dashboard</h3>
              <p className="text-sm text-muted-foreground mb-4">Web Desktop</p>
              <p className="text-xs text-muted-foreground">Manage platform, view analytics</p>
            </div>
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Mombasa, Kenya • KES Currency • M-Pesa Payments • English & Swahili
          </p>
        </div>
      </div>
    </div>
  );
}
