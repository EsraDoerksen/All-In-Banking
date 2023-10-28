import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigExpensesComponent } from './components/big-expenses/big-expenses.component';
import { RegularExpensesComponent } from './components/regular-expenses/regular-expenses.component';
import { ContractExpensesComponent } from './components/contract-expenses/contract-expenses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllExpensesComponent } from './components/all-expenses/all-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    BigExpensesComponent,
    RegularExpensesComponent,
    ContractExpensesComponent,
    AllExpensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
