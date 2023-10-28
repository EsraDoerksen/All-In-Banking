import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.interface';

@Component({
  selector: 'app-regular-expenses',
  templateUrl: './regular-expenses.component.html',
  styleUrls: ['./regular-expenses.component.css']
})
export class RegularExpensesComponent {
  regularExpenses: Transaction[] = [];
  constructor(){
    this.regularExpenses = [{timeStamp: new Date(), amount: 780, description: "Drone", location: "Media Markt"} as Transaction] as Transaction[];
  }
}
