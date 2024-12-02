import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-content-child',
  standalone: true,
  imports: [],
  templateUrl: './child-content-child.component.html',
  styleUrl: './child-content-child.component.scss'
})
export class ChildContentChildComponent implements AfterContentInit {
  @ContentChild('content') content!: ElementRef<HTMLElement>;

  ngAfterContentInit(): void {
    if (this.content) {
      this.content.nativeElement.style.color = 'red';
      console.log('content', this.content.nativeElement.textContent);
    }
  }


}
