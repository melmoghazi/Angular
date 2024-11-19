import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDataComponent } from './components/empty-data/empty-data.component';


const components = [
  EmptyDataComponent
]
const modules = [
  CommonModule
]

@NgModule({
  //declarations: [EmptyDataComponent],
  //imports: [CommonModule],
  //exports:[EmptyDataComponent,CommonModule]

  declarations: components,
  imports: [modules],
  exports: [...components, ...modules]
})
export class SharedModule { }
