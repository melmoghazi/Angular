import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARProductDetailsComponent } from './arproduct-details.component';

describe('ARProductDetailsComponent', () => {
  let component: ARProductDetailsComponent;
  let fixture: ComponentFixture<ARProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ARProductDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
