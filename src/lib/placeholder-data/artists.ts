export interface PlaceholderArtist {
  id: string;
  name: string;
  initials: string;
  genres: string[];
  songCount: number;
  status: "active" | "inactive";
}

export const PLACEHOLDER_ARTISTS: PlaceholderArtist[] = [
  {
    id: "art_1",
    name: "Nova Reyes",
    initials: "NR",
    genres: ["Synth-pop", "Electronic"],
    songCount: 2,
    status: "active",
  },
  {
    id: "art_2",
    name: "Marlowe Kane",
    initials: "MK",
    genres: ["Indie Folk"],
    songCount: 1,
    status: "active",
  },
  {
    id: "art_3",
    name: "The Late Static",
    initials: "LS",
    genres: ["Post-rock", "Ambient"],
    songCount: 2,
    status: "active",
  },
  {
    id: "art_4",
    name: "Junie Vale",
    initials: "JV",
    genres: ["R&B", "Soul"],
    songCount: 0,
    status: "inactive",
  },
  {
    id: "art_5",
    name: "Rook & Ember",
    initials: "RE",
    genres: ["Alt Rock"],
    songCount: 2,
    status: "active",
  },
];
