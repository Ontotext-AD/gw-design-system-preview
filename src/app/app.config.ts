import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
import Aura from '@primeuix/themes/aura';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    provideRouter(appRoutes),
    MessageService,
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          // The Graphwise styleguide exposes all of its design tokens as CSS
          // variables prefixed with `--gw-`. Configuring PrimeNG with the same
          // prefix makes every component read `var(--gw-*)`, so the values
          // defined in variables-light.css / variables-dark.css drive the theme.
          prefix: 'gw',
          // The styleguide flips its palette via a `.dark` class on the root
          // element (its dark tokens live under the `:root.dark` selector).
          darkModeSelector: '.dark',
          // Wrap PrimeNG's own generated styles in a cascade layer so the
          // unlayered `:root` overrides from the styleguide always win,
          // regardless of stylesheet insertion order.
          cssLayer: {
            name: 'primeng',
            order: 'primeng',
          },
        },
      },
    }),
  ],
};
