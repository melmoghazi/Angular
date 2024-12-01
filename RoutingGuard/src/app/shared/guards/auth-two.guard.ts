import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authTwoGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const token = localStorage.getItem('token');
  console.log('inside authTwoGuard');

  //return token ? true : router.navigateByUrl('/login');
  return token ? true : inject(Router).navigateByUrl('/login');
};
