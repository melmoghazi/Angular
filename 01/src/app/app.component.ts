import { interval, Observable, Subject, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = '01';
  subscription!: Subscription;

  ngOnInit(): void {

    // const obsr$ = new Observable(function subsub(observe) {
    //   observe.next('first next');
    //   observe.next('second next');
    //   //observe.error('first error');
    //   observe.complete();
    // });

    // obsr$.subscribe(
    //   (next) =>{ console.log(next);},
    //   (error) => { console.log(error) },
    //   ()=> {console.log('completed')}
    // );

    // this.subscription = interval(1000).subscribe((next) => console.log(next));

    // setTimeout(() =>{ this.subscription.unsubscribe();}, 5000);

    const subject =new Subject();
    subject.next(1);
    subject.subscribe(a=> console.log('sub1',a));
    subject.next(2);
    subject.subscribe(b=> console.log('sub2',b));
    subject.next(3);
    
  }

}
