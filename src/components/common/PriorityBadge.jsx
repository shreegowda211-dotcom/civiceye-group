import { cn } from '@/lib/utils';
import { AlertTriangle, ArrowUp, ArrowDown } from 'lucide-react';

const priorityConfig = {
  high: {
    label: 'High',
    className: 'bg-destructive/10 text-destructive',
    icon: AlertTriangle,
  },
  medium: {
    label: 'Medium',
    className: 'bg-status-in-progress/10 text-status-in-progress',
    icon: ArrowUp,
  },
  low: {
    label: 'Low',
    className: 'bg-muted text-muted-foreground',
    icon: ArrowDown,
  },
};

export function PriorityBadge({ priority, className }) {
  const config = priorityConfig[priority];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium',
        config.className,
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {config.label}
    </span>
  );
}
