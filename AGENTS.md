<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## ArtistOS design

Read `DESIGN.md` and `docs/DESIGN_SYSTEM.md` before UI work. The root document defines product
direction; the design-system document owns implementation tokens. Do not copy an external brand
specification or introduce one-off visual values.

## Project-local skills

The approved skills live in `.agents/skills/`. Use a skill only when its description matches the
current task. Direct user instructions and repository rules override skill guidance.

The vendored Addy Osmani skills are workflow documents only. Do not enable upstream hooks,
commands, automatic shipping, or the `using-agent-skills` meta-router. Actions that publish,
deploy, spend money, alter production data, or contact external systems still require explicit
approval.
