import React, { useState } from 'react';
import { MobileFrame } from '../common/MobileFrame';
import { RiderNavigationProps } from './RiderApp';
import { ChevronRight, MapPin, Smartphone, Banknote } from 'lucide-react';
import { Button } from '../ui/button';

const onboardingSlides = [
  {
    icon: MapPin,
    title: 'Book a ride instantly',
    titleSw: 'Piga simu gari mara moja',
    description: 'Get a ride in minutes from anywhere in Mombasa',
    descriptionSw: 'Pata gari dakika chache kutoka mahali popote Mombasa',
    image: 'https://images.unsplash.com/photo-1673902275677-eb4785aee1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb21iYXNhJTIwS2VueWElMjBjb2FzdGFsJTIwY2l0eXxlbnwxfHx8fDE3NzIwNDQ4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Smartphone,
    title: 'Track your driver live',
    titleSw: 'Fuatilia dereva wako',
    description: 'See exactly where your driver is in real-time',
    descriptionSw: 'Ona mahali dereva wako alipo kwa wakati halisi',
    image: 'https://images.unsplash.com/photo-1528033978085-52f315289665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjByaWRlJTIwaGFpbGluZyUyMG1hcHxlbnwxfHx8fDE3NzIwNDQ4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Banknote,
    title: 'Pay easily with M-Pesa',
    titleSw: 'Lipa kwa M-Pesa kwa urahisi',
    description: 'Secure, cashless payments directly from your phone',
    descriptionSw: 'Malipo salama, bila pesa taslimu kutoka simu yako',
    image: 'https://images.unsplash.com/photo-1753351048922-9a1d268779ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwcGF5bWVudCUyMHRyYW5zYWN0aW9ufGVufDF8fHx8MTc3MjAxMDU3OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function RiderOnboarding({ onNavigate, onExit }: RiderNavigationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = onboardingSlides[currentSlide];
  const Icon = slide.icon;

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNavigate('auth');
    }
  };

  const handleSkip = () => {
    onNavigate('auth');
  };

  return (
    <MobileFrame onExit={onExit}>
      <div className="h-full flex flex-col bg-background pt-11">
        {/* Skip button */}
        <div className="absolute top-14 right-4 z-10">
          <button onClick={handleSkip} className="text-sm text-muted-foreground hover:text-foreground">
            Skip
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 relative overflow-hidden">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="bg-background px-6 pb-8">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <Icon className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-center mb-2 text-foreground">
            {slide.title}
          </h2>
          <p className="text-center text-sm text-accent mb-3">
            {slide.titleSw}
          </p>

          <p className="text-center text-muted-foreground mb-2">
            {slide.description}
          </p>
          <p className="text-center text-sm text-muted-foreground mb-8">
            {slide.descriptionSw}
          </p>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {onboardingSlides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-border'
                }`}
              />
            ))}
          </div>

          {/* Next button */}
          <Button
            onClick={handleNext}
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14"
          >
            {currentSlide < onboardingSlides.length - 1 ? 'Next' : 'Get Started'}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </MobileFrame>
  );
}
