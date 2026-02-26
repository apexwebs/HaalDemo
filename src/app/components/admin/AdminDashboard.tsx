import React, { useState } from 'react';
import { AdminLogin } from './AdminLogin';
import { AdminDashboardHome } from './AdminDashboardHome';
import { AdminTrips } from './AdminTrips';
import { AdminRiders } from './AdminRiders';
import { AdminDrivers } from './AdminDrivers';
import { AdminFinance } from './AdminFinance';
import { AdminSurge } from './AdminSurge';
import { AdminNotifications } from './AdminNotifications';
import { AdminSettings } from './AdminSettings';

export type AdminScreen = 
  | 'login'
  | 'dashboard'
  | 'trips'
  | 'riders'
  | 'drivers'
  | 'finance'
  | 'surge'
  | 'notifications'
  | 'settings';

interface AdminDashboardProps {
  onExit: () => void;
}

export interface AdminNavigationProps {
  onNavigate: (screen: AdminScreen) => void;
  onExit: () => void;
}

export function AdminDashboard({ onExit }: AdminDashboardProps) {
  const [currentScreen, setCurrentScreen] = useState<AdminScreen>('login');

  const renderScreen = () => {
    const props: AdminNavigationProps = {
      onNavigate: setCurrentScreen,
      onExit
    };

    switch (currentScreen) {
      case 'login':
        return <AdminLogin {...props} />;
      case 'dashboard':
        return <AdminDashboardHome {...props} />;
      case 'trips':
        return <AdminTrips {...props} />;
      case 'riders':
        return <AdminRiders {...props} />;
      case 'drivers':
        return <AdminDrivers {...props} />;
      case 'finance':
        return <AdminFinance {...props} />;
      case 'surge':
        return <AdminSurge {...props} />;
      case 'notifications':
        return <AdminNotifications {...props} />;
      case 'settings':
        return <AdminSettings {...props} />;
      default:
        return <AdminLogin {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
    </div>
  );
}
