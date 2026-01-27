import { cn } from '@/lib/utils';

const statusConfig = {
  reported: {
    label: 'Reported',
    className: 'bg-status-reported/10 text-status-reported border-status-reported/30',
  },
  assigned: {
    label: 'Assigned',
    className: 'bg-status-assigned/10 text-status-assigned border-status-assigned/30',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-status-in-progress/10 text-status-in-progress border-status-in-progress/30',
  },
  resolved: {
    label: 'Resolved',
    className: 'bg-status-resolved/10 text-status-resolved border-status-resolved/30',
  },
};

export function StatusBadge({ status, className }) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
