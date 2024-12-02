import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContentChildrenComponent } from './parent-content-children.component';

describe('ParentContentChildrenComponent', () => {
  let component: ParentContentChildrenComponent;
  let fixture: ComponentFixture<ParentContentChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentContentChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentContentChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
