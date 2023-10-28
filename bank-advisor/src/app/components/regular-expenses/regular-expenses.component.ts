import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.interface';

@Component({
  selector: 'app-regular-expenses',
  templateUrl: './regular-expenses.component.html',
  styleUrls: ['./regular-expenses.component.css'],
})
export class RegularExpensesComponent {
  @Input() regularTransactions: Transaction[] = [];
}
