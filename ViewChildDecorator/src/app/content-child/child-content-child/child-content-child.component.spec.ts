import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildContentChildComponent } from './child-content-child.component';

describe('ChildContentChildComponent', () => {
  let component: ChildContentChildComponent;
  let fixture: ComponentFixture<ChildContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildContentChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
