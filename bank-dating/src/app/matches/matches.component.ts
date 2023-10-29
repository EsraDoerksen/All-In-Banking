import { Component } from '@angular/core';
import {User} from '../models/user.interface';
import {DataService} from '../services/data.service';
import {Account} from '../models/account.interface';
import {getMatches} from '../util/data.util';
import {Match} from '../models/match.interface';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  currentUser = {} as User;
  currentAccount = {} as Account;
  users = [] as User[];
  accounts = [] as Account[];

  matches = [] as Match[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.currentUser = this.dataService.getCurrentUser();
    this.currentAccount = this.dataService.getCurrentAccount();
    this.users = this.dataService.getUsers();
    this.accounts = this.dataService.getAccounts();

    this.matches = getMatches(this.currentUser, this.currentAccount, this.users, this.accounts);
  }
}
