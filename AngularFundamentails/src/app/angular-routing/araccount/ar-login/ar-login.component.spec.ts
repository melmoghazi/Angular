import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArLoginComponent } from './ar-login.component';

describe('ArLoginComponent', () => {
  let component: ArLoginComponent;
  let fixture: ComponentFixture<ArLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
