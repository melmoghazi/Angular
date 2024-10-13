import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: 'account',
        component: AccountComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: '',
                redirectTo: '/account/login',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
