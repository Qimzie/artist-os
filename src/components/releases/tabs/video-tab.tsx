import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { PlaceholderRelease } from "@/lib/placeholder-data/releases";

export function VideoTab({ release }: { release: PlaceholderRelease }) {
  const sceneCount = 6;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm">Storyboard</CardTitle>
        <Button disabled title="Available once backend is connected in Sprint 2">
          <Sparkles />
          Generate Video
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
          {Array.from({ length: sceneCount }).map((_, index) => (
            <div
              key={index}
              className="flex aspect-video items-center justify-center rounded-sm border bg-muted text-xs text-muted-foreground"
            >
              {index + 1}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          {sceneCount}-scene concept for &ldquo;{release.title}&rdquo; — lyric video, no talent
          required.
        </p>
      </CardFooter>
    </Card>
  );
}
