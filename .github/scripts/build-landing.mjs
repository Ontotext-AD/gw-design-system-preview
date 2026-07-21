#!/usr/bin/env node
// Maintains the gh-pages branch manifest (branches.json) and renders the
// branded landing page (index.html) that lists every deployed branch preview.
//
// Usage:
//   node build-landing.mjs upsert --dir <dir> --name <name> --sha <fullSha> \
//        --date <iso> --actor <login> --run-url <url> [--manifest p] [--out p]
//   node build-landing.mjs remove --dir <dir> [--manifest p] [--out p]
//   node build-landing.mjs render [--manifest p] [--out p]
//
// The manifest / output default to ./branches.json and ./index.html so the
// workflow can run it from inside the checked-out gh-pages working tree.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

// --- argument parsing -------------------------------------------------------

const [, , command, ...rest] = process.argv;

/** Parse `--key value` pairs into a plain object. */
function parseFlags(argv) {
  const flags = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i];
    if (!key?.startsWith('--')) {
      throw new Error(`Expected a --flag but got "${key}"`);
    }
    flags[key.slice(2)] = argv[i + 1] ?? '';
  }
  return flags;
}

const flags = parseFlags(rest);
const manifestPath = flags.manifest ?? './branches.json';
const outPath = flags.out ?? './index.html';

// --- manifest read / write --------------------------------------------------

function loadManifest() {
  if (!existsSync(manifestPath)) {
    return { branches: [] };
  }
  try {
    const data = JSON.parse(readFileSync(manifestPath, 'utf8'));
    return Array.isArray(data.branches) ? data : { branches: [] };
  } catch {
    return { branches: [] };
  }
}

function saveManifest(manifest) {
  manifest.branches.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
}

// --- commands ---------------------------------------------------------------

function requireFlag(name) {
  const value = flags[name];
  if (!value) {
    throw new Error(`Missing required flag --${name}`);
  }
  return value;
}

function upsert(manifest) {
  const dir = requireFlag('dir');
  const entry = {
    name: requireFlag('name'),
    dir,
    sha: (flags.sha ?? '').slice(0, 7),
    shaFull: flags.sha ?? '',
    date: flags.date || new Date().toISOString(),
    actor: flags.actor ?? '',
    runUrl: flags['run-url'] ?? '',
  };
  const others = manifest.branches.filter((b) => b.dir !== dir);
  manifest.branches = [...others, entry];
}

function remove(manifest) {
  const dir = requireFlag('dir');
  manifest.branches = manifest.branches.filter((b) => b.dir !== dir);
}

// --- HTML rendering ---------------------------------------------------------

/** Escape a value for safe interpolation into HTML text / attributes. */
function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** ISO timestamp -> "2026-07-21 14:32 UTC" (empty string if unparseable). */
function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return (
    `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ` +
    `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())} UTC`
  );
}

function renderCard(b) {
  const href = `./branches/${encodeURIComponent(b.dir)}/`;
  const meta = [
    b.sha ? `<span class="mono sha">${esc(b.sha)}</span>` : '',
    b.date ? `<span class="mono">${esc(formatDate(b.date))}</span>` : '',
    b.actor ? `<span class="actor">@${esc(b.actor)}</span>` : '',
    b.runUrl
      ? `<a class="run-link" href="${esc(b.runUrl)}" title="View the deploy run">deploy log&nbsp;↗</a>`
      : '',
  ]
    .filter(Boolean)
    .join('<span class="sep" aria-hidden="true">·</span>');

  // The name is a "stretched link": its ::after covers the whole card, so the
  // entire node is clickable while keeping the run-link independently clickable.
  return `        <li class="node">
          <span class="node-glyph" aria-hidden="true"></span>
          <span class="node-body">
            <a class="node-name" href="${esc(href)}">${esc(b.name)}</a>
            <span class="node-meta">${meta}</span>
          </span>
          <span class="node-go" aria-hidden="true">↗</span>
        </li>`;
}

function renderEmpty() {
  return `        <li class="empty">
          <p>No previews deployed yet.</p>
          <p class="muted">Run the <strong>Deploy branch preview</strong> workflow from the Actions tab and pick a branch.</p>
        </li>`;
}

function render(manifest) {
  const branches = [...manifest.branches].sort((a, b) =>
    (b.date ?? '').localeCompare(a.date ?? ''),
  );
  const count = branches.length;
  const cards = count ? branches.map(renderCard).join('\n') : renderEmpty();
  const generatedAt = formatDate(new Date().toISOString());
  const countLabel = count === 1 ? '1 branch' : `${count} branches`;

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Graphwise Design System · Previews</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <style>
      :root {
        color-scheme: light dark;
        --bg: #0e1420;
        --bg-grid: rgba(110, 123, 255, 0.06);
        --surface: #161e2e;
        --surface-hover: #1b2637;
        --line: #26304a;
        --text: #e6eaf2;
        --muted: #8a94a8;
        --accent: #38e0b0;
        --accent-soft: rgba(56, 224, 176, 0.14);
        --edge: #6e7bff;
        --radius: 14px;
        --maxw: 900px;
      }
      @media (prefers-color-scheme: light) {
        :root {
          --bg: #f5f7fb;
          --bg-grid: rgba(110, 123, 255, 0.05);
          --surface: #ffffff;
          --surface-hover: #f0f3fa;
          --line: #dbe1ee;
          --text: #16202f;
          --muted: #5b6678;
          --accent: #0fae86;
          --accent-soft: rgba(15, 174, 134, 0.12);
          --edge: #4a57e0;
        }
      }

      * { box-sizing: border-box; }
      html { -webkit-text-size-adjust: 100%; }
      body {
        margin: 0;
        min-height: 100vh;
        background-color: var(--bg);
        background-image:
          linear-gradient(var(--bg-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--bg-grid) 1px, transparent 1px);
        background-size: 44px 44px;
        color: var(--text);
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      .mono {
        font-family: ui-monospace, 'SF Mono', 'JetBrains Mono', 'Fira Code', Menlo, Consolas, monospace;
      }

      .wrap {
        max-width: var(--maxw);
        margin: 0 auto;
        padding: clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2rem) 4rem;
      }

      /* --- header --- */
      .eyebrow {
        font-size: 0.72rem;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: var(--accent);
        margin: 0 0 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }
      .eyebrow::before {
        content: '';
        width: 26px;
        height: 1px;
        background: var(--accent);
      }
      h1 {
        margin: 0;
        font-size: clamp(2rem, 5.5vw, 3.1rem);
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.05;
      }
      h1 .thin { font-weight: 300; color: var(--muted); display: block; }
      .lede {
        margin: 1.1rem 0 0;
        max-width: 46ch;
        color: var(--muted);
        font-size: 1.02rem;
      }
      .stat {
        margin-top: 1.6rem;
        display: inline-flex;
        align-items: baseline;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: var(--muted);
      }
      .stat b { color: var(--text); font-weight: 600; }

      hr.rule {
        border: 0;
        border-top: 1px solid var(--line);
        margin: 2.4rem 0;
      }

      /* --- node list --- */
      ul.nodes { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.85rem; }
      .node {
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 1rem;
        padding: 1.15rem 1.3rem;
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: var(--radius);
        transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
      }
      .node:hover,
      .node:focus-within {
        border-color: var(--accent);
        background: var(--surface-hover);
        transform: translateY(-2px);
      }
      .node:focus-within { box-shadow: 0 0 0 3px var(--accent-soft); }

      /* signature: a glowing graph node with a stub edge */
      .node-glyph {
        position: relative;
        width: 14px;
        height: 14px;
        flex: none;
      }
      .node-glyph::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 0 4px var(--accent-soft);
      }
      .node-glyph::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 100%;
        width: 1px;
        height: 1.4rem;
        background: linear-gradient(var(--edge), transparent);
      }
      .node:last-child .node-glyph::after { display: none; }

      .node-body { min-width: 0; }
      .node-name {
        display: block;
        font-size: 1.18rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        word-break: break-word;
        color: inherit;
        text-decoration: none;
      }
      /* stretched link: makes the whole card open the preview */
      .node-name::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: var(--radius);
      }
      .node-name:focus-visible { outline: none; }
      .node-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.55rem;
        margin-top: 0.35rem;
        font-size: 0.82rem;
        color: var(--muted);
      }
      .node-meta .sha { color: var(--edge); }
      .node-meta .actor { color: var(--text); }
      .node-meta .sep { color: var(--line); }
      .node-go {
        font-size: 1.25rem;
        color: var(--muted);
        transition: color 0.18s ease, transform 0.18s ease;
      }
      .node:hover .node-go,
      .node:focus-within .node-go { color: var(--accent); transform: translate(2px, -2px); }

      /* sits above the stretched link so it stays independently clickable */
      .run-link {
        position: relative;
        z-index: 1;
        color: var(--muted);
        text-decoration: none;
      }
      .run-link:hover { color: var(--accent); text-decoration: underline; }

      .empty {
        padding: 2.5rem 1.5rem;
        text-align: center;
        border: 1px dashed var(--line);
        border-radius: var(--radius);
      }
      .empty p { margin: 0.35rem 0; }
      .muted { color: var(--muted); }

      footer {
        margin-top: 3rem;
        font-size: 0.76rem;
        color: var(--muted);
      }

      @media (prefers-reduced-motion: reduce) {
        * { transition: none !important; }
      }
    </style>
  </head>
  <body>
    <main class="wrap">
      <p class="eyebrow">Preview deployments</p>
      <h1>Graphwise Design System<span class="thin">branch previews</span></h1>
      <p class="lede">Every deployed branch is a node below. Open one to see the design-system preview built from that branch.</p>
      <p class="stat"><b>${esc(countLabel)}</b> deployed</p>

      <hr class="rule" />

      <ul class="nodes">
${cards}
      </ul>

      <footer>Generated ${esc(generatedAt)} · rebuilt on every deploy</footer>
    </main>
  </body>
</html>
`;

  writeFileSync(outPath, html);
}

// --- dispatch ---------------------------------------------------------------

function main() {
  const manifest = loadManifest();

  switch (command) {
    case 'upsert':
      upsert(manifest);
      saveManifest(manifest);
      break;
    case 'remove':
      remove(manifest);
      saveManifest(manifest);
      break;
    case 'render':
      break;
    default:
      console.error(`Unknown command "${command ?? ''}". Use: upsert | remove | render`);
      process.exit(1);
  }

  render(manifest);
  console.log(`Wrote ${outPath} (${manifest.branches.length} branch(es))`);
}

main();
