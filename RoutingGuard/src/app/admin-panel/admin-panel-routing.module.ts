import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'managecourse',
    component:ManageCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
