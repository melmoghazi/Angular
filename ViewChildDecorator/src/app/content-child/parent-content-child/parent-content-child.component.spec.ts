import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContentChildComponent } from './parent-content-child.component';

describe('ParentContentChildComponent', () => {
  let component: ParentContentChildComponent;
  let fixture: ComponentFixture<ParentContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentContentChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
