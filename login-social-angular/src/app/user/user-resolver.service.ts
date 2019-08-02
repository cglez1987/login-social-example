import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserResolveService implements Resolve<User>{

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
        return this.userService.currentUserValue();
    }

}