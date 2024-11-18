import { Routes } from '@angular/router';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { ClchOnChangesComponent } from './component-lifecycle-hook/clch-on-changes/clch-on-changes.component';
import { DemoRxjsComponent } from './demo-rxjs/demo-rxjs/demo-rxjs.component';
import { ClassesComponent } from './demo-custom-directive/classes/classes.component';
import { AngularRoutingHomeComponent } from './angular-routing/home/angular-routing-home.component';
import { ProductListComponent } from './angular-routing/product-list/product-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'ngfor',
        component: NgForComponent
    },
    {
        path: 'ngif',
        component: NgIfComponent
    },
    {
        path: 'ngclass',
        component: NgClassComponent
    },
    {
        path: 'built-in-pipes',
        component: BuiltInPipesComponent
    },
    {
        path: 'clch-on-changes',
        component: ClchOnChangesComponent
    },
    {
        path: 'demo-rxjs-component',
        component: DemoRxjsComponent
    },
    {
        path: 'demo-custom-directive',
        component: ClassesComponent
    },
    {
        path: 'angular-routing-home',
        component: AngularRoutingHomeComponent
    },
    {
        path: 'angular-routing-products-list',
        component: ProductListComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }

];
