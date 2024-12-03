import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMultiSlotComponent } from './parent-multi-slot.component';

describe('ParentMultiSlotComponent', () => {
  let component: ParentMultiSlotComponent;
  let fixture: ComponentFixture<ParentMultiSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentMultiSlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentMultiSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
