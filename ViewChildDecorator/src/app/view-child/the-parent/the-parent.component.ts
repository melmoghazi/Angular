import { AfterViewInit, Component, ElementRef, ViewChild, viewChild, ViewChildren, OnChanges } from '@angular/core';
import { TheChildComponent } from '../the-child/the-child.component';

@Component({
  selector: 'app-the-parent',
  standalone: true,
  imports: [TheChildComponent],
  templateUrl: './the-parent.component.html',
  styleUrl: './the-parent.component.scss'
})
export class TheParentComponent {
  parnetName: string = 'Ali';
  childFullName: string = '';
  childPersonName: string = '';

  @ViewChild(TheChildComponent) child!: any;

  buttonClick() {
    this.childFullName = this.child.name + ' ' + this.parnetName;
    this.childPersonName = this.child.person.firstName + ' ' + this.child.person.lastName;
  }

}
