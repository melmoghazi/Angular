import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContentChildrenComponent } from './child-content-children.component';

describe('ChildContentChildrenComponent', () => {
  let component: ChildContentChildrenComponent;
  let fixture: ComponentFixture<ChildContentChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildContentChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildContentChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
