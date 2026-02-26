import React, { useState } from 'react';
import { MobileFrame } from '../common/MobileFrame';
import { RiderNavigationProps } from './RiderApp';
import { ArrowLeft, Users, Star, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const rideTypes = [
  {
    id: 'economy',
    name: 'Haal Economy',
    nameSwahili: 'Kawaida',
    description: 'Affordable rides',
    descriptionSwahili: 'Safari za bei nafuu',
    capacity: '4 seats',
    eta: '3 min',
    fare: 'KES 450',
    icon: '🚗',
    savings: null,
  },
  {
    id: 'comfort',
    name: 'Haal Comfort',
    nameSwahili: 'Starehe',
    description: 'Premium vehicles',
    descriptionSwahili: 'Magari bora',
    capacity: '4 seats',
    eta: '5 min',
    fare: 'KES 650',
    icon: '🚙',
    savings: null,
    popular: true,
  },
  {
    id: 'xl',
    name: 'Haal XL',
    nameSwahili: 'Kubwa',
    description: 'Extra space',
    descriptionSwahili: 'Nafasi zaidi',
    capacity: '6 seats',
    eta: '7 min',
    fare: 'KES 850',
    icon: '🚐',
    savings: null,
  },
];

export function RiderRideSelection({ onNavigate, onExit }: RiderNavigationProps) {
  const [selectedRide, setSelectedRide] = useState('comfort');

  return (
    <MobileFrame onExit={onExit}>
      <div className="h-full flex flex-col bg-background pt-11">
        {/* Map preview */}
        <div className="h-2/5 relative bg-gradient-to-br from-primary/10 to-accent/10">
          <button
            onClick={() => onNavigate('destination')}
            className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Route line */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-3/4 h-1/2">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/30" style={{ top: '8px' }}></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-accent rounded-full"></div>
            </div>
          </div>

          {/* Trip info */}
          <div className="absolute bottom-4 left-4 right-4">
            <Card className="p-3">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">From</p>
                  <p className="text-foreground">Mombasa CBD</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">Distance</p>
                  <p className="text-foreground">8.5 km</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">To</p>
                  <p className="text-foreground">Nyali Cinemax</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Ride options */}
        <div className="flex-1 bg-background rounded-t-3xl -mt-6 relative z-10 overflow-auto">
          <div className="p-6">
            <div className="w-12 h-1 bg-border rounded-full mx-auto mb-6"></div>

            <h3 className="mb-1 text-foreground">Choose your ride</h3>
            <p className="text-sm text-muted-foreground mb-6">Chagua safari yako</p>

            <div className="space-y-3 mb-6">
              {rideTypes.map((ride) => (
                <button
                  key={ride.id}
                  onClick={() => setSelectedRide(ride.id)}
                  className={`w-full p-4 rounded-2xl border-2 transition-all ${
                    selectedRide === ride.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{ride.icon}</div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-foreground">{ride.name}</p>
                        {ride.popular && (
                          <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{ride.nameSwahili}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {ride.capacity}
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap className="w-3 h-3" />
                          {ride.eta}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-foreground">{ride.fare}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Payment method */}
            <Card className="p-4 mb-6 bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg">M</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">M-Pesa</p>
                  <p className="text-xs text-muted-foreground">+254 712 345 678</p>
                </div>
                <button className="text-sm text-primary">Change</button>
              </div>
            </Card>

            <Button
              onClick={() => onNavigate('finding-driver')}
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14"
            >
              Confirm Ride / Thibitisha Safari
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
