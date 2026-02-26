import React from 'react';
import { DriverNavigationProps } from './DriverApp';
import { ArrowLeft, Car, FileText, CheckCircle, Star, LogOut, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';

export function DriverProfile({ onNavigate, onExit }: DriverNavigationProps) {
  return (
    <div className="h-screen bg-background pt-11 overflow-auto">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home-online')}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg text-foreground">Driver Profile</h2>
          </div>
        </div>

        {/* Profile section */}
        <div className="px-4 py-6">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjAzMDMzOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Driver"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg text-foreground mb-1">James Kariuki</h3>
                <p className="text-sm text-muted-foreground">+254 712 345 678</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-foreground">4.9</span>
                  <span className="text-xs text-muted-foreground">(248 ratings)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-2xl text-accent mb-1">189</p>
                <p className="text-xs text-muted-foreground">Total Trips</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-accent mb-1">8</p>
                <p className="text-xs text-muted-foreground">Months</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-accent mb-1">98%</p>
                <p className="text-xs text-muted-foreground">Accept Rate</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Vehicle details */}
        <div className="px-4 mb-6">
          <h3 className="text-sm text-muted-foreground mb-3">Vehicle Details</h3>
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Toyota Prius</p>
                <p className="text-xs text-muted-foreground">Silver • KDD 123A</p>
              </div>
              <button className="text-sm text-primary">Edit</button>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-muted-foreground mb-1">Year</p>
                <p className="text-foreground">2019</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Ride Type</p>
                <p className="text-foreground">Haal Comfort</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Documents */}
        <div className="px-4 mb-6">
          <h3 className="text-sm text-muted-foreground mb-3">Documents & Verification</h3>
          <Card className="divide-y divide-border">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-foreground">Driver's License</p>
                  <p className="text-xs text-muted-foreground">Expires: Dec 2026</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-foreground">Vehicle Insurance</p>
                  <p className="text-xs text-muted-foreground">Expires: Aug 2026</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-foreground">NTSA Inspection</p>
                  <p className="text-xs text-muted-foreground">Valid until: Oct 2026</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-foreground">PSV Badge</p>
                  <p className="text-xs text-muted-foreground">Valid</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          </Card>
        </div>

        {/* Earnings */}
        <div className="px-4 mb-6">
          <h3 className="text-sm text-muted-foreground mb-3">Earnings</h3>
          <Card className="p-4">
            <button
              onClick={() => onNavigate('earnings')}
              className="w-full flex items-center justify-between hover:opacity-80"
            >
              <div className="text-left">
                <p className="text-sm text-foreground">This Month</p>
                <p className="text-2xl text-accent mt-1">KES 67,230</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        {/* Logout */}
        <div className="px-4 pb-8">
          <button
            onClick={() => onNavigate('login')}
            className="w-full flex items-center justify-center gap-3 p-4 rounded-xl border border-destructive text-destructive hover:bg-destructive/5 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
  );
}
