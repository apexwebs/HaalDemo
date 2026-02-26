import React, { useState } from 'react';
import { MobileFrame } from '../common/MobileFrame';
import { DriverNavigationProps } from './DriverApp';
import { Car, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

type AuthStep = 'phone' | 'otp';

export function DriverLogin({ onNavigate, onExit }: DriverNavigationProps) {
  const [step, setStep] = useState<AuthStep>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneSubmit = () => {
    if (phoneNumber.length >= 9) {
      setStep('otp');
    }
  };

  const handleOtpComplete = (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      setTimeout(() => onNavigate('home-offline'), 500);
    }
  };

  return (
    <MobileFrame onExit={onExit}>
      <div className="h-full flex flex-col bg-gradient-to-br from-accent/10 to-primary/10 pt-11">
        <div className="flex-1 flex flex-col justify-center px-6">
          {/* Logo */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-4">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl text-foreground mb-2">Driver Portal</h1>
            <p className="text-muted-foreground">Lango la Dereva</p>
            <div className="mt-4 inline-block bg-white rounded-full px-6 py-2 shadow-md">
              <p className="text-sm text-primary">HAAL CABS</p>
            </div>
          </div>

          {step === 'phone' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-foreground">
                  Driver Phone Number / Nambari ya Dereva
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center px-4 py-3 bg-white rounded-xl border border-border shadow-sm">
                    <span className="text-foreground">+254</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder="712 345 678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 9))}
                    className="flex-1 h-12 rounded-xl border-border bg-white shadow-sm"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Enter your registered driver number
                </p>
              </div>

              <Button
                onClick={handlePhoneSubmit}
                disabled={phoneNumber.length < 9}
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-14"
              >
                Continue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}

          {step === 'otp' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl mb-2 text-foreground">Enter verification code</h2>
                <p className="text-sm text-muted-foreground">
                  Sent to +254 {phoneNumber}
                </p>
              </div>

              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={handleOtpComplete}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-12 h-14 text-xl bg-white" />
                    <InputOTPSlot index={1} className="w-12 h-14 text-xl bg-white" />
                    <InputOTPSlot index={2} className="w-12 h-14 text-xl bg-white" />
                    <InputOTPSlot index={3} className="w-12 h-14 text-xl bg-white" />
                    <InputOTPSlot index={4} className="w-12 h-14 text-xl bg-white" />
                    <InputOTPSlot index={5} className="w-12 h-14 text-xl bg-white" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <button className="w-full text-sm text-accent hover:underline">
                Resend code
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 pb-8 text-center">
          <p className="text-xs text-muted-foreground">
            Need help? Contact Haal Cabs Support
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            +254 700 123 456
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}
