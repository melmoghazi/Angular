import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AREditProductComponent } from './aredit-product.component';

describe('AREditProductComponent', () => {
  let component: AREditProductComponent;
  let fixture: ComponentFixture<AREditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AREditProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AREditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
