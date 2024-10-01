'use client';
import React from 'react';
import { Bar, ResponsiveContainer } from 'recharts';
import { BarChart as BarGraph, XAxis, YAxis } from 'recharts';
import { CardDescription, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';

const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Feb',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Mar',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Apr',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'May',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jun',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jul',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Aug',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Sep',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Oct',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Nov',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Dec',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export default function BarChart() {
  return (
    <>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Targets - Interactive</CardTitle>
          <CardDescription>Display the monthly target results</CardDescription>
        </div>
        <div className="flex">
          {['individual', 'Group'].map(key => {
            return (
              <button
                key={key}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              >
                <span
                  className={cn(
                    'text-sm font-semibold',
                    key === 'individual' ? 'text-orange-600' : 'text-blue-600',
                  )}
                >
                  {key}
                </span>

                <span className="text-lg font-bold leading-none sm:text-3xl">
                  50%
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <ResponsiveContainer width={'100%'} height={350}>
        <BarGraph data={data}>
          <XAxis
            dataKey={'name'}
            tickLine={false}
            axisLine={false}
            stroke="#888888"
            fontSize={12}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            stroke="#888888"
            fontSize={12}
            tickFormatter={value => `$${value}`}
          />
          <Bar dataKey={'total'} radius={[4, 4, 0, 0]} />
        </BarGraph>
      </ResponsiveContainer>
    </>
  );
}
