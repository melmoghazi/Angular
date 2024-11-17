import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-product1',
  standalone: true,
  imports: [ChildViewComponent],
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.scss'
})
export class Product1Component implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy {
    
  @Input() productName!: string;
  message!: string;
  @ViewChild(ChildViewComponent) childViewCom!: ChildViewComponent;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productName']) {
      this.message = `Hello, ${changes['productName'].currentValue}!`;
      console.log(`%c ngOnChanges - ${this.childViewCom}`, 'color:green', changes);
    }
  }
  ngOnInit(): void {
    console.log(`%c Product1Component ngOnInit - ${this.childViewCom}`, 'color:pink');
  }

  ngDoCheck(): void {
    console.log(`%c ngDoCheck  - ${this.childViewCom}`, 'color:blue');
  }

  ngAfterContentInit(): void {
    console.log(`%c ngAfterContentInit - ${this.childViewCom}`, 'color:purple');
  }
  ngAfterContentChecked(): void {
    console.log(`%c ngAfterContentChecked - ${this.childViewCom}`, 'color:gold');
  }

  ngAfterViewInit(): void {
    console.log(`%c ngAfterViewInit - ${this.childViewCom.text}`, 'color:red');
  }

  ngAfterViewChecked(): void {
        console.log(`%c ngAfterViewChecked - ${this.childViewCom.text}`, 'color:brown');
  }
  ngOnDestroy(): void {
    console.log(`%c ngOnDestroy - ${this.childViewCom.text}`, 'color:red');

  }
}
