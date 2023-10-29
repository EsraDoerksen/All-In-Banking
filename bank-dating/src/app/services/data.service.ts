import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import {Account} from '../models/account.interface';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  currentUser = {} as User;
  currentAccount = {} as Account;
  users = [] as User[];
  accounts = [] as Account[];


  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(value: User) {
    this.currentUser = value;
  }

  getCurrentAccount(): Account {
    return this.currentAccount;
  }

  setCurrentAccount(value: Account) {
    this.currentAccount = value;
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  getUsers(): User[] {
    return this.users;
  }

  setAccounts(accounts: Account[]) {
    this.accounts = accounts
  }

  getAccounts(): Account[] {
    return this.accounts;
  }
}
