import React from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { DesktopFrame } from '../common/DesktopFrame';
import { Card } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, Download, Filter } from 'lucide-react';

const trips = [
  { id: 'TRIP1234', date: 'Feb 25, 2:30 PM', rider: 'John Doe', driver: 'James Kariuki', from: 'CBD', to: 'Nyali', fare: 680, status: 'completed' },
  { id: 'TRIP1233', date: 'Feb 25, 2:25 PM', rider: 'Mary Smith', driver: 'Sarah Mwangi', from: 'Airport', to: 'Diani', fare: 1450, status: 'in-progress' },
  { id: 'TRIP1232', date: 'Feb 25, 2:20 PM', rider: 'Peter Johnson', driver: 'John Omondi', from: 'Likoni', to: 'CBD', fare: 520, status: 'completed' },
  { id: 'TRIP1231', date: 'Feb 25, 2:15 PM', rider: 'Alice Brown', driver: 'Mary Njeri', from: 'Nyali', to: 'Bamburi', fare: 450, status: 'completed' },
  { id: 'TRIP1230', date: 'Feb 25, 2:10 PM', rider: 'Bob Wilson', driver: 'Peter Kimani', from: 'Diani', to: 'Likoni', fare: 1200, status: 'cancelled' },
];

export function AdminTrips({ onNavigate, onExit }: AdminNavigationProps) {
  return (
    <DesktopFrame onExit={onExit} currentScreen="trips" onNavigate={onNavigate}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-foreground">Trips Management</h1>
          <p className="text-muted-foreground">View and manage all trips</p>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by trip ID, rider, or driver..."
                className="pl-10 h-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trip ID</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Rider</TableHead>
                <TableHead>Driver</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Fare</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trips.map((trip) => (
                <TableRow key={trip.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="text-primary">{trip.id}</TableCell>
                  <TableCell className="text-sm">{trip.date}</TableCell>
                  <TableCell>{trip.rider}</TableCell>
                  <TableCell>{trip.driver}</TableCell>
                  <TableCell className="text-sm">{trip.from} → {trip.to}</TableCell>
                  <TableCell>KES {trip.fare}</TableCell>
                  <TableCell>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      trip.status === 'completed' ? 'bg-green-100 text-green-700' :
                      trip.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {trip.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </DesktopFrame>
  );
}
