import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { ConfigurationService } from '../_services/configuration.service';


@Injectable({ providedIn: 'root' })
export class UserService {

    public currentUser: Observable<User>;
    private currentUserSubject: BehaviorSubject<User>;

    constructor(private http: HttpClient, private confService: ConfigurationService, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    getUserInfo() {
        const httpHeader = new HttpHeaders().set("Authorization", "Bearer " + sessionStorage.getItem("access_token"));
        this.http.get<User>(this.confService.getApiURL() + "/user/me", { headers: httpHeader }).subscribe(
            data => {
                let user: User = data;
                this.setCurrentUser(user);
                this.router.navigate(["home"]);
            },
            error => {
                console.log(error);
            }
        )
    }

    public setCurrentUser(user: User) {
        this.currentUserSubject.next(user);
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    public currentUserValue(): User {
        return this.currentUserSubject.value;
    }

}