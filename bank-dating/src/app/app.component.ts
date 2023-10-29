import { Component } from '@angular/core';
import {User} from './models/user.interface';
import {Account} from './models/account.interface';
import {Transaction} from './models/transaction.interface';
import {formatDate} from './util/date.util';
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
  accounts = [] as Account[];
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
      firstname: 'Esra',
      lastname: 'Doerksen',
      birthdate: new Date('2002-08-05'),
      city: 'Basel',
      sex: 'Männlich',
    } as User;

    this.currentAccount = {
      userId: '1',
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
          location: 'Media Markt',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 302,
          description: 'Drone',
          location: 'Media Markt',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 500,
          description: 'Drone',
          location: 'Media Markt',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 700,
          description: 'Drone',
          location: 'Media Markt',
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

    this.users = [{
      userId: '2',
      firstname: 'Esra',
      lastname: 'Doerksen',
      birthdate: new Date('2002-08-05'),
      city: 'Basel',
      sex: 'Männlich',
    }] as User[];

    this.accounts = [{
      userId: '2',
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
          location: 'Media Markt',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 302,
          description: 'Drone',
          location: 'Media Markt',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 500,
          description: 'Drone',
          location: 'Media Markt',
          standingOrder: false,
        } as Transaction,
        {
          timeStamp: formatDate(new Date()),
          amount: 700,
          description: 'Drone',
          location: 'Media Markt',
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
    }] as Account[];
  }
}
