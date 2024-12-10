import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildAndChildrenComponent } from './view-child-and-children.component';

describe('ViewChildAndChildrenComponent', () => {
  let component: ViewChildAndChildrenComponent;
  let fixture: ComponentFixture<ViewChildAndChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildAndChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildAndChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
