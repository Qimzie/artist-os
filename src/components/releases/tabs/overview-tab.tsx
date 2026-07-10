import { CheckCircle2, Circle, Clock } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HEALTH_STATUS_LABEL,
  type HealthStatus,
  type PlaceholderRelease,
} from "@/lib/placeholder-data/releases";

const STATUS_ICON: Record<HealthStatus, typeof CheckCircle2> = {
  complete: CheckCircle2,
  in_progress: Clock,
  missing: Circle,
};

const STATUS_COLOR: Record<HealthStatus, string> = {
  complete: "text-primary",
  in_progress: "text-muted-foreground",
  missing: "text-muted-foreground/50",
};

export function OverviewTab({ release }: { release: PlaceholderRelease }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Release Health</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3">
            {release.health.map((item) => {
              const Icon = STATUS_ICON[item.status];
              return (
                <li key={item.key} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Icon className={`size-4 ${STATUS_COLOR[item.status]}`} />
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {HEALTH_STATUS_LABEL[item.status]}
                  </span>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Summary</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">{release.title}</span> by {release.artist}{" "}
            is {release.progress}% complete.
          </p>
          <p>
            Recommended next step:{" "}
            <span className="font-medium text-foreground">{release.recommendedNextStep}</span> — see
            the Studio Assistant for details.
          </p>
          <p>Last updated {release.updatedAt}.</p>
        </CardContent>
      </Card>
    </div>
  );
}
