import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

/**
 * Keeps the application's colour scheme in sync with the operating system.
 *
 * The Graphwise styleguide exposes its dark palette under the `:root.dark`
 * selector, and PrimeNG is configured with `darkModeSelector: '.dark'`, so the
 * only thing this service has to do is add / remove the `dark` class on the
 * document root whenever the OS `prefers-color-scheme` media query changes.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  /** Reactive flag other components can read to reflect the current mode. */
  readonly isDark = signal(false);

  private mediaQuery?: MediaQueryList;

  /** Called once on app start to attach the OS listener. */
  init(): void {
    const win = this.document.defaultView;
    if (!win?.matchMedia) {
      return;
    }

    this.mediaQuery = win.matchMedia('(prefers-color-scheme: dark)');
    this.apply(this.mediaQuery.matches);

    // Modern browsers expose addEventListener on MediaQueryList.
    this.mediaQuery.addEventListener('change', (event) => this.apply(event.matches));
  }

  private apply(dark: boolean): void {
    this.isDark.set(dark);
    const root = this.document.documentElement;
    root.classList.toggle('dark', dark);
  }
}
