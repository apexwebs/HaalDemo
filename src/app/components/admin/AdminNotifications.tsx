import React from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { DesktopFrame } from '../common/DesktopFrame';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Bell, Send } from 'lucide-react';

export function AdminNotifications({ onNavigate, onExit }: AdminNavigationProps) {
  return (
    <DesktopFrame onExit={onExit} currentScreen="notifications" onNavigate={onNavigate}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-foreground">Notifications & Communications</h1>
          <p className="text-muted-foreground">Send messages to users</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg text-foreground">Send Push Notification</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Recipient</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-riders">All Riders</SelectItem>
                    <SelectItem value="all-drivers">All Drivers</SelectItem>
                    <SelectItem value="all-users">All Users</SelectItem>
                    <SelectItem value="active-riders">Active Riders (30d)</SelectItem>
                    <SelectItem value="online-drivers">Online Drivers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm mb-2">Message (English)</label>
                <Textarea
                  placeholder="Enter your message in English..."
                  className="min-h-24 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message (Swahili)</label>
                <Textarea
                  placeholder="Andika ujumbe wako kwa Kiswahili..."
                  className="min-h-24 resize-none"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                <Send className="w-4 h-4" />
                Send Notification
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg text-foreground mb-4">Recent Notifications</h3>
            <div className="space-y-3">
              {[
                { time: '2 hours ago', message: 'Welcome bonus for new riders', audience: 'All Riders', status: 'sent' },
                { time: '1 day ago', message: 'Driver training session reminder', audience: 'All Drivers', status: 'sent' },
                { time: '2 days ago', message: 'New surge pricing in Diani', audience: 'All Users', status: 'sent' },
              ].map((notif, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-foreground">{notif.message}</p>
                    <span className="text-xs text-green-600">{notif.status}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{notif.audience} • {notif.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DesktopFrame>
  );
}
