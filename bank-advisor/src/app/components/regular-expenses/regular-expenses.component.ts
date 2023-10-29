import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.interface';
import { DataService } from '../../services/data.service';
import { Account } from '../../models/account.interface';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-regular-expenses',
  templateUrl: './regular-expenses.component.html',
  styleUrls: ['./regular-expenses.component.css'],
})
export class RegularExpensesComponent {
  private user: User = {} as User;
  private account: Account = {} as Account;
  regularTransactions: Transaction[] = [];

  constructor(dataService: DataService) {
    this.user = dataService.getUser();
    this.account = dataService.getAccount();
    const transactionCounts: { [key: string]: number } = {};

    this.account.transactions.forEach((t) => {
      if (transactionCounts[t.location]) {
        transactionCounts[t.location]++;
      } else {
        transactionCounts[t.location] = 1;
      }
    });

    this.regularTransactions = this.account.transactions.filter(
      (t) => transactionCounts[t.location] > 2
    );
  }
}
