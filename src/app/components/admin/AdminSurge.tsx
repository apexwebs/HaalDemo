import React from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { DesktopFrame } from '../common/DesktopFrame';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';
import { MapPin } from 'lucide-react';

const zones = [
  { id: 1, name: 'Mombasa CBD', surge: 1.5, active: true },
  { id: 2, name: 'Nyali', surge: 1.0, active: false },
  { id: 3, name: 'Likoni', surge: 1.2, active: true },
  { id: 4, name: 'Diani Beach', surge: 1.8, active: true },
  { id: 5, name: 'Bamburi', surge: 1.0, active: false },
];

export function AdminSurge({ onNavigate, onExit }: AdminNavigationProps) {
  return (
    <DesktopFrame onExit={onExit} currentScreen="surge" onNavigate={onNavigate}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-foreground">Surge Pricing Control</h1>
          <p className="text-muted-foreground">Manage surge multipliers by zone</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <Card className="col-span-2 p-6">
            <h3 className="text-lg text-foreground mb-4">Mombasa Zones Map</h3>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center relative">
              {zones.map((zone, idx) => (
                <div
                  key={zone.id}
                  className={`absolute w-20 h-20 rounded-full flex items-center justify-center ${
                    zone.active ? 'bg-accent/20 border-2 border-accent' : 'bg-muted border-2 border-border'
                  }`}
                  style={{
                    top: `${20 + idx * 15}%`,
                    left: `${15 + idx * 20}%`,
                  }}
                >
                  <div className="text-center">
                    <MapPin className="w-6 h-6 mx-auto mb-1" />
                    <p className="text-xs">{zone.surge}x</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-4">
            {zones.map((zone) => (
              <Card key={zone.id} className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-foreground">{zone.name}</p>
                    <p className="text-xs text-muted-foreground">Surge: {zone.surge}x</p>
                  </div>
                  <Switch checked={zone.active} />
                </div>
                <Slider defaultValue={[zone.surge * 10]} max={30} step={1} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DesktopFrame>
  );
}
