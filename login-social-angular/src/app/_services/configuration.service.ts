import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  apiUrl = 'http://localhost:8080';

  OAUTH2_REDIRECT_URI = 'http://localhost:4200/oauth2/redirect'

  google_auth_url: string = this.apiUrl + '/oauth2/authorize/google?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
  github_auth_url: string = this.apiUrl + '/oauth2/authorize/github?redirect_uri=' + this.OAUTH2_REDIRECT_URI;
  facebook_auth_url: string = this.apiUrl + '/oauth2/authorize/facebook?redirect_uri=' + this.OAUTH2_REDIRECT_URI;

  constructor() { }

  getApiURL() {
    return this.apiUrl;
  }

}
