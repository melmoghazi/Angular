import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBoardComponent } from './parent-board.component';

describe('ParentBoardComponent', () => {
  let component: ParentBoardComponent;
  let fixture: ComponentFixture<ParentBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
