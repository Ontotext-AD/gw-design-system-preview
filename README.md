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

## Key dependencies

| Package                | Version |
| ---------------------- | ------- |
| Angular                | 21.x    |
| PrimeNG                | 21.1.9  |
| @primeuix/themes        | 2.0.3   |
| primeicons             | 7.0.0   |
| graphwise-styleguide   | 1.2.1   |
