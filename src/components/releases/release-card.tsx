import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ReleaseCover } from "@/components/releases/release-cover";
import {
  RELEASE_STATUS_LABEL,
  type PlaceholderRelease,
  type ReleaseStatus,
} from "@/lib/placeholder-data/releases";

const STATUS_VARIANT: Record<ReleaseStatus, "default" | "secondary" | "outline"> = {
  draft: "outline",
  in_progress: "secondary",
  ready: "secondary",
  released: "default",
};

export function ReleaseCard({ release }: { release: PlaceholderRelease }) {
  return (
    <Link href={`/releases/${release.id}`} className="group block">
      <Card className="overflow-hidden py-0 transition-colors group-hover:border-foreground/20">
        <ReleaseCover tone={release.coverTone} className="aspect-square" />
        <CardContent className="flex flex-col gap-1 pt-4">
          <div className="flex items-start justify-between gap-2">
            <p className="truncate font-medium">{release.title}</p>
            <Badge variant={STATUS_VARIANT[release.status]} className="shrink-0">
              {RELEASE_STATUS_LABEL[release.status]}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{release.artist}</p>
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-2 pb-4">
          <div className="flex items-center gap-2">
            <Progress value={release.progress} className="h-1.5" />
            <span className="text-xs font-medium text-muted-foreground">{release.progress}%</span>
          </div>
          <p className="text-xs text-muted-foreground">Updated {release.updatedAt}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
