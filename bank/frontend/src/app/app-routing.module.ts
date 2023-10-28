import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {AuthGuard} from "./guards/auth-guard.service";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
