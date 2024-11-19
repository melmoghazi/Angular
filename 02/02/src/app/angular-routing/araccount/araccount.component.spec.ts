import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARAccountComponent } from './araccount.component';

describe('ARAccountComponent', () => {
  let component: ARAccountComponent;
  let fixture: ComponentFixture<ARAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ARAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
