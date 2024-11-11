import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClchOnChangesComponent } from './clch-on-changes.component';

describe('ClchOnChangesComponent', () => {
  let component: ClchOnChangesComponent;
  let fixture: ComponentFixture<ClchOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClchOnChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClchOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
