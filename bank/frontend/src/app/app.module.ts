import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {appReducer} from "./store/reducers/app.reducers";
import {AppEffects} from "./store/effects/app.effects";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import { AppsListComponent } from './components/apps-list/apps-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import {AuthModule, LogLevel} from "angular-auth-oidc-client";
import {AuthEffects} from "./auth/store/auth.effects";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppsListComponent,
    HomepageComponent,
    LoginPageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    StoreModule.forRoot({app: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    MatFormFieldModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://dev-o8lopd1x78xgb35o.us.auth0.com',
        redirectUrl: 'http://localhost:4200',
        postLogoutRedirectUri: window.location.origin,
        clientId: '1IOUcn5eG1ZTrI8DJ9V4690c8T40NK3U',
        scope: 'openid profile email offline_access',
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
