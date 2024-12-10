import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ProductListComponent } from './product-list/product-list.component';

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
    }
];
