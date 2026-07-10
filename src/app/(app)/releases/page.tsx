import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";
import { ReleaseCard } from "@/components/releases/release-card";
import { PLACEHOLDER_RELEASES } from "@/lib/placeholder-data/releases";

export default function ReleasesPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Releases"
        description="Every release and its progress. Placeholder data — Sprint 2 connects this to Supabase."
        action={
          <Button disabled title="Available once backend is connected in Sprint 2">
            <Plus />
            New Release
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PLACEHOLDER_RELEASES.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </div>
  );
}
