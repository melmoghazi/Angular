import { Routes } from '@angular/router';

import { NgcontainerComponent } from './ngcontainer/ngcontainer/ngcontainer.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { CourseListComponent } from './course-list/course-list.component';

export const routes: Routes = [
    {
        path:'ngcontainer',
        component:NgcontainerComponent
    },
    {
        path:'ngtemplate',
        component:NgtemplateComponent
    },
    {
        path:'ngtemplateoutlet',
        component:NgTemplateOutletComponent
    },
    {
        path:'courses',
        component:CourseListComponent
    }
];
