"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
  className={cn(
    "peer inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors duration-300 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:opacity-50",
    // "data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300",
    className
  )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
    className={cn(
      "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0",
      "transition-transform duration-300 ease-in-out",
      "data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1"
    )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }