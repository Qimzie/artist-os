export interface PlaceholderActivity {
  id: string;
  actor: string;
  action: string;
  target: string;
  timestamp: string;
}

export const PLACEHOLDER_ACTIVITY: PlaceholderActivity[] = [
  {
    id: "act_1",
    actor: "You",
    action: "moved",
    target: "Static Bloom to Mixing",
    timestamp: "2h ago",
  },
  {
    id: "act_2",
    actor: "You",
    action: "uploaded",
    target: "static-bloom-cover-v2.png",
    timestamp: "5h ago",
  },
  {
    id: "act_3",
    actor: "You",
    action: "created",
    target: "storyboard Midnight Frequencies — Visualizer",
    timestamp: "1d ago",
  },
  { id: "act_4", actor: "You", action: "released", target: "Afterglow", timestamp: "3d ago" },
  { id: "act_5", actor: "You", action: "added artist", target: "Junie Vale", timestamp: "5d ago" },
];
