import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatchesComponent } from './matches/matches.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatEntryComponent } from './chat-entry/chat-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCardComponent,
    SideNavComponent,
    MatchesComponent,
    TopNavComponent,
    ChatListComponent,
    ChatEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
