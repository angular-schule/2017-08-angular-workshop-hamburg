import { URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


declare var window: any;

@Injectable()
export class AuthService {

  private settings = {
    authServer: 'https://angular-schule.eu.auth0.com',
    clientId: 'myb1GOMpODqAaBnS51F9YWhzL13pSyfx',
    redirectUri: 'http://localhost:4200',
    audience: 'https://api.angular.schule'
  };

  constructor(private route: ActivatedRoute) { }

  authorize() {
    const url = `${this.settings.authServer}/authorize?` +
    'response_type=token&' +
    `redirect_uri=${this.settings.redirectUri}&` +
    `client_id=${this.settings.clientId}&` +
    `audience=${this.settings.audience}`;

    window.location = url;
  }

  handleAuthentication() {
    this.route.fragment
      .filter(e => !!e)
      .map(fragment => new URLSearchParams(fragment).get('access_token'))
      .subscribe(token => {
        console.log('Token:', token);
        localStorage.setItem('access_token', token);
        window.location.hash = '';
      });
  }


}
