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

    constructor(private http: HttpClient) {
        //this.currentUserSubject = new BehaviorSubject<Doctor>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    login(email: string, password: string) {
        return this.http.post<any>(ConfigurationService.apiUrl + '/auth/login', { email, password })
            .pipe(map(user => {
                if (user) {
                    console.log("Data=> " + user)
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
        sessionStorage.clear();
        this.currentUserSubject.next(null);
    }


}