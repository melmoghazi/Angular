import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermision]',
  standalone: true
})
export class PermisionDirective {
  
  //structural directive render an html element  depending on input value true or false
  @Input() set appPermision(condition: boolean) {
    if (condition) {
      //show element
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      //hide element
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
