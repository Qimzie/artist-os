import {
  LayoutDashboard,
  Disc3,
  Mic2,
  LibraryBig,
  Sparkles,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  shortcut: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Overview of your workspace.",
    shortcut: "D",
  },
  {
    title: "Releases",
    href: "/releases",
    icon: Disc3,
    description: "Every release and its progress.",
    shortcut: "R",
  },
  {
    title: "Artists",
    href: "/artists",
    icon: Mic2,
    description: "Artist profiles you manage.",
    shortcut: "A",
  },
  {
    title: "Library",
    href: "/library",
    icon: LibraryBig,
    description: "Cover art, photos, and files.",
    shortcut: "L",
  },
  {
    title: "Studio",
    href: "/studio",
    icon: Sparkles,
    description: "Storyboards and generated prompts.",
    shortcut: "U",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Workspace and account settings.",
    shortcut: ",",
  },
];
