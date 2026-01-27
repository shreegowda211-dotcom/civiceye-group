import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

const variantStyles = {
  default: 'bg-card',
  primary: 'gradient-stats text-white',
  success: 'bg-status-resolved/10 border-status-resolved/20',
  warning: 'bg-status-in-progress/10 border-status-in-progress/20',
  danger: 'bg-destructive/10 border-destructive/20',
};

export function StatsCard({
  title,
  value,
  icon,
  trend,
  variant = 'default',
  className,
}) {
  return (
    <Card className={cn('shadow-card', variantStyles[variant], className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          
          {/* Left content */}
          <div className="space-y-2">
            <p
              className={cn(
                'text-sm font-medium',
                variant === 'primary'
                  ? 'text-white/80'
                  : 'text-muted-foreground'
              )}
            >
              {title}
            </p>

            <p
              className={cn(
                'text-3xl font-bold font-heading',
                variant === 'primary'
                  ? 'text-white'
                  : 'text-foreground'
              )}
            >
              {value}
            </p>

            {trend && (
              <div
                className={cn(
                  'flex items-center gap-1 text-sm',
                  trend.isPositive
                    ? 'text-status-resolved'
                    : 'text-destructive'
                )}
              >
                {trend.isPositive ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span>{Math.abs(trend.value)}% from last month</span>
              </div>
            )}
          </div>

          {/* Right icon */}
          <div
            className={cn(
              'rounded-lg p-3',
              variant === 'primary'
                ? 'bg-white/20'
                : 'bg-primary/10'
            )}
          >
            {icon}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
