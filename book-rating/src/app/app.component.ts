import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'br';

  // User: auth@angular.schule
  // auth0123

  constructor(public auth: AuthService) {
    setTimeout(() => this.title = 'Book Rating', 2000);
  }

  ngOnInit() {
    this.auth.handleAuthentication();
  }
}
