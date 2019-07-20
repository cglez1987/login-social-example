import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-oauth2',
  templateUrl: './oauth2.component.html',
  styleUrls: ['./oauth2.component.css']
})
export class Oauth2Component implements OnInit {

  token: string;
  error: string;

  constructor(private router: Router) { }

  ngOnInit() {

    this.token = this.getUrlParameter("token");
    this.error = this.getUrlParameter("error");

    this.router.navigate(["home"]);

  }

  getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    console.log("Name devuelto: " + name);
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    var results = regex.exec(location.href);
    console.log("Resultssss" + results);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
}
