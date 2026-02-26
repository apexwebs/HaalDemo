import React from 'react';
import { RiderNavigationProps } from './RiderApp';
import { ArrowLeft, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';

const tripHistory = [
  {
    id: 'TRIP001',
    date: 'Today, 2:30 PM',
    from: 'Mombasa CBD',
    to: 'Nyali Cinemax',
    distance: '8.5 km',
    duration: '15 min',
    fare: 'KES 680',
    status: 'completed',
    driver: 'James Kariuki',
    rating: 5,
  },
  {
    id: 'TRIP002',
    date: 'Feb 23, 10:15 AM',
    from: 'Nyali',
    to: 'Likoni Ferry',
    distance: '12.3 km',
    duration: '22 min',
    fare: 'KES 850',
    status: 'completed',
    driver: 'Sarah Mwangi',
    rating: 4,
  },
  {
    id: 'TRIP003',
    date: 'Feb 20, 6:45 PM',
    from: 'Fort Jesus',
    to: 'Moi Airport',
    distance: '15.7 km',
    duration: '28 min',
    fare: 'KES 1,200',
    status: 'completed',
    driver: 'John Omondi',
    rating: 5,
  },
  {
    id: 'TRIP004',
    date: 'Feb 18, 3:20 PM',
    from: 'Bamburi Beach',
    to: 'City Mall',
    distance: '5.2 km',
    duration: '12 min',
    fare: 'KES 450',
    status: 'completed',
    driver: 'Mary Njeri',
    rating: 4,
  },
  {
    id: 'TRIP005',
    date: 'Feb 15, 11:00 AM',
    from: 'Diani Beach',
    to: 'Likoni',
    distance: '18.5 km',
    duration: '35 min',
    fare: 'KES 1,450',
    status: 'completed',
    driver: 'Peter Kimani',
    rating: 5,
  },
];

export function RiderTripHistory({ onNavigate, onExit }: RiderNavigationProps) {
  return (
    <div className="h-screen bg-background pt-11">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <h2 className="text-lg text-foreground">Trip History</h2>
              <p className="text-sm text-muted-foreground">Historia ya Safari</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 py-4 grid grid-cols-3 gap-3">
          <Card className="p-3 text-center">
            <p className="text-2xl text-primary mb-1">{tripHistory.length}</p>
            <p className="text-xs text-muted-foreground">Total Trips</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-2xl text-primary mb-1">60.2</p>
            <p className="text-xs text-muted-foreground">km Traveled</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-2xl text-primary mb-1">4.7</p>
            <p className="text-xs text-muted-foreground">Avg Rating</p>
          </Card>
        </div>

        {/* Trip list */}
        <div className="flex-1 overflow-auto px-4 pb-4">
          <div className="space-y-3">
            {tripHistory.map((trip) => (
              <Card key={trip.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm text-foreground mb-1">{trip.date}</p>
                    <p className="text-xs text-muted-foreground">Trip ID: {trip.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-primary">{trip.fare}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(trip.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xs">★</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{trip.from}</p>
                    </div>
                  </div>
                  <div className="ml-1.5 border-l-2 border-dashed border-border h-3"></div>
                  <div className="flex items-start gap-2">
                    <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{trip.to}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                  <div className="flex items-center gap-3">
                    <span>{trip.distance}</span>
                    <span>•</span>
                    <span>{trip.duration}</span>
                  </div>
                  <button className="flex items-center gap-1 text-primary hover:underline">
                    Details
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
  );
}
