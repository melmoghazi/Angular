import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheParentComponent } from './the-parent.component';

describe('TheParentComponent', () => {
  let component: TheParentComponent;
  let fixture: ComponentFixture<TheParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
