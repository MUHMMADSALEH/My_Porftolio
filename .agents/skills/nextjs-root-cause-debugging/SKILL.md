---
name: nextjs-root-cause-debugging
description: Diagnoses Next.js App Router errors involving React Server Components, SSR, hydration, module resolution, and dependency compatibility. Use when debugging runtime errors.
---

# Next.js Root-Cause Debugging

1. Read the full stack trace and identify the first relevant application and dependency frames.
2. Inspect package.json, the lockfile, and installed versions of Next.js, React, React DOM, and the affected dependency.
3. Trace imports and determine whether a Server Component boundary or client-only dependency is involved.
4. Form hypotheses and test them against evidence before modifying code.
5. Reproduce the failure where possible.
6. Apply the smallest safe fix and preserve existing functionality.
7. Do not upgrade dependencies, delete the lockfile, or add "use client" without justification.
8. Run available lint, tests, and production build checks.
9. Report the root cause, changed files, commands executed, and actual verification results.
10. Clearly distinguish confirmed findings from hypotheses.

Never claim the issue is fixed without verification.
