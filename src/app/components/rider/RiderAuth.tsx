import React, { useState } from 'react';
import { RiderNavigationProps } from './RiderApp';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

type AuthStep = 'phone' | 'otp' | 'profile';

export function RiderAuth({ onNavigate, onExit }: RiderNavigationProps) {
  const [step, setStep] = useState<AuthStep>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');

  const handlePhoneSubmit = () => {
    if (phoneNumber.length >= 9) {
      setStep('otp');
    }
  };

  const handleOtpComplete = (value: string) => {
    setOtp(value);
    if (value.length === 6) {
      setTimeout(() => setStep('profile'), 500);
    }
  };

  const handleProfileSubmit = () => {
    if (name.trim()) {
      onNavigate('home');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background pt-11">
        <div className="flex-1 flex flex-col justify-center px-6">
          {/* Logo */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl text-foreground mb-2">Welcome to Halla Taxi</h1>
            <p className="text-muted-foreground">Karibu Halla Taxi</p>
          </div>

          {step === 'phone' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2 text-foreground">
                  Phone Number / Nambari ya Simu
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center px-4 py-3 bg-muted rounded-xl border border-border">
                    <span className="text-foreground">+254</span>
                  </div>
                  <Input
                    type="tel"
                    placeholder="712 345 678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 9))}
                    className="flex-1 h-12 rounded-xl border-border bg-background"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  We'll send you a verification code
                </p>
              </div>

              <Button
                onClick={handlePhoneSubmit}
                disabled={phoneNumber.length < 9}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14"
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
                    <InputOTPSlot index={0} className="w-12 h-14 text-xl" />
                    <InputOTPSlot index={1} className="w-12 h-14 text-xl" />
                    <InputOTPSlot index={2} className="w-12 h-14 text-xl" />
                    <InputOTPSlot index={3} className="w-12 h-14 text-xl" />
                    <InputOTPSlot index={4} className="w-12 h-14 text-xl" />
                    <InputOTPSlot index={5} className="w-12 h-14 text-xl" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <button className="w-full text-sm text-primary hover:underline">
                Resend code
              </button>
            </div>
          )}

          {step === 'profile' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-xl mb-2 text-foreground">What's your name?</h2>
                <p className="text-sm text-muted-foreground">Jina lako ni nani?</p>
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Full Name / Jina Kamili"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 rounded-xl border-border bg-background text-center"
                />
              </div>

              <Button
                onClick={handleProfileSubmit}
                disabled={!name.trim()}
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14"
              >
                Complete Setup
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
  );
}
