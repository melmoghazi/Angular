import { Component, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MyCommonModule } from '../shared/my-common/my-common.module';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [MyCommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.scss'
})
export class NgtemplateComponent {

  show: boolean = false;

  @ViewChild('nameTemplateRef', { static: true }) nameTemplateRef!: TemplateRef<HTMLElement>;

  @ViewChild('containerDivRef',{read:ViewContainerRef}) container!: ViewContainerRef;

  loadTemplate() {
    this.container.createEmbeddedView(this.nameTemplateRef);
  }


}
