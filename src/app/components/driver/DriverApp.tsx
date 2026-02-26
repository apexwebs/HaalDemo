import React, { useState } from 'react';
import { DriverLogin } from './DriverLogin';
import { DriverHome } from './DriverHome';
import { DriverIncomingRequest } from './DriverIncomingRequest';
import { DriverNavigating } from './DriverNavigating';
import { DriverActiveTrip } from './DriverActiveTrip';
import { DriverTripCompleted } from './DriverTripCompleted';
import { DriverEarnings } from './DriverEarnings';
import { DriverProfile } from './DriverProfile';

export type DriverScreen = 
  | 'login'
  | 'home-offline'
  | 'home-online'
  | 'incoming-request'
  | 'navigating'
  | 'active-trip'
  | 'trip-completed'
  | 'earnings'
  | 'profile';

interface DriverAppProps {
  onExit: () => void;
}

export interface DriverNavigationProps {
  onNavigate: (screen: DriverScreen) => void;
  onExit: () => void;
}

export function DriverApp({ onExit }: DriverAppProps) {
  const [currentScreen, setCurrentScreen] = useState<DriverScreen>('login');

  const renderScreen = () => {
    const props: DriverNavigationProps = {
      onNavigate: setCurrentScreen,
      onExit
    };

    switch (currentScreen) {
      case 'login':
        return <DriverLogin {...props} />;
      case 'home-offline':
      case 'home-online':
        return <DriverHome {...props} isOnline={currentScreen === 'home-online'} />;
      case 'incoming-request':
        return <DriverIncomingRequest {...props} />;
      case 'navigating':
        return <DriverNavigating {...props} />;
      case 'active-trip':
        return <DriverActiveTrip {...props} />;
      case 'trip-completed':
        return <DriverTripCompleted {...props} />;
      case 'earnings':
        return <DriverEarnings {...props} />;
      case 'profile':
        return <DriverProfile {...props} />;
      default:
        return <DriverLogin {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
    </div>
  );
}
