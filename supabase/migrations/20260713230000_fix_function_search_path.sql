-- Pins search_path on the three functions flagged by the Supabase security advisor as
-- "Function Search Path Mutable" (lint 0011). Does not touch function bodies, permissions,
-- policies, tables, or data — ALTER FUNCTION ... SET only changes the function's proconfig.
--
-- is_org_member/is_org_admin reference `organization_members` unqualified, so `public` stays
-- in their path. set_updated_at references no schema objects (only NEW/now()), so it gets the
-- empty path — pg_catalog remains implicitly searchable regardless.

alter function public.is_org_member(target_org uuid) set search_path = public;

alter function public.is_org_admin(target_org uuid) set search_path = public;

alter function public.set_updated_at() set search_path = '';
