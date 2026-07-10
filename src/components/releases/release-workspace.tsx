"use client";

import { Download, ImageIcon, Share2, Video } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReleaseCover } from "@/components/releases/release-cover";
import { StudioAssistantDock } from "@/components/releases/studio-assistant";
import { LyricsTab } from "@/components/releases/tabs/lyrics-tab";
import { MusicTab } from "@/components/releases/tabs/music-tab";
import { OverviewTab } from "@/components/releases/tabs/overview-tab";
import { PublishTab } from "@/components/releases/tabs/publish-tab";
import { SocialTab } from "@/components/releases/tabs/social-tab";
import { VideoTab } from "@/components/releases/tabs/video-tab";
import { VisualsTab } from "@/components/releases/tabs/visuals-tab";
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

export function ReleaseWorkspace({ release }: { release: PlaceholderRelease }) {
  return (
    <div className="flex flex-1 items-start gap-8">
      <div className="flex min-w-0 flex-1 flex-col gap-6 pb-24 lg:pb-0">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <ReleaseCover
              tone={release.coverTone}
              className="size-20 shrink-0 rounded-lg sm:size-24"
              iconClassName="size-6"
            />
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {release.title}
                </h1>
                <Badge variant={STATUS_VARIANT[release.status]}>
                  {RELEASE_STATUS_LABEL[release.status]}
                </Badge>
              </div>
              <p className="text-muted-foreground">{release.artist}</p>
              <div className="flex max-w-xs items-center gap-2">
                <Progress value={release.progress} className="h-1.5" />
                <span className="text-xs font-medium text-muted-foreground">
                  {release.progress}%
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" disabled title="Generation connects in Sprint 2">
              <ImageIcon />
              Generate Cover
            </Button>
            <Button variant="outline" disabled title="Generation connects in Sprint 2">
              <Video />
              Generate Video
            </Button>
            <Button variant="outline" disabled title="Generation connects in Sprint 2">
              <Share2 />
              Generate Social Pack
            </Button>
            <Button disabled title="Available once backend is connected in Sprint 2">
              <Download />
              Export Release
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="lyrics">Lyrics</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="visuals">Visuals</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="publish">Publish</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <OverviewTab release={release} />
          </TabsContent>
          <TabsContent value="lyrics" className="mt-6">
            <LyricsTab release={release} />
          </TabsContent>
          <TabsContent value="music" className="mt-6">
            <MusicTab release={release} />
          </TabsContent>
          <TabsContent value="visuals" className="mt-6">
            <VisualsTab release={release} />
          </TabsContent>
          <TabsContent value="video" className="mt-6">
            <VideoTab release={release} />
          </TabsContent>
          <TabsContent value="social" className="mt-6">
            <SocialTab release={release} />
          </TabsContent>
          <TabsContent value="publish" className="mt-6">
            <PublishTab release={release} />
          </TabsContent>
        </Tabs>
      </div>

      <StudioAssistantDock release={release} />
    </div>
  );
}
