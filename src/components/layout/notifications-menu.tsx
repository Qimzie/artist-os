"use client";

import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function NotificationsMenu() {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell className="size-4" />
            <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-primary" />
          </Button>
        }
      />
      <PopoverContent align="end" className="w-72">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Notifications</p>
          <p className="text-sm text-muted-foreground">
            You&apos;re all caught up. Live notifications arrive once backend services connect in
            Sprint 2.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
