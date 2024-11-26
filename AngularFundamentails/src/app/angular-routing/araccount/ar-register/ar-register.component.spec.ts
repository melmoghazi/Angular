import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArRegisterComponent } from './ar-register.component';

describe('ArRegisterComponent', () => {
  let component: ArRegisterComponent;
  let fixture: ComponentFixture<ArRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
