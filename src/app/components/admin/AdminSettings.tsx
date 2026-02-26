import React from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { DesktopFrame } from '../common/DesktopFrame';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Settings as SettingsIcon, DollarSign, Car } from 'lucide-react';

export function AdminSettings({ onNavigate, onExit }: AdminNavigationProps) {
  return (
    <DesktopFrame onExit={onExit} currentScreen="settings" onNavigate={onNavigate}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-foreground">Platform Settings</h1>
          <p className="text-muted-foreground">Configure platform-wide settings</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg text-foreground">Commission Rates</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Platform Commission (%)</label>
                <Input type="number" defaultValue="20" className="h-10" />
              </div>
              <div>
                <label className="block text-sm mb-2">Driver Payout (%)</label>
                <Input type="number" defaultValue="80" className="h-10" disabled />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Update Commission
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg text-foreground">Ride Pricing (KES)</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm mb-3 text-foreground">Haal Economy</p>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs mb-1">Base</label>
                    <Input type="number" defaultValue="100" className="h-9" />
                  </div>
                  <div>
                    <label className="block text-xs mb-1">Per km</label>
                    <Input type="number" defaultValue="40" className="h-9" />
                  </div>
                  <div>
                    <label className="block text-xs mb-1">Per min</label>
                    <Input type="number" defaultValue="5" className="h-9" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-foreground">Haal Comfort</p>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs mb-1">Base</label>
                    <Input type="number" defaultValue="150" className="h-9" />
                  </div>
                  <div>
                    <label className="block text-xs mb-1">Per km</label>
                    <Input type="number" defaultValue="55" className="h-9" />
                  </div>
                  <div>
                    <label className="block text-xs mb-1">Per min</label>
                    <Input type="number" defaultValue="8" className="h-9" />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm mb-3 text-foreground">Haal XL</p>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs mb-1">Base</label>
                    <Input type="number" defaultValue="200" className="h-9" />
                  </div>
                  <div>
                    <label className="block text-xs mb-1">Per km</label>
                    <Input type="number" defaultValue="65" className="h-9" />
                  </div>
                  <div>
                    <label className="block text-xs mb-1">Per min</label>
                    <Input type="number" defaultValue="10" className="h-9" />
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Update Pricing
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <SettingsIcon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg text-foreground">App Configuration</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Minimum App Version</label>
                <Input type="text" defaultValue="1.2.0" className="h-10" />
              </div>
              <div>
                <label className="block text-sm mb-2">Support Phone</label>
                <Input type="tel" defaultValue="+254 700 123 456" className="h-10" />
              </div>
              <div>
                <label className="block text-sm mb-2">Support Email</label>
                <Input type="email" defaultValue="support@haalcabs.ke" className="h-10" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Save Configuration
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DesktopFrame>
  );
}
