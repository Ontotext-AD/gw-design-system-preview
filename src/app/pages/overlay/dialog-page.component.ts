import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

interface DialogVariant {
  key: string;
  label: string;
  description: string;
}

@Component({
  standalone: true,
  imports: [ButtonModule, DialogModule, JsonPipe],
  templateUrl: './dialog-page.component.html',
  styleUrl: './dialog-page.component.scss',
})
export class DialogPageComponent {
  private lastTrigger?: HTMLButtonElement;

  protected readonly componentName = 'DialogModule';
  protected readonly componentImport = "import { DialogModule } from 'primeng/dialog';";
  protected readonly overlayVariants: DialogVariant[] = [
    {
      key: 'basic',
      label: 'Basic modal',
      description: 'Standard modal dialog with explicit cancel and primary action.',
    },
    {
      key: 'confirm',
      label: 'Confirmation dialog',
      description: 'Minimal confirmation pattern for a single decision.',
    },
    {
      key: 'long',
      label: 'Long-content dialog',
      description: 'Scrolls inside the dialog when content exceeds the viewport.',
    },
    {
      key: 'max',
      label: 'Maximizable dialog',
      description: 'Uses the installed maximize control for larger working surfaces.',
    },
    {
      key: 'responsive',
      label: 'Responsive dialog',
      description: 'Uses breakpoints to reduce width on smaller screens.',
    },
  ];

  protected readonly anatomyItems = [
    'Backdrop',
    'Dialog container',
    'Header',
    'Title',
    'Close action',
    'Content',
    'Footer',
    'Primary action',
    'Secondary action',
  ];

  protected basicVisible = false;
  protected confirmVisible = false;
  protected longVisible = false;
  protected maxVisible = false;
  protected responsiveVisible = false;
  protected responsiveMaximized = false;

  protected readonly responsiveBreakpoints = {
    '960px': '75vw',
    '640px': '92vw',
  };

  protected readonly variantNotes = {
    basic: 'The dialog is modal, closable, and blocks background interaction while open.',
    confirm: 'Good for a single yes/no decision with a clear title and short body copy.',
    long: 'Shows internal scrolling with a large amount of content.',
    max: 'The maximize button is enabled by the installed component.',
    responsive: 'Width is reduced using the installed `breakpoints` input.',
  } as const;

  protected openBasic(event: MouseEvent): void {
    this.lastTrigger = (event.currentTarget as HTMLButtonElement | null) ?? undefined;
    this.basicVisible = true;
  }

  protected closeBasic(): void {
    this.basicVisible = false;
    this.restoreFocus(this.lastTrigger);
  }

  protected openConfirm(event: MouseEvent): void {
    this.lastTrigger = (event.currentTarget as HTMLButtonElement | null) ?? undefined;
    this.confirmVisible = true;
  }

  protected closeConfirm(): void {
    this.confirmVisible = false;
    this.restoreFocus(this.lastTrigger);
  }

  protected openLong(event: MouseEvent): void {
    this.lastTrigger = (event.currentTarget as HTMLButtonElement | null) ?? undefined;
    this.longVisible = true;
  }

  protected closeLong(): void {
    this.longVisible = false;
    this.restoreFocus(this.lastTrigger);
  }

  protected openMax(event: MouseEvent): void {
    this.lastTrigger = (event.currentTarget as HTMLButtonElement | null) ?? undefined;
    this.maxVisible = true;
  }

  protected closeMax(): void {
    this.maxVisible = false;
    this.restoreFocus(this.lastTrigger);
  }

  protected openResponsive(event: MouseEvent): void {
    this.lastTrigger = (event.currentTarget as HTMLButtonElement | null) ?? undefined;
    this.responsiveVisible = true;
  }

  protected closeResponsive(): void {
    this.responsiveVisible = false;
    this.restoreFocus(this.lastTrigger);
  }

  protected maximizeResponsive(): void {
    this.responsiveMaximized = !this.responsiveMaximized;
  }

  private restoreFocus(trigger?: HTMLButtonElement): void {
    queueMicrotask(() => trigger?.focus());
  }
}
