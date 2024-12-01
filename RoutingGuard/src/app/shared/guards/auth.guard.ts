import {  Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthrGuard implements CanActivate {

    constructor(private router:Router){
    }

    //canActivate is deprecated
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        const token = localStorage.getItem('token');
        console.log('route ',route);
        console.log('state ',state);

        

        return token ? true : this.router.navigateByUrl('/login');
        //return !!token;
    }

}