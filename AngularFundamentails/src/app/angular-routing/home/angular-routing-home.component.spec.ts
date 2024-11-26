import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutingHomeComponent } from './angular-routing-home.component';

describe('AngularRoutingHomeComponent', () => {
  let component: AngularRoutingHomeComponent;
  let fixture: ComponentFixture<AngularRoutingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularRoutingHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRoutingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
