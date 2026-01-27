import { cn } from '@/lib/utils';
import { Check, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';

const statusOrder = ['reported', 'assigned', 'in-progress', 'resolved'];

const statusInfo = {
  reported: { label: 'Reported', icon: AlertCircle },
  assigned: { label: 'Assigned', icon: Clock },
  'in-progress': { label: 'In Progress', icon: Clock },
  resolved: { label: 'Resolved', icon: CheckCircle2 },
};

export function ProgressStepper({ timeline, currentStatus }) {
  const currentIndex = statusOrder.indexOf(currentStatus);

  return (
    <div className="space-y-4">
      {/* Stepper */}
      <div className="flex items-center justify-between">
        {statusOrder.map((status, index) => {
          const isComplete = index <= currentIndex;
          const isCurrent = status === currentStatus;
          const Icon = statusInfo[status].icon;

          return (
            <div key={status} className="flex flex-col items-center">
              <div className="flex items-center">
                {index > 0 && (
                  <div
                    className={cn(
                      'h-1 w-16 sm:w-24',
                      isComplete ? 'bg-status-resolved' : 'bg-border'
                    )}
                  />
                )}

                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all',
                    isComplete
                      ? 'border-status-resolved bg-status-resolved text-white'
                      : 'border-border bg-background text-muted-foreground',
                    isCurrent && 'ring-4 ring-status-resolved/20'
                  )}
                >
                  {isComplete && index < currentIndex ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>

                {index < statusOrder.length - 1 && (
                  <div
                    className={cn(
                      'h-1 w-16 sm:w-24',
                      index < currentIndex ? 'bg-status-resolved' : 'bg-border'
                    )}
                  />
                )}
              </div>

              <span
                className={cn(
                  'mt-2 text-xs font-medium',
                  isComplete ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {statusInfo[status].label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Timeline details */}
      <div className="mt-8 space-y-4">
        {timeline.map((event, index) => (
          <div
            key={event.id}
            className={cn(
              'relative flex gap-4 pl-8',
              index < timeline.length - 1 && 'pb-4'
            )}
          >
            <div className="absolute left-0 top-0">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3 w-3" />
              </div>
              {index < timeline.length - 1 && (
                <div className="absolute left-3 top-6 h-full w-0.5 bg-border" />
              )}
            </div>

            <div className="flex-1 rounded-lg bg-secondary/50 p-3">
              <div className="flex items-center justify-between">
                <span className="font-medium capitalize">
                  {event.status.replace('-', ' ')}
                </span>
                <span className="text-xs text-muted-foreground">
                  {format(new Date(event.timestamp), 'MMM d, yyyy h:mm a')}
                </span>
              </div>

              {event.note && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {event.note}
                </p>
              )}

              {event.updatedBy && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Updated by: {event.updatedBy}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
