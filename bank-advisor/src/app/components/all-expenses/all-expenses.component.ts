import { Component } from '@angular/core';
import { User } from '../../models/user.interface';
import { Account } from '../../models/account.interface';
import { Transaction } from '../../models/transaction.interface';
import { formatDate } from '../../util/date.util';

@Component({
  selector: 'app-all-expenses',
  templateUrl: './all-expenses.component.html',
  styleUrls: ['./all-expenses.component.css'],
})
export class AllExpensesComponent {
  user: User = {} as User;
  account: Account = {} as Account;
  bigTransactions: Transaction[] = [];
  regularTransactions: Transaction[] = [];
  contractTransactions: Transaction[] = [];

  constructor() {
    this.user = {
      userId: '1',
      firstname: 'Esra',
      lastname: 'Doerksen',
      birthdate: new Date('2002-08-05'),
      city: 'Basel',
      sex: 'Männlich',
    } as User;
    this.account = {
      balance: 23000,
      transactions: [
        {
          timeStamp: formatDate(new Date()),
          amount: 275,
          description: 'Zusatz Krankenkasse',
          location: 'Assura',
          standingOrder: true,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 200,
          description: 'Krankenkasse',
          location: 'Atupri',
          standingOrder: true,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 900,
          description: 'Drone',
          location: 'Digitec',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 302,
          description: 'Handy',
          location: 'Steg',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 500,
          description: 'Sofa',
          location: 'IKEA',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 700,
          description: 'Auto',
          location: 'Mercedes',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 700,
          description: 'Drone',
          location: 'Media Markt',
          standingOrder: false,
        } as Transaction,
      ],
    } as Account;
    this.requestValuesFromDevPortal();
    this.filterTransactionsIntoGroups(this.account);
  }

  requestValuesFromDevPortal() {}

  filterTransactionsIntoGroups(account: Account) {
    this.bigTransactions = account.transactions.filter((t) => {
      return t.amount > 300;
    });

    const transactionCounts: { [key: string]: number } = {};

    account.transactions.forEach((t) => {
      if (transactionCounts[t.location]) {
        transactionCounts[t.location]++;
      } else {
        transactionCounts[t.location] = 1;
      }
    });

    this.regularTransactions = account.transactions.filter(
      (t) => transactionCounts[t.location] > 2
    );

    this.contractTransactions = account.transactions.filter(
      (t) => t.standingOrder
    );
  }
}
