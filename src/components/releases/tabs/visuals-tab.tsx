import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReleaseCover } from "@/components/releases/release-cover";
import type { PlaceholderRelease } from "@/lib/placeholder-data/releases";

export function VisualsTab({ release }: { release: PlaceholderRelease }) {
  const tones = [1, 2, 3, 4, 5] as const;
  const variants = tones.filter((tone) => tone !== release.coverTone).slice(0, 3);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm">Cover Art</CardTitle>
        <Button disabled title="Available once backend is connected in Sprint 2">
          <Sparkles />
          Generate Cover
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="flex flex-col gap-2">
          <ReleaseCover
            tone={release.coverTone}
            className="aspect-square rounded-lg border-2 border-primary"
          />
          <Badge className="w-fit">Selected</Badge>
        </div>
        {variants.map((tone) => (
          <div key={tone} className="flex flex-col gap-2">
            <ReleaseCover tone={tone} className="aspect-square rounded-lg" />
            <span className="text-xs text-muted-foreground">Variant</span>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Visual direction for {release.title}: moody, high-contrast, single subject.
        </p>
      </CardFooter>
    </Card>
  );
}
