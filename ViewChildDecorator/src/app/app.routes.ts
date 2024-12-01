import { Routes } from '@angular/router';
import { TheParentComponent } from './the-parent/the-parent.component';
import { TheChildComponent } from './the-child/the-child.component';
import { InputOutputParentComponent } from './input-output-decorators/input-output-parent/input-output-parent.component';
import { InputOutputChildComponent } from './input-output-decorators/input-output-child/input-output-child.component';
import { InputParentComponent } from './input-decorator/input-parent/input-parent.component';
import { CompOneComponent } from './shared-service/comp-one/comp-one.component';
import { CompTwoComponent } from './shared-service/comp-two/comp-two.component';

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
    }


];
