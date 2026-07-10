# ArtistOS — Database Model

> Status: Proposal — no migrations exist yet in this foundation-only init.
> This document is the source of truth for intended schema; actual schema
> lives in `supabase/migrations/` once created.
> Last updated: 2026-07-10.

## 1. Principles

- **Shared schema, RLS-enforced tenancy.** Every tenant-owned table carries
  `org_id uuid references organizations(id)`. No table exposed through the
  Supabase API ships without Row Level Security enabled.
- **Timestamps everywhere.** All tables include `created_at` and `updated_at`
  (`updated_at` maintained via trigger, not application code).
- **Indexes follow RLS.** Any column referenced in an RLS policy (`org_id`,
  `user_id`) is indexed. Missing indexes on policy columns are the most
  common RLS performance failure.
- **Avoid recursive/slow policies.** Use a `security definer` helper function
  (e.g. `is_org_member(org_id uuid)`) rather than inlining subqueries in every
  policy.

## 2. Core Tables (MVP)

### `organizations`

Tenant root.

| Column       | Type         | Notes                                      |
| ------------ | ------------ | ------------------------------------------ |
| `id`         | uuid, PK     |                                            |
| `name`       | text         |                                            |
| `slug`       | text, unique | used in routing: `/[orgSlug]/...`          |
| `plan`       | text         | TODO: define plan enum once billing exists |
| `created_at` | timestamptz  |                                            |

### `profiles`

1:1 extension of `auth.users` (Supabase-managed).

| Column       | Type     | Notes             |
| ------------ | -------- | ----------------- |
| `id`         | uuid, PK | = `auth.users.id` |
| `full_name`  | text     |                   |
| `avatar_url` | text     |                   |

### `organization_members`

User ↔ organization join, with role.

| Column      | Type                             | Notes |
| ----------- | -------------------------------- | ----- |
| `org_id`    | uuid, FK → organizations         |       |
| `user_id`   | uuid, FK → auth.users            |       |
| `role`      | enum(`owner`, `admin`, `member`) |       |
| `joined_at` | timestamptz                      |       |

### `invitations`

Pending invites to join an organization.

| Column       | Type         | Notes                               |
| ------------ | ------------ | ----------------------------------- |
| `org_id`     | uuid, FK     |                                     |
| `email`      | text         |                                     |
| `role`       | enum         | same as `organization_members.role` |
| `token`      | text, unique |                                     |
| `expires_at` | timestamptz  |                                     |

### `artists`

Artist profile(s) under an organization.

| Column       | Type     | Notes |
| ------------ | -------- | ----- |
| `org_id`     | uuid, FK |       |
| `name`       | text     |       |
| `bio`        | text     |       |
| `avatar_url` | text     |       |
| `genres`     | text[]   |       |

### `projects`

A release (album/single/EP).

| Column         | Type                                                           | Notes                                                 |
| -------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| `org_id`       | uuid, FK                                                       |                                                       |
| `artist_id`    | uuid, FK → artists                                             |                                                       |
| `title`        | text                                                           |                                                       |
| `type`         | enum(`album`, `single`, `ep`)                                  | TODO: confirm full list of release types with product |
| `status`       | enum(`idea`, `in_progress`, `mixing`, `mastering`, `released`) | pipeline order                                        |
| `release_date` | date, nullable                                                 |                                                       |

### `tasks`

Checklist items scoped to a project.

| Column        | Type                                | Notes |
| ------------- | ----------------------------------- | ----- |
| `project_id`  | uuid, FK                            |       |
| `title`       | text                                |       |
| `status`      | enum(`todo`, `in_progress`, `done`) |       |
| `assignee_id` | uuid, FK → auth.users, nullable     |       |
| `due_date`    | date, nullable                      |       |

### `project_collaborators`

People attached to a project.

| Column             | Type                            | Notes                                                                        |
| ------------------ | ------------------------------- | ---------------------------------------------------------------------------- |
| `project_id`       | uuid, FK                        |                                                                              |
| `contact_id`       | uuid, FK → contacts, nullable   |                                                                              |
| `user_id`          | uuid, FK → auth.users, nullable | one of `contact_id`/`user_id` set                                            |
| `role`             | text                            | e.g. producer, engineer, featured artist                                     |
| `split_percentage` | numeric, nullable               | unused until royalties (v2); modeled now to avoid a breaking migration later |

### `contacts`

Org-level people directory (collaborators, industry contacts).

| Column   | Type           | Notes |
| -------- | -------------- | ----- |
| `org_id` | uuid, FK       |       |
| `name`   | text           |       |
| `email`  | text, nullable |       |
| `role`   | text, nullable |       |
| `notes`  | text, nullable |       |

### `assets`

Uploaded files (cover art, etc.), backed by Supabase Storage.

| Column         | Type                  | Notes            |
| -------------- | --------------------- | ---------------- |
| `org_id`       | uuid, FK              |                  |
| `project_id`   | uuid, FK, nullable    |                  |
| `storage_path` | text                  |                  |
| `type`         | text                  | e.g. `cover_art` |
| `uploaded_by`  | uuid, FK → auth.users |                  |

### `activity_log`

Audit trail.

| Column        | Type                  | Notes |
| ------------- | --------------------- | ----- |
| `org_id`      | uuid, FK              |       |
| `actor_id`    | uuid, FK → auth.users |       |
| `action`      | text                  |       |
| `entity_type` | text                  |       |
| `entity_id`   | uuid                  |       |
| `created_at`  | timestamptz           |       |

## 3. Reserved for Later (not created yet)

| Table                                            | Introduced in | Purpose                      |
| ------------------------------------------------ | ------------- | ---------------------------- |
| `invoices`, `transactions`, `royalty_statements` | v2            | Finance & royalties          |
| `shows`, `venues`                                | v3            | Booking & tour management    |
| `rights_agreements`                              | v3            | Rights & contract management |
| `fans`, `campaigns`                              | v3            | Fan/audience CRM             |

## 4. RLS Policy Pattern

> TODO: implement as the first migration. Sketch:

```sql
create function is_org_member(target_org uuid)
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from organization_members
    where org_id = target_org and user_id = auth.uid()
  );
$$;

-- per tenant-owned table:
alter table projects enable row level security;

create policy "org members can read projects"
  on projects for select
  using (is_org_member(org_id));

create policy "org members can write projects"
  on projects for insert
  with check (is_org_member(org_id));
```

## 5. Migration Workflow

> TODO: document once `supabase/migrations/` exists — Supabase CLI
> (`supabase migration new <name>`), local dev DB via `supabase start`,
> and how migrations are applied to staging/production.

## 6. Open Questions

- TODO: soft deletes (`deleted_at`) vs. hard deletes — decide per table.
- TODO: `activity_log` retention policy.
- TODO: confirm `project.type` and `project.status` enums with product
  before they're relied upon by UI.

## 7. Related Documents

- [architecture/overview.md](./architecture/overview.md)
- [PRODUCT.md](./PRODUCT.md)
