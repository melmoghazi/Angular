import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { SigninComponent } from './view/signin/signin.component';
import { SignupComponent } from './view/signup/signup.component';
import { AppComponent } from './app.component';
import { BlankComponent } from './shared/layouts/blank/blank.component';
import { AdminComponent } from './shared/layouts/admin/admin.component';
import { ProductsListComponent } from './view/products/products-list/products-list.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: AppComponent
    // },
    {
        path: 'signin',
        //component: BlankComponent,
        loadComponent: () => import('./shared/layouts/blank/blank.component').then(c => c.BlankComponent),
        children: [
            {
                path: 'signin',
                //component: SigninComponent,
                loadComponent: () => import('./view/signin/signin.component').then(c => c.SigninComponent)
            }
        ]
    },
    {
        path: 'signup',
        component: BlankComponent,
        children: [
            {
                path: 'signup',
                component: SignupComponent,
            }
        ]
    },
    {
        path: 'products',
        //component: AdminComponent,
        loadChildren: () => import('./view/products/products.module').then(m => m.ProductsModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];
