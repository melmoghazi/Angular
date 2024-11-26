import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './demo-rxjs.component.html',
  styleUrl: './demo-rxjs.component.scss'
})
export class DemoRxjsComponent implements OnInit {
  agents!: Observable<string>;
  personName!: string;

  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(
      function (observale) {
        try {
          setInterval(() => {
            observale.next('Mohammed');
          }, 3000);
          setInterval(() => {
            observale.next('Ali');
          }, 4000);
          setInterval(() => {
            observale.next('Elmoghazi');
          }, 5000);
        } catch (e) {
          observale.error(e);
        }
      }
    );
    this.agents.subscribe(
      (data) => {
        console.log(data);
        this.personName = data;
      }
    );
  }

  //   this.agents = new Observable(
  //     function (observale) {
  //       try {
  //         observale.next('Mohammed');
  //         observale.next('Ali');
  //         observale.next('Elmoghazi');
  //       } catch (e) {
  //         observale.error(e);
  //       }
  //     }
  //   );
  //   this.agents.subscribe(
  //     (data) => console.log(data)
  //   );
  // }


}
