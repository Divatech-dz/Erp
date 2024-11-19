
import React from 'react';
import { cn } from '@/lib/utils';

export type CardProps = {
  label: string;
  amount: string;
  description: string;
  color: string;
};

export default function DashboardCard(props: Readonly<CardProps>) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        <p className={cn('text-lg  font-semibold', props.color)}>
          {props.label}
        </p>
      </section>
      <section className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.description}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(
  props: Readonly<React.HTMLAttributes<HTMLDivElement>>,
) {
  return (
    <div
      {...props}
      className={cn(
        'flex w-full flex-col gap-3 rounded-xl border p-5 shadow',
        props.className,
      )}
    />
  );
}
