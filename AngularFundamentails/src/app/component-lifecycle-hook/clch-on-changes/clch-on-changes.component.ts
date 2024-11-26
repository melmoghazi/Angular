import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product1Component } from './product1/product1.component';
import { timer } from 'rxjs';

@Component({
  selector: 'app-clch-on-changes',
  standalone: true,
  imports: [FormsModule, Product1Component],
  templateUrl: './clch-on-changes.component.html',
  styleUrl: './clch-on-changes.component.scss'
})
export class ClchOnChangesComponent implements OnInit {
  
  pName: string = 'Product 1';
  
  constructor(private router: Router){

  }
  
  ngOnInit(): void {
    console.log('%c clch-on-changes-component ngOnInit','color:red');
    timer(4000).subscribe(() => this.pName = 'after 4 seconds pName ngOnInit clch-on-changes-component');
    timer(8000).subscribe(() => this.pName = 'after 8 seconds pName ngOnInit clch-on-changes-component');
  }

  save() {
    this.pName = 'Save Product';
    console.log('inside save');
  }

  doNothing(){
  }
  gotoNgClass(){
    this.router.navigateByUrl('/ngclass');
  }
}
