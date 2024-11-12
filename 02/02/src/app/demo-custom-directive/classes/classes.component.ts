import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { CountDirective } from '../count.directive';
import { PermisionDirective } from '../permision.directive';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CountDirective,NgIf,PermisionDirective],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {


  classes =[
    {name:'class A', studentsCount:10},
    {name:'class B', studentsCount:20},
    {name:'class C', studentsCount:30},
    {name:'class D', studentsCount:40},
    {name:'class E', studentsCount:0},
  ]
}
