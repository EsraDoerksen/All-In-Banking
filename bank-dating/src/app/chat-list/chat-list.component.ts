import { Component, Input } from '@angular/core';
import {User} from '../models/user.interface';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {
  @Input() user: User = {} as User;

  names = [
    'Billy Billford',
    'Bob Dimepiece',
    'Hamudi	Goldstein',
  ]
}
