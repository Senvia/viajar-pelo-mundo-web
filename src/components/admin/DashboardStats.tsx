import { Card, CardContent } from "@/components/ui/card";
import { Package, FileText, Eye, Mail } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold mt-2">{value}</p>
          </div>
          <div className={`p-3 rounded-full ${color}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface DashboardStatsProps {
  totalPackages: number;
  totalPosts: number;
  totalViews: number;
  totalSubscribers: number;
}

export function DashboardStats({
  totalPackages,
  totalPosts,
  totalViews,
  totalSubscribers,
}: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Pacotes"
        value={totalPackages}
        icon={<Package className="h-6 w-6 text-white" />}
        color="bg-blue-500"
      />
      <StatCard
        title="Posts"
        value={totalPosts}
        icon={<FileText className="h-6 w-6 text-white" />}
        color="bg-green-500"
      />
      <StatCard
        title="Visualizações"
        value={totalViews}
        icon={<Eye className="h-6 w-6 text-white" />}
        color="bg-purple-500"
      />
      <StatCard
        title="Inscritos"
        value={totalSubscribers}
        icon={<Mail className="h-6 w-6 text-white" />}
        color="bg-orange-500"
      />
    </div>
  );
}
