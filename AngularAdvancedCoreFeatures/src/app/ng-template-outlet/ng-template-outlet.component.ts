// import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
// import { MyCommonModule } from '../shared/my-common/my-common.module';

// @Component({
//   selector: 'app-ng-template-outlet',
//   standalone: true,
//   imports: [MyCommonModule],
//   templateUrl: './ng-template-outlet.component.html',
//   styleUrl: './ng-template-outlet.component.scss'
// })
// export class NgTemplateOutletComponent implements AfterViewInit {

//   @ViewChild('templateRef', { static: true }) templateRef!: TemplateRef<HTMLElement>;
//   @ViewChild('containerRef', { read: ViewContainerRef }) container!: ViewContainerRef;

//   ngAfterViewInit(): void {
//     this.container.createEmbeddedView(this.templateRef);
//   }
  
// }

import { NgTemplateOutlet } from '@angular/common';
import {  Component} from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './ng-template-outlet.component.html',
  styleUrl: './ng-template-outlet.component.scss'
})
export class NgTemplateOutletComponent  {

 
  
}
