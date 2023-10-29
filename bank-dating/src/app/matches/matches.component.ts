import { Component, Input } from '@angular/core';
import {User} from "../models/user.interface";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent {
  @Input() user: User = {} as User;
}
