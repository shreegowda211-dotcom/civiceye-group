import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define default styling variants for the label
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

// Create Label component using React.forwardRef to forward refs
const Label = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref} // allow parent to access the underlying DOM element
      className={cn(labelVariants(), className)} // merge default styles with any extra className
      {...props} // spread other props like htmlFor, children, etc.
    />
  );
});

// Set display name for devtools and React warnings
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
