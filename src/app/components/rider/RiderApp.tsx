import React, { useState } from 'react';
import { RiderSplash } from './RiderSplash';
import { RiderOnboarding } from './RiderOnboarding';
import { RiderAuth } from './RiderAuth';
import { RiderHome } from './RiderHome';
import { RiderDestination } from './RiderDestination';
import { RiderRideSelection } from './RiderRideSelection';
import { RiderFindingDriver } from './RiderFindingDriver';
import { RiderDriverMatched } from './RiderDriverMatched';
import { RiderActiveTrip } from './RiderActiveTrip';
import { RiderTripCompleted } from './RiderTripCompleted';
import { RiderTripHistory } from './RiderTripHistory';
import { RiderProfile } from './RiderProfile';

export type RiderScreen = 
  | 'splash'
  | 'onboarding'
  | 'auth'
  | 'home'
  | 'destination'
  | 'ride-selection'
  | 'finding-driver'
  | 'driver-matched'
  | 'active-trip'
  | 'trip-completed'
  | 'trip-history'
  | 'profile';

interface RiderAppProps {
  onExit: () => void;
}

export interface RiderNavigationProps {
  onNavigate: (screen: RiderScreen) => void;
  onExit: () => void;
}

export function RiderApp({ onExit }: RiderAppProps) {
  const [currentScreen, setCurrentScreen] = useState<RiderScreen>('splash');

  const renderScreen = () => {
    const props: RiderNavigationProps = {
      onNavigate: setCurrentScreen,
      onExit
    };

    switch (currentScreen) {
      case 'splash':
        return <RiderSplash {...props} />;
      case 'onboarding':
        return <RiderOnboarding {...props} />;
      case 'auth':
        return <RiderAuth {...props} />;
      case 'home':
        return <RiderHome {...props} />;
      case 'destination':
        return <RiderDestination {...props} />;
      case 'ride-selection':
        return <RiderRideSelection {...props} />;
      case 'finding-driver':
        return <RiderFindingDriver {...props} />;
      case 'driver-matched':
        return <RiderDriverMatched {...props} />;
      case 'active-trip':
        return <RiderActiveTrip {...props} />;
      case 'trip-completed':
        return <RiderTripCompleted {...props} />;
      case 'trip-history':
        return <RiderTripHistory {...props} />;
      case 'profile':
        return <RiderProfile {...props} />;
      default:
        return <RiderSplash {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderScreen()}
    </div>
  );
}
