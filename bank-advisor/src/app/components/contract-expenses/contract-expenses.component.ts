import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.interface';

@Component({
  selector: 'app-contract-expenses',
  templateUrl: './contract-expenses.component.html',
  styleUrls: ['./contract-expenses.component.css'],
})
export class ContractExpensesComponent {
  @Input() contractTransactions: Transaction[] = [];
}
