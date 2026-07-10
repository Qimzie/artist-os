export type ReleaseStatus = "draft" | "in_progress" | "ready" | "released";
export type HealthStatus = "complete" | "in_progress" | "missing";

export const RELEASE_STATUS_LABEL: Record<ReleaseStatus, string> = {
  draft: "Draft",
  in_progress: "In Progress",
  ready: "Ready to Publish",
  released: "Released",
};

export interface ReleaseHealthItem {
  key: "lyrics" | "music" | "cover" | "canvas" | "video" | "social" | "distribution";
  label: string;
  status: HealthStatus;
}

export const HEALTH_STATUS_LABEL: Record<HealthStatus, string> = {
  complete: "Complete",
  in_progress: "In Progress",
  missing: "Missing",
};

export interface AssistantActivityItem {
  id: string;
  label: string;
  done: boolean;
}

export interface PlaceholderRelease {
  id: string;
  title: string;
  artist: string;
  status: ReleaseStatus;
  progress: number;
  updatedAt: string;
  /** Maps to a --chart-N token so cover placeholders stay on the design system's palette. */
  coverTone: 1 | 2 | 3 | 4 | 5;
  health: ReleaseHealthItem[];
  assistantActivity: AssistantActivityItem[];
  recommendedNextStep: string;
  recommendedEta: string;
}

export const PLACEHOLDER_RELEASES: PlaceholderRelease[] = [
  {
    id: "rel_nagon_annan",
    title: "Någon annan",
    artist: "Nova Reyes",
    status: "draft",
    progress: 68,
    updatedAt: "2 hours ago",
    coverTone: 1,
    health: [
      { key: "lyrics", label: "Lyrics", status: "complete" },
      { key: "music", label: "Music", status: "complete" },
      { key: "cover", label: "Cover", status: "complete" },
      { key: "canvas", label: "Canvas", status: "missing" },
      { key: "video", label: "Video", status: "missing" },
      { key: "social", label: "Social", status: "missing" },
      { key: "distribution", label: "Distribution", status: "missing" },
    ],
    assistantActivity: [
      { id: "act_1", label: "Lyrics analyzed", done: true },
      { id: "act_2", label: "Visual direction selected", done: true },
      { id: "act_3", label: "Cover completed", done: true },
      { id: "act_4", label: "Canvas pending", done: false },
    ],
    recommendedNextStep: "Generate Spotify Canvas",
    recommendedEta: "approximately 40 seconds",
  },
  {
    id: "rel_backdoor",
    title: "Backdoor",
    artist: "Rook & Ember",
    status: "in_progress",
    progress: 35,
    updatedAt: "1 day ago",
    coverTone: 2,
    health: [
      { key: "lyrics", label: "Lyrics", status: "complete" },
      { key: "music", label: "Music", status: "in_progress" },
      { key: "cover", label: "Cover", status: "missing" },
      { key: "canvas", label: "Canvas", status: "missing" },
      { key: "video", label: "Video", status: "missing" },
      { key: "social", label: "Social", status: "missing" },
      { key: "distribution", label: "Distribution", status: "missing" },
    ],
    assistantActivity: [
      { id: "act_1", label: "Lyrics analyzed", done: true },
      { id: "act_2", label: "Rough mix uploaded", done: true },
      { id: "act_3", label: "Cover pending", done: false },
    ],
    recommendedNextStep: "Generate Cover Art",
    recommendedEta: "approximately 25 seconds",
  },
  {
    id: "rel_midnight",
    title: "Midnight",
    artist: "The Late Static",
    status: "ready",
    progress: 92,
    updatedAt: "3 days ago",
    coverTone: 3,
    health: [
      { key: "lyrics", label: "Lyrics", status: "complete" },
      { key: "music", label: "Music", status: "complete" },
      { key: "cover", label: "Cover", status: "complete" },
      { key: "canvas", label: "Canvas", status: "complete" },
      { key: "video", label: "Video", status: "complete" },
      { key: "social", label: "Social", status: "complete" },
      { key: "distribution", label: "Distribution", status: "in_progress" },
    ],
    assistantActivity: [
      { id: "act_1", label: "Video assembled", done: true },
      { id: "act_2", label: "Social pack generated", done: true },
      { id: "act_3", label: "Distribution checklist pending", done: false },
    ],
    recommendedNextStep: "Review distribution checklist",
    recommendedEta: "approximately 2 minutes",
  },
  {
    id: "rel_one_night_stand",
    title: "One Night Stand",
    artist: "Marlowe Kane",
    status: "draft",
    progress: 12,
    updatedAt: "5 days ago",
    coverTone: 4,
    health: [
      { key: "lyrics", label: "Lyrics", status: "in_progress" },
      { key: "music", label: "Music", status: "missing" },
      { key: "cover", label: "Cover", status: "missing" },
      { key: "canvas", label: "Canvas", status: "missing" },
      { key: "video", label: "Video", status: "missing" },
      { key: "social", label: "Social", status: "missing" },
      { key: "distribution", label: "Distribution", status: "missing" },
    ],
    assistantActivity: [{ id: "act_1", label: "Lyric draft started", done: true }],
    recommendedNextStep: "Generate a lyric draft",
    recommendedEta: "approximately 20 seconds",
  },
];

export function getReleaseById(id: string): PlaceholderRelease | undefined {
  return PLACEHOLDER_RELEASES.find((release) => release.id === id);
}
