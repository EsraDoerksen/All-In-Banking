import { Component, Input } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';
import { User } from '../../models/user.interface';
import { Account } from '../../models/account.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-big-expenses',
  templateUrl: './big-expenses.component.html',
  styleUrls: ['./big-expenses.component.css'],
})
export class BigExpensesComponent {
  private user: User = {} as User;
  private account: Account = {} as Account;
  bigTransactions: Transaction[] = [];

  constructor(dataService: DataService) {
    this.user = dataService.getUser();
    this.account = dataService.getAccount();
    this.bigTransactions = this.account.transactions.filter((t) => {
      return t.amount > 300;
    });
  }
}
