import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import {Account} from '../models/account.interface';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  private users = [{}] as User[];
  accounts: Account[] = [{}] as Account[];


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
