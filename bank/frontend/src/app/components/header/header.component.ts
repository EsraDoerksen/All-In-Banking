import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store/state/app.state";
import * as AppActions from "../../store/actions/app.actions";
import {Observable} from "rxjs";
import { isUserLoggedIn } from "../../store/selectors/app.selectors";
import {Router} from "@angular/router";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isUserLoggedIn$: Observable<boolean>;

  constructor(private store: Store<State>,
              private router: Router,
              public oidcSecurityService: OidcSecurityService
  ) {
    this.isUserLoggedIn$ = this.store.select(isUserLoggedIn);
  }

  login() {
    let token: string;

    this.oidcSecurityService.getAccessToken().subscribe(
      accessToken => {
        token = accessToken;
        console.log("accessToken: " + accessToken)
        this.store.dispatch(AppActions.login());
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error getting access token:', error);
        this.store.dispatch(AppActions.logout());
        this.router.navigate(['/login']);
      }
    );
  }

  logout() {
    this.store.dispatch(AppActions.logout());
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

}
