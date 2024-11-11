import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product1',
  standalone: true,
  imports: [],
  templateUrl: './product1.component.html',
  styleUrl: './product1.component.scss'
})
export class Product1Component implements OnChanges, OnInit, DoCheck,AfterContentInit,AfterContentChecked {
  @Input() productName!: string;
  message!: string;
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productName']) {
      this.message = `Hello, ${changes['productName'].currentValue}!`;
      console.log(`%c ngOnChanges`, 'color:green', changes);
    }
  }
  ngOnInit(): void {
    console.log('%c Product1Component ngOnInit', 'color:pink');
  }
  
  ngDoCheck(): void {
    console.log(`%c ngDoCheck`, 'color:blue');
  }
  
  ngAfterContentInit(): void {
    console.log(`%c ngAfterContentInit`, 'color:purple');
  }
  ngAfterContentChecked(): void {
    console.log(`%c ngAfterContentChecked`, 'color:gold');
  }

}
