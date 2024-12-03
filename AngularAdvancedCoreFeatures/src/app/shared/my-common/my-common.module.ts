import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';



@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    NgIf,
    NgFor
  ],
  exports: [
    NgIf, 
    NgFor
  ]

})
export class MyCommonModule { }
