import React from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { DesktopFrame } from '../common/DesktopFrame';
import { Card } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, Filter, CheckCircle, MoreHorizontal } from 'lucide-react';

const drivers = [
  { id: 'D001', name: 'James Kariuki', phone: '+254 712 345 678', vehicle: 'Toyota Prius • KDD 123A', trips: 189, earnings: 'KES 67,230', rating: 4.9, status: 'online', docs: 'verified' },
  { id: 'D002', name: 'Sarah Mwangi', phone: '+254 723 456 789', vehicle: 'Honda Fit • KCD 456B', trips: 156, earnings: 'KES 54,890', rating: 4.8, status: 'online', docs: 'verified' },
  { id: 'D003', name: 'John Omondi', phone: '+254 734 567 890', vehicle: 'Nissan Note • KCE 789C', trips: 142, earnings: 'KES 48,670', rating: 4.9, status: 'offline', docs: 'verified' },
  { id: 'D004', name: 'Mary Njeri', phone: '+254 745 678 901', vehicle: 'Toyota Axio • KDD 234D', trips: 134, earnings: 'KES 45,230', rating: 4.7, status: 'online', docs: 'pending' },
];

export function AdminDrivers({ onNavigate, onExit }: AdminNavigationProps) {
  return (
    <DesktopFrame onExit={onExit} currentScreen="drivers" onNavigate={onNavigate}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-foreground">Drivers Management</h1>
          <p className="text-muted-foreground">Manage driver accounts and verification</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <p className="text-2xl text-foreground mb-1">456</p>
            <p className="text-sm text-muted-foreground">Total Drivers</p>
          </Card>
          <Card className="p-4">
            <p className="text-2xl text-green-600 mb-1">287</p>
            <p className="text-sm text-muted-foreground">Online Now</p>
          </Card>
          <Card className="p-4">
            <p className="text-2xl text-yellow-600 mb-1">12</p>
            <p className="text-sm text-muted-foreground">Pending Approval</p>
          </Card>
          <Card className="p-4">
            <p className="text-2xl text-foreground mb-1">4.8</p>
            <p className="text-sm text-muted-foreground">Avg Rating</p>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search drivers..." className="pl-10 h-10" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Trips</TableHead>
                <TableHead>Earnings</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Docs</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.id}>
                  <TableCell className="text-primary">{driver.id}</TableCell>
                  <TableCell>{driver.name}</TableCell>
                  <TableCell className="text-sm">{driver.phone}</TableCell>
                  <TableCell className="text-sm">{driver.vehicle}</TableCell>
                  <TableCell>{driver.trips}</TableCell>
                  <TableCell>{driver.earnings}</TableCell>
                  <TableCell>★ {driver.rating}</TableCell>
                  <TableCell>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      driver.status === 'online' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {driver.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {driver.docs === 'verified' ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <span className="text-xs text-yellow-600">Pending</span>
                    )}
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
