"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { PlaceholderRelease } from "@/lib/placeholder-data/releases";

function StudioAssistantContent({ release }: { release: PlaceholderRelease }) {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardContent className="flex flex-col gap-4 pt-6">
          <div>
            <p className="font-medium">Hi Qim 👋</p>
            <p className="text-sm text-muted-foreground">I analyzed this release.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <p className="text-xs text-muted-foreground">Current completion</p>
            <p className="text-2xl font-semibold tracking-tight">{release.progress}%</p>
            <Progress value={release.progress} className="h-1.5" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs text-muted-foreground">Recommended next step</p>
            <p className="text-sm font-medium">{release.recommendedNextStep}</p>
            <p className="text-xs text-muted-foreground">
              This should take {release.recommendedEta}.
            </p>
          </div>

          <Button className="w-full" disabled title="Generation connects in Sprint 2">
            <Sparkles />
            Generate
          </Button>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium">Recent Assistant Activity</p>
        <ul className="flex flex-col gap-2.5">
          {release.assistantActivity.map((item) => (
            <li key={item.id} className="flex items-center gap-2 text-sm">
              {item.done ? (
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
              ) : (
                <Circle className="size-4 shrink-0 text-muted-foreground/50" />
              )}
              <span className={item.done ? "" : "text-muted-foreground"}>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function StudioAssistantDock({ release }: { release: PlaceholderRelease }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <aside className="sticky top-20 hidden max-h-[calc(100vh-6rem)] w-80 shrink-0 flex-col gap-4 self-start overflow-y-auto rounded-xl border p-6 lg:flex xl:w-96">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-primary" />
          <span className="text-sm font-medium">Studio Assistant</span>
        </div>
        <StudioAssistantContent release={release} />
      </aside>

      <div className="fixed right-4 bottom-4 z-20 lg:hidden">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button size="icon" className="size-12 rounded-full shadow-lg">
                <Sparkles className="size-5" />
                <span className="sr-only">Open Studio Assistant</span>
              </Button>
            }
          />
          <SheetContent className="w-full p-6 sm:max-w-sm">
            <SheetHeader className="p-0">
              <SheetTitle className="flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                Studio Assistant
              </SheetTitle>
              <SheetDescription>Proactive suggestions for this release.</SheetDescription>
            </SheetHeader>
            <StudioAssistantContent release={release} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
