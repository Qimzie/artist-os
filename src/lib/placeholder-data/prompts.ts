export interface PlaceholderPrompt {
  id: string;
  title: string;
  model: string;
  category: string;
  prompt: string;
  updatedAt: string;
}

export const PLACEHOLDER_PROMPTS: PlaceholderPrompt[] = [
  {
    id: "pr_1",
    title: "Album cover — moody synth",
    model: "Image",
    category: "Cover Art",
    prompt:
      "A moody, high-contrast album cover for a synth-pop record: neon magenta and deep blue gradients, a lone silhouette against a rain-streaked skyline, 1:1 aspect ratio.",
    updatedAt: "2026-07-03",
  },
  {
    id: "pr_2",
    title: "Lyric video scene — dawn field",
    model: "Video",
    category: "Storyboard",
    prompt:
      "Wide establishing shot, golden-hour light over a wheat field, slow dolly-in, handheld film grain, warm color grade.",
    updatedAt: "2026-06-29",
  },
  {
    id: "pr_3",
    title: "Press bio — indie folk tone",
    model: "Text",
    category: "Copywriting",
    prompt:
      "Write a 100-word press bio for an indie folk artist, warm and understated tone, no cliches about 'raw emotion'.",
    updatedAt: "2026-06-15",
  },
];

export const PROMPT_MODELS = ["Image", "Video", "Audio", "Text"] as const;
