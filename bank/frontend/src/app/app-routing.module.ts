import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {HomepageComponent} from "./components/homepage/homepage.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '/login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
