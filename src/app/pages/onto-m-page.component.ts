import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DrawerModule } from 'primeng/drawer';
import { MessageModule } from 'primeng/message';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PanelModule } from 'primeng/panel';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { TagModule } from 'primeng/tag';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TreeModule } from 'primeng/tree';

import { ThemeService } from '../theme.service';

interface City {
  name: string;
  code: string;
}

@Component({
  standalone: true,
  imports: [
    FormsModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    DrawerModule,
    MessageModule,
    OverlayBadgeModule,
    PanelModule,
    SelectModule,
    SelectButtonModule,
    SkeletonModule,
    SplitButtonModule,
    SplitterModule,
    TagModule,
    ToggleSwitchModule,
    TreeModule,
  ],
  templateUrl: './onto-m-page.component.html',
  styleUrl: './onto-m-page.component.scss',
})
export class OntoMPageComponent implements OnInit {
  private readonly messageService = inject(MessageService);
  protected readonly theme = inject(ThemeService);

  protected readonly title = 'Graphwise Design System Preview';

  // --- Breadcrumb -----------------------------------------------------------
  protected readonly breadcrumbHome: MenuItem = { icon: 'pi pi-home', label: 'Home' };
  protected readonly breadcrumbItems: MenuItem[] = [
    { label: 'Components' },
    { label: 'Design System' },
    { label: 'Preview' },
  ];

  // --- Tree -----------------------------------------------------------------
  protected readonly treeNodes: TreeNode[] = [
    {
      key: '0',
      label: 'Knowledge Graph',
      icon: 'pi pi-share-alt',
      expanded: true,
      children: [
        {
          key: '0-0',
          label: 'Ontologies',
          icon: 'pi pi-sitemap',
          children: [
            { key: '0-0-0', label: 'schema.org', icon: 'pi pi-file' },
            { key: '0-0-1', label: 'FOAF', icon: 'pi pi-file' },
          ],
        },
        {
          key: '0-1',
          label: 'Repositories',
          icon: 'pi pi-database',
          children: [
            { key: '0-1-0', label: 'wikidata', icon: 'pi pi-server' },
            { key: '0-1-1', label: 'dbpedia', icon: 'pi pi-server' },
          ],
        },
      ],
    },
    {
      key: '1',
      label: 'Pipelines',
      icon: 'pi pi-cog',
      children: [
        { key: '1-0', label: 'Ingestion', icon: 'pi pi-download' },
        { key: '1-1', label: 'Enrichment', icon: 'pi pi-sparkles' },
      ],
    },
  ];
  protected selectedTreeNode?: TreeNode;

  // --- Select ---------------------------------------------------------------
  protected readonly cities: City[] = [
    { name: 'Sofia', code: 'SF' },
    { name: 'London', code: 'LDN' },
    { name: 'Berlin', code: 'BER' },
    { name: 'New York', code: 'NY' },
    { name: 'Tokyo', code: 'TKO' },
  ];
  protected selectedCity?: City;

  // --- ToggleSwitch ---------------------------------------------------------
  protected notificationsEnabled = true;

  // --- SelectButton ---------------------------------------------------------
  protected readonly viewOptions = [
    { label: 'List', value: 'list', icon: 'pi pi-list' },
    { label: 'Grid', value: 'grid', icon: 'pi pi-th-large' },
    { label: 'Table', value: 'table', icon: 'pi pi-table' },
  ];
  protected selectedView = 'grid';

  // --- SplitButton ----------------------------------------------------------
  protected readonly splitItems: MenuItem[] = [
    { label: 'Update', icon: 'pi pi-refresh', command: () => this.toast('info', 'Update', 'Record updated') },
    { label: 'Delete', icon: 'pi pi-trash', command: () => this.toast('warn', 'Delete', 'Record deleted') },
    { separator: true },
    { label: 'Export', icon: 'pi pi-upload', command: () => this.toast('success', 'Export', 'Export started') },
  ];

  // --- Drawer ---------------------------------------------------------------
  protected drawerVisible = false;

  // --- Skeleton -------------------------------------------------------------
  protected loading = signal(true);

  ngOnInit(): void {
    this.theme.init();
    // Simulate a loading state so the skeletons are visible before content.
    setTimeout(() => this.loading.set(false), 2600);
  }

  protected save(): void {
    this.toast('success', 'Saved', 'Your changes have been saved.');
  }

  protected showToast(severity: 'success' | 'info' | 'warn' | 'error'): void {
    const map = {
      success: ['Success', 'Operation completed successfully.'],
      info: ['Information', 'Here is some useful information.'],
      warn: ['Warning', 'Please double-check your input.'],
      error: ['Error', 'Something went wrong.'],
    } as const;
    const [summary, detail] = map[severity];
    this.toast(severity, summary, detail);
  }

  private toast(severity: string, summary: string, detail: string): void {
    this.messageService.add({ severity, summary, detail, life: 3000 });
  }
}
