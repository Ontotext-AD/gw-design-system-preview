import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeModule } from 'primeng/tree';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    AutoCompleteModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipModule,
    ColorPickerModule,
    DatePickerModule,
    FloatLabelModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputMaskModule,
    InputNumberModule,
    InputOtpModule,
    InputTextModule,
    IftaLabelModule,
    ListboxModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    SelectModule,
    SliderModule,
    TextareaModule,
    ToggleSwitchModule,
    TreeSelectModule,
    TreeModule,
  ],
  template: `
    <div class="page">
      <section class="section">
        <h2 class="section__title">Text inputs</h2>
        <div class="section__grid">
          <div class="field">
            <label for="project-name">Project name</label>
            <input pInputText id="project-name" [(ngModel)]="projectName" placeholder="Knowledge Graph Explorer" />
          </div>
          <div class="field">
            <label for="tagline">Short description</label>
            <textarea
              pTextarea
              id="tagline"
              [(ngModel)]="tagline"
              [autoResize]="true"
              rows="3"
              placeholder="Describe the workspace"
            ></textarea>
          </div>
          <div class="field">
            <label for="budget">Budget</label>
            <p-inputNumber id="budget" [(ngModel)]="budget" mode="currency" currency="EUR" locale="en-US" />
          </div>
          <div class="field">
            <label for="api-key">API key</label>
            <p-password
              id="api-key"
              [(ngModel)]="apiKey"
              [feedback]="false"
              [toggleMask]="true"
              placeholder="Enter a secure value"
            />
          </div>
          <div class="field">
            <label for="phone">Phone</label>
            <input pInputMask id="phone" [(ngModel)]="phone" mask="+359 999 999 999" placeholder="+359 888 123 456" />
          </div>
          <div class="field">
            <label for="otp">Verification code</label>
            <p-inputOtp id="otp" [(ngModel)]="otp" [length]="6" />
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Label wrappers</h2>
        <div class="section__grid">
          <p-floatlabel>
            <input pInputText id="author" [(ngModel)]="author" />
            <label for="author">Author</label>
          </p-floatlabel>

          <p-iftalabel>
            <input pInputText id="city-input" [(ngModel)]="cityName" />
            <label for="city-input">City</label>
          </p-iftalabel>

          <div class="field">
            <label for="contact-group">Contact</label>
            <p-inputgroup id="contact-group">
              <p-inputgroup-addon>+359</p-inputgroup-addon>
              <input pInputText [(ngModel)]="contact" placeholder="888 123 456" />
            </p-inputgroup>
          </div>

          <div class="field">
            <label for="notes-disabled">Disabled text area</label>
            <textarea
              pTextarea
              id="notes-disabled"
              [disabled]="true"
              [value]="'Read-only notes placeholder'"
              rows="3"
            ></textarea>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Selection</h2>
        <div class="section__grid">
          <div class="field">
            <label for="country">Country</label>
            <p-select
              id="country"
              [options]="countries"
              [(ngModel)]="selectedCountry"
              optionLabel="name"
              placeholder="Choose a country"
              [showClear]="true"
            />
          </div>

          <div class="field">
            <label for="languages">Languages</label>
            <p-multiSelect
              id="languages"
              [options]="languages"
              [(ngModel)]="selectedLanguages"
              optionLabel="label"
              placeholder="Choose languages"
            />
          </div>

          <div class="field">
            <label for="topics">Topics</label>
            <p-listbox
              id="topics"
              [options]="topics"
              [(ngModel)]="selectedTopic"
              optionLabel="label"
              [style]="{ height: '12rem' }"
            />
          </div>

          <div class="field">
            <label for="status">Status</label>
            <p-selectButton id="status" [options]="statusOptions" [(ngModel)]="selectedStatus" optionLabel="label" optionValue="value" />
          </div>

          <div class="field">
            <label for="category">Category</label>
          <p-cascadeSelect
              id="category"
              [options]="$any(categories)"
              [(ngModel)]="selectedCategory"
              optionLabel="label"
              optionGroupLabel="label"
              optionGroupChildren="items"
              [style]="{ width: '100%' }"
            />
          </div>

          <div class="field">
            <label for="area-tree">Area</label>
            <p-treeSelect id="area-tree" [options]="treeOptions" [(ngModel)]="selectedTree" display="chip" placeholder="Choose an area" />
          </div>

          <div class="field">
            <label for="team">Autocomplete</label>
            <p-autoComplete
              id="team"
              [(ngModel)]="selectedTeam"
              [suggestions]="filteredTeams"
              (completeMethod)="filterTeams($event)"
              optionLabel="name"
              placeholder="Type a team or city"
            />
          </div>

          <div class="field">
            <label>Radio group</label>
            <div class="row">
              @for (choice of deliveryChoices; track choice.value) {
                <div class="row">
                  <p-radioButton
                    [inputId]="choice.value"
                    name="delivery"
                    [value]="choice.value"
                    [(ngModel)]="selectedDelivery"
                  />
                  <label [for]="choice.value">{{ choice.label }}</label>
                </div>
              }
            </div>
          </div>

          <div class="field">
            <label for="accept-terms">Checkbox and toggle</label>
            <div class="stack">
              <div class="row">
                <p-checkbox inputId="accept-terms" [(ngModel)]="acceptTerms" [binary]="true" />
                <label for="accept-terms">Accept terms</label>
              </div>
              <div class="row">
                <p-toggleSwitch inputId="published" [(ngModel)]="published" />
                <label for="published">Published</label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Range and feedback</h2>
        <div class="section__grid">
          <div class="field">
            <label for="rating">Rating</label>
            <p-rating id="rating" [(ngModel)]="rating" />
          </div>

          <div class="field">
            <label for="priority">Priority</label>
            <p-slider id="priority" [(ngModel)]="priority" [min]="0" [max]="100" />
          </div>

          <div class="field">
            <label for="saturation">Color</label>
            <p-colorPicker id="saturation" [(ngModel)]="accent" format="hex" />
          </div>

          <div class="field">
            <label for="favorite">Favorite chip</label>
            <p-chip label="Knowledge Graph" icon="pi pi-book" />
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="section__title">Disabled and invalid states</h2>
        <div class="section__grid">
          <div class="field">
            <label for="disabled-input">Disabled input</label>
            <input pInputText id="disabled-input" [disabled]="true" value="Disabled value" />
          </div>
          <div class="field">
            <label for="invalid-input">Invalid input</label>
            <input pInputText id="invalid-input" [ngModel]="invalidValue" [invalid]="true" aria-invalid="true" />
          </div>
          <div class="field">
            <label for="disabled-select">Disabled select</label>
            <p-select id="disabled-select" [options]="countries" [disabled]="true" placeholder="Not editable" />
          </div>
          <div class="field">
            <label for="disabled-datepicker">Disabled date picker</label>
            <p-datePicker id="disabled-datepicker" [disabled]="true" />
          </div>
        </div>
      </section>
    </div>
  `,
})
export class FormPageComponent {
  protected readonly countries = [
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Germany', code: 'DE' },
    { name: 'United Kingdom', code: 'UK' },
  ];

  protected readonly languages = [
    { label: 'English', value: 'en' },
    { label: 'Bulgarian', value: 'bg' },
    { label: 'German', value: 'de' },
  ];

  protected readonly topics = [
    { label: 'Ontologies', value: 'ontologies' },
    { label: 'Pipelines', value: 'pipelines' },
    { label: 'Repositories', value: 'repositories' },
  ];

  protected readonly statusOptions = [
    { label: 'Draft', value: 'draft' },
    { label: 'Review', value: 'review' },
    { label: 'Published', value: 'published' },
  ];

  protected readonly categories = [
    {
      label: 'Applications',
      items: [
        { label: 'Analytics', value: 'analytics' },
        { label: 'Workflow', value: 'workflow' },
      ],
    },
    {
      label: 'Digital',
      items: [
        { label: 'Portal', value: 'portal' },
        { label: 'Search', value: 'search' },
      ],
    },
  ];

  protected readonly treeOptions = [
    {
      key: '0',
      label: 'Products',
      children: [
        { key: '0-0', label: 'Explorer', leaf: true },
        { key: '0-1', label: 'Studio', leaf: true },
      ],
    },
  ];

  protected readonly teams = [
    { name: 'Sofia', code: 'SF' },
    { name: 'London', code: 'LDN' },
    { name: 'Berlin', code: 'BER' },
    { name: 'New York', code: 'NY' },
  ];

  protected readonly deliveryChoices = [
    { label: 'Email', value: 'email' },
    { label: 'Courier', value: 'courier' },
    { label: 'Pickup', value: 'pickup' },
  ];

  protected projectName = 'Knowledge Graph Explorer';
  protected tagline = 'A workspace for exploring connected enterprise data.';
  protected budget = 125000;
  protected apiKey = '••••••••••';
  protected phone = '+359 888 123 456';
  protected otp = '123456';
  protected author = 'Ada Lovelace';
  protected cityName = 'Sofia';
  protected contact = '888 123 456';
  protected invalidValue = 'Missing required value';
  protected selectedCountry = this.countries[0];
  protected selectedLanguages = [this.languages[0], this.languages[2]];
  protected selectedTopic = this.topics[1];
  protected selectedStatus = 'draft';
  protected selectedCategory = this.categories[1].items[1];
  protected selectedTree: Record<string, boolean> = { '0-1': true };
  protected selectedTeam?: { name: string; code: string };
  protected filteredTeams = this.teams;
  protected selectedDelivery = 'email';
  protected acceptTerms = true;
  protected published = true;
  protected rating = 4;
  protected priority = 65;
  protected accent = '#4b22d3';

  filterTeams(event: { query: string }): void {
    const query = event.query.toLowerCase();
    this.filteredTeams = this.teams.filter((team) => team.name.toLowerCase().includes(query));
  }
}
