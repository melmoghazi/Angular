import { Routes } from '@angular/router';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';

export const routes: Routes = [
    {
        path:'ngfor',
        component:NgForComponent
    },
    {
        path:'ngif',
        component:NgIfComponent
    }
];
