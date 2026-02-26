import React from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { DesktopFrame } from '../common/DesktopFrame';
import { Card } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, Filter, MoreHorizontal } from 'lucide-react';

const riders = [
  { id: 'R001', name: 'John Doe', phone: '+254 712 345 678', trips: 45, spent: 'KES 18,450', rating: 4.8, status: 'active', joined: 'Jan 2026' },
  { id: 'R002', name: 'Mary Smith', phone: '+254 723 456 789', trips: 38, spent: 'KES 15,230', rating: 4.9, status: 'active', joined: 'Dec 2025' },
  { id: 'R003', name: 'Peter Johnson', phone: '+254 734 567 890', trips: 52, spent: 'KES 21,670', rating: 4.7, status: 'active', joined: 'Nov 2025' },
  { id: 'R004', name: 'Alice Brown', phone: '+254 745 678 901', trips: 29, spent: 'KES 12,890', rating: 4.6, status: 'active', joined: 'Feb 2026' },
];

export function AdminRiders({ onNavigate, onExit }: AdminNavigationProps) {
  return (
    <DesktopFrame onExit={onExit} currentScreen="riders" onNavigate={onNavigate}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-foreground">Riders Management</h1>
          <p className="text-muted-foreground">View and manage all registered riders</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <p className="text-2xl text-foreground mb-1">1,234</p>
            <p className="text-sm text-muted-foreground">Total Riders</p>
          </Card>
          <Card className="p-4">
            <p className="text-2xl text-green-600 mb-1">987</p>
            <p className="text-sm text-muted-foreground">Active (30d)</p>
          </Card>
          <Card className="p-4">
            <p className="text-2xl text-foreground mb-1">45</p>
            <p className="text-sm text-muted-foreground">New (7d)</p>
          </Card>
          <Card className="p-4">
            <p className="text-2xl text-foreground mb-1">4.7</p>
            <p className="text-sm text-muted-foreground">Avg Rating</p>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search riders..." className="pl-10 h-10" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rider ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Trips</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {riders.map((rider) => (
                <TableRow key={rider.id}>
                  <TableCell className="text-primary">{rider.id}</TableCell>
                  <TableCell>{rider.name}</TableCell>
                  <TableCell className="text-sm">{rider.phone}</TableCell>
                  <TableCell>{rider.trips}</TableCell>
                  <TableCell>{rider.spent}</TableCell>
                  <TableCell>★ {rider.rating}</TableCell>
                  <TableCell>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                      {rider.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <button className="p-2 hover:bg-muted rounded">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
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
