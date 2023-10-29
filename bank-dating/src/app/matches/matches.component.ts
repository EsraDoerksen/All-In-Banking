import { Component } from '@angular/core';
import {User} from '../models/user.interface';
import {DataService} from '../services/data.service';
import {Account} from '../models/account.interface';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  users: User[] = [{}] as User[];
  accounts: Account[] = [{}] as Account[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.accounts = this.dataService.getAccounts();
  }
}
