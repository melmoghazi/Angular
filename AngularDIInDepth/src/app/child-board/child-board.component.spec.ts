import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBoardComponent } from './child-board.component';

describe('ChildBoardComponent', () => {
  let component: ChildBoardComponent;
  let fixture: ComponentFixture<ChildBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
