import { Plus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import { PLACEHOLDER_ARTISTS } from "@/lib/placeholder-data/artists";

export default function ArtistsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Artists"
        description="Artist profiles you manage. Placeholder data — Sprint 2 connects this to Supabase."
        action={
          <Button disabled title="Available once backend is connected in Sprint 2">
            <Plus />
            Add Artist
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PLACEHOLDER_ARTISTS.map((artist) => (
          <Card key={artist.id}>
            <CardHeader className="flex flex-row items-center gap-3">
              <Avatar size="lg">
                <AvatarFallback>{artist.initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium">{artist.name}</span>
                <span className="text-xs text-muted-foreground">
                  {artist.songCount} song{artist.songCount === 1 ? "" : "s"}
                </span>
              </div>
              <Badge
                variant={artist.status === "active" ? "default" : "secondary"}
                className="ml-auto"
              >
                {artist.status === "active" ? "Active" : "Inactive"}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {artist.genres.map((genre) => (
                  <Badge key={genre} variant="outline">
                    {genre}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
