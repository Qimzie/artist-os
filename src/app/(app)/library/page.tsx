import { Image as ImageIcon, Music, Upload, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PageHeader } from "@/components/layout/page-header";
import {
  LIBRARY_ITEM_TYPE_LABEL,
  PLACEHOLDER_LIBRARY,
  type LibraryItemType,
} from "@/lib/placeholder-data/library";

const LIBRARY_ICON: Record<LibraryItemType, LucideIcon> = {
  cover_art: ImageIcon,
  photo: ImageIcon,
  video: Video,
  audio: Music,
};

export default function LibraryPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Library"
        description="Cover art, photos, and files. Placeholder data — Sprint 2 connects this to Supabase Storage."
        action={
          <Button disabled title="Available once backend is connected in Sprint 2">
            <Upload />
            Upload
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PLACEHOLDER_LIBRARY.map((item) => {
          const Icon = LIBRARY_ICON[item.type];
          return (
            <Card key={item.id} className="overflow-hidden py-0">
              <div className="flex aspect-video items-center justify-center bg-muted">
                <Icon className="size-8 text-muted-foreground" />
              </div>
              <CardContent className="pt-4">
                <p className="truncate text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.song ?? "Unassigned"} · {item.size}
                </p>
              </CardContent>
              <CardFooter className="justify-between pb-4">
                <Badge variant="outline">{LIBRARY_ITEM_TYPE_LABEL[item.type]}</Badge>
                <span className="text-xs text-muted-foreground">{item.uploadedAt}</span>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
