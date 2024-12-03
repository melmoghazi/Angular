import { Component } from '@angular/core';
import { MyCommonModule } from '../../shared/my-common/my-common.module';

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [MyCommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.scss'
})
export class NgcontainerComponent {

  show: boolean = true;
  title: string = "this is title";

  toggole(){
    this.show=!this.show;
  }
}
