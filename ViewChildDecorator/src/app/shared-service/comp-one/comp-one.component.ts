import { RouterLink } from '@angular/router';
import { SharedService } from './../shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.scss'
})
export class CompOneComponent {
  message: string = '';
  
  constructor(private sharedService: SharedService) {
    this.sharedService.getMessage.subscribe(res => this.message = res);
  }

  updateMessage() {
    this.sharedService.setMessage('this update message from comp one');
  }

}
