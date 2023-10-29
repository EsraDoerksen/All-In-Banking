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

    const allTransactionlocations = this.account.transactions.map(
      (t) => t.location
    );

    this.regularTransactions = this.account.transactions.filter((t) => {
      return this.isStringContainedMoreThanOnce(
        allTransactionlocations,
        t.location
      );
    });
  }
  private isStringContainedMoreThanOnce(
    arr: string[],
    target: string
  ): boolean {
    let count = 0;
    for (const item of arr) {
      if (item === target) {
        count++;
        if (count > 1) {
          return true;
        }
      }
    }
    return false;
  }
}
