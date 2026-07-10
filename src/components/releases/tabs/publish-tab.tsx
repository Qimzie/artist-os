import { CheckCircle2, Circle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { PlaceholderRelease } from "@/lib/placeholder-data/releases";

const DISTRIBUTION_TARGETS = [
  { name: "Spotify", ready: true },
  { name: "Apple Music", ready: true },
  { name: "YouTube Music", ready: false },
  { name: "TikTok Commercial", ready: false },
];

export function PublishTab({ release }: { release: PlaceholderRelease }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Distribution Checklist</CardTitle>
        <p className="text-sm text-muted-foreground">
          {release.title} — release date not yet scheduled.
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {DISTRIBUTION_TARGETS.map((target, index) => (
          <div key={target.name}>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2">
                {target.ready ? (
                  <CheckCircle2 className="size-4 text-primary" />
                ) : (
                  <Circle className="size-4 text-muted-foreground/50" />
                )}
                {target.name}
              </span>
              <Badge variant={target.ready ? "default" : "outline"}>
                {target.ready ? "Ready" : "Pending"}
              </Badge>
            </div>
            {index < DISTRIBUTION_TARGETS.length - 1 && <Separator className="mt-3" />}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button disabled title="Available once backend is connected in Sprint 2">
          Export Release
        </Button>
      </CardFooter>
    </Card>
  );
}
