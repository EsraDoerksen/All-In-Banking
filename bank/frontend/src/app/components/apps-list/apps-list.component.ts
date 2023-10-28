import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store/state/app.state";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map} from "rxjs";
import axios from 'axios';
import {App} from "./app.model";


@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {
  cols: number;
  iconDataUrl: string;
  apps: App[] = [];

  constructor(private store: Store<State>,
              private breakpointObserver: BreakpointObserver
  ) {
    this.cols = 2;
    this.iconDataUrl = '';
  }

  ngOnInit() {
    this.listenToDeviceSize();
    this.getApps();
    //this.iconDataUrl = this.convertIconDataToUrl(this.apps[0].icon.data);
  }

  private async getApps() {
    try {
      const response = await axios.get('http://localhost:3000/apps');
      this.apps = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  private convertIconDataToUrl(iconData: number[]): string {
    const base64 = btoa(String.fromCharCode.apply(null, iconData));
    return `data:image/png;base64,${base64}`;
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
          return 2;
        }
      })
    ).subscribe(cols => this.cols = cols);
  }

}
