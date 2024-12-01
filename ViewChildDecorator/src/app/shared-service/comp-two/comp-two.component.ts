import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  standalone: true,
  imports: [],
  templateUrl: './comp-two.component.html',
  styleUrl: './comp-two.component.scss'
})
export class CompTwoComponent implements OnInit {
//Mehod:4
message:string="";
constructor(private sharedService:SharedService){
  
}

ngOnInit(): void {
  debugger;
  this.sharedService.getMessage.subscribe(msg => this.message = msg);
  console.log(this.message);
}
}
