import {Component, Input} from '@angular/core';
import {User} from "../models/user.interface";

@Component({
  selector: 'app-chat-entry',
  templateUrl: './chat-entry.component.html',
  styleUrls: ['./chat-entry.component.css']
})
export class ChatEntryComponent {
  @Input() name = '';
}
