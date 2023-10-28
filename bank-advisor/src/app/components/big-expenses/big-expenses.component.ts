import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction.interface';

@Component({
  selector: 'app-big-expenses',
  templateUrl: './big-expenses.component.html',
  styleUrls: ['./big-expenses.component.css']
})
export class BigExpensesComponent {
bigExpenses: Transaction[] = [];

constructor(){
  this.bigExpenses = [{timeStamp: new Date(), amount: 780, description: "Drone", location: "Media Markt"} as Transaction] as Transaction[];
}
}
