import React from 'react';
import { RiderNavigationProps } from './RiderApp';
import { ArrowLeft, User, MapPin, CreditCard, Bell, Globe, HelpCircle, LogOut, ChevronRight, Home, Briefcase } from 'lucide-react';
import { Card } from '../ui/card';
import { Switch } from '../ui/switch';

export function RiderProfile({ onNavigate, onExit }: RiderNavigationProps) {
  return (
    <div className="h-screen bg-background pt-11 overflow-auto">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg text-foreground">Profile & Settings</h2>
          </div>
        </div>

        {/* Profile section */}
        <div className="px-4 py-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl text-white">
                JD
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-foreground mb-1">John Doe</h3>
                <p className="text-sm text-muted-foreground">+254 712 345 678</p>
              </div>
              <button className="text-sm text-primary hover:underline">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-2xl text-primary mb-1">5</p>
                <p className="text-xs text-muted-foreground">Trips</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-primary mb-1">4.8</p>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-primary mb-1">3</p>
                <p className="text-xs text-muted-foreground">Months</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Saved places */}
        <div className="px-4 mb-6">
          <h3 className="text-sm text-muted-foreground mb-3">Saved Places</h3>
          <Card className="divide-y divide-border">
            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-foreground">Home</p>
                <p className="text-xs text-muted-foreground">Nyali, Mombasa</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted transition-colors">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-foreground">Work</p>
                <p className="text-xs text-muted-foreground">Mombasa CBD</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        {/* Payment methods */}
        <div className="px-4 mb-6">
          <h3 className="text-sm text-muted-foreground mb-3">Payment Methods</h3>
          <Card className="p-4">
            <button className="w-full flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white">M</span>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-foreground">M-Pesa</p>
                <p className="text-xs text-muted-foreground">+254 712 345 678</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        {/* Settings */}
        <div className="px-4 mb-6">
          <h3 className="text-sm text-muted-foreground mb-3">Settings</h3>
          <Card className="divide-y divide-border">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-foreground">Notifications</p>
                  <p className="text-xs text-muted-foreground">Push & SMS alerts</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-foreground">Language</p>
                  <p className="text-xs text-muted-foreground">English / Swahili</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button
              onClick={() => onNavigate('trip-history')}
              className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm text-foreground">Trip History</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        {/* Support */}
        <div className="px-4 mb-6">
          <h3 className="text-sm text-muted-foreground mb-3">Support</h3>
          <Card className="divide-y divide-border">
            <button className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-muted-foreground" />
                <p className="text-sm text-foreground">Help & Support</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        {/* Logout */}
        <div className="px-4 pb-8">
          <button
            onClick={() => onNavigate('auth')}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-xl border border-destructive text-destructive hover:bg-destructive/5 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
  );
}
