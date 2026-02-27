import React from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { DesktopFrame } from '../common/DesktopFrame';
import { Card } from '../ui/card';
import { Users, Car, DollarSign, TrendingUp, MapPin, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { date: 'Mon', revenue: 45000 },
  { date: 'Tue', revenue: 52000 },
  { date: 'Wed', revenue: 48000 },
  { date: 'Thu', revenue: 61000 },
  { date: 'Fri', revenue: 72000 },
  { date: 'Sat', revenue: 85000 },
  { date: 'Sun', revenue: 78000 },
];

const tripsData = [
  { hour: '6AM', trips: 45 },
  { hour: '9AM', trips: 89 },
  { hour: '12PM', trips: 125 },
  { hour: '3PM', trips: 98 },
  { hour: '6PM', trips: 156 },
  { hour: '9PM', trips: 78 },
];

const recentTrips = [
  { id: 'TRIP1234', rider: 'John Doe', driver: 'James K.', from: 'CBD', to: 'Nyali', fare: 680, status: 'completed', time: '2 min ago' },
  { id: 'TRIP1233', rider: 'Mary Smith', driver: 'Sarah M.', from: 'Airport', to: 'Diani', fare: 1450, status: 'in-progress', time: '5 min ago' },
  { id: 'TRIP1232', rider: 'Peter Johnson', driver: 'John O.', from: 'Likoni', to: 'CBD', fare: 520, status: 'completed', time: '8 min ago' },
  { id: 'TRIP1231', rider: 'Alice Brown', driver: 'Mary N.', from: 'Nyali', to: 'Bamburi', fare: 450, status: 'completed', time: '12 min ago' },
];

const topDrivers = [
  { name: 'James Kariuki', trips: 52, earnings: 18450, rating: 4.9 },
  { name: 'Sarah Mwangi', trips: 48, earnings: 16230, rating: 4.8 },
  { name: 'John Omondi', trips: 45, earnings: 15890, rating: 4.9 },
  { name: 'Mary Njeri', trips: 41, earnings: 14560, rating: 4.7 },
];

export function AdminDashboardHome({ onNavigate, onExit }: AdminNavigationProps) {
  return (
    <DesktopFrame onExit={onExit} currentScreen="dashboard" onNavigate={onNavigate}>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground">Real-time platform analytics for Halla Taxi</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl text-foreground mb-1">1,234</p>
            <p className="text-sm text-muted-foreground">Active Riders</p>
            <p className="text-xs text-green-600 mt-2">+12% from yesterday</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl text-foreground mb-1">287</p>
            <p className="text-sm text-muted-foreground">Active Drivers</p>
            <p className="text-xs text-green-600 mt-2">+8% from yesterday</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl text-foreground mb-1">156</p>
            <p className="text-sm text-muted-foreground">Live Trips</p>
            <p className="text-xs text-muted-foreground mt-2">Right now</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl text-foreground mb-1">KES 441K</p>
            <p className="text-sm text-muted-foreground">Today's Revenue</p>
            <p className="text-xs text-green-600 mt-2">+18% from yesterday</p>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Revenue chart */}
          <Card className="col-span-2 p-6">
            <div className="mb-4">
              <h3 className="text-lg text-foreground mb-1">Weekly Revenue</h3>
              <p className="text-sm text-muted-foreground">Revenue trend for the past 7 days</p>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#0891b2" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Live map placeholder */}
          <Card className="p-6">
            <h3 className="text-lg text-foreground mb-4">Live Map</h3>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border border-primary/20"></div>
                  ))}
                </div>
              </div>
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-accent rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Mombasa</p>
                <p className="text-xs text-muted-foreground">287 drivers online</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Recent trips */}
          <Card className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-foreground">Recent Trips</h3>
              <button
                onClick={() => onNavigate('trips')}
                className="text-sm text-primary hover:underline"
              >
                View all
              </button>
            </div>
            <div className="space-y-3">
              {recentTrips.map((trip) => (
                <div key={trip.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex-1">
                    <p className="text-sm text-foreground mb-1">{trip.from} → {trip.to}</p>
                    <p className="text-xs text-muted-foreground">{trip.rider} • {trip.driver} • {trip.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-foreground">KES {trip.fare}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      trip.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {trip.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Top drivers */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-foreground">Top Drivers</h3>
              <button
                onClick={() => onNavigate('drivers')}
                className="text-sm text-primary hover:underline"
              >
                View all
              </button>
            </div>
            <div className="space-y-3">
              {topDrivers.map((driver, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-xs">
                    #{idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{driver.name}</p>
                    <p className="text-xs text-muted-foreground">{driver.trips} trips • KES {driver.earnings}</p>
                  </div>
                  <div className="text-xs text-yellow-600">★ {driver.rating}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DesktopFrame>
  );
}
