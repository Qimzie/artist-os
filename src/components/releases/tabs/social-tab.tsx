import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReleaseCover } from "@/components/releases/release-cover";
import type { PlaceholderRelease } from "@/lib/placeholder-data/releases";

const PLATFORMS = ["Instagram", "TikTok", "X"];

export function SocialTab({ release }: { release: PlaceholderRelease }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm">Social Pack</CardTitle>
        <Button disabled title="Available once backend is connected in Sprint 2">
          <Sparkles />
          Generate Social Pack
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PLATFORMS.map((platform) => (
          <div key={platform} className="flex flex-col gap-2">
            <ReleaseCover tone={release.coverTone} className="aspect-[9/16] rounded-lg" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium">{platform}</span>
              <Badge variant="outline" className="text-[10px]">
                Draft
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Caption draft: &ldquo;{release.title} — out now. Link in bio.&rdquo;
        </p>
      </CardFooter>
    </Card>
  );
}
