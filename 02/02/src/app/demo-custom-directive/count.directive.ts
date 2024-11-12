import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCount]',
  standalone: true
})
export class CountDirective implements OnInit {

  //attribute directive: display the word 'Empty' if the count of student = 0
  @Input('appCount') count!: number;

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }


  ngOnInit(): void {
    const isCountExists = this.count > 0 ? this.count : 'Empty';
    this.render.setProperty(this.elementRef.nativeElement, 'innerText', isCountExists);
  }

}
