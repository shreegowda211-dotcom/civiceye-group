import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from './Header';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  BarChart3,
  Users,
  Settings,
  Map,
  PlusCircle,
  CheckSquare,
} from 'lucide-react';

/* Navigation items */
const citizenNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/citizen' },
  { icon: PlusCircle, label: 'Report Issue', path: '/citizen/report' },
  { icon: ClipboardList, label: 'My Issues', path: '/citizen/issues' },
  { icon: Map, label: 'Track Issue', path: '/citizen/track' },
];

const officerNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/officer' },
  { icon: ClipboardList, label: 'Assigned Issues', path: '/officer/issues' },
  { icon: CheckSquare, label: 'Update Status', path: '/officer/update' },
];

const adminNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
  { icon: ClipboardList, label: 'All Issues', path: '/admin/issues' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: Settings, label: 'Departments', path: '/admin/departments' },
];

export function DashboardLayout({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  const getNavItems = () => {
    switch (user?.role) {
      case 'citizen':
        return citizenNavItems;
      case 'officer':
        return officerNavItems;
      case 'admin':
        return adminNavItems;
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        {/* Sidebar (Desktop) */}
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-sidebar text-sidebar-foreground hidden lg:block">
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Help box */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="rounded-lg bg-sidebar-accent/30 p-3 text-xs">
              <p className="font-medium text-sidebar-foreground">Need Help?</p>
              <p className="mt-1 text-sidebar-foreground/70">
                Call: 1800-XXX-XXXX
              </p>
            </div>
          </div>
        </aside>

        {/* Mobile Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card lg:hidden">
          <div className="flex justify-around py-2">
            {navItems.slice(0, 4).map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex flex-col items-center gap-1 p-2 text-xs',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="container py-6 pb-20 lg:pb-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
