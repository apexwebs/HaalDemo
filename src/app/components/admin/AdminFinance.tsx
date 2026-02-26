import React from 'react';
import { AdminNavigationProps } from './AdminDashboard';
import { DesktopFrame } from '../common/DesktopFrame';
import { Card } from '../ui/card';
import { DollarSign, TrendingUp, TrendingDown, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Jan', gross: 1850000, commission: 370000, drivers: 1480000 },
  { month: 'Feb', gross: 2100000, commission: 420000, drivers: 1680000 },
];

const paymentMethods = [
  { name: 'M-Pesa', value: 85, color: '#0891b2' },
  { name: 'Cash', value: 12, color: '#f97316' },
  { name: 'Card', value: 3, color: '#1e3a8a' },
];

export function AdminFinance({ onNavigate, onExit }: AdminNavigationProps) {
  return (
    <DesktopFrame onExit={onExit} currentScreen="finance" onNavigate={onNavigate}>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2 text-foreground">Finance & Earnings</h1>
          <p className="text-muted-foreground">Platform revenue and driver payouts</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-primary" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl text-foreground mb-1">KES 2.1M</p>
            <p className="text-sm text-muted-foreground">Gross Revenue (MTD)</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-accent" />
              <span className="text-xs text-muted-foreground">20%</span>
            </div>
            <p className="text-3xl text-foreground mb-1">KES 420K</p>
            <p className="text-sm text-muted-foreground">Platform Commission</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-secondary" />
              <span className="text-xs text-muted-foreground">80%</span>
            </div>
            <p className="text-3xl text-foreground mb-1">KES 1.68M</p>
            <p className="text-sm text-muted-foreground">Driver Payouts</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-green-600" />
              <span className="text-xs text-green-600">+18%</span>
            </div>
            <p className="text-3xl text-foreground mb-1">KES 441K</p>
            <p className="text-sm text-muted-foreground">Today's Revenue</p>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <Card className="col-span-2 p-6">
            <h3 className="text-lg text-foreground mb-4">Revenue Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="gross" fill="#0891b2" name="Gross Revenue" />
                <Bar dataKey="commission" fill="#f97316" name="Commission" />
                <Bar dataKey="drivers" fill="#1e3a8a" name="Driver Payouts" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg text-foreground mb-4">Payment Methods</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={paymentMethods}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {paymentMethods.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {paymentMethods.map((method) => (
                <div key={method.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: method.color }}></div>
                    <span>{method.name}</span>
                  </div>
                  <span>{method.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="text-lg text-foreground mb-4">M-Pesa Transaction Log</h3>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="text-sm text-foreground">Transaction #{1234 + i}</p>
                  <p className="text-xs text-muted-foreground">Feb 25, 2026 2:30 PM</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-foreground">KES {680 + i * 100}</p>
                  <p className="text-xs text-green-600">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DesktopFrame>
  );
}
