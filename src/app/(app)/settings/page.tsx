import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/layout/page-header";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";

const NOTIFICATION_OPTIONS = [
  {
    id: "release-reminders",
    label: "Release date reminders",
    description: "Get notified as a song's release date approaches.",
  },
  {
    id: "task-assignments",
    label: "Task assignments",
    description: "Get notified when a task is assigned to you.",
  },
  {
    id: "asset-uploads",
    label: "New asset uploads",
    description: "Get notified when a teammate uploads a new asset.",
  },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Settings"
        description="Workspace and account settings. Most fields are placeholders until Sprint 2."
      />

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                This information is placeholder-only until authentication is added in Sprint 2.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:max-w-md">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="full-name">Full name</Label>
                <Input id="full-name" defaultValue="Guest User" disabled />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="guest@artistos.local" disabled />
              </div>
              <Button
                disabled
                className="w-fit"
                title="Available once authentication is connected in Sprint 2"
              >
                Save changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                ArtistOS defaults to dark mode. Toggle to preview light mode.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between sm:max-w-md">
              <div>
                <p className="text-sm font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">Switch between light and dark.</p>
              </div>
              <ThemeToggle />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organization">
          <Card>
            <CardHeader>
              <CardTitle>Organization</CardTitle>
              <CardDescription>
                Organization and multi-tenant management arrives with backend integration in Sprint
                2.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:max-w-md">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="org-name">Organization name</Label>
                <Input id="org-name" defaultValue="Placeholder Workspace" disabled />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="org-slug">Workspace URL</Label>
                <Input id="org-slug" defaultValue="artistos.app/placeholder-workspace" disabled />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Preferences are stored locally in this preview only.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 sm:max-w-md">
              {NOTIFICATION_OPTIONS.map((option, index) => (
                <div key={option.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{option.label}</p>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                    <Switch defaultChecked={index !== 2} />
                  </div>
                  {index < NOTIFICATION_OPTIONS.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
