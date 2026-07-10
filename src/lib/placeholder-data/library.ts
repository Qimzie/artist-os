export type LibraryItemType = "cover_art" | "photo" | "video" | "audio";

export interface PlaceholderLibraryItem {
  id: string;
  name: string;
  type: LibraryItemType;
  song: string | null;
  uploadedAt: string;
  size: string;
}

export const LIBRARY_ITEM_TYPE_LABEL: Record<LibraryItemType, string> = {
  cover_art: "Cover Art",
  photo: "Photo",
  video: "Video",
  audio: "Audio",
};

export const PLACEHOLDER_LIBRARY: PlaceholderLibraryItem[] = [
  {
    id: "med_1",
    name: "midnight-frequencies-cover.png",
    type: "cover_art",
    song: "Midnight Frequencies",
    uploadedAt: "2026-07-02",
    size: "4.2 MB",
  },
  {
    id: "med_2",
    name: "studio-session-01.jpg",
    type: "photo",
    song: "Static Bloom",
    uploadedAt: "2026-06-28",
    size: "1.8 MB",
  },
  {
    id: "med_3",
    name: "afterglow-lyric-video.mp4",
    type: "video",
    song: "Afterglow",
    uploadedAt: "2026-05-15",
    size: "128 MB",
  },
  {
    id: "med_4",
    name: "paper-moon-rough-mix.wav",
    type: "audio",
    song: "Paper Moon",
    uploadedAt: "2026-06-30",
    size: "42 MB",
  },
  {
    id: "med_5",
    name: "press-photo-nova.jpg",
    type: "photo",
    song: null,
    uploadedAt: "2026-06-10",
    size: "3.1 MB",
  },
  {
    id: "med_6",
    name: "static-bloom-cover-v2.png",
    type: "cover_art",
    song: "Static Bloom",
    uploadedAt: "2026-07-05",
    size: "5.0 MB",
  },
];
