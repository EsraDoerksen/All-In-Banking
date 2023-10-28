import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store/state/app.state";
import * as AppActions from "../../store/actions/app.actions";
import {Observable} from "rxjs";
import { isUserLoggedIn } from "../../store/selectors/app.selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUserLoggedIn$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.isUserLoggedIn$ = this.store.select(isUserLoggedIn);
  }

  login() {
    this.store.dispatch(AppActions.login());
  }

  logout() {
    this.store.dispatch(AppActions.logout());
  }

}
