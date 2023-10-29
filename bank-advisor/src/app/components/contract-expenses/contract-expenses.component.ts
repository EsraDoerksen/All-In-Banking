import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.interface';
import { User } from '../../models/user.interface';
import { Account } from '../../models/account.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contract-expenses',
  templateUrl: './contract-expenses.component.html',
  styleUrls: ['./contract-expenses.component.css'],
})
export class ContractExpensesComponent {
  private user: User = {} as User;
  private account: Account = {} as Account;
  contractTransactions: Transaction[] = [];

  constructor(dataService: DataService) {
    this.user = dataService.getUser();
    this.account = dataService.getAccount();
    this.contractTransactions = this.account.transactions.filter(
      (t) => t.standingOrder
    );
  }
}
