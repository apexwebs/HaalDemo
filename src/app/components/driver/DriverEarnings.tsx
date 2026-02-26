import React, { useState } from 'react';
import { DriverNavigationProps } from './DriverApp';
import { ArrowLeft, DollarSign, TrendingUp, Clock, ChevronDown } from 'lucide-react';
import { Card } from '../ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

const tripsData = [
  { id: 'TRIP009', time: '2:30 PM', from: 'CBD', to: 'Nyali', fare: 650, earned: 520, duration: '15 min' },
  { id: 'TRIP008', time: '1:45 PM', from: 'Likoni', to: 'Airport', fare: 1200, earned: 960, duration: '28 min' },
  { id: 'TRIP007', time: '12:20 PM', from: 'Nyali', to: 'CBD', fare: 550, earned: 440, duration: '12 min' },
  { id: 'TRIP006', time: '11:15 AM', from: 'Bamburi', to: 'Fort Jesus', fare: 720, earned: 576, duration: '18 min' },
  { id: 'TRIP005', time: '10:30 AM', from: 'CBD', to: 'Diani', fare: 1450, earned: 1160, duration: '35 min' },
  { id: 'TRIP004', time: '9:45 AM', from: 'Nyali', to: 'Likoni', fare: 850, earned: 680, duration: '22 min' },
  { id: 'TRIP003', time: '8:50 AM', from: 'Airport', to: 'CBD', fare: 980, earned: 784, duration: '20 min' },
  { id: 'TRIP002', time: '8:15 AM', from: 'Bamburi', to: 'Nyali', fare: 450, earned: 360, duration: '10 min' },
  { id: 'TRIP001', time: '7:30 AM', from: 'CBD', to: 'Likoni', fare: 620, earned: 496, duration: '16 min' },
];

export function DriverEarnings({ onNavigate, onExit }: DriverNavigationProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

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
          <div className="flex-1">
            <h2 className="text-lg text-foreground">Earnings</h2>
            <p className="text-sm text-muted-foreground">Mapato Yako</p>
          </div>
        </div>
      </div>

      {/* Period tabs */}
      <div className="px-4 py-4">
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="week">This Week</TabsTrigger>
            <TabsTrigger value="month">This Month</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="mt-4 space-y-4">
            {/* Summary cards */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-4 bg-accent/5">
                <DollarSign className="w-5 h-5 text-accent mb-2" />
                <p className="text-2xl text-foreground mb-1">2,970</p>
                <p className="text-xs text-muted-foreground">Total KES</p>
              </Card>
              <Card className="p-4 bg-primary/5">
                <TrendingUp className="w-5 h-5 text-primary mb-2" />
                <p className="text-2xl text-foreground mb-1">9</p>
                <p className="text-xs text-muted-foreground">Trips</p>
              </Card>
              <Card className="p-4 bg-secondary/5">
                <Clock className="w-5 h-5 text-secondary mb-2" />
                <p className="text-2xl text-foreground mb-1">4.5</p>
                <p className="text-xs text-muted-foreground">Hours</p>
              </Card>
            </div>

            {/* M-Pesa status */}
            <Card className="p-4 bg-green-50 border border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">M</span>
                  </div>
                  <div>
                    <p className="text-sm text-green-900">M-Pesa Payout</p>
                    <p className="text-xs text-green-700">Pending settlement</p>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-green-600" />
              </div>
            </Card>

            {/* Trip breakdown */}
            <div>
              <h3 className="text-sm text-muted-foreground mb-3">Trip Breakdown</h3>
              <div className="space-y-2">
                {tripsData.map((trip) => (
                  <Card key={trip.id} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-sm text-foreground mb-1">
                          {trip.from} → {trip.to}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {trip.time} • {trip.duration} • {trip.id}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg text-accent">+{trip.earned}</p>
                        <p className="text-xs text-muted-foreground">of {trip.fare}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="week" className="mt-4">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <Card className="p-4 bg-accent/5">
                <DollarSign className="w-5 h-5 text-accent mb-2" />
                <p className="text-2xl text-foreground mb-1">18,450</p>
                <p className="text-xs text-muted-foreground">Total KES</p>
              </Card>
              <Card className="p-4 bg-primary/5">
                <TrendingUp className="w-5 h-5 text-primary mb-2" />
                <p className="text-2xl text-foreground mb-1">52</p>
                <p className="text-xs text-muted-foreground">Trips</p>
              </Card>
              <Card className="p-4 bg-secondary/5">
                <Clock className="w-5 h-5 text-secondary mb-2" />
                <p className="text-2xl text-foreground mb-1">28</p>
                <p className="text-xs text-muted-foreground">Hours</p>
              </Card>
            </div>
            <Card className="p-6 text-center">
              <p className="text-muted-foreground">Weekly earnings summary</p>
            </Card>
          </TabsContent>

          <TabsContent value="month" className="mt-4">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <Card className="p-4 bg-accent/5">
                <DollarSign className="w-5 h-5 text-accent mb-2" />
                <p className="text-2xl text-foreground mb-1">67,230</p>
                <p className="text-xs text-muted-foreground">Total KES</p>
              </Card>
              <Card className="p-4 bg-primary/5">
                <TrendingUp className="w-5 h-5 text-primary mb-2" />
                <p className="text-2xl text-foreground mb-1">189</p>
                <p className="text-xs text-muted-foreground">Trips</p>
              </Card>
              <Card className="p-4 bg-secondary/5">
                <Clock className="w-5 h-5 text-secondary mb-2" />
                <p className="text-2xl text-foreground mb-1">102</p>
                <p className="text-xs text-muted-foreground">Hours</p>
              </Card>
            </div>
            <Card className="p-6 text-center">
              <p className="text-muted-foreground">Monthly earnings summary</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
