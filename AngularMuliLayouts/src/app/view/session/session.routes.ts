import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./sign-in/sign-in.component').then((m) => m.SignInComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
];