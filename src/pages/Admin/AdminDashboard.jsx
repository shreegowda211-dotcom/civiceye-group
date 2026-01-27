import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatsCard } from '@/components/common/StatsCard';
import {
  mockDashboardStats,
  mockDepartmentStats,
  mockAreaStats,
  monthlyResolutionData,
  categoryDistribution
} from '@/data/mockData';
import {
  FileText,
  CheckCircle2,
  Clock,
  AlertTriangle,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const stats = mockDashboardStats;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-heading text-2xl font-bold">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Monitor system performance and manage operations
            </p>
          </div>

          <div className="flex gap-2">
            <Link to="/admin/analytics">
              <Button variant="outline" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                View Analytics
              </Button>
            </Link>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Total Issues"
            value={stats.totalIssues.toLocaleString()}
            icon={<FileText className="h-6 w-6 text-primary" />}
            variant="primary"
            trend={{ value: 12, isPositive: true }}
          />

          <StatsCard
            title="Resolved"
            value={stats.resolvedIssues.toLocaleString()}
            icon={<CheckCircle2 className="h-6 w-6 text-status-resolved" />}
            variant="success"
            trend={{ value: 8, isPositive: true }}
          />

          <StatsCard
            title="Pending"
            value={stats.pendingIssues}
            icon={<Clock className="h-6 w-6 text-status-in-progress" />}
            variant="warning"
          />

          <StatsCard
            title="SLA Violations"
            value={stats.slaViolations}
            icon={<AlertTriangle className="h-6 w-6 text-destructive" />}
            variant="danger"
          />

          <StatsCard
            title="Avg. Resolution"
            value={`${stats.averageResolutionTime} days`}
            icon={<TrendingUp className="h-6 w-6 text-accent" />}
          />
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Monthly Performance */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-heading">
                Monthly Performance
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyResolutionData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="reported"
                      stroke="hsl(var(--status-reported))"
                      strokeWidth={2}
                      name="Reported"
                    />
                    <Line
                      type="monotone"
                      dataKey="resolved"
                      stroke="hsl(var(--status-resolved))"
                      strokeWidth={2}
                      name="Resolved"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-heading">
                Issues by Category
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                    >
                      {categoryDistribution.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Performance */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-heading">
              Department Performance
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockDepartmentStats} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis type="number" />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={150}
                    className="text-xs"
                  />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="resolved"
                    fill="hsl(var(--status-resolved))"
                    name="Resolved"
                  />
                  <Bar
                    dataKey="pending"
                    fill="hsl(var(--status-in-progress))"
                    name="Pending"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Area-wise Stats */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="font-heading">
              Area-wise Issue Distribution
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mockAreaStats.map((area) => (
                <div
                  key={area.area}
                  className="rounded-lg border bg-secondary/30 p-4"
                >
                  <p className="font-medium">{area.area}</p>
                  <p className="text-2xl font-bold font-heading mt-1">
                    {area.issueCount}
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-status-resolved rounded-full"
                        style={{
                          width: `${(area.resolvedCount / area.issueCount) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {Math.round(
                        (area.resolvedCount / area.issueCount) * 100
                      )}
                      %
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
