-- Restricts EXECUTE on four SECURITY DEFINER functions to only the roles that actually need it.
-- Read-only audit findings that justify this (see conversation record, not restated in full here):
--
-- - is_org_member(uuid) / is_org_admin(uuid) are invoked implicitly by RLS policy evaluation for
--   every authenticated query against the org-scoped tables and storage buckets, so `authenticated`
--   keeps its grant. Confirmed every policy referencing them requires a matching
--   organization_members row keyed to auth.uid() — none grant anon or unauthenticated access, and
--   no anonymous/public page or query in the app depends on them. `service_role` bypasses RLS
--   entirely and is kept per explicit instruction rather than revoked.
-- - mark_release_ready_notified(uuid) is called only from
--   src/lib/release-pipeline/persistence.ts's maybeNotifyReleaseReady(), always as `authenticated`
--   (gated by resolvePersistenceContext requiring a real signed-in user + real org), so
--   `authenticated` keeps its grant; `service_role` is kept per explicit instruction.
-- - handle_new_user() is trigger-only (fired by on_auth_user_created on auth.users) and declared
--   RETURNS trigger, so no role ever needs to call it directly: Postgres invokes trigger functions
--   without checking the firing role's EXECUTE privilege, and RETURNS trigger functions cannot be
--   invoked as ordinary RPCs regardless of grants. Confirmed empirically that auth.users is owned
--   by supabase_auth_admin (not service_role) and service_role holds no INSERT privilege on
--   auth.users, so service_role plays no part in firing this trigger either — its EXECUTE grant
--   here is revoked along with the other three client-facing roles.

revoke execute on function public.is_org_member(uuid) from public, anon;
revoke execute on function public.is_org_admin(uuid) from public, anon;
revoke execute on function public.mark_release_ready_notified(uuid) from public, anon;

revoke execute on function public.handle_new_user() from public, anon, authenticated, service_role;
