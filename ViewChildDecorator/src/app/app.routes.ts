import { Routes } from '@angular/router';
import { TheParentComponent } from './the-parent/the-parent.component';
import { TheChildComponent } from './the-child/the-child.component';

export const routes: Routes = [
    {
        path:'parent',
        component:TheParentComponent
    },
    {
        path:'child',
        component:TheChildComponent
    }
];
