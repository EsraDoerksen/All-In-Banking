import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigExpensesComponent } from './components/big-expenses/big-expenses.component';
import { RegularExpensesComponent } from './components/regular-expenses/regular-expenses.component';
import { AllExpensesComponent } from './components/all-expenses/all-expenses.component';
import { ContractExpensesComponent } from './components/contract-expenses/contract-expenses.component';

const routes: Routes = [
  { path: '', component: AllExpensesComponent },
  { path: 'big-expenses', component: BigExpensesComponent },
  { path: 'regular-expenses', component: RegularExpensesComponent },
  { path: 'contracts', component: ContractExpensesComponent },
  { path: '**', redirectTo: 'matches', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
