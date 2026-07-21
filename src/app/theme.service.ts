import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type ThemeMode = 'os' | 'light' | 'dark';

/**
 * Keeps the application's colour scheme in sync with the selected theme mode.
 *
 * The Graphwise styleguide exposes its dark palette under the `:root.dark`
 * selector, and PrimeNG is configured with `darkModeSelector: '.dark'`, so the
 * only thing this service has to do is add / remove the `dark` class on the
 * document root.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private static readonly storageKey = 'graphwise-theme-mode';

  private readonly document = inject(DOCUMENT);

  /** Reactive theme mode other components can read and update. */
  readonly mode = signal<ThemeMode>('os');

  /** Reactive flag other components can read to reflect the current mode. */
  readonly isDark = signal(false);

  private mediaQuery?: MediaQueryList;

  /** Called once on app start to attach the OS listener. */
  init(): void {
    const win = this.document.defaultView;
    this.mode.set(this.readStoredMode() ?? 'os');

    if (!win?.matchMedia) {
      this.applyCurrentMode();
      return;
    }

    this.mediaQuery = win.matchMedia('(prefers-color-scheme: dark)');
    this.applyCurrentMode();

    // Modern browsers expose addEventListener on MediaQueryList.
    this.mediaQuery.addEventListener('change', () => {
      if (this.mode() === 'os') {
        this.applyCurrentMode();
      }
    });
  }

  setMode(mode: ThemeMode): void {
    this.mode.set(mode);
    this.storeMode(mode);
    this.applyCurrentMode();
  }

  private applyCurrentMode(): void {
    const dark = this.mode() === 'dark' || (this.mode() === 'os' && !!this.mediaQuery?.matches);
    this.apply(dark);
  }

  private apply(dark: boolean): void {
    this.isDark.set(dark);
    const root = this.document.documentElement;
    root.classList.toggle('dark', dark);
  }

  private readStoredMode(): ThemeMode | null {
    try {
      const storage = this.document.defaultView?.localStorage;
      const stored = storage?.getItem(ThemeService.storageKey);
      return stored === 'light' || stored === 'dark' || stored === 'os' ? stored : null;
    } catch {
      return null;
    }
  }

  private storeMode(mode: ThemeMode): void {
    try {
      this.document.defaultView?.localStorage.setItem(ThemeService.storageKey, mode);
    } catch {
      // Ignore storage failures and keep the live theme switch working.
    }
  }
}
