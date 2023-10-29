import {Component, Input} from '@angular/core';
import {Match} from '../models/match.interface';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
  @Input() match = {} as Match;
}
