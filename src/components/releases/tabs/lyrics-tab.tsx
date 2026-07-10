import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import type { PlaceholderRelease } from "@/lib/placeholder-data/releases";

const PLACEHOLDER_LYRICS = `[Verse 1]
Streetlights blink like they know my name
Walking home in the same old rain
Every corner holds a memory
Of a version I used to be

[Chorus]
And I swear it's someone else now
Not the one you used to know somehow
I let go, I let it all go
Someone else, someone else now

[Verse 2]
Phone lights up but I let it ring
Used to chase every little thing
Now I'm quiet, now I'm slow
Learning how to let it go`;

export function LyricsTab({ release }: { release: PlaceholderRelease }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-sm">Lyrics — {release.title}</CardTitle>
          <p className="text-sm text-muted-foreground">Draft, last edited {release.updatedAt}</p>
        </div>
        <Button disabled title="Available once backend is connected in Sprint 2">
          <Sparkles />
          Generate Draft
        </Button>
      </CardHeader>
      <CardContent>
        <Textarea defaultValue={PLACEHOLDER_LYRICS} rows={16} className="font-mono text-sm" />
      </CardContent>
    </Card>
  );
}
