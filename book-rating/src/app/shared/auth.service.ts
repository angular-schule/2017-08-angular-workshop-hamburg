import { Injectable } from '@angular/core';

declare var window: any;

@Injectable()
export class AuthService {

  private settings = {
    authServer: 'https://angular-schule.eu.auth0.com',
    clientId: 'myb1GOMpODqAaBnS51F9YWhzL13pSyfx',
    redirectUri: 'http://localhost:4200',
    audience: 'https://api.angular.schule'
  };

  authorize() {
    const url = `${this.settings.authServer}/authorize?` +
    'response_type=token&' +
    `redirect_uri=${this.settings.redirectUri}&` +
    `client_id=${this.settings.clientId}&` +
    `audience=${this.settings.audience}`;

    window.location = url;
  }

  constructor() { }

}
