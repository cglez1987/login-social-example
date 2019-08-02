import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from '../_services/configuration.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css']
})
export class Oauth2Component implements OnInit {

  token: string;
  error: string;

  constructor(private router: Router,
    private confService: ConfigurationService,
    private userService: UserService) { }

  ngOnInit() {

    this.token = this.getUrlParameter("token");
    this.error = this.getUrlParameter("error");

    if (this.token) {
      sessionStorage.setItem("access_token", this.token);
      this.userService.getUserInfo();
    } else {
      console.log(this.error);
    }


  }

  getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(location.href);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
}
