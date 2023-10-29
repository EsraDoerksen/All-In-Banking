import { Component } from '@angular/core';
import {User} from './models/user.interface';
import {Account} from './models/account.interface';
import {Transaction} from './models/transaction.interface';
import {formatDate} from './util/data.util';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-dating';

  currentUser = {} as User;
  currentAccount = {} as Account;
  users = [] as User[];
  accounts = [{}] as Account[];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.mockValuesFromDevPortal();
    this.dataService.setCurrentUser(this.currentUser);
    this.dataService.setCurrentAccount(this.currentAccount);
    this.dataService.setUsers(this.users);
    this.dataService.setAccounts(this.accounts);
  }

  requestValuesFromDevPortal() {}
  mockValuesFromDevPortal() {
    this.currentUser = {
        userId: '1',
        firstname: 'Penny',
        lastname: 'Pennyworth',
        birthdate: '10.05.1991',
        sex: 'Female',
        city: 'Zürich',
      } as User;

    this.currentAccount = {
      userId: '1',
      balance: 5000,
      transactions: [
        {
          description: 'Coop',
          location: 'Zürich HB',
          timestamp: '27.10.2023, 14:20',
          amount: 25,
          standingOrder: false,
        },
        {
          description: 'myprotein.ch',
          location: 'Switzerland',
          timestamp: '26.10.2023, 21:00',
          amount: 101,
          standingOrder: false,
        },
        {
          description: 'Shell Station',
          location: 'Zürich',
          timestamp: '25.10.2023, 12:10',
          amount: 118,
          standingOrder: false,
        },
        {
          description: 'Zürich Versicherung',
          location: 'Zürich',
          timestamp: '25.10.2023, 08:00',
          amount: 500,
          standingOrder: false,
        },
        {
          description: 'Restaurant Aurora',
          location: 'Zürich',
          timestamp: '25.10.2023, 18:00',
          amount: 80,
          standingOrder: false,
        },
        {
          description: 'Zalando',
          location: 'Berlin',
          timestamp: '25.10.2023, 08:00',
          amount: 118,
          standingOrder: false,
        },
        {
          description: 'Louis Vuitton',
          location: 'Zürich',
          timestamp: '24.10.2023, 13:15',
          amount: 2400,
          standingOrder: false,
        },
        {
          description: 'GymShark',
          location: 'Switzerland',
          timestamp: '23.10.2023, 21:20',
          amount: 185,
          standingOrder: false,
        },
        {
          description: 'Grasshopper-Club Zürich Sektion Squash',
          location: 'Zürich',
          timestamp: '21.10.2023, 09:00',
          amount: 50,
          standingOrder: false,
        },
        {
          description: 'Alnatura Bio Supermarkt',
          location: 'Zürich',
          timestamp: '21.10.2023, 13:00',
          amount: 20,
          standingOrder: false,
        },
      ] as Transaction[],
    } as Account;

    this.users = [
      {
        userId: '2',
        firstname: 'Donny',
        lastname: 'Dollarsign',
        birthdate: '16.08.1990',
        sex: 'Male',
        city: 'Pratteln',
      },
    ] as User[];

    this.accounts = [
      {
        userId: '2',
        balance: 8500,
        transactions: [
          {
            description: 'GymShark',
            location: 'Switzerland',
            timestamp: '27.10.2023, 21:10',
            amount: 210,
            standingOrder: false,
          },
          {
            description: 'Restaurant Artigiano',
            location: 'Basel-Stadt',
            timestamp: '26.10.2023, 18:00',
            amount: 60,
            standingOrder: false,
          },
          {
            description: 'myprotein.ch',
            location: 'Switzerland',
            timestamp: '25.10.2023, 08:00',
            amount: 150,
            standingOrder: false,
          },
          {
            description: 'Gucci',
            location: 'Zürich',
            timestamp: '25.10.2023, 17:00',
            amount: 2100,
            standingOrder: false,
          },
          {
            description: 'Vitis Sportcenter',
            location: 'Allschwill',
            timestamp: '24.10.2023, 18:00',
            amount: 50,
            standingOrder: false,
          },
          {
            description: 'Zalando ',
            location: 'Berlin',
            timestamp: '24.10.2023, 21:00',
            amount: 250,
            standingOrder: false,
          },
          {
            description: 'Restaurant Boo',
            location: 'Bankverein, Basel-Stadt',
            timestamp: '24.10.2023, 13:15',
            amount: 40,
            standingOrder: false,
          },
          {
            description: 'Coop',
            location: 'Bahnhof SBB, Basel',
            timestamp: '23.10.2023, 18:20',
            amount: 25,
            standingOrder: false,
          },
          {
            description: 'Zara',
            location: 'Freie Strasse, Basel-Stadt',
            timestamp: '21.10.2023, 15:15',
            amount: 300,
            standingOrder: false,
          },
          {
            description: 'Restaurant Molino',
            location: 'Basel-Stadt',
            timestamp: '21.10.2023, 18:00',
            amount: 100,
            standingOrder: false,
          },
        ] as Transaction[],
      }
    ] as Account[];
  }
}
