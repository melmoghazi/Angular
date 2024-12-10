import { Component, ElementRef, ViewChild, OnInit, AfterViewInit, viewChild, ViewChildren, QueryList, viewChildren } from '@angular/core';
import { ChildOneComponent } from '../child-one/child-one.component';

@Component({
  selector: 'app-view-child-and-children',
  standalone: true,
  imports: [ChildOneComponent],
  templateUrl: './view-child-and-children.component.html',
  styleUrl: './view-child-and-children.component.css'
})
export class ViewChildAndChildrenComponent implements OnInit, AfterViewInit {
  
  @ViewChild('p') pEl!: ElementRef<HTMLElement>;
  //viewChild signal
  pElSignal = viewChild<ElementRef<HTMLElement>>('p');

  @ViewChildren(ChildOneComponent) childOneComponent!: QueryList<ChildOneComponent>;
  //view children signal
  childOneComponentSignal = viewChildren(ChildOneComponent);


  ngOnInit(): void {
    console.log('ngOnInit - pEl ', this.pEl);
    console.log('ngOnInit - pEl ', this.pElSignal());
    console.log('ngOnInit - childOneComponent ', this.childOneComponent);
    console.log('ngOnInit - childOneComponentSignal ', this.childOneComponentSignal());

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - pEl ', this.pEl);
    console.log('ngAfterViewInit - pEl ', this.pElSignal());
    console.log('ngAfterViewInit - childOneComponent ', this.childOneComponent);
    console.log('ngAfterViewInit - childOneComponentSignal ', this.childOneComponentSignal());
  }


}
