import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';

@Component({
  selector: 'app-big-expenses',
  templateUrl: './big-expenses.component.html',
  styleUrls: ['./big-expenses.component.css'],
})
export class BigExpensesComponent {
  @Input() bigTransactions: Transaction[] = [];
}
