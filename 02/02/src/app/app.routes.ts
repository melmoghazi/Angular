import { Routes } from '@angular/router';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { ClchOnChangesComponent } from './component-lifecycle-hook/clch-on-changes/clch-on-changes.component';

export const routes: Routes = [
    {
        path:'ngfor',
        component:NgForComponent
    },
    {
        path:'ngif',
        component:NgIfComponent
    },
    {
        path:'ngclass',
        component:NgClassComponent
    },
    {
        path:'built-in-pipes',
        component:BuiltInPipesComponent
    },
    {
        path:'clch-on-changes',
        component:ClchOnChangesComponent
    }
    
];
