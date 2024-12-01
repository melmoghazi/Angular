import { inject, Injectable } from "@angular/core";
import {  CanLoadFn, GuardResult, MaybeAsync, Route, Router, UrlSegment } from "@angular/router";


export const AuthCanLoadfnGuard: CanLoadFn = (route, state) => {
    const router = inject(Router);
    const token = localStorage.getItem('token');
    console.log('inside authTwoGuard');
    return token ? true : router.navigateByUrl('/login');
  };