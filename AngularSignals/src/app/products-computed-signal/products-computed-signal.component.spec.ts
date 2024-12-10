import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComputedSignalComponent } from './products-computed-signal.component';

describe('ProductsComputedSignalComponent', () => {
  let component: ProductsComputedSignalComponent;
  let fixture: ComponentFixture<ProductsComputedSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComputedSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComputedSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
