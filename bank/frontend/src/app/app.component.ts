import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from './store/actions/app.actions';
import { State } from './store/state/app.state'
import {selectCount} from "./store/selectors/app.selectors";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count$ = this.store.select(selectCount);
  cols: number;
  items = [
    { title: 'Item 1', description: 'Description for Item 1', image: 'path/to/image1.jpg' },
    { title: 'Item 2', description: 'Description for Item 2', image: 'path/to/image1.jpg' },
    { title: 'Item 1', description: 'Description for Item 1', image: 'path/to/image1.jpg' },
    { title: 'Item 2', description: 'Description for Item 2', image: 'path/to/image1.jpg' },
    { title: 'Item 1', description: 'Description for Item 1', image: 'path/to/image1.jpg' }
  ];

  constructor(private store: Store<State>,
              private breakpointObserver: BreakpointObserver
  ) {
    this.cols = 3;
  }

  ngOnInit() {
    this.listenToDeviceSize();
  }

  listenToDeviceSize() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).pipe(
      map((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          return 1;
        } else if (state.breakpoints[Breakpoints.Small]) {
          return 2;
        } else {
          return 3;
        }
      })
    ).subscribe(cols => this.cols = cols);
  }

  increment() {
    this.store.dispatch(AppActions.increment());
  }

  decrement() {
    this.store.dispatch(AppActions.decrement());
  }
}

