import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.interface';

@Component({
  selector: 'app-contract-expenses',
  templateUrl: './contract-expenses.component.html',
  styleUrls: ['./contract-expenses.component.css']
})
export class ContractExpensesComponent {
  contractExpenses : Transaction[] = [];

  constructor(){
    this.contractExpenses = [{timeStamp: new Date(), amount: 780, description: "Drone", location: "Media Markt"} as Transaction] as Transaction[];
  }
}
