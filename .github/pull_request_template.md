## Summary

<!-- What changed and why -->

## Release / release-please

This repo uses **release-please**. Commits titled `Merge pull request #…` are **not** valid [Conventional Commits](https://www.conventionalcommits.org/), so release-please **ignores** them and may skip opening a release PR.

**When you merge:**

- Prefer **Squash and merge** and set the squash title to a Conventional Commit (e.g. `fix:`, `feat:`, `chore:`, `docs:`), **or**
- Use **Rebase and merge** if every commit on the branch already follows Conventional Commits.

Avoid **Create a merge commit** for work that should drive releases or changelog updates.

**Commit types and semver:** `fix:` and `feat:` (and other breaking changes) drive version bumps. `docs:` / `chore:` updates alone may not open a release PR with the default release-please preset.

## Checklist

- [ ] Merge strategy above matches whether this PR should affect release-please / changelog
