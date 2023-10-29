import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as AppActions from './store/actions/app.actions';
import {State} from './store/state/app.state'
import {isUserLoggedIn, selectCount} from "./store/selectors/app.selectors";
import * as AuthActions from './auth/store/auth.actions';
import {checkAuth} from "./auth/store/auth.actions";
import {LoginResponse, OidcSecurityService} from "angular-auth-oidc-client";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count$ = this.store.select(selectCount);

  constructor(private store: Store<State>,
              private router: Router,
              public oidcSecurityService: OidcSecurityService) {}

  async ngOnInit() {
    await this.oidcSecurityService
      .checkAuth()
      .subscribe((loginResponse: LoginResponse) => {
        const {isAuthenticated, userData, accessToken, idToken, configId} =
          loginResponse;
        if (!isAuthenticated) {
          console.log("is not isAuthenticated");
          this.login();
          console.log("is Authenticated")
          console.log("accessToken: ", accessToken)
        } else {
          console.log("isAuthenticated");
          this.store.dispatch(AppActions.login());
          console.log("accessToken: ", accessToken)
          this.router.navigate(['/']);
        }
      });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  increment() {
    this.store.dispatch(AppActions.increment());
  }

  decrement() {
    this.store.dispatch(AppActions.decrement());
  }
}

