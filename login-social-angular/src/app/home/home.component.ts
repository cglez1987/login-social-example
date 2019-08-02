import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigurationService } from '../_services/configuration.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.route.snapshot.data.user;
  }

  logout() {
    this.authenticationService.logout();
  }


}
