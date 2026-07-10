import { AudioLines, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PlaceholderRelease } from "@/lib/placeholder-data/releases";

const STEMS = ["Vocals", "Drums", "Bass", "Synths", "FX"];

export function MusicTab({ release }: { release: PlaceholderRelease }) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm">Master File</CardTitle>
          <Button disabled title="Available once backend is connected in Sprint 2">
            <Upload />
            Upload
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 rounded-lg border p-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted">
              <AudioLines className="size-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">
                {release.title.toLowerCase().replace(/\s+/g, "-")}-master.wav
              </p>
              <div className="mt-2 flex h-6 items-end gap-0.5">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full bg-muted-foreground/30"
                    style={{ height: `${20 + Math.abs(Math.sin(i * 0.7)) * 80}%` }}
                  />
                ))}
              </div>
            </div>
            <Badge variant="outline">3:24</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Stems</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {STEMS.map((stem) => (
            <Badge key={stem} variant="outline">
              {stem}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
