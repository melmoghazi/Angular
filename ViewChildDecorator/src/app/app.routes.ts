import { Routes } from '@angular/router';

import { InputOutputParentComponent } from './input-output-decorators/input-output-parent/input-output-parent.component';
import { InputParentComponent } from './input-decorator/input-parent/input-parent.component';
import { CompOneComponent } from './shared-service/comp-one/comp-one.component';
import { CompTwoComponent } from './shared-service/comp-two/comp-two.component';
import { CoursesListComponent } from './view-children/courses-list/courses-list.component';
import { ParentContentChildComponent } from './content-child/parent-content-child/parent-content-child.component';
import { TheParentComponent } from './view-child/the-parent/the-parent.component';
import { ParentContentChildrenComponent } from './content-children/parent-content-children/parent-content-children.component';

export const routes: Routes = [
    {
        path: 'View-Child-Decorator',
        component: TheParentComponent
    },
    {
        path: 'InputOutputParentComponent',
        component: InputOutputParentComponent
    },
    {
        path: 'InputParentComponent',
        component: InputParentComponent
    },
    {
        path: 'comp-one',
        component: CompOneComponent
    },
    {
        path: 'comp-two',
        component: CompTwoComponent
    },
    {
        path: 'course-list',
        component: CoursesListComponent
    },
    {
        path: 'content-child-example',
        component: ParentContentChildComponent
    },
    {
        path: 'content-children-example',
        component: ParentContentChildrenComponent
    }


];
