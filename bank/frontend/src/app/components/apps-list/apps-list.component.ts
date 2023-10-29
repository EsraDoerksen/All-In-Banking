import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store/state/app.state";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {map} from "rxjs";
import axios from 'axios';
import {App} from "./app.model";
import {LoginResponse, OidcSecurityService} from "angular-auth-oidc-client";
import {HttpHeaders} from "@angular/common/http";
import * as AppActions from "../../store/actions/app.actions";


@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {
  cols: number;
  iconDataUrls: string[] = [];
  apps: App[] = [];
  accessToken: string | null = null;

  constructor(private store: Store<State>,
              private breakpointObserver: BreakpointObserver,
              public oidcSecurityService: OidcSecurityService
  ) {
    this.cols = 2;
  }

  async ngOnInit() {
    this.oidcSecurityService.getIdToken().subscribe((token) => {
      this.accessToken = token;
      console.log("token:" + token)
    });
    if (this.accessToken === null) {
      setTimeout(() => this.ngOnInit(), 1000);
    } else {
      this.listenToDeviceSize();
      await this.getApps();
    }
  }

  private async getApps() {
    if (this.accessToken) {
      try {
        console.log("Send request with bearer token: " + this.accessToken)
        const response = await axios.get('http://localhost:3000/apps', {
          headers: {
            Authorization: `Bearer ${this.accessToken}`
          }
        });
        this.apps = response.data;
        console.log(this.apps);
        console.log("ici");
        this.iconDataUrls = this.apps.map(app => this.convertIconDataToUrl(app.icon.data));
      } catch (error) {
        console.error('Error :', error);
      }
    } else {
      console.error('Access token is not available.');
    }
  }

  convertIconDataToUrl(iconData: number[]): string {
    // Convert the byte array to a string
    const svgString = String.fromCharCode.apply(null, iconData);
    return 'data:image/svg+xml,' + encodeURIComponent(svgString);
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
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
        } else {
          return 2;
        }
      })
    ).subscribe(cols => this.cols = cols);
  }

}
