import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { DrawerModule } from 'primeng/drawer';
import { MessageModule } from 'primeng/message';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { PanelModule } from 'primeng/panel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { SplitterModule } from 'primeng/splitter';
import { TagModule } from 'primeng/tag';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { MenuItem, TreeNode } from 'primeng/api';

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
    SelectButtonModule,
    SkeletonModule,
    SplitterModule,
    TagModule,
    ToggleSwitchModule,
    TreeModule,
  ],
  template: `
    <div class="page">
      <section class="section">
        <h2 class="section__title">Breadcrumb</h2>
        <p-breadcrumb [model]="breadcrumbItems" [home]="breadcrumbHome" />
      </section>

      <section class="section">
        <h2 class="section__title">Tags &amp; Badges</h2>
        <div class="row row--wrap row--middle">
          <p-tag value="Primary" />
          <p-tag value="Success" severity="success" icon="pi pi-check" />
          <p-tag value="Info" severity="info" />
          <p-tag value="Warning" severity="warn" icon="pi pi-exclamation-triangle" />
          <p-tag value="Danger" severity="danger" />
          <p-tag value="Rounded" [rounded]="true" severity="contrast" />
          <span class="badge-inline">Messages <p-badge value="8" /></span>
          <span class="badge-inline">Errors <p-badge value="3" severity="danger" /></span>
          <p-overlayBadge value="4" severity="danger">
            <i class="pi pi-bell" style="font-size: 1.6rem"></i>
          </p-overlayBadge>
          <p-overlayBadge value="12" severity="success">
            <i class="pi pi-envelope" style="font-size: 1.6rem"></i>
          </p-overlayBadge>
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Messages &amp; Toast</h2>
        <div class="stack">
          <p-message severity="success" text="Repository connected successfully." />
          <p-message severity="info" text="A new ontology version is available." />
          <p-message severity="warn" text="Your license expires in 5 days." />
          <p-message severity="error" text="Failed to reach the SPARQL endpoint." />
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Cards</h2>
        <div class="section__grid">
          <p-card header="Knowledge Graph" subheader="1.2M triples">
            <p>A curated enterprise knowledge graph combining internal data sources with public reference ontologies.</p>
          </p-card>

          <p-card header="Pipeline Status" subheader="Last run 4 min ago">
            <div class="stack">
              <div class="row row--between"><span>Ingestion</span><p-tag value="Done" severity="success" /></div>
              <div class="row row--between"><span>Enrichment</span><p-tag value="Running" severity="info" /></div>
              <div class="row row--between"><span>Validation</span><p-tag value="Queued" severity="warn" /></div>
            </div>
          </p-card>
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Panel &amp; Accordion</h2>
        <div class="section__grid">
          <p-panel header="Repository details" [toggleable]="true">
            <div class="stack">
              <div class="row row--between"><span>Type</span><strong>GraphDB</strong></div>
              <div class="row row--between"><span>Entities</span><strong>842,301</strong></div>
              <div class="row row--between"><span>Status</span><p-tag value="Active" severity="success" /></div>
            </div>
          </p-panel>

          <p-accordion value="0">
            <p-accordion-panel value="0">
              <p-accordion-header>What is a knowledge graph?</p-accordion-header>
              <p-accordion-content>
                <p>A knowledge graph is a network of real-world entities and the relationships between them.</p>
              </p-accordion-content>
            </p-accordion-panel>
            <p-accordion-panel value="1">
              <p-accordion-header>What is SPARQL?</p-accordion-header>
              <p-accordion-content>
                <p>SPARQL is the standard query language and protocol for RDF graph databases.</p>
              </p-accordion-content>
            </p-accordion-panel>
            <p-accordion-panel value="2">
              <p-accordion-header>What are ontologies?</p-accordion-header>
              <p-accordion-content>
                <p>Ontologies formally define the concepts, properties and relations of a domain.</p>
              </p-accordion-content>
            </p-accordion-panel>
          </p-accordion>
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Tree &amp; Splitter</h2>
        <p-splitter [style]="{ height: '320px' }" [panelSizes]="[40, 60]" styleClass="splitter">
          <ng-template #panel>
            <div class="splitter__pane">
              <p-tree
                [value]="treeNodes"
                selectionMode="single"
                [(selection)]="selectedTreeNode"
                [style]="{ width: '100%', border: 'none' }"
              />
            </div>
          </ng-template>
          <ng-template #panel>
            <div class="splitter__pane splitter__pane--detail">
              <h3>Selection</h3>
              @if (selectedTreeNode) {
                <p-tag [value]="selectedTreeNode.label ?? ''" severity="info" />
                <p>Selected node key: <code>{{ selectedTreeNode.key }}</code></p>
              } @else {
                <p class="muted">Select a node in the tree to see its details here.</p>
              }
            </div>
          </ng-template>
        </p-splitter>
      </section>

      <section class="section">
        <h2 class="section__title">Skeleton (loading state)</h2>
        <p-card>
          @if (loading()) {
            <div class="skeleton-row">
              <p-skeleton shape="circle" size="4rem" />
              <div class="stack" style="flex: 1">
                <p-skeleton width="60%" height="1.2rem" />
                <p-skeleton width="90%" />
                <p-skeleton width="80%" />
              </div>
            </div>
          } @else {
            <div class="skeleton-row">
              <span class="pi pi-user avatar"></span>
              <div class="stack" style="flex: 1">
                <strong>Ada Lovelace</strong>
                <span class="muted">Data engineer · Knowledge Graph team</span>
                <span>Loaded content replaces the skeleton placeholders once ready.</span>
              </div>
            </div>
          }
        </p-card>
      </section>

      <section class="section">
        <h2 class="section__title">Drawer</h2>
        <p-button label="Open drawer" icon="pi pi-bars" (onClick)="drawerVisible = true" />
        <p-drawer [(visible)]="drawerVisible" header="Settings" position="right" [style]="{ width: '22rem' }">
          <div class="stack">
            <p>Configure your workspace preferences.</p>
            <div class="field">
              <label>Default view</label>
              <p-selectButton
                [options]="viewOptions"
                [(ngModel)]="selectedView"
                optionLabel="label"
                optionValue="value"
              />
            </div>
            <div class="row">
              <p-toggleSwitch [(ngModel)]="notificationsEnabled" />
              <span>Email notifications</span>
            </div>
            <p-button label="Save preferences" icon="pi pi-check" (onClick)="drawerVisible = false" />
          </div>
        </p-drawer>
      </section>

      <footer class="page__footer">
        <p-message severity="secondary" text="Theme follows your operating system's light / dark preference." />
      </footer>
    </div>
  `,
})
export class OtherPageComponent {
  protected readonly breadcrumbHome: MenuItem = { icon: 'pi pi-home', label: 'Home' };
  protected readonly breadcrumbItems: MenuItem[] = [{ label: 'Components' }, { label: 'Other' }];
  protected readonly treeNodes = [
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
  ];
  protected selectedTreeNode?: TreeNode;
  protected readonly viewOptions = [
    { label: 'List', value: 'list' },
    { label: 'Grid', value: 'grid' },
    { label: 'Table', value: 'table' },
  ];
  protected selectedView = 'grid';
  protected notificationsEnabled = true;
  protected drawerVisible = false;
  protected readonly loading = signal(true);

  constructor() {
    setTimeout(() => this.loading.set(false), 2600);
  }
}
