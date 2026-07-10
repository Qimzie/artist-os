"use client";

import { useState } from "react";
import { Plus, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/layout/page-header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { PLACEHOLDER_PROMPTS, PROMPT_MODELS } from "@/lib/placeholder-data/prompts";
import {
  PLACEHOLDER_STORYBOARDS,
  STORYBOARD_STATUS_LABEL,
  type StoryboardStatus,
} from "@/lib/placeholder-data/storyboards";

const STORYBOARD_STATUS_VARIANT: Record<StoryboardStatus, "default" | "secondary" | "outline"> = {
  draft: "outline",
  in_review: "secondary",
  final: "default",
};

export default function StudioPage() {
  const [selectedId, setSelectedId] = useState(PLACEHOLDER_PROMPTS[0].id);
  const selected = PLACEHOLDER_PROMPTS.find((prompt) => prompt.id === selectedId)!;

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Studio"
        description="Storyboards and generated prompts. Placeholder data — generation connects in Sprint 2."
      />

      <Tabs defaultValue="prompts">
        <TabsList>
          <TabsTrigger value="prompts">Prompts</TabsTrigger>
          <TabsTrigger value="storyboards">Storyboards</TabsTrigger>
        </TabsList>

        <TabsContent value="prompts" className="mt-6">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[320px_1fr]">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-sm">Saved Prompts</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1 px-2">
                {PLACEHOLDER_PROMPTS.map((prompt) => (
                  <button
                    key={prompt.id}
                    type="button"
                    onClick={() => setSelectedId(prompt.id)}
                    className={`flex flex-col gap-1 rounded-md p-3 text-left transition-colors hover:bg-accent ${
                      prompt.id === selectedId ? "bg-accent" : ""
                    }`}
                  >
                    <span className="text-sm font-medium">{prompt.title}</span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-[10px]">
                        {prompt.model}
                      </Badge>
                      {prompt.category}
                    </span>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">{selected.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="prompt-title">Title</Label>
                    <Input id="prompt-title" defaultValue={selected.title} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="prompt-model">Model</Label>
                    <Select defaultValue={selected.model}>
                      <SelectTrigger id="prompt-model">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {PROMPT_MODELS.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="prompt-body">Prompt</Label>
                  <Textarea id="prompt-body" defaultValue={selected.prompt} rows={6} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Last updated {selected.updatedAt}
                  </span>
                  <Button disabled title="Generation connects to a model provider in Sprint 2">
                    <Sparkles />
                    Generate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="storyboards" className="mt-6">
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <Button disabled title="Available once backend is connected in Sprint 2">
                <Plus />
                New Storyboard
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {PLACEHOLDER_STORYBOARDS.map((storyboard) => (
                <Card key={storyboard.id}>
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div>
                      <CardTitle>{storyboard.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{storyboard.project}</p>
                    </div>
                    <Badge variant={STORYBOARD_STATUS_VARIANT[storyboard.status]}>
                      {STORYBOARD_STATUS_LABEL[storyboard.status]}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-1.5">
                      {Array.from({ length: Math.min(storyboard.sceneCount, 8) }).map(
                        (_, index) => (
                          <div
                            key={index}
                            className="aspect-video w-full rounded-sm border bg-muted"
                          />
                        ),
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between text-xs text-muted-foreground">
                    <span>{storyboard.sceneCount} scenes</span>
                    <span>Updated {storyboard.updatedAt}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
