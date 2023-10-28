import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractExpensesComponent } from './contract-expenses.component';

describe('ContractExpensesComponent', () => {
  let component: ContractExpensesComponent;
  let fixture: ComponentFixture<ContractExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractExpensesComponent]
    });
    fixture = TestBed.createComponent(ContractExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
