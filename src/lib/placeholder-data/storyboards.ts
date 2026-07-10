export type StoryboardStatus = "draft" | "in_review" | "final";

export interface PlaceholderStoryboard {
  id: string;
  title: string;
  project: string;
  sceneCount: number;
  status: StoryboardStatus;
  updatedAt: string;
}

export const STORYBOARD_STATUS_LABEL: Record<StoryboardStatus, string> = {
  draft: "Draft",
  in_review: "In Review",
  final: "Final",
};

export const PLACEHOLDER_STORYBOARDS: PlaceholderStoryboard[] = [
  {
    id: "sb_1",
    title: "Afterglow — Music Video",
    project: "Afterglow",
    sceneCount: 12,
    status: "final",
    updatedAt: "2026-05-10",
  },
  {
    id: "sb_2",
    title: "Midnight Frequencies — Visualizer",
    project: "Midnight Frequencies",
    sceneCount: 6,
    status: "in_review",
    updatedAt: "2026-07-01",
  },
  {
    id: "sb_3",
    title: "Paper Moon — Lyric Concept",
    project: "Paper Moon",
    sceneCount: 8,
    status: "draft",
    updatedAt: "2026-06-25",
  },
  {
    id: "sb_4",
    title: "Static Bloom — Album Trailer",
    project: "Static Bloom",
    sceneCount: 4,
    status: "draft",
    updatedAt: "2026-06-20",
  },
];
