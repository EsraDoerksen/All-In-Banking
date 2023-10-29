import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store/state/app.state";
import {BreakpointObserver} from "@angular/cdk/layout";
import {OidcSecurityService} from "angular-auth-oidc-client";
import axios from "axios";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  displayedColumns: string[] = ['description', 'amount', 'location', 'timestamp'];
  accessToken: string | null = null;

  profile = {
    firstname: 'Penny',
    lastname: 'Pennyworth',
    birthdate: new Date(1991, 5, 10),
    sex: 'Female',
    city: 'Zürich'
  };

  transactions = [
    {
      timestamp: '27.10.2023, 14:20',
      description: 'Purchase at Coop',
      amount: -25.00,
      location: 'Zürich HB',
    },
    {
      timestamp: '26.10.2023, 21:00',
      description: 'Purchase at Myprotein.ch',
      amount: -101.00,
      location: 'Switzerland'
    },
    {
      timestamp: '25.10.2023, 12:10',
      description: 'Purchase at Shell Station',
      amount: -118.00,
      location: 'Zürich'
    },
    {
      timestamp: '25.10.2023, 08:00',
      description: 'Purchase at Zürich Versicherung',
      amount: -500.00,
      location: 'Zürich'
    },
    {
      timestamp: '25.10.2023, 18:00',
      description: 'Purchase at Restaurant Aurora',
      amount: -80.00,
      location: 'Zürich'
    },
  ];

  constructor() {}
}
