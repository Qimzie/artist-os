import { Disc3 } from "lucide-react";

import { cn } from "@/lib/utils";

const TONE_GRADIENT: Record<number, string> = {
  1: "from-chart-1/50 via-chart-1/20 to-transparent",
  2: "from-chart-2/50 via-chart-2/20 to-transparent",
  3: "from-chart-3/50 via-chart-3/20 to-transparent",
  4: "from-chart-4/50 via-chart-4/20 to-transparent",
  5: "from-chart-5/50 via-chart-5/20 to-transparent",
};

interface ReleaseCoverProps {
  tone: 1 | 2 | 3 | 4 | 5;
  className?: string;
  iconClassName?: string;
}

export function ReleaseCover({ tone, className, iconClassName }: ReleaseCoverProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br",
        TONE_GRADIENT[tone],
        className,
      )}
    >
      <Disc3 className={cn("size-8 text-foreground/40", iconClassName)} />
    </div>
  );
}
