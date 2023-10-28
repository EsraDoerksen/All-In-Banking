import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store/state/app.state";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map} from "rxjs";

@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {

  cols: number;
  items = [
    { title: 'Worinder', description: 'Description for Item 1', image: 'path/to/image1.jpg' },
    { title: 'IMonneyRobot', description: 'Description for Item 2', image: 'path/to/image1.jpg' },
    { title: 'Financy', description: 'Description for Item 1', image: 'path/to/image1.jpg' },
    { title: 'Testamania', description: 'Description for Item 2', image: 'path/to/image1.jpg' },
    { title: 'Loo', description: 'Description for Item 1', image: 'path/to/image1.jpg' }
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

}
