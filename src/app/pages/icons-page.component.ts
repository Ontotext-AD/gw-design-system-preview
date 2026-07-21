import { Component, signal } from '@angular/core';

import { ButtonModule } from 'primeng/button';

type IconCopyField = 'glyph' | 'className' | 'unicode' | 'htmlEntity';

interface RemixIconInfo {
  name: string;
  className: string;
  unicode: string;
  cssEscape: string;
  htmlEntity: string;
  glyph: string;
}

interface IconAction {
  field: IconCopyField;
  label: string;
  ariaLabel: string;
}

@Component({
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div class="page">
      <section class="section">
        <h2 class="section__title">Icons</h2>
        <p class="section__intro">
          Remix Icon 4.9.1, using the package's own CSS class mappings for the rendered glyphs and
          code-point metadata.
        </p>

        <ul class="icon-grid">
          @for (icon of icons; track icon.name) {
            <li class="icon-tile">
              <button
                type="button"
                class="icon-tile__glyph-button"
                [attr.aria-label]="'Copy icon glyph for ' + icon.name"
                (click)="copyText(icon.glyph, 'glyph:' + icon.name)"
              >
                <i [class]="icon.className" aria-hidden="true"></i>
                <span class="sr-only">Copy icon glyph</span>
              </button>

              <h3 class="icon-tile__name">{{ icon.name }}</h3>

              <dl class="icon-tile__details">
                <div>
                  <dt>CSS class</dt>
                  <dd>{{ icon.className }}</dd>
                </div>
                <div>
                  <dt>Unicode</dt>
                  <dd>{{ icon.unicode }}</dd>
                </div>
              </dl>

              <div class="icon-tile__actions">
                @for (action of actions; track action.field) {
                  <button
                    pButton
                    type="button"
                    size="small"
                    severity="secondary"
                    [outlined]="true"
                    [label]="action.label"
                    [attr.aria-label]="action.ariaLabel + ' for ' + icon.name"
                    (click)="copyIconValue(icon, action.field, icon.name)"
                  ></button>
                }
              </div>

              <span class="icon-tile__status" [class.icon-tile__status--visible]="isCopied('glyph:' + icon.name)">
                {{ isCopied('glyph:' + icon.name) ? 'Copied' : '' }}
              </span>
            </li>
          }
        </ul>
      </section>
    </div>
  `,
  styleUrl: './icons-page.component.scss',
})
export class IconsPageComponent {
  protected readonly icons: RemixIconInfo[] = [
    {
      name: 'ri-add-circle-line',
      className: 'ri-add-circle-line',
      unicode: 'U+EA11',
      cssEscape: '\\ea11',
      htmlEntity: '&#59921;',
      glyph: String.fromCodePoint(0xea11),
    },
    {
      name: 'ri-account-circle-line',
      className: 'ri-account-circle-line',
      unicode: 'U+EA09',
      cssEscape: '\\ea09',
      htmlEntity: '&#59913;',
      glyph: String.fromCodePoint(0xea09),
    },
    {
      name: 'ri-apps-2-line',
      className: 'ri-apps-2-line',
      unicode: 'U+EA42',
      cssEscape: '\\ea42',
      htmlEntity: '&#59970;',
      glyph: String.fromCodePoint(0xea42),
    },
    {
      name: 'ri-alert-line',
      className: 'ri-alert-line',
      unicode: 'U+EA21',
      cssEscape: '\\ea21',
      htmlEntity: '&#59937;',
      glyph: String.fromCodePoint(0xea21),
    },
    {
      name: 'ri-arrow-right-line',
      className: 'ri-arrow-right-line',
      unicode: 'U+EA6C',
      cssEscape: '\\ea6c',
      htmlEntity: '&#60012;',
      glyph: String.fromCodePoint(0xea6c),
    },
  ];

  protected readonly actions: IconAction[] = [
    { field: 'glyph', label: 'Glyph', ariaLabel: 'Copy icon glyph' },
    { field: 'className', label: 'Class', ariaLabel: 'Copy CSS class' },
    { field: 'unicode', label: 'Unicode', ariaLabel: 'Copy Unicode value' },
    { field: 'htmlEntity', label: 'Entity', ariaLabel: 'Copy HTML entity' },
  ];

  private readonly copied = signal<string | null>(null);
  private copyTimer?: ReturnType<typeof setTimeout>;

  protected isCopied(key: string): boolean {
    return this.copied() === key;
  }

  protected copyIconValue(icon: RemixIconInfo, field: IconCopyField, name: string): void {
    const value = icon[field];
    const payload = field === 'glyph' ? icon.glyph : value;
    void this.copyText(payload, `${field}:${name}`);
  }

  protected async copyText(text: string, key: string): Promise<void> {
    try {
      if (!globalThis.isSecureContext || !globalThis.navigator?.clipboard) {
        return;
      }
      await globalThis.navigator.clipboard.writeText(text);
      this.copied.set(key);
      if (this.copyTimer) {
        clearTimeout(this.copyTimer);
      }
      this.copyTimer = setTimeout(() => this.copied.set(null), 1200);
    } catch {
      this.copied.set(null);
    }
  }
}
