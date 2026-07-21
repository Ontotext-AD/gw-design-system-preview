import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  standalone: true,
  imports: [ButtonModule, SplitButtonModule, SpeedDialModule],
  template: `
    <div class="page">
      <section class="section">
        <h2 class="section__title">Buttons</h2>
        <p class="section__intro">Primary actions, status variants, and split actions from the existing demo.</p>
        <div class="row row--wrap">
          <p-button label="Primary" icon="pi pi-check" />
          <p-button label="Secondary" severity="secondary" icon="pi pi-cog" />
          <p-button label="Success" severity="success" icon="pi pi-thumbs-up" />
          <p-button label="Danger" severity="danger" icon="pi pi-trash" [outlined]="true" />
          <p-button label="Info" severity="info" [text]="true" />
          <p-button icon="pi pi-star" [rounded]="true" severity="help" />
          <p-splitButton label="Save" icon="pi pi-save" [model]="splitItems" />
        </div>
      </section>
    </div>
  `,
})
export class ButtonPageComponent {
  protected readonly splitItems: MenuItem[] = [
    { label: 'Update', icon: 'pi pi-refresh' },
    { label: 'Delete', icon: 'pi pi-trash' },
    { separator: true },
    { label: 'Export', icon: 'pi pi-upload' },
  ];
}
