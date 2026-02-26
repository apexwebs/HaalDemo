import React, { useState } from 'react';
import { RiderNavigationProps } from './RiderApp';
import { ArrowLeft, MapPin, Navigation, Star, TrendingUp } from 'lucide-react';
import { Input } from '../ui/input';

const popularDestinations = [
  { name: 'Nyali Cinemax', address: 'Nyali, Mombasa', category: 'Shopping', icon: '🛍️' },
  { name: 'Mombasa CBD', address: 'City Centre', category: 'Business', icon: '🏢' },
  { name: 'Likoni Ferry', address: 'Likoni', category: 'Transport', icon: '⛴️' },
  { name: 'Diani Beach', address: 'Diani, South Coast', category: 'Beach', icon: '🏖️' },
  { name: 'Moi International Airport', address: 'Airport Road', category: 'Airport', icon: '✈️' },
  { name: 'Fort Jesus', address: 'Old Town', category: 'Tourist', icon: '🏰' },
  { name: 'Bamburi Beach', address: 'Bamburi', category: 'Beach', icon: '🌴' },
  { name: 'City Mall', address: 'Nyali', category: 'Shopping', icon: '🏬' },
];

export function RiderDestination({ onNavigate, onExit }: RiderNavigationProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = popularDestinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen bg-background pt-11">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => onNavigate('home')}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg text-foreground">Select Destination</h2>
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Where are you going? / Unakwenda wapi?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-12 rounded-xl border-border bg-muted"
              autoFocus
            />
          </div>
        </div>

        {/* Current location */}
        <div className="px-4 py-3 border-b border-border">
          <button
            onClick={() => onNavigate('ride-selection')}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
          >
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Navigation className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm text-primary">Use current location</p>
              <p className="text-xs text-muted-foreground">Mombasa CBD, Kenya</p>
            </div>
          </button>
        </div>

        {/* Popular destinations */}
        <div className="flex-1 overflow-auto">
          <div className="px-4 py-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm text-muted-foreground">
                Popular in Mombasa / Maarufu Mombasa
              </h3>
            </div>

            <div className="space-y-2">
              {filteredDestinations.map((dest, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate('ride-selection')}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                >
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-2xl">
                    {dest.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm text-foreground">{dest.name}</p>
                    <p className="text-xs text-muted-foreground">{dest.address}</p>
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {dest.category}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
