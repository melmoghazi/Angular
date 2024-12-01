import { CanLoadFn } from '@angular/router';
import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
//import { SecureComponent } from './components/secure/secure.component';
import { HomeComponent } from './components/home/home.component';

//import { AuthrGuard } from './shared/guards/auth.guard';
//import { authTwoGuard } from './shared/guards/auth-two.guard';

import { AuthCanLoadGuard } from './shared/guards/auth-can-load.guard';
import { AuthCanLoadfnGuard } from './shared/guards/auth-can-load-fn.guard';
import { authCanMatchGuard } from './shared/guards/auth-can-match.guard';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'secure',
        loadComponent: () => import('./components/secure/secure.component').then(c => c.SecureComponent)
        //component:SecureComponent
        //canActivate:[AuthrGuard]
        //canActivate:[authTwoGuard]
    },
    {
        path: 'adminpanel',
        loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
        //canLoad:[AuthCanLoadGuard],
        //canLoad: [AuthCanLoadfnGuard]
        canMatch:[authCanMatchGuard]
    }
];
