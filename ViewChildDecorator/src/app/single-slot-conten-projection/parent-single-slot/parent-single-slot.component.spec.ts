import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSingleSlotComponent } from './parent-single-slot.component';

describe('ParentSingleSlotComponent', () => {
  let component: ParentSingleSlotComponent;
  let fixture: ComponentFixture<ParentSingleSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentSingleSlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentSingleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
