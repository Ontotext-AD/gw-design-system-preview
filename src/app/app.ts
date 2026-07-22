import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';

import { ThemeService } from './theme.service';
import type { ThemeMode } from './theme.service';

interface ThemeOption {
  label: string;
  value: ThemeMode;
}

interface NavItem {
  label: string;
  path: string;
}

interface NavGroup {
  label: string;
  expanded: boolean;
  items: NavItem[];
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet, SelectModule, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App implements OnInit {
  protected readonly theme = inject(ThemeService);
  protected readonly homeUrl = 'https://ontotext-ad.github.io/gw-design-system-preview/';
  protected readonly themeOptions: ThemeOption[] = [
    { label: 'Light (OS)', value: 'os' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  protected readonly navGroups: NavGroup[] = [
    {
      label: 'Components',
      expanded: true,
      items: [
        { label: 'Onto M', path: '/components/onto-m' },
        { label: 'Icons', path: '/components/icons' },
        { label: 'Form', path: '/components/form' },
        { label: 'Button', path: '/components/button' },
        { label: 'Other', path: '/components/other' },
      ],
    },
    {
      label: 'Overlay',
      expanded: true,
      items: [{ label: 'Dialog', path: '/components/overlay/dialog' }],
    },
  ];

  ngOnInit(): void {
    this.theme.init();
  }
}
