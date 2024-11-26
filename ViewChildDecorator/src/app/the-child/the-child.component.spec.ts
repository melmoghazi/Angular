import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheChildComponent } from './the-child.component';

describe('TheChildComponent', () => {
  let component: TheChildComponent;
  let fixture: ComponentFixture<TheChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
