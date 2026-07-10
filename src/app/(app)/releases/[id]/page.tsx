import { notFound } from "next/navigation";

import { ReleaseWorkspace } from "@/components/releases/release-workspace";
import { getReleaseById } from "@/lib/placeholder-data/releases";

export default async function ReleaseWorkspacePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const release = getReleaseById(id);

  if (!release) {
    notFound();
  }

  return <ReleaseWorkspace release={release} />;
}
