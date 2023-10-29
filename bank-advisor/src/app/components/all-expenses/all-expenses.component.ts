import { Component } from '@angular/core';
import { User } from '../../models/user.interface';
import { Account } from '../../models/account.interface';
import { Transaction } from '../../models/transaction.interface';
import { formatDate } from '../../util/date.util';
import { DataService } from '../../services/data.service';

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
  route: string | null = '';

  constructor(dataService: DataService) {
    this.route = localStorage.getItem('route');
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
          timeStamp: formatDate(new Date('2023/10/27')),
          amount: 25,
          description: 'Coop',
          location: 'Zürich HB',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/26')),
          amount: 101,
          description: 'myprotein.ch',
          location: 'Switzerland',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/25')),
          amount: 118,
          description: 'Shell Station',
          location: 'Zürich',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/25')),
          amount: 500,
          description: 'Zürich Versicherung',
          location: 'Zürich',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/25')),
          amount: 80,
          description: 'Restaurant Aurora',
          location: 'Zürich',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/25')),
          amount: 118,
          description: 'Zalando',
          location: 'Berlin',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/24')),
          amount: 2400,
          description: 'Louis Vuitton',
          location: 'Zürich',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/23')),
          amount: 185,
          description: 'GymShark',
          location: 'Switzerland',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/21')),
          amount: 50,
          description: 'Grasshopper-Club Zürich Sektion Squash',
          location: 'Zürich',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/21')),
          amount: 20,
          description: 'Alnatura Bio Supermarkt',
          location: 'Zürich',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date('2023/10/26')),
          amount: 150,
          description: 'myprotein.ch',
          location: 'Switzerland',
          standingOrder: false,
        } as Transaction,
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
      ],
    } as Account;
    this.requestValuesFromDevPortal();
    this.filterTransactionsIntoGroups(this.account);
    dataService.setUser(this.user);
    dataService.setAccount(this.account);
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
