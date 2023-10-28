import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { ChatListComponent } from './chat-list/chat-list.component';

const routes: Routes = [
  { path: 'matches', component: MatchesComponent },
  { path: 'chat-list', component: ChatListComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
