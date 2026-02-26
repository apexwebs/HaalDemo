import React from 'react';
import { RiderNavigationProps } from './RiderApp';
import { Search, MapPin, Clock, Menu } from 'lucide-react';
import { Card } from '../ui/card';

const nearbyDrivers = [
  { id: 1, lat: -4.05, lng: 39.66 },
  { id: 2, lat: -4.06, lng: 39.67 },
  { id: 3, lat: -4.04, lng: 39.65 },
  { id: 4, lat: -4.055, lng: 39.655 },
];

const recentDestinations = [
  { name: 'Nyali Cinemax', address: 'Nyali, Mombasa', time: '2 days ago' },
  { name: 'Likoni Ferry', address: 'Likoni, Mombasa', time: '5 days ago' },
  { name: 'Moi International Airport', address: 'Airport Road', time: '1 week ago' },
];

export function RiderHome({ onNavigate, onExit }: RiderNavigationProps) {
  return (
    <div className="h-screen relative bg-background pt-11">
        {/* Map area */}
        <div className="absolute inset-0 top-11 bg-gradient-to-br from-primary/5 to-accent/5">
          {/* Simulated map with markers */}
          <div className="relative w-full h-full">
            {/* Mombasa map placeholder */}
            <div className="absolute inset-0 opacity-30">
              <img
                src="https://images.unsplash.com/photo-1673902275677-eb4785aee1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb21iYXNhJTIwS2VueWElMjBjb2FzdGFsJTIwY2l0eXxlbnwxfHx8fDE3NzIwNDQ4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Current location pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
              </div>
            </div>

            {/* Nearby driver markers */}
            {nearbyDrivers.map((driver, idx) => (
              <div
                key={driver.id}
                className="absolute"
                style={{
                  top: `${40 + idx * 10}%`,
                  left: `${30 + idx * 15}%`,
                }}
              >
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-md">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top bar */}
        <div className="absolute top-14 left-4 right-4 z-10">
          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('profile')}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={() => onNavigate('destination')}
              className="flex-1 h-12 bg-white rounded-full flex items-center px-5 shadow-lg"
            >
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <span className="text-muted-foreground">Where are you going?</span>
            </button>
          </div>
        </div>

        {/* Bottom sheet */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <Card className="rounded-t-3xl border-0 shadow-2xl p-6">
            <div className="w-12 h-1 bg-border rounded-full mx-auto mb-6"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-foreground">Recent Destinations</h3>
                <button
                  onClick={() => onNavigate('trip-history')}
                  className="text-sm text-primary"
                >
                  See all
                </button>
              </div>

              <div className="space-y-3">
                {recentDestinations.map((dest, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate('destination')}
                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-sm text-foreground">{dest.name}</p>
                      <p className="text-xs text-muted-foreground">{dest.address}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {dest.time}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
  );
}
