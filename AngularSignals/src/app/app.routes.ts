import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComputedSignalComponent } from './products-computed-signal/products-computed-signal.component';
import { InputParentComponent } from './input-parent/input-parent.component';
import { ViewChildAndChildrenComponent } from './view-child-and-children/view-child-and-children.component';
import { ToSignalComponent } from './to-signal/to-signal.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'courses',
        component: CourseListComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products-computed-signal',
        component: ProductsComputedSignalComponent
    },
    {
        path: 'input-signal',
        component: InputParentComponent
    },
    {
        path: 'view-child-signal',
        component: ViewChildAndChildrenComponent
    },
    {
        path: 'tosignal',
        component: ToSignalComponent
    }
];
