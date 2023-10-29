import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Account } from '../models/account.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private sharedUser: User = {} as User;
  private sharedAccount: Account = {} as Account;

  setUser(user: User) {
    this.sharedUser = user;
  }

  setAccount(account: Account) {
    this.sharedAccount = account;
  }

  getUser() {
    return this.sharedUser;
  }

  getAccount() {
    return this.sharedAccount;
  }
}
