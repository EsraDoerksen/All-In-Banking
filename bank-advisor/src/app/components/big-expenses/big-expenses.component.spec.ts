import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigExpensesComponent } from './big-expenses.component';

describe('BigExpensesComponent', () => {
  let component: BigExpensesComponent;
  let fixture: ComponentFixture<BigExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigExpensesComponent],
    });
    fixture = TestBed.createComponent(BigExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
