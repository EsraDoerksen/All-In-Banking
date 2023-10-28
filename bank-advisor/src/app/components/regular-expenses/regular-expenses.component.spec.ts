import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularExpensesComponent } from './regular-expenses.component';

describe('RegularExpensesComponent', () => {
  let component: RegularExpensesComponent;
  let fixture: ComponentFixture<RegularExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularExpensesComponent]
    });
    fixture = TestBed.createComponent(RegularExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
