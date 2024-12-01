import { Injectable } from "@angular/core";
import { CanLoad, GuardResult, MaybeAsync, Route, Router, UrlSegment } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class AuthCanLoadGuard implements CanLoad{
    constructor(private router:Router){
    }
    canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
        const token = localStorage.getItem('token');
        return token ? true : this.router.navigateByUrl('/login');
    }

}