import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ConfigurationService } from './configuration.service';
import { User } from '../user/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private configService: ConfigurationService) {
        //this.currentUserSubject = new BehaviorSubject<Doctor>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(this.configService.apiUrl + '/doctors/authenticate', { username, password })
            .pipe(map(user => {
                if (user) {
                    //localStorage.setItem('currentUser', JSON.stringify(user));
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                } else {
                    throw "Username or password is incorrect!";
                }
            }), catchError(err => {
                throw "Username or password is incorrect";
            }));
    }

    logout() {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
        //localStorage.clear();
        sessionStorage.clear();
        this.currentUserSubject.next(null);
    }

    public setCurrentUser(user: User) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    }
}