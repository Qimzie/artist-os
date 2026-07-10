import { Disc3, Mic2, Image as ImageIcon, Clapperboard } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import { PLACEHOLDER_ARTISTS } from "@/lib/placeholder-data/artists";
import { PLACEHOLDER_RELEASES } from "@/lib/placeholder-data/releases";
import { PLACEHOLDER_LIBRARY } from "@/lib/placeholder-data/library";
import { PLACEHOLDER_STORYBOARDS } from "@/lib/placeholder-data/storyboards";
import { PLACEHOLDER_ACTIVITY } from "@/lib/placeholder-data/dashboard";

const STATS = [
  {
    label: "Active Releases",
    value: PLACEHOLDER_RELEASES.filter((r) => r.status !== "released").length,
    icon: Disc3,
  },
  { label: "Artists", value: PLACEHOLDER_ARTISTS.length, icon: Mic2 },
  { label: "Library Items", value: PLACEHOLDER_LIBRARY.length, icon: ImageIcon },
  { label: "Storyboards", value: PLACEHOLDER_STORYBOARDS.length, icon: Clapperboard },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Dashboard"
        description="Overview of your workspace. All data on this page is placeholder content."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3">
            {PLACEHOLDER_ACTIVITY.map((entry) => (
              <li key={entry.id} className="flex items-center justify-between text-sm">
                <span>
                  <span className="font-medium">{entry.actor}</span>{" "}
                  <span className="text-muted-foreground">{entry.action}</span>{" "}
                  <span className="font-medium">{entry.target}</span>
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">{entry.timestamp}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
