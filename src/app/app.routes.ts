import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'components/onto-m',
  },
  {
    path: 'components/onto-m',
    loadComponent: () => import('./pages/onto-m-page.component').then((m) => m.OntoMPageComponent),
  },
  {
    path: 'components/icons',
    loadComponent: () => import('./pages/icons-page.component').then((m) => m.IconsPageComponent),
  },
  {
    path: 'components/overlay',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dialog',
      },
      {
        path: 'dialog',
        loadComponent: () =>
          import('./pages/overlay/dialog-page.component').then((m) => m.DialogPageComponent),
      },
    ],
  },
  {
    path: 'components/form',
    loadComponent: () => import('./pages/form-page.component').then((m) => m.FormPageComponent),
  },
  {
    path: 'components/button',
    loadComponent: () => import('./pages/button-page.component').then((m) => m.ButtonPageComponent),
  },
  {
    path: 'components/other',
    loadComponent: () => import('./pages/other-page.component').then((m) => m.OtherPageComponent),
  },
  {
    path: '**',
    redirectTo: 'components/onto-m',
  },
];
