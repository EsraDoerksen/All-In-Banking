import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from './store/actions/app.actions';
import { State } from './store/state/app.state'
import {selectCount} from "./store/selectors/app.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$ = this.store.select(selectCount);

  constructor(private store: Store<State>
  ) {}

  increment() {
    this.store.dispatch(AppActions.increment());
  }

  decrement() {
    this.store.dispatch(AppActions.decrement());
  }
}

