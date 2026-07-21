# Graphwise Design System Preview

An Angular 21 application for previewing and manually testing the
[graphwise-styleguide](https://github.com/Ontotext-AD/graphwise-styleguide)
design tokens against [PrimeNG](https://primeng.dev) components.

## What it does

The page renders a section per PrimeNG component (tree, toast, drawer,
breadcrumb, overlay badge, button, select, toggle switch, tag, panel,
split button, splitter, select button, accordion, badge, message, card,
skeleton) with dummy data and interactions, so the design system can be
inspected in a realistic UI.

## How the theming is wired

The Graphwise styleguide exposes every design token as a CSS custom property
prefixed with `--gw-` (e.g. `--gw-button-primary-background`), and the token
names mirror PrimeNG's own token schema.

1. **PrimeNG prefix** — in `src/app/app.config.ts`, `providePrimeNG` is
   configured with `options.prefix: 'gw'`, so every PrimeNG component reads its
   values from `var(--gw-*)` instead of the default `var(--p-*)`.
2. **Token values** — `src/styles.scss` imports the styleguide stylesheets:
   - `graphwise-styleguide/dist/variables-light.css` → defines all `--gw-*`
     tokens on `:root`
   - `graphwise-styleguide/dist/variables-dark.css` → overrides them under
     `:root.dark`

   These are imported *unlayered*, while PrimeNG's own generated styles are
   wrapped in a `@layer primeng` (`options.cssLayer`), so the styleguide values
   always win regardless of stylesheet insertion order.
3. **OS light / dark mode** — `src/app/theme.service.ts` watches
   `prefers-color-scheme` and toggles the `.dark` class on `<html>`. PrimeNG's
   `darkModeSelector` is set to `.dark` to match the styleguide's `:root.dark`
   selector.

## Development server

```bash
npm start        # or: ng serve
```

Then open `http://localhost:4200/`. Switch your OS between light and dark mode
to see the theme follow automatically.

## Building

```bash
npm run build    # or: ng build
```

Build artifacts are written to `dist/`.

## Branch preview deployments (GitHub Pages)

Any branch can be published on demand to GitHub Pages, and several branches can
coexist — each under its own URL — with a landing page listing them all.

**Live URLs**

- Landing page: <https://ontotext-ad.github.io/gw-design-system-preview/>
- A branch preview: `…/gw-design-system-preview/branches/<branch>/`

**Deploy or remove a branch**

1. Go to **Actions → Deploy branch preview → Run workflow**.
2. In **Use workflow from**, pick the branch you want to publish.
3. Choose **mode**:
   - `deploy` — build the selected branch and publish it (re-running for the
     same branch overwrites it).
   - `remove` — delete that branch's preview and drop it from the landing page.
4. Run it. The run summary links to the resulting URLs.

> The workflow runs the version of `.github/workflows/deploy-preview.yml` that
> lives on the selected branch, so a branch can only be deployed from the
> dropdown once it contains this workflow (branches cut from `main` inherit it).
> To remove a preview of an already-deleted branch, run from `main` and type the
> old branch name into the optional **branch** field.

**How it works** — the workflow builds with
`--base-href /gw-design-system-preview/branches/<branch>/` and pushes the output
into `branches/<branch>/` on the `gh-pages` branch (other branches are left
untouched). `.github/scripts/build-landing.mjs` maintains `branches.json` and
regenerates the landing `index.html` on every run.

**One-time setup** (once `gh-pages` exists after the first run): in
**Settings → Pages**, set **Source: Deploy from a branch → `gh-pages` / `/ (root)`**.

## Key dependencies

| Package                | Version |
| ---------------------- | ------- |
| Angular                | 21.x    |
| PrimeNG                | 21.1.9  |
| @primeuix/themes        | 2.0.3   |
| primeicons             | 7.0.0   |
| graphwise-styleguide   | 1.2.1   |
