import React, { ReactNode } from 'react';
import { Car, LayoutDashboard, Users, UserCheck, DollarSign, TrendingUp, Bell, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { AdminScreen } from '../admin/AdminDashboard';

interface DesktopFrameProps {
  children: ReactNode;
  onExit?: () => void;
  currentScreen?: AdminScreen;
  onNavigate?: (screen: AdminScreen) => void;
  showSidebar?: boolean;
}

export function DesktopFrame({ children, onExit, currentScreen, onNavigate, showSidebar = true }: DesktopFrameProps) {
  const menuItems: { id: AdminScreen; label: string; icon: any }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'trips', label: 'Trips', icon: Car },
    { id: 'riders', label: 'Riders', icon: Users },
    { id: 'drivers', label: 'Drivers', icon: UserCheck },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'surge', label: 'Surge Pricing', icon: TrendingUp },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {showSidebar && onNavigate && (
        <div className="w-64 bg-white border-r border-border flex-shrink-0">
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg text-foreground">HAAL CABS</h2>
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
            </div>
          </div>

          <nav className="p-4">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-white">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-sm text-primary">AD</span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@haalcabs.ke</p>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
